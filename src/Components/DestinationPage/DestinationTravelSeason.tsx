"use client";

import Image from "next/image";
import React from "react";
import { svgIcon } from "../Common/Icons/SvgIcons";
import { travelSeasons } from "@/lib/data";
import TravelSeasonCard from "../Common/UI/Cards/TravelSeasonCard";


interface TravelSeason {
  season: string;
  months: string;
  tempRange: string;
  highlights: string[];
  idealFor: string;
  image: string;
}

interface DestinationTravelSeasonProps {
  seasons?: TravelSeason[];
}


const DestinationTravelSeason = ({
  seasons = [],
}: DestinationTravelSeasonProps) => {
 
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
                      {seasons.map((season, index) => (
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