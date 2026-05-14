"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import TextInput from "../ui/common/input/TextInput";
// import Button from "../ui/common/input/Button";
// import ColumnDiv from "../ui/ColumnDiv";
import toast from "react-hot-toast";
import { LuRefreshCcw } from "react-icons/lu";
// import Link from "next/link";
// import { forgetPassword } from "@/services/authService";
import { generateCaptcha } from "@/utils";
import ColumnDiv from "../Common/UI/ColumnDiv";
import TextInput from "../Common/input/TextInput";
import Button from "../Common/input/Button";
import { forgetPassword } from "@/services/authService";
import Link from "next/link";
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3";



// Zod schema for form validation
const validationSchema = z.object({
  email: z.string().email("Invalid email address"),
  
});

type RegisterFormData = z.infer<typeof validationSchema>;
export default function ForgetForm() {
  const [isLoading, setIsloading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
    setError,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(validationSchema),
     mode: "onChange",
  });

  const onSubmit = async (data: RegisterFormData) => {
  
    try {
      setIsloading(true);
      const payload = {
        ...data,
       
      };
      const result = await forgetPassword(payload);
      if (result) {
        toast.success(result.message || "Reset Email");
      }
      reset();
      
      setIsloading(false);
    } catch (err: any) {
      const message =
        err?.response?.data?.message || err?.message || "Registration failed";
      toast.error(message);
      
      setIsloading(false)
    }
  };
  
  return (
    <div className="flex min-h-full w-full justify-center px-8">
      <div className="flex w-full flex-col items-center mt-16">
        <div className="formwrapper py-7 md:max-w-[576px] max-w-[400px] w-full">
      <h2 className="text-2xl mb-3 font-medium text-center text-white">Forgot Password</h2>
          <form
            className="  mx-auto authform"
            onSubmit={handleSubmit(onSubmit)}
          >
            <ColumnDiv>
        

                <TextInput
            label="Email Address *"
            name="email"
            placeholder="Enter email"
            register={register}
            error={errors.email}
          />
            </ColumnDiv>


            <Button text={"Send Reset Link"} btnStyle="btn-normal" type="submit" className="w-full font-normal" isLoading={isLoading} disabled={!isValid} />
          </form>
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
    </div>
  );
}
