import { BASE_URL } from '@/lib/const';
import axios from 'axios';
import Cookies from 'js-cookie';

const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
};

const http = axios.create({
  baseURL: BASE_URL,
});

// ===== REQUEST INTERCEPTOR =====
http.interceptors.request.use(
  (config) => {
    const token = Cookies.get('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ===== REFRESH TOKEN LOGIC =====
let isRefreshing = false;
let failedQueue: { resolve: (token: string) => void; reject: (err: any) => void }[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) prom.reject(error);
    else prom.resolve(token!);
  });
  failedQueue = [];
};

const clearAuthAndRedirect = () => {
  Cookies.remove('authToken', { path: '/' });
  Cookies.remove('refreshToken', { path: '/' });
  window.location.href = '/login';
};



// ===== RESPONSE INTERCEPTOR =====
http.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;

    // ✅ इन routes पर refresh token logic नहीं चलेगा
    const isAuthRoute =
      originalRequest?.url?.includes("/otp/verify") ||
      originalRequest?.url?.includes("/auth/login") ||
      originalRequest?.url?.includes("/auth/register");

    if (status === 401 && !originalRequest._retry && !isAuthRoute) {
      const refreshToken = Cookies.get("refreshToken");

      if (!refreshToken) {
        clearAuthAndRedirect();
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return http(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(`${BASE_URL}/auth/refresh`, {
          refreshToken,
        });

        const newAccessToken = response.data?.data?.accessToken;
        const newRefreshToken = response.data?.data?.refreshToken;

        Cookies.set("authToken", newAccessToken, {
          expires: 1,
          path: "/",
          sameSite: "strict",
        });

        if (newRefreshToken) {
          Cookies.set("refreshToken", newRefreshToken, {
            expires: 7,
            path: "/",
            sameSite: "strict",
          });
        }

        processQueue(null, newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return http(originalRequest);

      } catch (refreshError) {
        processQueue(refreshError, null);
        clearAuthAndRedirect();

        return Promise.reject(refreshError);

      } finally {
        isRefreshing = false;
      }
    }

    // ✅ Important
    return Promise.reject(error);
  }
);

const getAxiosClient = () => http;

const get = (url: string, config?: any) => http.get(url, config);
const post = (url: string, data?: any, config?: any) => http.post(url, data, config);
const put = (url: string, data?: any, config?: any) => http.put(url, data, config);
const patch = (url: string, data?: any, config?: any) => http.patch(url, data, config);
const del = (url: string, config?: any) => http.delete(url, config);

const HttpService = {
  HttpMethods,
  getAxiosClient,
  get,
  post,
  put,
  patch,
  delete: del,
};

export default HttpService;