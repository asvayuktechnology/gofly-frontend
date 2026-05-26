"use client";

import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

const faqData = [
  {
    question: "What services do you provide?",
    answer:
      "We provide travel packages, hotel bookings, transport services, and visa assistance.",
  },
  {
    question: "How can I book a package?",
    answer:
      "You can easily book a package through our website or contact our support team.",
  },
  {
    question: "Can I customize my travel package?",
    answer:
      "Yes, we offer customized travel packages according to your preferences and budget.",
  },
  {
    question: "Do you provide cancellation support?",
    answer:
      "Yes, cancellation and refund policies are available based on package terms.",
  },
  {
    question: "Is customer support available 24/7?",
    answer:
      "Yes, our support team is available 24/7 to help you during your journey.",
  },
];

const DestFaqSection = () => {
  const [active, setActive] = useState<string>("0");

  const toggle = (id: string) => {
    setActive((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="home1-faq-section mb-100">
      <div className="container mx-auto">
        <div className="row justify-content-center mb-50">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2>Questions &amp; Answer</h2>

              <p>
                We’re committed to offering more than just
                products—we provide exceptional experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="faq-wrap">
              <div className="accordion accordion-flush">
                {faqData.map((item, index) => {
                  const id = String(index);

                  const isOpen = active === id;

                  return (
                    <div
                      key={index}
                      className="accordion-item"
                    >
                      <h5 className="accordion-header">
                        <button
                          className={`accordion-button w-full flex justify-between items-center ${
                            !isOpen ? "collapsed" : ""
                          }`}
                          type="button"
                          onClick={() => toggle(id)}
                        >
                          {item.question}

                          <BsFillCaretDownFill
                            size={12}
                            fill="#525252"
                            className={`transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </h5>

                      <div
                        className={`accordion-collapse collapse ${
                          isOpen ? "show" : ""
                        }`}
                      >
                        <div className="accordion-body">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestFaqSection;