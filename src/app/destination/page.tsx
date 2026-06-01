'use client'
import { svgIcon } from '@/Components/Common/Icons/SvgIcons';
import Breadcrumb from '@/Components/Common/UI/Breadcrumbs/Breadcrumb'
import { BASE_URL } from '@/lib/const';
import { useDestinations } from '@/services/destinationService';
import { DestinationItem } from '@/types/destinationType';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'



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



const page = () => {

    const [activeTab, setActiveTab] =
        useState<TabKey>("europe");
    const { data, isLoading } = useDestinations({
        region: activeTab,
        isFeatured: true,
        limit: 12,
    });

    const destinations: DestinationItem[] =
        data?.data || [];
    console.log(destinations, "destinations");
    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            (window as any).WOW
        ) {
            new (window as any).WOW().init();
        }
    }, []);
    return (
        <>

            <Breadcrumb
                title="Destination"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Destination" },
                ]}
            />

            <div className="destination-page pt-100 mb-100">
                <div className="container mx-auto">
                    <ul
                        className="nav nav-pills flex flex-wrap gap-2 mb-60"
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

                    {/* LOADING */}
                    {isLoading ? (
                        <div className="text-center text-black py-10">
                            <p>Loading destinations...</p>
                        </div>
                    ) : destinations.length > 0 ? (
                        <>
                            <div className="grid grid-cols-4 gap-6 home1-destination-slider mb-40">
                                {destinations.map((item) => (
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
        </>
    )
}

export default page