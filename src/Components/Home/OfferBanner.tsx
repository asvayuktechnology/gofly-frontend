"use client";

import Link from "next/link";
import SiteBtn from "../Common/SiteBtn/SiteBtn";
import { svgIcon } from "../Common/Icons/SvgIcons";
import { OfferBannerProps } from "@/types";

export default function OfferBanner({
  backgroundImage,
  subtitle = "Make Meet Happiness.",
  title,
  authorName = "Mr. Gabriel Haringson",
  authorRole = "CEO, GoFly",
  buttonText = "Grab the Deal Now",
  buttonLink = "/travel-package",
}: OfferBannerProps) {
  return (
    <div
      className="home1-offer-banner-section mb-100 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="banner-content text-center text-white py-20">
          <span>{subtitle}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4">
            {title}
          </h2>

          <div className="author-area mb-6">
            <h5 className="text-lg font-semibold">{authorName}</h5>
            <span className="text-sm opacity-90">{authorRole}</span>
          </div>
          <SiteBtn
            link={buttonLink}
            svgIcon={svgIcon.arrow}
            iconPosition="end"
            text={buttonText}
            className="primary-btn1 two inline-flex items-center gap-2"
          />
        </div>
      </div>
    </div>
  );
}
