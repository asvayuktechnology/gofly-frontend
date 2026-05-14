import { showToast } from "nextjs-toast-notify";

type ToastOptions = {
  duration?: number;
  position?:
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-right"
    | "bottom-left"
    | "bottom-center";
};

const defaultOptions = {
  duration: 4000,
  progress: true,
  position: "top-right" as const,
  transition: "topBounce" as const,
  sound: true,
};

export const toastSuccess = (
  message: string,
  options?: ToastOptions
) => {
  showToast.success(message, {
    ...defaultOptions,
    ...options,
  });
};

export const toastError = (
  message: string,
  options?: ToastOptions
) => {
  showToast.error(message, {
    ...defaultOptions,
    ...options,
  });
};

export const toastInfo = (
  message: string,
  options?: ToastOptions
) => {
  showToast.info(message, {
    ...defaultOptions,
    ...options,
  });
};

export const toastWarning = (
  message: string,
  options?: ToastOptions
) => {
  showToast.warning(message, {
    ...defaultOptions,
    ...options,
  });
};