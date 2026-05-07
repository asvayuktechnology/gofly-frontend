"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { svgIcon } from "../../Icons/SvgIcons";
import { slides } from "@/lib/data";

const BreadcrumbSlider: React.FC = () => {
  return (
    <div className="breadcrumb-section two">
      {/* Swiper */}
      <Swiper
        className="swiper home2-banner-slider"
        modules={[EffectFade, Navigation, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".banner-slider-next",
          prevEl: ".banner-slider-prev",
        }}
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div
              className="banner-bg"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img})`,
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="banner-content-wrap">
        <div className="container mx-auto">
          <div className="banner-content">
            <span>
              Starting From <strong>$899</strong>/per person
            </span>
            <h1>Paris &amp; Île-de-France</h1>
            <div className="batch">
              <span>5 Days | 4 Nights | 3 Destinations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="slider-btn-grp">
        <div className="slider-btn banner-slider-prev">
          {svgIcon.dtailslideprev}
        </div>

        <div className="slider-btn banner-slider-next">
          {svgIcon.dtailslidenext}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSlider;
