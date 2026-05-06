"use client";

import { stories } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const SuccessStories: React.FC = () => {
    return (
        <div className="visa-dt-success-story-section mb-24">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="section-title two mb-12 text-center wow animate fadeInDown">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        We’ve Success Stories
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We’re committed to offering more than just products—we provide
                        exceptional experiences.
                    </p>
                </div>
            </div>

            {/* Slider */}
            <div className="w-full px-2 md:px-6">
                <Swiper
                    spaceBetween={25}
                    pagination={{
                        clickable: true,
                        el: ".home1-destination-pagi",
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 5 },
                    }}
                    className="swiper destionation-dt-customer-gallery-slider"
                >
                    {stories.map((story) => (
                        <SwiperSlide key={story.id}>
                            <div className="success-story-card relative overflow-hidden rounded-xl">
                                {/* Image / Video */}
                                {story.video ? (
                                    <div className="video-area">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-[480px] object-cover"
                                        >
                                            <source src={story.video} type="video/mp4" />
                                        </video>
                                    </div>
                                ) : (
                                    story.image && (
                                        <Image
                                            src={story.image}
                                            alt={story.name || "success story"}
                                            width={340}
                                            height={480}
                                            className="w-full h-[480px] object-cover"
                                        />
                                    )
                                )}

                                {/* Content */}
                                <div className="success-story-content-wrap absolute inset-0 flex flex-col justify-between p-4 bg-black/40">
                                    <Image
                                        src="/assets/img/innerpages/visa-dt-success-story-card-logo.svg"
                                        alt="logo"
                                        width={90}
                                        height={35}
                                    />

                                    {story.quote && (
                                        <div className="success-story-content text-white">
                                            <h5 className="text-lg font-medium mb-2">
                                                “{story.quote}”
                                            </h5>
                                            <div className="author-info">
                                                <h6 className="font-semibold">{story.name}</h6>
                                                <span className="text-sm text-gray-200">
                                                    {story.role}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination */}
                <div className="slider-pagi-wrap mt-6 flex justify-center">
                    <div className="home1-destination-pagi paginations"></div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;