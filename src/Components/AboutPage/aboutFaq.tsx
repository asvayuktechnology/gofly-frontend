"use client";

import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

const faqItems = [
  {
    question: "How do I book a visa appointment?",
    answer:
      "You can book your visa appointment directly through our website by selecting your destination and preferred date.",
  },
  {
    question: "How long does visa processing take?",
    answer:
      "Visa processing time depends on the country and visa type. Usually it takes 5–15 working days.",
  },
  {
    question: "Can I track my application status?",
    answer:
      "Yes, you can track your visa application status from your dashboard after logging in.",
  },
  {
    question: "What documents are required?",
    answer:
      "Required documents generally include passport, photographs, bank statement, and travel itinerary.",
  },
];

const AboutFaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600">
            Find answers to the most common questions.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-medium bg-white"
                >
                  <span>{item.question}</span>

                  <BsFillCaretDownFill
                    size={14}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-gray-600 leading-7">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutFaqSection;