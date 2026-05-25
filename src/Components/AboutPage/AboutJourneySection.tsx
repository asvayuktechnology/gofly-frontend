"use client";

import Image from "next/image";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

interface JourneyItem {
    year: string;
    image: string;
    title: string;
    description: string;
}

interface AboutJourneySectionProps {
    heading?: string;
    subHeading?: string;
    journeys?: JourneyItem[];
}

const defaultJourneys: JourneyItem[] = [
    {
        year: "1986",
        image: "/assets/img/about-page-journey-img2.webp",
        title: "1986 – The Birth of Travel Agencies",
        description:
            "The first-ever travel agency was founded by Thomas Cook in England. He organized group trips, starting with a railway excursion for 500 people. Thomas Cook expanded his services internationally, arranging trips to Paris and beyond.",
    },
    {
        year: "1996",
        image: "/assets/img/about-page-journey-img2.webp",
        title: "1996 – A New Era of Exploration",
        description:
            "Travel evolved into a more accessible and exciting experience, opening doors for global tourism and cultural discovery.",
    },
    {
        year: "2006",
        image: "/assets/img/about-page-journey-img2.webp",
        title: "2006 – We Took Travel Beyond Borders",
        description:
            "We expanded our reach globally, helping travelers discover new destinations with comfort and confidence.",
    },
    {
        year: "2016",
        image: "/assets/img/about-page-journey-img2.webp",
        title: "2016 – Embracing Technology to Transform Travel",
        description:
            "Digital booking systems and smart travel solutions transformed how people planned their journeys.",
    },
    {
        year: "2022",
        image: "/assets/img/about-page-journey-img2.webp",
        title: "2022 – A New Era of Personalized Journeys",
        description:
            "Customized experiences became the heart of modern travel planning and premium tourism services.",
    },
    {
        year: "2023",
        image: "/assets/img/about-page-journey-img2.webp",
        title: "2023 – Expanding Our Global Footprint",
        description:
            "Our services reached new international destinations, connecting travelers worldwide.",
    },
    {
        year: "2025",
        image: "/assets/img/about-page-journey-img2.webp",
        title: "2025 – Pioneering Next-Gen Travel Solutions",
        description:
            "We continue innovating with AI-powered travel planning and seamless booking experiences.",
    },
];

export default function AboutJourneySection({
    heading = "Behind The Journey",
    subHeading = "With years of experience in the travel industry, we specialize in crafting personalized journeys.",
    journeys = defaultJourneys,
}: AboutJourneySectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="about-page-journey-section mb-24">
            <div className="container mx-auto px-4">

                {/* Section Title */}
                <div
                    className="row justify-center mb-12 wow animate fadeInDown"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                >
                    <div className="col-lg-8 max-w-3xl mx-auto">
                        <div className="section-title text-center">
                            <h2 className="text-4xl font-semibold mb-4">
                                {heading}
                            </h2>

                            <p className="text-gray-600 leading-7">
                                {subHeading}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="jouney-content-wrapper">

                    {/* Timeline Navigation */}
                    <div className="nav-area mb-12 relative">
                        <div
                            className="nav nav-pills"
                            id="pills-tab"
                            role="tablist"
                        >
                            <Swiper
                                modules={[FreeMode]}
                                freeMode
                                spaceBetween={24}
                                slidesPerView={2}
                                breakpoints={{
                                    480: {
                                        slidesPerView: 2,
                                    },
                                    640: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                    },
                                    1280: {
                                        slidesPerView: 6,
                                    },
                                }}
                                className="about-page-journey-slider"
                            >
                                {journeys.map((item, index) => (
                                    <SwiperSlide key={item.year}>
                                        <div
                                            className="nav-item relative flex flex-col items-center"
                                            role="presentation"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => setActiveIndex(index)}
                                                className={`nav-link transition-all duration-300 ${activeIndex === index
                                                        ? "active"
                                                        : ""
                                                    }`}
                                                aria-selected={activeIndex === index}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={195}
                                                    height={195}
                                                    className={`rounded-full object-cover border-4 transition-all duration-300 ${activeIndex === index
                                                            ? "border-black"
                                                            : "border-transparent"
                                                        }`}
                                                />

                                                <h4 className="text-center mt-4 text-lg font-semibold">
                                                    {item.year}
                                                </h4>
                                            </button>

                                            <span
                                                className={`dot mt-4 w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index
                                                        ? "bg-black"
                                                        : "bg-gray-300"
                                                    }`}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Line */}
                        <svg
                            className="line"
                            height="6"
                            viewBox="0 0 1320 6"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z" />
                        </svg>
                    </div>

                    {/* Content */}
                    <div className="row justify-center">
                        <div className="col-xl-8 col-lg-10 max-w-4xl mx-auto">
                            <div
                                className="tab-content"
                                id="pills-tabContent"
                            >
                                <div
                                    className="tab-pane fade show active text-center"
                                    role="tabpanel"
                                >
                                    <h4 className="text-3xl font-semibold mb-6">
                                        {journeys[activeIndex].title}
                                    </h4>

                                    <p className="text-gray-600 leading-8 text-lg">
                                        {journeys[activeIndex].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}