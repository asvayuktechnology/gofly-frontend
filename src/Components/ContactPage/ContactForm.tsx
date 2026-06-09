"use client";

import { usePostEnquiry } from "@/services/contactService";
import { countries } from "@/utils/countrylist";
import { toastError, toastSuccess } from "@/utils/toast";
import { useState, useRef, useEffect, FormEvent } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(/^[+0-9\s()-]+$/, "Invalid phone number"),

  destination: z
    .string()
    .trim()
    .min(1, "Please select a destination country"),

  message: z.string().trim().optional(),

agree: z.boolean().refine((value) => value, {
    message: "Please accept the privacy policy",
  }),
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
  agree: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const { mutateAsync: submitEnquiry, isPending } =
    usePostEnquiry();

  useEffect(() => {
    const handleClickOutside = (
      e: MouseEvent
    ) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          e.target as Node
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement)
              .checked
          : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleDestinationSelect = (
    country: string
  ) => {
    setForm((prev) => ({
      ...prev,
      destination: country,
    }));

    setErrors((prev) => ({
      ...prev,
      destination: "",
    }));

    setOpen(false);
  };

  const handleSubmit = async (
    e: FormEvent
  ) => {
    e.preventDefault();

    const result =
      contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: FormErrors = {};

      result.error.issues.forEach((issue) => {
        const field =
          issue.path[0] as keyof FormData;

        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors(fieldErrors);

      toastError(
        "Please fix the validation errors"
      );

      return;
    }

    try {
      setErrors({});

     await submitEnquiry({
  ...result.data,
  message: result.data.message ?? "",
});

      toastSuccess(
        "Form submitted successfully!"
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        destination: "",
        message: "",
        agree: false,
      });
    } catch (error: any) {
      toastError(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="contact-form">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-4">
          <div className="contact-form-wrap">
            <div className="section-title text-center mb-16">
              <h2 className="text-3xl font-semibold">
                Get in Touch!
              </h2>

              <p className="text-gray-600 mt-2">
                We’re excited to hear from
                you! Whether you have a
                question about our services,
                want to discuss a new
                project.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                {/* Name */}
                <div className="form-inner">
                  <label>
                    Full Name
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full border px-4 py-2 rounded-md outline-none ${
                      errors.name
                        ? "border-red-500"
                        : ""
                    }`}
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="form-inner">
                  <label>
                    Email Address
                  </label>

                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="info@example.com"
                    className={`w-full border px-4 py-2 rounded-md outline-none ${
                      errors.email
                        ? "border-red-500"
                        : ""
                    }`}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="form-inner">
                  <label>
                    Phone Number
                  </label>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className={`w-full border px-4 py-2 rounded-md outline-none ${
                      errors.phone
                        ? "border-red-500"
                        : ""
                    }`}
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Destination */}
                <div className="form-inner">
                  <label>
                    Destination Country
                  </label>

                  <div
                    ref={dropdownRef}
                    className={`nice-select my-select relative w-full rounded-md cursor-pointer bg-white ${
                      errors.destination
                        ? "border border-red-500"
                        : "border"
                    }`}
                    tabIndex={0}
                    onClick={() =>
                      setOpen(
                        (prev) => !prev
                      )
                    }
                  >
                    <span className="current block px-4 py-2">
                      {form.destination ||
                        "Select Destination"}
                    </span>

                    {open && (
                      <ul className="list absolute z-20 w-full bg-white border mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {countries.map(
                          (country) => (
                            <li
                              key={country}
                              className="option px-4 py-2 hover:bg-gray-100"
                              onClick={() =>
                                handleDestinationSelect(
                                  country
                                )
                              }
                            >
                              {country}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>

                  {errors.destination && (
                    <p className="text-red-500 text-sm mt-1">
                      {
                        errors.destination
                      }
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="form-inner md:col-span-2">
                  <label>
                    Brief / Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write something about your enquiry..."
                    className="w-full border px-4 py-2 rounded-md min-h-[120px] outline-none"
                  />

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Checkbox */}
                <div className="form-inner2 md:col-span-2">
                  <div className="form-check flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="contactCheck22"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      className="form-check-input mt-1"
                    />

                    <label
                      htmlFor="contactCheck22"
                      className="form-check-label text-sm"
                    >
                      I agree with your
                      privacy policy and
                      terms &
                      conditions.
                    </label>
                  </div>

                  {errors.agree && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.agree}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="primary-btn1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  {isPending
                    ? "Submitting..."
                    : "Submit Now"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}