"use client";

import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
}

const FaqPackage: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [active, setActive] = useState<string>("");

  const toggle = (id: string) => {
    setActive((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="home1-faq-section mb-100">
      <div className="container mx-auto">
        <div
          className="row justify-content-center mb-50 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2>Questions &amp; Answer</h2>
              <p>
                We're committed to offering more than just products—we provide
                exceptional experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="faq-wrap">
              <div className="accordion accordion-flush">
                {faqs?.map((item, index) => {
                  const id = String(index);
                  const isOpen = active === id;

                  return (
                    <div
                      key={index}
                      className="accordion-item wow animate fadeInDown"
                      data-wow-delay={`${200 + index * 200}ms`}
                      data-wow-duration="1500ms"
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
                            className={`sidebar-category-icon transition-transform ${
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
                        <div className="accordion-body">{item.answer}</div>
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

export default FaqPackage;