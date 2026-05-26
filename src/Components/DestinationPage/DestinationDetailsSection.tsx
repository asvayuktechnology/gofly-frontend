"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import LocationSlider from "../Common/UI/Sliders/LocationSlider";
import { locationsdetail } from "@/lib/data";
import ImgVideoSlider from "../Common/ImgVideoSlider";
import DestinationWhyChoose from "./DestinationWhyChoose";
import DestinationTravelSeason from "./DestinationTravelSeason";
import FaqSection from "../Common/FaqSection";
import VideoSection from "../Common/VideoSection";
import { useState } from "react";
import ScrollingTripCardSection from "../Home/ScrollingTripCardSection";
import DestFaqSection from "./DestFaqSection";

interface DestinationInfoItem {
    label: string;
    value: string;
    tooltip?: string;
    icon?: React.ReactNode;
}

interface TouristPlace {
    title: string;
    image: string;
    href?: string;
    gallery?: string[];
}

interface DestinationDetailsSectionProps {
    title?: string;
    description?: string;
    destinationInfo?: DestinationInfoItem[];
    touristPlaces?: TouristPlace[];
}

const defaultDestinationInfo: DestinationInfoItem[] = [
    {
        label: "Capital",
        value: "Paris",
    },
    {
        label: "Currency",
        value: "Euro",
        icon: (
            <svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path d="M12.1104 11.0844C11.2834 11.9542 10.2246 12.4334 9.12899 12.4334C7.33326 12.4334 5.77841 11.1723 5.04665 9.34944H10.0346C10.4671 9.34944 10.8178 8.99876 10.8178 8.56624C10.8178 8.13371 10.4671 7.78304 10.0346 7.78304H4.64864C4.61714 7.52315 4.60124 7.2616 4.60102 6.99981C4.60102 6.69979 4.62215 6.40569 4.66155 6.11868H10.0346C10.4671 6.11868 10.8178 5.768 10.8178 5.33548C10.8178 4.90296 10.4671 4.55225 10.0346 4.55225H5.08831C5.83577 2.78275 7.36577 1.56625 9.12899 1.56625C10.2246 1.56625 11.2834 2.04543 12.1104 2.9152C12.4081 3.22851 12.9036 3.24138 13.2175 2.9434C13.5311 2.6453 13.5435 2.14956 13.2459 1.83609C12.1204 0.652067 10.6583 1.52588e-05 9.12918 1.52588e-05C6.51813 1.52588e-05 4.28619 1.89639 3.42007 4.55247H1.32129C0.888763 4.55247 0.538086 4.90315 0.538086 5.33568C0.538086 5.7682 0.888763 6.11888 1.32129 6.11888H3.08447C3.05274 6.40789 3.03459 6.70141 3.03459 7C3.03459 7.26501 3.04843 7.52585 3.07376 7.78323H1.32129C0.888763 7.78323 0.538086 8.13391 0.538086 8.56643C0.538086 8.99895 0.888763 9.34963 1.32129 9.34963H3.38899C4.23148 12.0571 6.48597 14 9.12899 14C10.6583 14 12.12 13.3478 13.2455 12.1639C13.5433 11.8504 13.5311 11.3547 13.2174 11.0566C12.904 10.7585 12.4081 10.771 12.1104 11.0844Z" />
                </g>
            </svg>
        ),
    },
    {
        label: "Language",
        value: "française",
        tooltip: "English is widely spoken in tourist areas.",
    },
];

const defaultTouristPlaces: TouristPlace[] = [
    {
        title: "Eiffel Tower",
        image: "/assets/img/innerpages/destination-dt-location-img1.jpg",
        href: "https://www.google.com/maps",
        gallery: [
            "/assets/img/innerpages/destination-dt-location-img1.jpg",
            "/assets/img/innerpages/destination-dt-location-img2.jpg",
            "/assets/img/innerpages/destination-dt-location-img3.jpg",
        ],
    },
    {
        title: "Loire Valley",
        image: "/assets/img/innerpages/destination-dt-location-img2.jpg",
        href: "https://www.google.com/maps",
    },
    {
        title: "Southern France",
        image: "/assets/img/innerpages/destination-dt-location-img3.jpg",
        href: "https://www.google.com/maps",
        gallery: [
            "/assets/img/innerpages/destination-dt-location-img3.jpg",
            "/assets/img/innerpages/destination-dt-location-img2.jpg",
            "/assets/img/innerpages/destination-dt-location-img5.jpg",
        ],
    },
    {
        title: "Louvre Museum",
        image: "/assets/img/innerpages/destination-dt-location-img4.jpg",
        href: "https://www.google.com/maps",
    },
    {
        title: "Notre-Dame Cathedral",
        image: "/assets/img/innerpages/destination-dt-location-img5.jpg",
        href: "https://www.google.com/maps",
    },
    {
        title: "Palace of Versailles",
        image: "/assets/img/innerpages/destination-dt-location-img6.jpg",
        href: "https://www.google.com/maps",
        gallery: [
            "/assets/img/innerpages/destination-dt-location-img6.jpg",
            "/assets/img/innerpages/destination-dt-location-img1.jpg",
            "/assets/img/innerpages/destination-dt-location-img4.jpg",
        ],
    },
    {
        title: "Carcassonne",
        image: "/assets/img/innerpages/destination-dt-location-img7.jpg",
        href: "https://www.google.com/maps",
    },
];

export default function DestinationDetailsSection({
    title = "Paris, France",
    description = `Paris, known as the "City of Light" (La Ville Lumière), is the capital of France and one of the most romantic and iconic cities in the world. Known for its timeless architecture, world-class museums, charming streets, rich history, and exquisite cuisine, Paris is a must-visit destination for travelers from around the globe. Globally recognized as a fashion capital, Paris is the birthplace of haute couture and luxury brands like Chanel, Louis Vuitton, and Dior.`,
    destinationInfo = defaultDestinationInfo,
    touristPlaces = defaultTouristPlaces,
}: DestinationDetailsSectionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <div className="destination-details-section mb-100">
                <div className="container mx-auto px-4">
                    <div
                        className="row justify-content-center mb-60 wow animate fadeInDown"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                    >
                        <div className="col-lg-10">
                            <div className="destination-details-content">
                                <h2>{title}</h2>

                                <ul className="destination-info flex flex-wrap items-center gap-5 mb-6">
                                    {destinationInfo.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <div className="content">
                                                <span>{item.label} - </span>
                                                {item.value}
                                            </div>

                                            {item.icon}

                                            {item.tooltip && (
                                                <div className="info relative group">
                                                    <svg
                                                        width={12}
                                                        height={12}
                                                        viewBox="0 0 12 12"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g>
                                                            <path d="M6 0.375C4.88748 0.375 3.79995 0.704901 2.87492 1.32298C1.94989 1.94107 1.22892 2.81957 0.80318 3.84741C0.377437 4.87524 0.266043 6.00624 0.483085 7.09738C0.700127 8.18853 1.23586 9.19081 2.02253 9.97748C2.8092 10.7641 3.81148 11.2999 4.90262 11.5169C5.99376 11.734 7.12476 11.6226 8.1526 11.1968C9.18043 10.7711 10.0589 10.0501 10.677 9.12508C11.2951 8.20006 11.625 7.11252 11.625 6C11.6245 4.50831 11.0317 3.07786 9.97693 2.02307C8.92215 0.968289 7.49169 0.375497 6 0.375ZM6 9.375C5.85167 9.375 5.70666 9.33101 5.58333 9.2486C5.45999 9.16619 5.36386 9.04906 5.30709 8.91201C5.25033 8.77497 5.23548 8.62417 5.26441 8.47868C5.29335 8.3332 5.36478 8.19956 5.46967 8.09467C5.57456 7.98978 5.7082 7.91835 5.85369 7.88941C5.99917 7.86047 6.14997 7.87533 6.28702 7.93209C6.42406 7.98886 6.54119 8.08499 6.62361 8.20832C6.70602 8.33166 6.75 8.47666 6.75 8.625C6.74941 8.82373 6.6702 9.01415 6.52968 9.15468C6.38915 9.2952 6.19873 9.37441 6 9.375ZM6.85875 3.55875L6.6075 6.56625C6.5944 6.71834 6.52472 6.85999 6.41224 6.9632C6.29976 7.0664 6.15266 7.12367 6 7.12367C5.84735 7.12367 5.70024 7.0664 5.58776 6.9632C5.47528 6.85999 5.40561 6.71834 5.3925 6.56625L5.14125 3.55875C5.13042 3.44226 5.1434 3.32478 5.1794 3.21346C5.2154 3.10214 5.27367 2.99931 5.35067 2.91123C5.42767 2.82314 5.52178 2.75165 5.62729 2.70108C5.73279 2.65052 5.84748 2.62195 5.96437 2.61711C6.08127 2.61227 6.19793 2.63126 6.30725 2.67294C6.41657 2.71461 6.51627 2.77808 6.60029 2.8595C6.6843 2.94092 6.75087 3.03858 6.79595 3.14655C6.84103 3.25451 6.86367 3.37051 6.8625 3.4875C6.86313 3.51131 6.86187 3.53514 6.85875 3.55875Z" />
                                                        </g>
                                                    </svg>

                                                    <div className="tooltip-text absolute left-1/2 top-full z-20 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs text-white shadow-lg group-hover:block">
                                                        {item.tooltip}
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>

                                <p>{description}</p>

                                <Link
                                    href="#"
                                    className="primary-btn1 two transparent inline-flex mt-8"
                                    id="scroll-btn"
                                >
                                    <span>
                                        Best Time to Visit
                                        <svg
                                            width={10}
                                            height={10}
                                            viewBox="0 0 10 10"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative location-slider-wrap mb-60">
                        <h4>Popular Tourist Place</h4>

                        <LocationSlider slidesPerView={6}
                            items={locationsdetail}
                        />
                    </div>
                </div>

            </div>
            <DestinationWhyChoose />
            <ImgVideoSlider title="Recent Customer Experience" />
            <div className="container mx-auto">
                <DestinationTravelSeason />
                <div className="destination-dt-faq-video-area">
                    <VideoSection setIsOpen={setIsOpen} />
                </div>
            </div>
            <div className="destination-dt-faq-section mb-100">

                <div className="grid grid-cols-12">
                    <div className="col-span-8 col-start-3">
                        <DestFaqSection />
                    </div>
                </div>
            </div>

          <ScrollingTripCardSection
                packages={[]}
                title="3 Tours Available in Paris"
                subtitle="A curated list of the most popular travel packages based on different destinations."
                />
        </>

    );
}