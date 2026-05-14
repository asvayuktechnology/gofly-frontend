// services/authService.ts

import { useMutation } from "@tanstack/react-query";
import HttpService from "./httpsService";
import {
  LoginPayload,
  LoginResponse,
  MutationParams,
  OtpResendPayload,
  OtpSendPayload,
  OtpVerifyPayload,
  OtpVerifyResponse,
  RegisterPayload,
  RegisterResponse,
} from "@/types/authTypes";

// ── Login ────────────────────────────────────────────────
export const authLogin = async (data: LoginPayload): Promise<LoginResponse> =>
  HttpService.post("/auth/login", data).then((res) => res.data);

export const otpResend = async (data: OtpResendPayload) =>
  HttpService.post("/otp/resend", data).then((res) => res.data);

// ── Register ─────────────────────────────────────────────
export const authRegister = async (
  data: RegisterPayload
): Promise<RegisterResponse> =>
  HttpService.post("/auth/register", data).then((res) => res.data);


// ── OTP Verify ───────────────────────────────────────────
export const otpVerify = async (
  data: OtpVerifyPayload
): Promise<OtpVerifyResponse> =>
  HttpService.post("/otp/verify", data).then((res) => res.data);


// ── OTP Send ─────────────────────────────────────────────
export const otpSend = async (data: OtpSendPayload) =>
  HttpService.post("/otp/send", data).then((res) => res.data);


// ── OTP Resend ───────────────────────────────────────────
// ===== REFRESH TOKEN =====
export const refreshTokenApi = (data: { refreshToken: string }) =>
  HttpService.post('/auth/refresh', data);


export const forgetPassword = async (data: any): Promise<any> => {
  return HttpService.post("/forgot-password", data).then(res => res.data);
};
export const useRefreshToken = ({ onSuccess, onError }: any) =>
  useMutation({
    mutationFn: refreshTokenApi,
    onSuccess,
    onError,
  });

// ===== LOGOUT =====
export const logoutApi = (data: { refreshToken: string }) =>
  HttpService.post('/auth/logout', data);

export const useLogout = ({ onSuccess, onError }: any) =>
  useMutation({
    mutationFn: logoutApi,
    onSuccess,
    onError,
  });

  export const useOtpResend = (params: MutationParams) =>
  useMutation({
    mutationFn: otpResend,
    onSuccess: params?.onSuccess,
    onError: params?.onError,
  });

  export const useRegister = (params: MutationParams) =>
  useMutation({
    mutationFn: authRegister,
    onSuccess: params?.onSuccess,
    onError: params?.onError,
  });

  export const useLogin = (params: MutationParams) =>
  useMutation({
    mutationFn: authLogin,
    onSuccess: params?.onSuccess,
    onError: params?.onError,
  });

  export const useOtpSend = (params: MutationParams) =>
  useMutation({
    mutationFn: otpSend,
    onSuccess: params?.onSuccess,
    onError: params?.onError,
  });

  export const useOtpVerify = (params: MutationParams) =>
  useMutation({
    mutationFn: otpVerify,
    onSuccess: params?.onSuccess,
    onError: params?.onError,
  });
