"use client";

import Image from "next/image";
import React from "react";
import { svgIcon } from "../Common/Icons/SvgIcons";
import { travelSeasons } from "@/lib/data";
import TravelSeasonCard from "../Common/UI/Cards/TravelSeasonCard";




const DestinationTravelSeason = () => {
    return (
        <div
            className="destination-dt-travel-season-section mb-100"
            id="scroll-section"
        >
            <div className="container">
                <div
                    className="section-title mb-60 wow animate fadeInDown"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                >
                    <h2>Best Time to Visit</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {travelSeasons.map((season, index) => (
                        <TravelSeasonCard
                            key={index}
                            season={season}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DestinationTravelSeason;