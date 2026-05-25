"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { svgIcon } from "../../Icons/SvgIcons";

export interface LocationSliderItem {
    title: string;
    image: string;
    days?: string;
    href?: string;
}

interface LocationSliderProps {
    items: LocationSliderItem[];
    className?: string;
    sliderClassName?: string;
    autoplay?: boolean;
    autoplayDelay?: number;
    loop?: boolean;
    showNavigation?: boolean;
    slidesPerView?: number;
}



export default function LocationSlider({
    items,
    className = "",
    sliderClassName = "package-dt-location-slider",
    autoplay = true,
    autoplayDelay = 3000,
    showNavigation = true,
    slidesPerView = 3,
}: LocationSliderProps) {
    const navigationId = Math.random().toString(36).substring(2, 9);

    return (
        <div className={`location-slider-area relative ${className}`}>
            {/* Swiper */}
            <Swiper
                className={sliderClassName}
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={slidesPerView}
                navigation={{
                    nextEl: `.location-slider-next-${navigationId}`,
                    prevEl: `.location-slider-prev-${navigationId}`,
                }}
                autoplay={
                    autoplay
                        ? {
                            delay: autoplayDelay,
                            disableOnInteraction: false,
                        }
                        : false
                }
                breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="location-card">
                            <Link
                                href={item.href || "#"}
                                className="location-img block overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="h-[220px] w-full object-cover transition duration-500 hover:scale-105"
                                    width={370}
                                    height={220}
                                />
                            </Link>

                            <div className="location-content mt-4 flex items-center justify-between">
                                <h6 className="text-lg font-semibold">
                                    <Link href={item.href || "#"}>{item.title}</Link>
                                </h6>

                                {item.days && <span>({item.days})</span>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            {showNavigation && (
                <div className="slider-btn-grp two mt-8 flex items-center gap-4">
                    <button
                        className={`slider-btn location-slider-prev-${navigationId} cursor-pointer`}
                        aria-label="Previous Slide"
                    >
                        {svgIcon.detaillocationprev}
                    </button>

                    <button
                        className={`slider-btn location-slider-next-${navigationId} cursor-pointer`}
                        aria-label="Next Slide"
                    >
                        {svgIcon.detaillocationnext}
                    </button>
                </div>
            )}
        </div>
    );
}