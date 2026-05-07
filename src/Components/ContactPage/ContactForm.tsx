"use client";

import { useState, useRef, useEffect, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
  agree: boolean;
};

const destinations = [
  "Maldives",
  "France",
  "United States",
  "Italy",
  "Turkey",
  "Spain",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
    agree: false,
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.destination || !form.agree) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      // 🔥 Replace with real API
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      alert("Form submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        destination: "",
        message: "",
        agree: false,
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl px-4">
          <div className="contact-form-wrap">
            
            {/* Title */}
            <div className="section-title text-center mb-16">
              <h2 className="text-3xl font-semibold">Get in Touch!</h2>
              <p className="text-gray-600 mt-2">
                We’re excited to hear from you! Whether you have a question about
                our services, want to discuss a new project.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                
                {/* Name */}
                <div className="form-inner">
                  <label>Full Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Wasington Mongla"
                    className="w-full border px-4 py-2 rounded-md  outline-none"
                  />
                </div>

                {/* Email */}
                <div className="form-inner">
                  <label>Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="info@example.com"
                    className="w-full border px-4 py-2 rounded-md  outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="form-inner">
                  <label>Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+92 567 *** ***"
                    className="w-full border px-4 py-2 rounded-md  outline-none"
                  />
                </div>

                {/* Custom Select */}
                <div className="form-inner">
                  <label>Where are you going?</label>

                  <div
                    ref={dropdownRef}
                    className="nice-select my-select relative w-full border rounded-md cursor-pointer"
                    tabIndex={0}
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <span className="current block px-4 py-2">
                      {form.destination || "Choose an option"}
                    </span>

                    {open && (
                      <ul className="list absolute z-10 w-full bg-white border mt-1 rounded-md shadow-md max-h-60 overflow-auto">
                        {destinations.map((item) => (
                          <li
                            key={item}
                            className="option px-4 py-2 hover:bg-gray-100"
                            onClick={() => {
                              setForm((prev) => ({
                                ...prev,
                                destination: item,
                              }));
                              setOpen(false);
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="form-inner md:col-span-2">
                  <label>Brief/Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write somethings about inquiry"
                    className="w-full border px-4 py-2 rounded-md min-h-[120px]  outline-none"
                  />
                </div>

                {/* Checkbox */}
                <div className="form-inner2 md:col-span-2">
                  <div className="form-check flex items-start gap-2">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      id="contactCheck22"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                    />
                    <label className="form-check-label text-sm" htmlFor="contactCheck22">
                      I will agree with yours privacy policy & terms & conditions.
                    </label>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="primary-btn1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2">
                  {loading ? "Submitting..." : "Submit Now"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}