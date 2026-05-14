"use client";

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation'; // ✅ removed useSearchParams

type CookieOptions = {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
};

const useAppCookies = () => {
  const pathname = usePathname(); // ✅ only this is needed

  // ===== ACCESS TOKEN =====
  const [accessToken, setAccessTokenState] = useState<string | undefined>(() => {
    if (typeof window === 'undefined') return undefined;
    return Cookies.get('authToken');
  });

  // ===== REFRESH TOKEN =====
  const [refreshToken, setRefreshTokenState] = useState<string | undefined>(() => {
    if (typeof window === 'undefined') return undefined;
    return Cookies.get('refreshToken');
  });

  // ✅ Route change pe re-sync — pathname alone is sufficient
  useEffect(() => {
    setAccessTokenState(Cookies.get('authToken'));
    setRefreshTokenState(Cookies.get('refreshToken'));
  }, [pathname]); // ✅ removed searchParams dependency

  // ===== SET TOKENS =====
  const setTokens = (
    access: string,
    refresh: string,
    options?: CookieOptions
  ) => {
    Cookies.set('authToken', access, {
      expires: options?.expires ?? 1,
      path: '/',
      secure: options?.secure ?? false,
      sameSite: options?.sameSite ?? 'strict',
    });
    setAccessTokenState(access);

    Cookies.set('refreshToken', refresh, {
      expires: 7,
      path: '/',
      secure: options?.secure ?? false,
      sameSite: options?.sameSite ?? 'strict',
    });
    setRefreshTokenState(refresh);
  };

  // ===== CLEAR TOKENS (Logout) =====
  const clearTokens = () => {
    Cookies.remove('authToken', { path: '/' });
    Cookies.remove('refreshToken', { path: '/' });
    setAccessTokenState(undefined);
    setRefreshTokenState(undefined);
  };

  // ===== IS LOGGED IN =====
  const isLoggedIn = !!accessToken;

  return {
    accessToken,
    refreshToken,
    isLoggedIn,
    setTokens,
    clearTokens,
  };
};

export default useAppCookies;