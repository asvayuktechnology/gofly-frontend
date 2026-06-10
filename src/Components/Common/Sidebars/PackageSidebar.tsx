"use client";

import Image from "next/image";
import { useState } from "react";
import { svgIcon } from "../Icons/SvgIcons";
import SiteBtn from "../SiteBtn/SiteBtn";
import TextInput from "../input/TextInput";
import TextAreaInput from "../input/TextAreaInput";
import { usePostEnquiry } from "@/services/packageService";
import { z } from "zod";
import { toastError, toastSuccess } from "@/utils/toast";

interface PackageSidebarProps {
  packageData: any;
}

const enquirySchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  numberOfPeople: z
    .string()
    .min(1, "Required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Must be a valid number",
    }),
  travelDate: z.string().min(1, "Travel date required"),
  details: z.string().min(5, "Details required (min 5 chars)"),
});

const PackageSidebar = ({ packageData }: PackageSidebarProps) => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const discount = packageData?.discounts?.[0];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    numberOfPeople: "",
    travelDate: "",
    details: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const { mutate, isPending } = usePostEnquiry();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log("name:", name, "value:", value); // ← ye dekho browser console mein
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = enquirySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        const key = err.path?.[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    mutate(
      {
        packageId: packageData?._id,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        numberOfPeople: Number(formData.numberOfPeople),
        travelDate: new Date(formData.travelDate),
        details: formData.details,
      },
      {
        onSuccess: () => {
          toastSuccess("Enquiry Submitted Successfully");
          setShowEnquiry(false);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            numberOfPeople: "",
            travelDate: "",
            details: "",
          });
          setErrors({});
        },
        onError: (error: any) => {
          toastError(
            error?.response?.data?.message?.[0] || "Something went wrong"
          );
        },
      }
    );
  };

  const closeModal = () => {
    setShowEnquiry(false);
    setErrors({});
  };

  return (
    <div className="package-details-sidebar">
      {/* PRICING */}
      <div className="pricing-and-booking-area mb-40">
        <div className="batch">
          {discount?.discount > 0 && (
            <div className="batch">
              <span>
                {discount?.discount}
                {discount?.type === "percentage" ? "% Off" : "₹ Off"}
              </span>
            </div>
          )}
        </div>

        <div className="price-area">
          <h6>Starting From</h6>
          <span>
            <del>₹{packageData?.originalPrice}</del> ₹
            {packageData?.pricePerPerson}
            <sub>/per person</sub>
          </span>
        </div>

        <ul>
          <li>{svgIcon.detailcheckIcon} Money Back Guarantee.</li>
          <li>{svgIcon.detailcheckIcon} Your Safety is Our Top Priority.</li>
        </ul>

        <SiteBtn
          link="#"
          svgIcon={svgIcon.arrow}
          iconPosition="end"
          text="Submit an Enquiry"
          className="primary-btn1 transparent"
          onClick={() => setShowEnquiry(true)}
        />

        <span>
          {svgIcon.warningIcon2} Bonus Activity Included – Limited Time!
        </span>
      </div>

      {/* CUSTOMIZE */}
      <div className="customize-package-banner-wrap">
        <h2>
          <span>Customize</span> Travel Package!
        </h2>

        <ul>
          <li>{svgIcon.detailcheckIcon} Make Your Favourite Package</li>
          <li>{svgIcon.detailcheckIcon} Enjoy Your Trip</li>
        </ul>

        <div className="counter-area">
          <ul className="counter-img-grp">
            {[1, 2, 3].map((i) => (
              <li key={i}>
                <Image
                  src="/assets/img/counter-people-img1.webp"
                  alt="user"
                  width={50}
                  height={50}
                />
              </li>
            ))}
          </ul>

          <h6>
            <strong>
              <span className="counter">60</span>+
            </strong>{" "}
            Guide Await to Help You
          </h6>
        </div>

        <SiteBtn
          link="#"
          svgIcon={svgIcon.arrow}
          iconPosition="end"
          text="Submit an Enquiry"
          className="primary-btn1 two black-bg"
          onClick={() => setShowEnquiry(true)}
        />
      </div>

      {/* MODAL */}
      {showEnquiry && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-3xl rounded-[20px] bg-white p-8 md:p-10 overflow-y-auto max-h-[90vh]">

            {/* CLOSE */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100"
            >
              ✕
            </button>

            {/* TITLE */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold">
                We'd Love to Hear From You!
              </h4>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 focus:outline-none"
                    placeholder="Enter full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 focus:outline-none"
                    placeholder="Enter email"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 focus:outline-none"
                    placeholder="Enter phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                {/* Number of People */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Number of People</label>
                  <input
                    type="number"
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 focus:outline-none"
                    placeholder="Enter number of people"
                    min={1}
                  />
                  {errors.numberOfPeople && <p className="text-red-500 text-sm">{errors.numberOfPeople}</p>}
                </div>

                {/* Travel Date */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.travelDate && (
                    <p className="text-red-500 text-sm">{errors.travelDate}</p>
                  )}
                </div>

              </div>

              {/* Details */}
              <div className="flex flex-col gap-1 mb-6">
                <label className="text-sm font-medium text-gray-700">Details</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 focus:outline-none"
                  placeholder="Enter trip details"
                  rows={4}
                />
                {errors.details && <p className="text-red-500 text-sm">{errors.details}</p>}
              </div>

              <div className="flex justify-end gap-4 cursor-pointer">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="primary-btn1 black-bg cursor-pointer "
                >
                  {isPending ? "Submitting..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageSidebar;