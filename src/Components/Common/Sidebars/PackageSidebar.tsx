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
                {discount?.type === "percentage" ? "% Off" : "$ Off"}
              </span>
            </div>
          )}
        </div>

        <div className="price-area">
          <h6>Starting From</h6>
          <span>
            <del>${packageData?.originalPrice}</del> $
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
          text="Enquiry"
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
          <div className="relative w-full max-w-[872px] rounded-[20px] bg-white p-8 md:p-10 overflow-y-auto max-h-[90vh] ">

            {/* CLOSE */}
            <button
              type="button"
              onClick={closeModal}
              className="group absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-[#FF3927]"
            >
              <svg fill="#FF3927" className="group-hover:fill-white" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M2.00247 0.500545C1.79016 0.505525 1.58918 0.582706 1.4362 0.735547L0.694403 1.479C0.345704 1.82743 0.389689 2.43243 0.79164 2.83493L3.00694 5.05341L0.79164 7.27092C0.389689 7.67328 0.345566 8.27842 0.694403 8.62753L1.4362 9.37044C1.7849 9.71872 2.38879 9.67543 2.7913 9.27293L5.00659 7.05473L7.22189 9.27293C7.62467 9.67543 8.22898 9.71872 8.57699 9.37044L9.31989 8.62753C9.6679 8.27856 9.62461 7.67342 9.22182 7.27092L7.00653 5.05341L9.22182 2.83493C9.62461 2.43243 9.6679 1.82743 9.31989 1.479L8.57699 0.735547C8.22898 0.386433 7.62467 0.430557 7.22189 0.833614L5.00659 3.05126L2.7913 0.833753C2.56515 0.606635 2.27482 0.493906 2.00247 0.500545Z"></path></svg>
            </button>

            {/* TITLE */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold">
                We'd Love to Hear From You!
              </h4>
            </div>

            <form onSubmit={handleSubmit} className="enquiry-form-wrapper border border-[#e8e8e8] py-[35px] px-[30px] rounded-[10px]">
              <div className="grid grid-cols-2 gap-4 mb-50">
                {/* Full Name */}
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                    {errors.fullName && (
                      <p className="text-danger mt-1">{errors.fullName}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <p className="text-danger mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>



                {/* Number of People */}
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>Number of People*</label>
                    <input
                      type="number"
                      min={1}
                      name="numberOfPeople"
                      value={formData.numberOfPeople}
                      onChange={handleChange}
                      placeholder="Number of people"
                    />
                    {errors.numberOfPeople && (
                      <p className="text-danger mt-1">{errors.numberOfPeople}</p>
                    )}
                  </div>
                </div>

                {/* Travel Date */}
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>Travel Date</label>

                    <div className="date-field-area">
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                      />

                      <svg
                        className="calender-icon"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path d="M12.1953 1.09375H10.9375V0.4375C10.9375 0.195891 10.7416 0 10.5 0C10.2584 0 10.0625 0.195891 10.0625 0.4375V1.09375H3.9375V0.4375C3.9375 0.195891 3.74164 0 3.5 0C3.25836 0 3.0625 0.195891 3.0625 0.4375V1.09375H1.80469C0.809566 1.09375 0 1.90332 0 2.89844V12.1953C0 13.1904 0.809566 14 1.80469 14H12.1953C13.1904 14 14 13.1904 14 12.1953V2.89844C14 1.90332 13.1904 1.09375 12.1953 1.09375ZM13.125 12.1953C13.125 12.7088 12.7088 13.125 12.1953 13.125H1.80469C1.29123 13.125 0.875 12.7088 0.875 12.1953V4.94922C0.875 4.91296 0.889404 4.87818 0.915044 4.85254C0.940684 4.8269 0.975459 4.8125 1.01172 4.8125H12.9883C13.0245 4.8125 13.0593 4.8269 13.085 4.85254C13.1106 4.87818 13.125 4.91296 13.125 4.94922V12.1953Z" />
                        </g>
                      </svg>
                    </div>

                    {errors.travelDate && (
                      <p className="text-danger mt-1">{errors.travelDate}</p>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="col-lg-12 col-span-2">
                  <div className="form-inner">
                    <label>Tour Details</label>
                    <textarea
                      rows={5}
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Write about tour info"
                    />
                    {errors.details && (
                      <p className="text-danger mt-1">{errors.details}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="form-inner d-flex gap-3">


                <button
                  type="submit"
                  disabled={isPending}
                  className="primary-btn1 black-bg"
                >
                  <span>
                    {isPending ? "Submitting..." : "Submit Enquiry"}
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                    </svg>
                  </span>

                  <span>
                    {isPending ? "Submitting..." : "Submit Enquiry"}
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                    </svg>
                  </span>
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