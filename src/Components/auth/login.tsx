"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';
import { useLogin } from "@/services/authService";
import { useAuth } from "@/hook/useAuth";

import Button from "../Common/input/Button";
import TextInput from "../Common/input/TextInput";
import PasswordInput from "../Common/input/PasswordInput";
import useAppCookies from "@/hook/useCookies";
import { toastError, toastSuccess } from "@/utils/toast";

const validationSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof validationSchema>;

export default function Login() {
  const auth = useAuth();
  const router = useRouter();
  const { setTokens } = useAppCookies(); // ✅

  const { register, handleSubmit, formState: { errors,isValid } } = useForm<LoginFormData>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  const mutation = useLogin({
  onSuccess: (result: any) => {
   
    toastSuccess(result?.message || "Login successful");

    const accessToken = result.data?.accessToken || result.accessToken;
    const refreshToken = result.data?.refreshToken || result.refreshToken;

    if (accessToken && refreshToken) {
      setTokens(accessToken, refreshToken, {
        secure: false,
        sameSite: "strict",
      });
    }

    auth.setIsLoggedIn(true);

    router.replace("/user/dashboard");
  },

  onError: (err: any) => {
    const message =
      err?.response?.data?.message ||
      err?.message ||
      "Login failed";

    toastError(message);
  },
});

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  
  return (
    <div className="flex min-h-screen justify-center text-black px-4 my-[20px]">
      <div className="w-full max-w-[600px] rounded-lg py-6 px-3">
        <h2 className="text-[24px] mb-2 font-semibold text-center text-black">Welcome Back</h2>
        <p className="text-center text-[16px] text-black font-normal mb-4">Enter your details below</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 authform">
          <TextInput
            label="Email Address *"
            name="email"
            placeholder="Enter email"
            register={register}
            error={errors.email}
          />

          <PasswordInput
            label="Password *"
            name="password"
            placeholder="Enter password"
            register={register}
            error={errors.password}
          />

          <Button
  text="Login"
  type="submit"
  className="w-full font-normal py-[15px] px-[10px]"
  isLoading={mutation?.isPending}
  disabled={!isValid}
/>
        </form>

        <div className="text-center mt-4">
          <Link href="/forget" className="text-sm text-black underline">
            Forgot your password?
          </Link>
        </div>

        <div className="mt-16 text-center rounded-lg p-6 bg-[#f0f0f0]">
          <p className="text-sm text-black font-medium mb-4">Don&apos;t have an account?</p>
          <Link
            href="/register"
            className="bg-[#141414] text-white p-3 rounded-lg font-medium text-[12px] hover:underline"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}