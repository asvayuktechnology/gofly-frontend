"use client";

import { BASE_URL } from "@/lib/const";
import React from "react";

interface Props {
  bannerFile?: string;

  section?: {
    header?: string;
    subtitle?: string;
  };
}

const HeroBanner: React.FC<Props> = ({
  bannerFile,
  section,
}) => {
  // detect video
  const isVideo =
    bannerFile?.match(
      /\.(mp4|webm|ogg)$/i
    );

  return (
    <section className="home1-banner-section relative overflow-hidden">
      {/* Background Media */}
      <div className="banner-video-area">
        {isVideo ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={`${BASE_URL}/${bannerFile}`}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={`${BASE_URL}/${bannerFile}`}
            alt="Banner"
          />
        )}
      </div>

      {/* Content */}
      <div className="banner-content-wrap relative z-2 flex items-center h-full">
        <div className="banner-content container mx-auto px-4 text-start text-white">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {section?.header ||
              "All-in-one Travel Booking."}
          </h1>

          <p className="mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
            {section?.subtitle ||
              "Best travel packages"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;