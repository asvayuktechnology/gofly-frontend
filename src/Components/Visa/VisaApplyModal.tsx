"use client";

import { useState } from "react";
import Button from "../Common/input/Button";
import TextAreaInput from "../Common/input/TextAreaInput";
import TextInput from "../Common/input/TextInput";
import FileUploadInput from "../Common/input/uploadImage";


interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const VisaApplyModal = ({ isOpen, onClose }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    notes: "",
    file: null as File | null,
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (files) {
      setFormData((prev) => ({
        ...prev,
        file: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-2xl rounded-2xl p-6 relative shadow-xl max-h-[90vh] overflow-y-auto">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl cursor-pointer"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">
          Apply for Visa
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Name */}
          <TextInput
            name="name"
            label="Your Name"
            // placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          {/* Date */}
          <TextInput
            name="dob"
            type="date"
            label="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
          />

          {/* Phone */}
          <TextInput
            name="phone"
            label="Phone Number"
            //placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          {/* Email */}


          <TextInput
            label="Email Address *"
            name="email"
            //  placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* File Upload */}
          <div className="md:col-span-2">
            <FileUploadInput
              name="file"
              label="Upload Documents"
              file={formData.file}
              onChange={(file) =>
                setFormData((prev) => ({
                  ...prev,
                  file,
                }))
              }
            />
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <TextAreaInput
              name="notes"
              label="Short Notes"
              placeholder="Write your notes..."
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              text="Submit Now →"
              className="w-full h-12"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VisaApplyModal;