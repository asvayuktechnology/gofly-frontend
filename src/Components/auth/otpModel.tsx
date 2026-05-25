// components/Common/OtpModal.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useOtpVerify, useOtpResend } from "@/services/authService";
import { useRouter } from "next/navigation";
import useAppCookies from "@/hook/useCookies";
import { toastError, toastSuccess } from "@/utils/toast";

import Button from "../Common/input/Button";
import OtpInput from "../Common/input/OtpInput";

type Props = {
  email: string;
  onSuccess: (data: any) => void;
  onClose: () => void;
};

const RESEND_COOLDOWN = 30;

export default function OtpModal({
  email,
  onSuccess,
  onClose,
}: Props) {
  const router = useRouter();

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [countdown, setCountdown] = useState(RESEND_COOLDOWN);
  const [canResend, setCanResend] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { setTokens } = useAppCookies();

  // Countdown
  useEffect(() => {
    if (countdown <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  // Verify OTP
  const verifyMutation = useOtpVerify({
    onSuccess: (data) => {
      toastSuccess(data?.message || "OTP verified!");

      if (data?.data?.accessToken && data?.data?.refreshToken) {
        setTokens(
          data.data.accessToken,
          data.data.refreshToken
        );
      }

      onSuccess(data);

      router.push("/");
    },

    onError: (err: any) => {
      const errorMessage =
        err?.response?.data?.message ||
        err?.message ||
        "Invalid OTP";

      toastError(
        Array.isArray(errorMessage)
          ? errorMessage[0]
          : errorMessage
      );
    },
  });

  // Resend OTP
  const resendMutation = useOtpResend({
    onSuccess: (data) => {
      toastSuccess(data.message || "OTP resent!");

      setOtp(Array(6).fill(""));
      setCountdown(RESEND_COOLDOWN);
      setCanResend(false);

      inputRefs.current[0]?.focus();
    },

    onError: (err: any) => {
      toastError(
        err?.response?.data?.message ||
        "Failed to resend OTP"
      );
    },
  });

  const handleChange = (
    index: number,
    value: string
  ) => {
    if (!/^\d*$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value.slice(-1);

    setOtp(updated);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent
  ) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    const updated = Array(6).fill("");

    pasted.split("").forEach((char, i) => {
      updated[i] = char;
    });

    setOtp(updated);

    inputRefs.current[
      Math.min(pasted.length, 5)
    ]?.focus();
  };

  const handleSubmit = () => {
    const otpStr = otp.join("");

    if (otpStr.length < 6) {
      toastError("Please enter the full 6-digit OTP");
      return;
    }

    verifyMutation.mutate({
      email,
      otp: otpStr,
      type: 1,
    });
  };

  const handleResend = () => {
    if (!canResend) return;

    resendMutation.mutate({
      email,
      type: 1,
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={(e) =>
        e.target === e.currentTarget && onClose()
      }
    >
      <div className="relative w-full max-w-[440px] rounded-xl bg-white p-8 shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-gray-400 hover:text-black"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="mb-1 text-[22px] font-semibold text-black">
            Verify Your Email
          </h2>

          <p className="text-[13px] text-gray-500">
            We&apos;ve sent a 6-digit code to
          </p>

          <p className="text-[13px] font-medium text-black">
            {email}
          </p>
        </div>

        {/* OTP Inputs */}
        <div
          className="flex justify-center gap-3 mb-6"
          onPaste={handlePaste}
        >
          {otp.map((digit, i) => (
            <OtpInput
              key={i}
              value={digit}
              inputRef={(el) => {
                inputRefs.current[i] = el;
              }}
              onChange={(value) => {
                handleChange(i, value);
              }}
              onKeyDown={(e) => {
                handleKeyDown(i, e);
              }}
            />
          ))}
        </div>

        {/* Verify Button */}
        <Button
          text="Verify OTP"
          type="button"
          onClick={handleSubmit}
          isLoading={verifyMutation.isPending}
          className="w-full py-[14px]"

        />

        {/* Resend */}
        <div className="mt-4 flex justify-center">
          <Button
            text={
              canResend
                ? "Resend OTP"
                : `Resend OTP in ${countdown}s`
            }
            type="button"
            onClick={handleResend}
            isLoading={resendMutation.isPending}
            disabled={!canResend}
            className="!w-auto !bg-transparent !text-black underline shadow-none border-none p-0"
            disableStyle
          />
        </div>
      </div>
    </div>
  );
}