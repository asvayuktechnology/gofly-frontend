"use client";

import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  faqs: FaqItem[];
}

const VisaFaqSection: React.FC<Props> = ({ faqs = [] }) => {
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
              <h2>Questions & Answers</h2>

              <p>
                We provide quick answers to the most common visa-related questions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="faq-wrap">
              <div className="accordion accordion-flush">
                {faqs.map((item, index) => {
                  const id = String(index);
                  const isOpen = active === id;

                  return (
                    <div key={index} className="accordion-item mb-3 border rounded-lg">
                      <h5 className="accordion-header">
                        <button
                          className={`accordion-button w-full flex items-center justify-between p-4 text-left ${
                            !isOpen ? "collapsed" : ""
                          }`}
                          type="button"
                          onClick={() => toggle(id)}
                        >
                          <span>{item.question}</span>

                          <BsFillCaretDownFill
                            size={12}
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </h5>

                      {isOpen && (
                        <div className="accordion-collapse show">
                          <div className="accordion-body p-4 pt-0 text-gray-600">
                            {item.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {faqs.length === 0 && (
                <p className="text-center">No FAQs Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaFaqSection;