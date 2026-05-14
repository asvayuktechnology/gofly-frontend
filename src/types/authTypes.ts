// types/authTypes.ts

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface RegisterPayload {
  fname: string;
  lname: string;
  email: string;
  password: string;
   term_and_conditions: boolean;
}

export interface RegisterResponse {
  httpStatus: number;
  message: string;
}

export interface OtpVerifyPayload {
  email: string;
  otp: string;
  type: number; // 1 = signup, 2 = forgot
}

export interface OtpVerifyResponse {
  httpStatus: number;
  message: string;
  token?: string;
}

export interface OtpSendPayload {
  email: string;
  type: number;
}

export interface OtpResendPayload {
  email: string;
  type: number;
}

export type MutationParams = {
  onSuccess: (data: any) => void;
  onError: (error: Error) => void;
};