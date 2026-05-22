"use client";

import VisaApplyModal from "@/Components/Visa/VisaApplyModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface VisaSidebarProps {
  visa: any;
}

const VisaSidebar = ({ visa }: VisaSidebarProps) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  if (!visa) return null;

  return (
    <div className="space-y-6">

      {/* ================= Pricing Card ================= */}
      <div className="bg-indigo-50 rounded-2xl p-6 shadow-sm">

        {/* Title */}
       <h2 className="text-xl font-bold text-gray-900">
  {visa.visaType
    ?.replaceAll("_", " ")
    .replace(/\b\w/g, (char: string) => char.toUpperCase())}
</h2>

        {/* Badge */}
        <div className="mt-3 inline-block bg-white px-4 py-1 rounded-full text-sm font-medium text-blue-600">
          Validity - {visa.validity} / {visa.entryType}
        </div>

        {/* Pricing */}
        <div className="mt-6">
          <p className="text-sm text-gray-500">Visa Pricing</p>
          <h3 className="text-3xl font-bold text-gray-900">
            ₹{visa.price}{" "}
            <span className="text-base font-normal text-gray-600">
              /{visa.priceLabel}
            </span>
          </h3>
        </div>

        {/* Button */}
       <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium w-full cursor-pointer"
        >
          Apply Online <span>↗</span>
        </button>

        {/* Note (same UI) */}
        <p className="mt-4 text-xs text-gray-600 flex items-start gap-2">
          <span>ⓘ</span>
          Exclusive Offers – Access travel, dining, and shopping deals.
        </p>
      </div>

      {/* ================= Assistance Card ================= */}
      <div className="bg-green-100 rounded-2xl p-6 shadow-sm">

        <h2 className="text-xl font-bold text-gray-900">
          Need Visa Assistance?
        </h2>

        <div className="flex gap-3 mt-3 text-sm">
          <span className="bg-black px-3 py-1 rounded-full flex items-center gap-1">
            ✔ Expert Guidance
          </span>
          <span className="bg-black px-3 py-1 rounded-full flex items-center gap-1">
            ✔ Fast Processing
          </span>
        </div>

        <div className="mt-5 bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
          <Image
            src="/assets/img/whatsapp-icon.svg"
            alt="whatsapp"
            width={40}
            height={40}
          />

          <div>
            <p className="text-sm text-black">WhatsApp</p>
            <p className="font-bold text-black">+91 345 546 4568</p>
          </div>
        </div>

        <div className="mt-4">
          <Image
            src="/assets/img/travel-couple.png"
            alt="travel"
            width={400}
            height={250}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
 <VisaApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};

export default VisaSidebar;