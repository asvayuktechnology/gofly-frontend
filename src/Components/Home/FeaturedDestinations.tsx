"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { svgIcon } from "../Common/Icons/SvgIcons";

export default function FeaturedDestinations() {
  const [activeTab, setActiveTab] = useState("europe");

  useEffect(() => {
    // Initialize WOW.js if used in the project
    if (typeof window !== "undefined" && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  // ✅ TYPES
  type TabKey =
    | "europe"
    | "asia"
    | "middle-east"
    | "africa"
    | "north-america"
    | "oceania";

  interface Destination {
    name: string;
    image: string;
    tours: number;
    departures: number;
    guests: number;
    link: string;
  }

  type DestinationMap = Record<TabKey, Destination[]>;

  // ✅ STATIC DATA (outside component)
  const TABS: { id: TabKey; label: string }[] = [
    { id: "europe", label: "Europe" },
    { id: "asia", label: "Asia" },
    { id: "middle-east", label: "Middle East" },
    { id: "africa", label: "Africa" },
    { id: "north-america", label: "North America" },
    { id: "oceania", label: "Oceania" },
  ];

  const DESTINATIONS: DestinationMap = {
    europe: [
      {
        name: "Rome, Italy",
        image: "/assets/img/destination-img3.webp",
        tours: 140,
        departures: 240,
        guests: 15786,
        link: "/destination/details",
      },
      {
        name: "Paris, France",
        image: "/assets/img/destination-img3.webp",
        tours: 140,
        departures: 240,
        guests: 15786,
        link: "/destination/details",
      },
      {
        name: "Paris, France",
        image: "/assets/img/destination-img3.webp",
        tours: 140,
        departures: 240,
        guests: 15786,
        link: "/destination/details",
      },
      {
        name: "Paris, France",
        image: "/assets/img/destination-img3.webp",
        tours: 140,
        departures: 240,
        guests: 15786,
        link: "/destination/details",
      },
      {
        name: "Paris, France",
        image: "/assets/img/destination-img3.webp",
        tours: 140,
        departures: 240,
        guests: 15786,
        link: "/destination/details",
      },
    ],
    asia: [],
    "middle-east": [],
    africa: [],
    "north-america": [],
    oceania: [],
  };

  return (
    <div className="home1-destination-section mb-100">
      <div className="container mx-auto">
        {/* Section Title */}
        <div
          className="row justify-content-center mb-60 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-10">
            <div className="section-title text-center">
              <h2>Featured Destinations</h2>
            </div>

            {/* Tabs */}
            <ul
              className="nav nav-pills flex flex-wrap gap-2"
              id="pills-tab"
              role="tablist"
            >
              {TABS.map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`nav-link transition-all duration-200 cursor-pointer ${
                      activeTab === tab.id
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

        {/* Tab Content */}
        <div className="tab-content" id="pills-tabContent">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <div
                key={tab.id}
                className={`tab-pane fade ${
                  isActive ? "show active block" : "hidden"
                }`}
                id={`pills-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`pills-${tab.id}-tab`}
              >
                {DESTINATIONS[tab.id]?.length > 0 ? (
                  <>
                    <div className="swiper home1-destination-slider mb-40">
                      <Swiper
                        modules={[Pagination]}
                        spaceBetween={25}
                        pagination={{
                          el: "",
                          clickable: true,
                        }}
                        breakpoints={{
                          0: { slidesPerView: 1 },
                          576: { slidesPerView: 2 },
                          768: { slidesPerView: 3 },
                          992: { slidesPerView: 4 },
                        }}
                      >
                        {DESTINATIONS[tab.id].map((item, index) => (
                          <SwiperSlide key={index}>
                            <div className="destination-card">
                              <Link
                                href={item.link}
                                className="destination-img"
                              >
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={550}
                                  height={220}
                                  className="img-fluid"
                                />
                              </Link>
                              <div className="destination-content">
                                <Link href={item.link} className="title-area">
                                  {svgIcon.location}
                                  {item.name}
                                </Link>
                                <div className="content">
                                  <p>
                                    {item.tours} tours | {item.departures}{" "}
                                    departure {item.guests.toLocaleString()}{" "}
                                    guest travelled.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    {/* Pagination */}
                    <div className="slider-pagi-wrap">
                      <div className="home1-destination-pagi paginations"></div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-10">
                    <p>No destinations available.</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
