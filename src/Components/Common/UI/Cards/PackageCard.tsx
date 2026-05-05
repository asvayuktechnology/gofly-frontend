"use client";

import Image from "next/image";
import Link from "next/link";
import SiteBtn from "../../SiteBtn/SiteBtn";
import { svgIcon } from "../../Icons/SvgIcons";
import Tooltip from "../../Tooltip/Tooltip";
import { PackageCardProps } from "@/types";

export default function PackageCard({
  title,
  location,
  duration,
  price,
  image,
  badge,
  link,
  experiences,
  inclusions,
  delay = 200,
}: PackageCardProps) {
  return (
    <div
      className="wow animate fadeInDown"
      data-wow-delay={`${delay}ms`}
      data-wow-duration="1500ms"
    >
      <div className="package-card">
        {/* Image */}
        <div className="package-img-wrap">
          <Link href={link} className="package-img">
            <Image
              src={image}
              alt={title}
              width={550}
              height={220}
              className="w-full h-auto"
            />
          </Link>
          {badge && (
            <div className="batch">
              <span>{badge}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="package-content">
          <h5>
            <Link href={link}>{title}</Link>
          </h5>

          {/* Location & Duration */}
          <div className="location-and-time">
            <div className="location">
              {/* Location Icon */}
              {svgIcon.location}
              <Link href="/travel-package">{location}</Link>
            </div>

            {/* Arrow */}
            {svgIcon.doubleArrow}
            <span>{duration}</span>
          </div>

          {/* Button & Price */}
          <div className="btn-and-price-area pb-2">
            <SiteBtn
              link={link}
              svgIcon={svgIcon.arrow}
              iconPosition="end"
              text="Book Now"
              className="primary-btn1"
            />
            <div className="price-area">
              <h6>Per Person</h6>
              <span>${price}</span>
            </div>
          </div>

          {/* Divider */}
          {svgIcon.divider}

          {/* Bottom Area */}
          <div className="bottom-area mt-3">
            <ul>
              <li>
                {svgIcon.exp1st}
                Experience
                <div className="info">
                  {svgIcon.info}
                  <Tooltip
                    text1=" This package covers"
                    text2=" Accommodation, Daily Meals, Entry Fees &amp; Local
                      Transfers"
                    text3=" to ensure a worry-free trip."
                  />
                </div>
              </li>
              <li>
                {svgIcon.inclusionIcon}
                Inclusion
                <div className="info">
                  {svgIcon.info}
                  <Tooltip
                    text1=" This package covers"
                    text2=" Accommodation, Daily Meals, Entry Fees &amp; Local
                      Transfers"
                    text3=" to ensure a worry-free trip."
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
