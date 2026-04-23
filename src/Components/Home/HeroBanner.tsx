"use client";

import React from "react";

const HeroBanner: React.FC = () => {
  return (
    <section className="home1-banner-section relative  overflow-hidden">
      {/* Background Video */}

      <div className="banner-video-area">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/video/home1-banner-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>



      {/* Content */}
      <div className="banner-content-wrap relative z-10 flex items-center  h-full">
        <div className="banner-content container mx-auto px-4 text-start text-white">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            All-in-one Travel Booking.
          </h1>
          <p className=" mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
            Highlights convenience and simplicity, Best for agencies with online
            &amp; mobile-friendly services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;