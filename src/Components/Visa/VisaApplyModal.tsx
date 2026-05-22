"use client";

import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const VisaApplyModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      
      {/* Modal Box */}
      <div className="bg-white w-full max-w-2xl rounded-2xl p-6 relative shadow-xl">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-5">
          Apply for Visa
        </h2>

        {/* Form */}
        <form className="grid grid-cols-2 gap-4">

          <input
            placeholder="Your Name"
            className="border p-3 rounded-lg col-span-1"
          />

          <input
            type="date"
            className="border p-3 rounded-lg col-span-1"
          />

          <input
            placeholder="Phone Number"
            className="border p-3 rounded-lg col-span-1"
          />

          <input
            placeholder="Email Address"
            className="border p-3 rounded-lg col-span-1"
          />

          {/* File Upload */}
          <div className="col-span-2 border-dashed border-2 p-6 text-center rounded-lg">
            Drag & Drop File Here To Upload
            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG, PDF, DOCX
            </p>
          </div>

          <textarea
            placeholder="Short Notes"
            className="border p-3 rounded-lg col-span-2"
          />

          <button
            type="submit"
            className="col-span-2 bg-black text-white py-3 rounded-lg cursor-pointer"
          >
            Submit Now →
          </button>

        </form>
      </div>
    </div>
  );
};

export default VisaApplyModal;