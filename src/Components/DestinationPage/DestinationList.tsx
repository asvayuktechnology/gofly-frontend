"use client";

import { svgIcon } from "@/Components/Common/Icons/SvgIcons";
import { BASE_URL } from "@/lib/const";
import { useDestinations } from "@/services/destinationService";
import { DestinationItem } from "@/types/destinationType";
import { TabKey, TABS } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import  { useEffect, useState } from "react";



const DestinationList = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("europe");

  const { data, isLoading } = useDestinations({
    region: activeTab,
    isFeatured: true,
    limit: 12,
  });

  const destinations: DestinationItem[] = data?.data || [];
const uniqueDestinations = destinations.filter(
  (item, index, self) =>
    index ===
    self.findIndex(
      (d) =>
        d.country.trim().toLowerCase() ===
        item.country.trim().toLowerCase()
    )
);
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  return (
    <div className="destination-page pt-100">
      <div className="container mx-auto">
        <ul
          className="nav nav-pills flex flex-wrap gap-2 mb-60"
          id="pills-tab"
          role="tablist"
        >
          {TABS.map((tab) => (
            <li className="nav-item" role="presentation" key={tab.id}>
              <button
                className={`nav-link transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "active text-white bg-primary"
                    : ""
                }`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {isLoading ? (
          <div className="text-center text-black py-10">
            <p>Loading destinations...</p>
          </div>
        ) : destinations.length > 0 ? (
          <>
            <div className="grid grid-cols-4 gap-6 home1-destination-slider mb-40">
            {uniqueDestinations.map((item) => (
                <div key={item._id} className="destination-card">
                  <Link
                    href={`/destination/${item._id}`}
                    className="destination-img block relative overflow-hidden rounded-[20px]"
                  >
                    <Image
                      src={`${BASE_URL}/${item.images?.[0]}`}
                      alt={item.country}
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
                      {item.country}
                    </Link>

                    <div className="content">
                      <p>
                        {item.totalTours} tours | {item.totalDepartures}{" "}
                        departures{" "}
                        {item.guestsTravelled.toLocaleString()} guests travelled.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
};

export default DestinationList;