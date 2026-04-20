"use client";

import Image from "next/image";
import Link from "next/link";
import PackageCard from "./UI/Cards/PackageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const RelevantPackageSection = () => {
     const packages = [
        {
            id:1,
            title: "Maldives Beach Paradise",
            location: "Maldives",
            duration: "05 Days",
            price: 399,
            image: "/assets/img/tour-package-img4.webp",
            badge: "Hot Sale!",
            link: "/travel-package/details",
            experiences:
                "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
            inclusions:
                "Accommodation, Daily Meals, Entry Fees & Local Transfers",
        },
        {
            id:2,
            title: "Maldives Beach Paradise",
            location: "Maldives",
            duration: "05 Days",
            price: 399,
            image: "/assets/img/tour-package-img4.webp",
            badge: "Hot Sale!",
            link: "/travel-package/details",
            experiences:
                "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
            inclusions:
                "Accommodation, Daily Meals, Entry Fees & Local Transfers",
        },
        {
            id:3,
            title: "Maldives Beach Paradise",
            location: "Maldives",
            duration: "05 Days",
            price: 399,
            image: "/assets/img/tour-package-img4.webp",
            badge: "Hot Sale!",
            link: "/travel-package/details",
            experiences:
                "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
            inclusions:
                "Accommodation, Daily Meals, Entry Fees & Local Transfers",
        }, 
        {
            id:4,
            title: "Maldives Beach Paradise",
            location: "Maldives",
            duration: "05 Days",
            price: 399,
            image: "/assets/img/tour-package-img4.webp",
            badge: "Hot Sale!",
            link: "/travel-package/details",
            experiences:
                "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
            inclusions:
                "Accommodation, Daily Meals, Entry Fees & Local Transfers",
        },
    ];
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
                    {packages.map((pkg, index) => (
                    <SwiperSlide key={pkg.id}>

                        <PackageCard
                            key={index}
                            {...pkg}
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