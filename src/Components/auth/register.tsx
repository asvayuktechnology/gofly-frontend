// components/Auth/Register.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

import TextInput from "../Common/input/TextInput";
import Button from "../Common/input/Button";
// import OtpModal from "../Common/OtpModal";
import { useRegister } from "@/services/authService";
import { useAuth } from "@/hook/useAuth";
import OtpModal from "./otpModel";
import PasswordInput from "../Common/input/PasswordInput";
import Checkbox from "../Common/input/Checkbox";
import { RegisterPayload } from "@/types/authTypes";
import useAppCookies from "@/hook/useCookies";
import { toastError, toastSuccess } from "@/utils/toast";

const validationSchema = z
  .object({
    fname: z.string().min(1, "First name is required"),
    lname: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[0-9]/, "Must contain a number")
      .regex(/[^A-Za-z0-9]/, "Must contain a special character"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    term_and_conditions: z.boolean().refine(val => val === true, {
  message: "You must accept the terms and conditions",
}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof validationSchema>;

export default function Register() {
  const auth = useAuth();
  const router = useRouter();
   const { setTokens } = useAppCookies(); 
  // const { setCookie } = useCookie<string>("authToken");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  const mutation = useRegister({
    onSuccess: (data) => {
      toastSuccess(data.message || "OTP sent to your email!");
      setShowOtpModal(true);
    },
    onError: (err: any) => {
      const message =
        err?.response?.data?.message || err?.message || "Registration failed";
     toastError(message);
    },
  });
const onSubmit = (data: RegisterFormData) => {
  setRegisteredEmail(data.email);
  const { confirmPassword, ...payload } = data;
  
  mutation.mutate({
    ...payload,
    term_and_conditions: Boolean(payload.term_and_conditions),
  } as RegisterPayload); 
};

 const handleOtpSuccess = (data: any) => {
  const accessToken = data.data?.accessToken || data.accessToken;
  const refreshToken = data.data?.refreshToken || data.refreshToken;

  if (accessToken && refreshToken) {
    setTokens(accessToken, refreshToken, {
      secure: false,
      sameSite: "strict",
    });
  }

  auth.setIsLoggedIn(true);

  setShowOtpModal(false);

  toastSuccess("Account verified successfully!");

  router.replace("/");
};

  

  return (
    <>
      <div className="flex min-h-screen justify-center text-black px-4 my-[20px]">
        <div className="w-full max-w-[600px] rounded-lg py-6 px-3">
          <h2 className="text-[24px] mb-2 font-semibold text-center text-black">
            Create Account
          </h2>
          <p className="text-center text-[16px] text-black font-normal mb-4">
            Fill in your details to get started
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 authform"
          >
            {/* First & Last Name row */}
            <div className="flex gap-3">
              <div className="flex-1">
                <TextInput
                  label="First Name *"
                  name="fname"
                  placeholder="John"
                  register={register}
                  error={errors.fname}
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Last Name *"
                  name="lname"
                  placeholder="Doe"
                  register={register}
                  error={errors.lname}
                />
              </div>
            </div>

            <TextInput
              label="Email Address *"
              name="email"
              placeholder="Enter email"
              register={register}
              error={errors.email}
            />

            {/* Password */}
         <PasswordInput
  label="Password *"
  name="password"
  placeholder="Enter password"
  register={register}
  error={errors.password}
/>


<PasswordInput
  label="Confirm Password *"
  name="confirmPassword"
  placeholder="Enter password"
  register={register}
  error={errors.confirmPassword}  // ✅ fixed
/>
<Checkbox
label= " Terms & Conditions"
  name="term_and_conditions"
  register={register}
  error={errors.term_and_conditions}
/>
            <Button
              text="Create Account"
              type="submit"
              className="w-full font-normal py-[15px] px-[10px]"
              isLoading={mutation.isPending}
               disabled={!isValid}
            />

            
          </form>

          {/* Login CTA */}
          {/* <div className="text-center mt-4">
            <Link href="/login" className="text-sm text-black underline">
              Already have an account? Login
            </Link>
          </div> */}

        <div className="mt-16 text-center rounded-lg p-6 bg-[#f0f0f0]">
          <p className="text-sm text-black font-medium mb-4">Already have an account ?</p>
          <Link
            href="/login"
            className="bg-[#141414] text-white p-3 rounded-lg font-medium text-[12px] hover:underline"
          >
            LOGIN
          </Link>
        </div>
        </div>
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <OtpModal
          email={registeredEmail}
          onSuccess={handleOtpSuccess}
          onClose={() => setShowOtpModal(false)}
        />
      )}
    </>
  );
}