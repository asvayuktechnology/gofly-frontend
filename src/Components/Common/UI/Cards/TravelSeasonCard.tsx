"use client";

import Image from "next/image";
import React from "react";
import { svgIcon } from "../../Icons/SvgIcons";
import { BASE_URL } from "@/lib/const";

interface TravelSeason {
  season?: string;
  months?: string;
  tempRange?: string;
  highlights?: string[];
  idealFor?: string;
  image?: string;
}

type Props = {
  season?: TravelSeason;
};

const TravelSeasonCard = ({ season }: Props) => {
  return (
    <div
      className="col-lg-6 wow animate fadeInDown"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <div className="travel-season-card">
        <div className="travel-season-top-area">
          <div className="travel-season-img">
            <Image
              src={
                season?.image
                  ? `${BASE_URL}/${season.image}`
                  : "/assets/img/default.jpg"
              }
              alt={season?.season || "season-image"}
              width={196}
              height={216}
            />
          </div>

          <div className="travel-season-content">
            <h5 className="capitalize">
              {season?.season || "N/A"} ({season?.months || "N/A"}) 
            </h5>

            <span>
             
              Weather:{season?.tempRange &&
                `  ${season.tempRange}`}
            </span>

            {season?.highlights &&
              season.highlights.length > 0 && (
                <div className="highlights-area">
                  <h6>Highlights:</h6>

                  <ul>
                    {season.highlights.map(
                      (highlight, idx) => (
                        <li key={idx}>
                          {svgIcon.checkIconFilled}
                          {highlight}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
          </div>
        </div>

        {season?.idealFor && (
          <span className="note">
            Perfect For: {season.idealFor}
          </span>
        )}
      </div>
    </div>
  );
};

export default TravelSeasonCard;