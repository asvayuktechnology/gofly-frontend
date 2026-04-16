"use client";

import PackageCard from "../Common/UI/Cards/PackageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


export default function OneDayTripSection() {
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
        <div className="home1-travel-package-section py-16">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">
                        One Day Trips

                    </h2>
                    <p className="text-gray-600">
                        A curated list of the most popular travel packages based on different destinations.
                    </p>
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
}