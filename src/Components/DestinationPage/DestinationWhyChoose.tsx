"use client";

import React from "react";
import {WhyChooseData} from '@/lib/data'


const DestinationWhyChoose = () => {
    return (
        <div className="destination-dt-why-choose-section mb-100 py-20">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <div
                    className="row justify-content-center mb-50 wow animate fadeInDown"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                >
                    <div className="col-xl-6 col-lg-8 mx-auto">
                        <div className="section-title text-center">
                            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                                Why Choose Only Us?
                            </h2>

                            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                                Because we don’t just plan your trip — we craft unforgettable
                                experiences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="row g-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {WhyChooseData.map((item, index) => (
                        <div
                            key={index}
                            className="col-lg-4 col-md-6 wow animate fadeInDown"
                            data-wow-delay={item.delay}
                            data-wow-duration="1500ms"
                        >
                            <div

                                className="why-choose-card group relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm t hover:border-black/10 hover:shadow-2xl"
                            >
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl  text-black t ">
                                    {item.icon}
                                </div>

                                <h4 className="mb-4 text-2xl font-semibold text-black">
                                    {item.title}
                                </h4>

                                <p className="text-base leading-7 text-gray-600">
                                    {item.description}
                                </p>

                               
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features List */}
                <ul className="mt-12 flex flex-wrap items-center justify-center gap-4">
                    {[
                        "Personalized Itineraries",
                        "Trusted Guides & Partners",
                        "Curated Experiences",
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm t "
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DestinationWhyChoose;