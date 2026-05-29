"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Button from "../Common/input/Button";
import TextAreaInput from "../Common/input/TextAreaInput";
import TextInput from "../Common/input/TextInput";
import FileUploadInput from "../Common/input/uploadImage";

// import { useCreateVisaRequest } from "@/services/visaService";
import { toastError, toastSuccess } from "@/utils/toast";
import { useCreateVisaRequest } from "@/services/visaService";
// import { useCreateVisaRequest } from "@/services/visaRequestService";

// ─────────────────────────────────────────────
// VISA REQUEST VALIDATION SCHEMA
// ─────────────────────────────────────────────

const visaRequestValidationSchema = z.object({
  visaCategory: z
    .string()
    .min(1, "Visa category is required"),

  visaType: z
    .string()
    .min(1, "Visa type is required"),

  fullName: z
    .string()
    .min(2, "Full name is required"),

  dob: z
    .string()
    .min(1, "Date of birth is required"),

  phone: z
    .string()
    .min(10, "Phone number is required"),

  email: z
    .string()
    .email("Invalid email address"),

  notes: z
    .string()
    .optional(),

  document: z
    .custom<File | null>(
      (val) => val === null || val instanceof File,
      { message: "Invalid file" }
    )
    .nullable()
    .optional(),
});

export type VisaRequestPayload = z.infer<
  typeof visaRequestValidationSchema
>;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  visaCategory: string;
  visaType: string;
}

const VisaApplyModal = ({
  isOpen,
  onClose,
  visaCategory,
  visaType,
}: Props) => {
  const [document, setDocument] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    reset,
  } = useForm<VisaRequestPayload>({
    resolver: zodResolver(visaRequestValidationSchema),
    mode: "onChange",
    defaultValues: {
      visaCategory,
      visaType,
      fullName: "",
      dob: "",
      phone: "",
      email: "",
      notes: "",
      document: null,
    },
  });

  const mutation = useCreateVisaRequest({
    onSuccess: (data) => {
      toastSuccess(
        data?.message || "Visa request submitted successfully!"
      );

      reset();
      setDocument(null);
      onClose();
    },

    onError: (err: any) => {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong";

      toastError(message);
    },
  });

  const onSubmit = (data: VisaRequestPayload) => {
    mutation.mutate({
      visaCategory,
      visaType,
      fullName: data.fullName,
      dob: data.dob,
      phone: data.phone,
      email: data.email,
      notes: data.notes,
      document,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl p-6 relative shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">
          Apply for Visa
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Full Name */}
          <TextInput
            label="Your Name *"
            name="fullName"
            placeholder="Enter your name"
            register={register}
            error={errors.fullName}
          />

          {/* Date of Birth */}
          <TextInput
            label="Date of Birth *"
            name="dob"
            type="date"
            register={register}
            error={errors.dob}
          />

          {/* Phone */}
          <TextInput
            label="Phone Number *"
            name="phone"
            placeholder="Enter phone number"
            register={register}
            error={errors.phone}
          />

          {/* Email */}
          <TextInput
            label="Email Address *"
            name="email"
            placeholder="Enter email"
            register={register}
            error={errors.email}
          />

          {/* File Upload */}
          <div className="md:col-span-2">
            <FileUploadInput
              name="document"
              label="Upload Documents"
              file={document}
              onChange={(file) => {
                setDocument(file);
                setValue("document", file, {
                  shouldValidate: true,
                });
              }}
            />
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <TextAreaInput
              label="Short Notes"
              name="notes"
              placeholder="Write your notes..."
              register={register}
              error={errors.notes}
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              text="Submit Now →"
              className="w-full h-12"
              isLoading={mutation.isPending}
              disabled={ mutation.isPending}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VisaApplyModal;