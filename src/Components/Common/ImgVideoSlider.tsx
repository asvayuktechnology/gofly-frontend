
"use client";

import { BASE_URL } from "@/lib/const";
import { ImgVideoSliderProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ImgVideoSlider = ({
    title,
    description,
    stories,
}: ImgVideoSliderProps) => {
    return (
        <div className="visa-dt-success-story-section mb-24">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="section-title two mb-12 text-center wow animate fadeInDown">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        {title}
                    </h2>

                    {description && (
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
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
                    {stories?.map((story) => {
                        const fileUrl = `${BASE_URL}/${story.file}`;
                        const isVideo =
                            story.file?.endsWith(".mp4") ||
                            story.file?.endsWith(".webm") ||
                            story.file?.endsWith(".ogg");

                        return (
                            <SwiperSlide key={story._id}>
                                <div className="success-story-card relative overflow-hidden rounded-xl">
                                    {/* Image / Video */}
                                    {isVideo ? (
                                        <div className="video-area">
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-[480px] object-cover "
                                            >
                                                <source src={fileUrl} type="video/mp4" />
                                            </video>
                                        </div>
                                    ) : (
                                        <Image
                                            src={fileUrl}
                                            alt={story.name || "success story"}
                                            width={340}
                                            height={480}
                                            className="w-full h-[480px] object-cover"
                                        />
                                    )}

                                    {/* Overlay */}
                                    <div className="success-story-content-wrap absolute inset-0 flex flex-col justify-between p-4 bg-black/40">
                                        <Link href="/">
                                            <Image
                                                src="/assets/img/visa-dt-success-story-card-logo.png"
                                                alt="logo"
                                                width={90}
                                                height={35}
                                                className="cursor-pointer"
                                            />
                                        </Link>

                                        <div className="success-story-content text-white">
                                            <h5 className="text-lg font-medium mb-2">
                                                “{story?.review}”
                                            </h5>

                                            <div className="author-info">
                                                <h6 className="font-semibold">
                                                    {story?.name}
                                                </h6>

                                                <span className="text-sm text-gray-200">
                                                    {story?.designation}
                                                </span>

                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* Pagination */}
                <div className="slider-pagi-wrap mt-6 flex justify-center">
                    <div className="home1-destination-pagi paginations"></div>
                </div>
            </div>
        </div>
    );
};

export default ImgVideoSlider;