"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { svgIcon } from "../../Icons/SvgIcons";
import { slides } from "@/lib/data";

interface BreadcrumbSliderProps {
  packageData?: {
    pricePerPerson?: number;
    title?: string;
    durationDays?: number;
    durationNights?: number;
  };
}

const BreadcrumbSlider = ({
  packageData,
}: BreadcrumbSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="breadcrumb-section two relative">
      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          setTimeout(() => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className="home2-banner-slider"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner-bg"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "650px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CONTENT */}
      <div className="banner-content-wrap absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto">
          <div className="banner-content text-white">
            <span className="text-lg">
              Starting From{" "}
              <strong>
                ${packageData?.pricePerPerson}
              </strong>{" "}
              / per person
            </span>

            <h1 className="text-5xl font-bold mt-4">
              {packageData?.title}
            </h1>

            <div className="batch mt-4">
              <span className="text-lg">
                {packageData?.durationDays} Days |{" "}
                {packageData?.durationNights} Nights
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="slider-btn-grp absolute inset-y-1/2 z-20 flex justify-between w-full px-4">
        <div
          ref={prevRef}
          className="slider-btn banner-slider-prev cursor-pointer"
        >
          {svgIcon.dtailslideprev}
        </div>

        <div
          ref={nextRef}
          className="slider-btn banner-slider-next cursor-pointer"
        >
          {svgIcon.dtailslidenext}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSlider;