


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { swiperModules, swiperConfig } from "@/lib/swiper";

import OfferCard from "../Offer/OfferCard";
import { useDiscounts } from "@/services/discountService";
import { BASE_URL } from "@/lib/const";


const OfferSection = () => {
  const { data, isLoading } = useDiscounts();

  const discounts = data?.data || [];

  if (isLoading) return null;

  return (
    <section className="mb-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex justify-center mb-12">
          <div className="section-title text-center">
            <h2>Discounts & Offers</h2>

            <p className="text-gray-600">
              A curated list of the most popular travel packages based on
              different destinations.
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
          {discounts.map((offer, index) => (
            <SwiperSlide key={offer._id}>
              <OfferCard
                offer={{
                  id: offer._id,
                 image: `${BASE_URL}/${offer.file}`,
                  alt: offer.title,
                  link: `/travel-package/details/${offer.applicablePackage}`,
                  
                }}
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