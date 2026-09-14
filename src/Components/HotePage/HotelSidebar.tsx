"use client";

import Image from "next/image";
import { useState } from "react";

import { usePostEnquiry } from "@/services/packageService";
import { z } from "zod";
import { toastError, toastSuccess } from "@/utils/toast";
import { svgIcon } from "../Common/Icons/SvgIcons";
import SiteBtn from "../Common/SiteBtn/SiteBtn";

interface HotelSidebarProps {
  packageData?: any;
  hotel?: any;
  // direct price props (HotelPage will pass these from hotel)
  price?: number;
  originalPrice?: number;
  discountPercent?: number;
  discount?: number;
  currency?: string;
}

const enquirySchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email required"),
  numberOfPeople: z
    .string()
    .min(1, "Number of People is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Must be a valid number",
    }),
  bookingDate: z.string().min(1, "Booking Date is required"),
  bookingNote: z.string().min(5, "Booking Note required (min 5 chars)"),
});

const HotelSidebar = ({
  packageData,
  hotel,
  price: priceProp,
  originalPrice: originalPriceProp,
  discountPercent: discountPercentProp,
  discount: discountProp,
  currency: currencyProp,
}: HotelSidebarProps) => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  // Support both packageData (old) and hotel (new) + direct price props
  const data = hotel || packageData;
  // price/discount derived from props > hotel > packageData
  const price = priceProp ?? data?.pricePerNight ?? data?.pricePerPerson ?? data?.price ?? 0;
  const originalPrice = originalPriceProp ?? data?.originalPricePerNight ?? data?.originalPrice ?? undefined;
  const currency = currencyProp ?? data?.currency ?? "INR";
  const discountPercent =
    discountPercentProp ?? discountProp ?? data?.discountPercent ?? data?.discounts?.[0]?.discount ?? undefined;
  const discountType = data?.discounts?.[0]?.type || (discountPercent ? "percentage" : undefined);
  const discount =
    discountPercent !== undefined
      ? { discount: discountPercent, type: discountType || "percentage" }
      : data?.discounts?.[0];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    numberOfPeople: "",
    bookingDate: "",
    bookingNote: "",
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
        // keep packageId for backward compat, also send hotelId if hotel
        packageId: data?._id,
        hotelId: data?._id,
        fullName: formData.fullName,
        email: formData.email,
        numberOfPeople: Number(formData.numberOfPeople),
        travelDate: new Date(formData.bookingDate),
        bookingDate: new Date(formData.bookingDate),
        details: formData.bookingNote,
        bookingNote: formData.bookingNote,
        // also pass price context for display
        price,
        originalPrice,
        currency,
      } as any,
      {
        onSuccess: () => {
          toastSuccess("Enquiry Submitted Successfully");
          setShowEnquiry(false);
          setFormData({
            fullName: "",
            email: "",
            numberOfPeople: "",
            bookingDate: "",
            bookingNote: "",
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
    <div className="package-details-sidebar hotel-details-sidebar">
      {/* PRICING — now driven by hotel price/discount props */}
      <div className="pricing-and-booking-area mb-40">
        <div className="batch">
          {discount?.discount > 0 && (
            <div className="batch">
              <span>
                {discount?.discount}
                {discount?.type === "percentage" ? "% Off" : ` ${currency} Off`}
              </span>
            </div>
          )}
          {discountPercent !== undefined && discountPercent > 0 && !discount?.discount && (
            <div className="batch">
              <span>{discountPercent}% Off</span>
            </div>
          )}
        </div>

        <div className="price-area">
          <h6>Starting From</h6>
          <span>
            {originalPrice !== undefined && originalPrice > 0 && originalPrice !== price && (
              <del>
                {currency} {originalPrice}
              </del>
            )}{" "}
            {currency} {price}
            <sub>/per night</sub>
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

  

      {/* MODAL */}
      {showEnquiry && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-3xl rounded-[20px] bg-white p-8 md:p-10 overflow-y-auto max-h-[90vh]">

            {/* CLOSE */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-100 hover:bg-gray-200 cursor-pointer"
            >
              <svg
                width={10}
                height={10}
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
              >
                <path d="M2.00247 0.500545C1.79016 0.505525 1.58918 0.582706 1.4362 0.735547L0.694403 1.479C0.345704 1.82743 0.389689 2.43243 0.79164 2.83493L3.00694 5.05341L0.79164 7.27092C0.389689 7.67328 0.345566 8.27842 0.694403 8.62753L1.4362 9.37044C1.7849 9.71872 2.38879 9.67543 2.7913 9.27293L5.00659 7.05473L7.22189 9.27293C7.62467 9.67543 8.22898 9.71872 8.57699 9.37044L9.31989 8.62753C9.6679 8.27856 9.62461 7.67342 9.22182 7.27092L7.00653 5.05341L9.22182 2.83493C9.62461 2.43243 9.6679 1.82743 9.31989 1.479L8.57699 0.735547C8.22898 0.386433 7.62467 0.430557 7.22189 0.833614L5.00659 3.05126L2.7913 0.833753C2.56515 0.606635 2.27482 0.493906 2.00247 0.500545Z" />
              </svg>
            </button>

            {/* TITLE */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold">
                We'd Love to Hear From You!
              </h4>
            </div>

            {/* FORM */}
            <div className="border border-[#E8E8E8] px-[30px] py-[35px] rounded-[10px]">

              <form onSubmit={handleSubmit}>
                {/* Requested fields: Full Name, Email Address, Number of People*, Booking Date, Booking Note */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                  {/* Full Name */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full rounded-lg p-3 bg-[#F0F0F0]"
                      placeholder="Enter full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg p-3 bg-[#F0F0F0]"
                      placeholder="Enter email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  {/* Number of People* */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">Number of People<span className="text-red-500">*</span></label>
                    <input
                      type="number"
                      name="numberOfPeople"
                      value={formData.numberOfPeople}
                      onChange={handleChange}
                      className="w-full rounded-lg p-3 bg-[#F0F0F0]"
                      placeholder="Enter number of people"
                      min={1}
                    />
                    {errors.numberOfPeople && <p className="text-red-500 text-sm">{errors.numberOfPeople}</p>}
                  </div>

                  {/* Booking Date */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">
                      Booking Date
                    </label>
                    <input
                      type="date"
                      name="bookingDate"
                      value={formData.bookingDate}
                      onChange={handleChange}
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-[#F0F0F0]"
                    />
                    {errors.bookingDate && (
                      <p className="text-red-500 text-sm">{errors.bookingDate}</p>
                    )}
                  </div>

                </div>

                {/* Booking Note */}
                <div className="flex flex-col gap-1 mb-6">
                  <label className="text-sm font-medium text-gray-700">Booking Note</label>
                  <textarea
                    name="bookingNote"
                    value={formData.bookingNote}
                    onChange={handleChange}
                    className="w-full rounded-lg p-3 bg-[#F0F0F0]"
                    placeholder="Enter booking note"
                    rows={4}
                  />
                  {errors.bookingNote && <p className="text-red-500 text-sm">{errors.bookingNote}</p>}
                </div>

                <div className="flex justify-end gap-4 cursor-pointer">
                  
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
        </div>
      )}
    </div>
  );
};

export default HotelSidebar;