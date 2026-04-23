"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { swiperModules, swiperConfig } from "@/lib/swiper";
import { offers } from "@/lib/data";
import OfferCard from "../Offer/OfferCard";


const OfferSection = () => {
  return (
    <section className="mb-100">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="flex justify-center mb-12">
          <div className="section-title text-center">
            <h2>
              Discounts & Offers
            </h2>
            <p className="text-gray-600">
              A curated list of the most popular travel packages based on different destinations.
            </p>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={swiperModules}
          pagination={{
            clickable: true,
            el: ".swiper-pagination1",
            
          }}
          {...swiperConfig}
          className="mb-40"
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={offer.id}>
              <OfferCard
                offer={offer}
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="slider-pagi-wrap">
          <div className="swiper-pagination1 paginations"></div>
        </div>

      </div>
    </section>
  );
};

export default OfferSection;