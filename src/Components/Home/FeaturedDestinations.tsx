// Components/Home/FeaturedDestinations.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { svgIcon } from "../Common/Icons/SvgIcons";

import { useDestinations } from "@/services/destinationService";
import { DestinationItem } from "@/types/destinationType";
import { BASE_URL } from "@/lib/const";

// const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

type TabKey =
  | "europe"
  | "asia"
  | "middle_east"
  | "africa"
  | "north_america"
  | "oceania";

const TABS: { id: TabKey; label: string }[] = [
  { id: "europe", label: "Europe" },
  { id: "asia", label: "Asia" },
  { id: "middle_east", label: "Middle East" },
  { id: "africa", label: "Africa" },
  { id: "north_america", label: "North America" },
  { id: "oceania", label: "Oceania" },
];

interface Props {
  initialRegion?: TabKey;
}

export default function FeaturedDestinations({
  initialRegion = "europe",
}: Props) {
  const [activeTab, setActiveTab] =
    useState<TabKey>(initialRegion);
const { data, isLoading } = useDestinations({
  region: activeTab,
  isFeatured: true,
  limit: 4,
});

  const destinations: DestinationItem[] =
    data?.data || [];

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window as any).WOW
    ) {
      new (window as any).WOW().init();
    }
  }, []);

  return (
    <div className="home1-destination-section mb-100">
      <div className="container mx-auto">
        {/* TITLE */}
        <div
          className="row justify-content-center mb-60 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-10">
            <div className="section-title text-center">
              <h2>Featured Destinations</h2>
            </div>

            {/* TABS */}
            {/* TABS */}

            <ul
              className="nav nav-pills flex flex-wrap gap-2"
              id="pills-tab"
              role="tablist"
            >
              {TABS.map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`nav-link transition-all duration-200 cursor-pointer ${activeTab === tab.id
                        ? "active text-white bg-primary cursor-pointer"
                        : ""
                      }`}
                    id={`pills-${tab.id}-tab`}
                    type="button"
                    role="tab"
                    aria-controls={`pills-${tab.id}`}
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* LOADING */}
        {isLoading ? (
          <div className="text-center text-black py-10">
            <p>Loading destinations...</p>
          </div>
        ) : destinations.length > 0 ? (
          <>
            <div className="swiper home1-destination-slider mb-40">
              <Swiper
                modules={[Pagination]}
                spaceBetween={25}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                }}
              >
                {destinations.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div className="destination-card">
                      <Link
                        href={`/destination/${item._id}`}
                        className="destination-img block relative overflow-hidden rounded-[20px]"
                      >
                        <Image
                          src={`${BASE_URL}/${item.images?.[0]}`}
                          alt={item.name}
                          width={550}
                          height={220}
                          unoptimized
                          className="w-full h-[220px] object-cover"
                        />
                      </Link>

                      <div className="destination-content">
                        <Link
                          href={`/destination/${item._id}`}
                          className="title-area"
                        >
                          {svgIcon.location}
                          {item.name}
                        </Link>

                        <div className="content">
                          <p>
                            {item.totalTours} tours |{" "}
                            {item.totalDepartures} departures{" "}
                            {item.guestsTravelled.toLocaleString()} guests
                            travelled.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="slider-pagi-wrap">
              <div className="home1-destination-pagi paginations"></div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-black mb-2">
              No Destinations Available
            </h3>

            <p className="text-gray-600 text-base">
              New travel destinations will be added soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

