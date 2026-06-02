"use client";

import Image from "next/image";
import Link from "next/link";
import PackageCard from "./UI/Cards/PackageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BASE_URL } from "@/lib/const";

interface Props {
  packages: any[];
}

const RelevantPackageSection = ({ packages }: Props) => {
    
    return (
        <div className="relevant-package-section pt-24 mb-24">
            <div className="max-w-7xl mx-auto px-4">

                {/* Title Section */}
                <div className="flex flex-wrap justify-center mb-12">
                    <div className="w-full lg:w-2/3 xl:w-1/2">
                        <div className="section-title text-center">
                            <h2>Relevant Package</h2>
                            <p>
                                A curated list of the most popular travel packages based on
                                different destinations.
                            </p>
                        </div>
                    </div>
                </div>

                       {/* Swiper Slider */}
              <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={24}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
    el: ".offer-pagination",
  }}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="mb-40"
>
  {packages?.map((pkg, index) => (  
    <SwiperSlide key={pkg._id}>
      <PackageCard
        // id={pkg._id}
        title={pkg.title}
        location={pkg.destination?.name || pkg.country}
        duration={`${pkg.durationDays} Days`}
        price={pkg.pricePerPerson}
        image={`${BASE_URL}/${pkg.image}`}
        badge={pkg.isHotSale ? "Hot Sale!" : ""}
        link={`/travel-package/details/${pkg._id}`}
        delay={200 + index * 100}
      />
    </SwiperSlide>
  ))}
</Swiper>
                {/* Pagination */}
                <div className="slider-pagi-wrap">
                    <div className="offer-pagination relative flex justify-center paginations"></div>
                </div>

            </div>
        </div>
    );
};

export default RelevantPackageSection;