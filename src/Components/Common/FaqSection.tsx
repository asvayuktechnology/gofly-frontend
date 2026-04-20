"use client";

import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";

interface FAQItem {
    id: string;
    question: string;
    answer: React.ReactNode;
}

const faqData: FAQItem[] = [
    {
        id: "One",
        question: "What Services Does Your Travel Agency Provide?",
        answer: (
            <>
                A travel agency typically provides a wide range of services to ensure a smooth and enjoyable travel experience.
                As like-
                <span>
                    Hotel booking, Flight Booking, Visa & Customized Travel Pakcge etc.
                </span>
            </>
        ),
    },
    {
        id: "Two",
        question: "Do You Offer Customized Travel Packages?",
        answer: (
            <>
                Absolutely! We offer fully customized travel packages based on your interests, budget, and schedule. Whether
                you're planning
                <span>
                    a solo adventure, a family vacation, a romantic getaway, or a group tour
                </span>
                , our team will tailor every detail to create a personalized travel experience just for you.
            </>
        ),
    },
    {
        id: "Three",
        question: "Can I Book Flights, Hotels, and Tours Separately?",
        answer: (
            <>
                Yes, you can! We provide the flexibility to book
                <span> flights, hotels, and tours separately</span> based on your specific needs.
            </>
        ),
    },
    {
        id: "Four",
        question: "Do You Provide Visa Assistance?",
        answer: (
            <>
                Yes, we do! Our team offers complete <span>visa assistance services</span> to help you navigate the application
                process smoothly.
            </>
        ),
    },
    {
        id: "Five",
        question: "What Payment Methods Do You Accept?",
        answer: (
            <>
                We accept a variety of <span>payment methods</span> including
                <span> cash, bank transfers, mobile payments, and cards</span>.
            </>
        ),
    },
    {
        id: "Six",
        question:
            "What Travel Documents are Required for International Travel?",
        answer: (
            <>
                You’ll typically need <span>passport, visa, tickets, insurance</span> and other required documents.
            </>
        ),
    },
];

const FaqSection: React.FC = () => {
    const [active, setActive] = useState<string>("One");

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
                                We’re committed to offering more than just products—we provide
                                exceptional experiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 ">
                    <div className="col-span-12">
                        <div className="faq-wrap">
                            <div className="accordion accordion-flush">
                                {faqData.map((item, index) => {
                                    const isOpen = active === item.id;

                                    return (
                                        <div
                                            key={item.id}
                                            className="accordion-item wow animate fadeInDown"
                                            data-wow-delay={`${200 + index * 200}ms`}
                                            data-wow-duration="1500ms"
                                        >
                                            <h5 className="accordion-header">
                                                <button
                                                    className={`accordion-button w-full flex justify-between items-center ${!isOpen ? "collapsed" : ""
                                                        }`}
                                                    type="button"
                                                    onClick={() => toggle(item.id)}
                                                >
                                                    {item.question}
                                                    <BsFillCaretDownFill size={12} fill="#525252" className={` sidebar-category-icon transition-transform ${!isOpen ? "" : "rotate-180"
                                                        }`} />
                                                </button>
                                            </h5>

                                            <div
                                                className={`accordion-collapse collapse  ${isOpen ? "show" : ""
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

export default FaqSection;