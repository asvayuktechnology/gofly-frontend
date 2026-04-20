"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

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
            <ul className="nav nav-pills flex flex-wrap gap-2" id="pills-tab" role="tablist">
              {TABS.map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`nav-link transition-all duration-200 ${activeTab === tab.id ? "active text-white bg-primary" : ""
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
                className={`tab-pane fade ${isActive ? "show active block" : "hidden"
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
                          el: ".home1-destination-pagi",
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
                                <Link
                                  href={item.link}
                                  className="title-area"
                                >
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M7.81276 0C4.31734 0 1.47305 2.84433 1.47305 6.34163C1.47305 9.07242 5.2847 13.5258 6.92356 15.3136C7.15052 15.5628 7.47606 15.7042 7.81276 15.7042C8.14946 15.7042 8.475 15.5628 8.70196 15.3136C10.3408 13.5258 14.1525 9.07238 14.1525 6.34163C14.1525 2.84433 11.3082 0 7.81276 0Z" />
                                    <path d="M7.81277 9.76634C9.6713 9.76634 11.1779 8.25971 11.1779 6.40118C11.1779 4.54265 9.6713 3.03601 7.81277 3.03601C5.95424 3.03601 4.4476 4.54265 4.4476 6.40118C4.4476 8.25971 5.95424 9.76634 7.81277 9.76634Z" />
                                  </svg>
                                  {item.name}
                                </Link>
                                <div className="content">
                                  <p>
                                    {item.tours} tours | {item.departures} departure{" "}
                                    {item.guests.toLocaleString()} guest travelled.
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