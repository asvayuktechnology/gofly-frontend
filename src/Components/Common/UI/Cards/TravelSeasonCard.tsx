"use client";

import Image from "next/image";
import React from "react";

import { TravelSeasonCardData } from "@/types";
import { svgIcon } from "../../Icons/SvgIcons";

type Props = {
    season: TravelSeasonCardData;
};

const TravelSeasonCard = ({ season }: Props) => {
    return (
        <div
            className="col-lg-6 wow animate fadeInDown"
            data-wow-delay={season.delay}
            data-wow-duration="1500ms"
        >
            <div className="travel-season-card">
                <div className="travel-season-top-area">
                    <div className="travel-season-img">
                        <Image
                            src={season.image}
                            alt={season.title}
                            width={196}
                            height={216}
                        />
                    </div>

                    <div className="travel-season-content">
                        <h5>{season.title}</h5>

                        <span>{season.weather}</span>

                        <div className="highlights-area">
                            <h6>Highlights:</h6>

                            <ul>
                                {season.highlights.map((highlight, idx) => (
                                    <li key={idx}>
                                        {svgIcon.checkIconFilled}
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <span className="note">{season.note}</span>
            </div>
        </div>
    );
};

export default TravelSeasonCard;