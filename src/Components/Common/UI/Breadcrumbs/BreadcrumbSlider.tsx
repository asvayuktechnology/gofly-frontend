"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  "/assets/img/package-breadcrumb-bg1.jpg",
  "/assets/img/package-breadcrumb-bg2.jpg",
  "/assets/img/breadcrumb-bg9.jpg",
];

const BreadcrumbSlider: React.FC = () => {
  return (
    <div className="breadcrumb-section two relative">

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1200}
        autoplay={{ delay: 4000 }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
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
      <div className="slider-btn-grp">
        <div className="slider-btn banner-slider-prev">
          <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g><path fillRule="evenodd" clipRule="evenodd" d="M0 10.0571H22V11.9428H0V10.0571Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.942857 11.9429C5.3768 11.9429 9.00115 8.0432 9.00115 3.88457V2.94171H7.11543V3.88457C7.11543 7.04251 4.29566 10.0571 0.942857 10.0571H0V11.9429H0.942857Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.942857 10.0571C5.3768 10.0571 9.00115 13.9568 9.00115 18.1154V19.0583H7.11543V18.1154C7.11543 14.9587 4.29566 11.9428 0.942857 11.9428H0V10.0571H0.942857Z"></path></g></svg>
        </div>

        <div className="slider-btn banner-slider-next">
          <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><g><path fillRule="evenodd" clipRule="evenodd" d="M22 10.0571H-5.72205e-06V11.9428H22V10.0571Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M21.0571 11.9429C16.6232 11.9429 12.9989 8.0432 12.9989 3.88457V2.94171H14.8846V3.88457C14.8846 7.04251 17.7043 10.0571 21.0571 10.0571H22V11.9429H21.0571Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M21.0571 10.0571C16.6232 10.0571 12.9989 13.9568 12.9989 18.1154V19.0583H14.8846V18.1154C14.8846 14.9587 17.7043 11.9428 21.0571 11.9428H22V10.0571H21.0571Z"></path></g></svg>
        </div>

      </div>
    </div>
  );
};

export default BreadcrumbSlider;
