"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Tooltip from "../../Tooltip/Tooltip";
import { svgIcon } from "../../Icons/SvgIcons";

interface PackageCardProps {
  title: string;
  location: string;
  duration: string;
  price: number | string;
  image: string;
  badge?: string;
  link: string;
  experiences?: string;
  inclusions?: string;
  delay?: number;
  viewType?: "grid" | "list";
}

export default function PackageCard({
  title,
  location,
  duration,
  price,
  image,
  badge,
  link,
  experiences = "Adventure",
  inclusions = "Meals Included",
  delay = 200,
  viewType = "grid",
}: PackageCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatList = (data?: string[] | string) => {
    if (Array.isArray(data)) return data.join(", ");
    if (typeof data === "string") return data;
    return "";
  };

  // Grid View
  if (viewType === "grid") {
    return (
      <div
        className="wow animate fadeInDown"
        data-wow-delay={`${delay}ms`}
        data-wow-duration="1500ms"
      >
        <div className="package-card bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full flex flex-col">
          {/* Image */}
          <div className="package-img-wrap relative overflow-hidden h-[200px]">
            <Link href={link} className="package-img block h-full">
              <Image
                src={image}
                alt={title}
                width={400}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </Link>
            {badge && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {badge}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="package-content flex-grow p-4">
            <h5 className="text-lg font-bold text-gray-900 mb-3">
              <Link href={link} className="hover:text-blue-600 transition">
                {title}
              </Link>
            </h5>

            {/* Location & Duration */}
            <div className="location-and-time flex items-center gap-2 mb-4">
              <span className="flex items-center gap-1 text-gray-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                </svg>
                {location}
              </span>
              <span className="text-gray-400">↔</span>
              <span className="text-gray-700 font-medium">{duration}</span>
            </div>

            {/* Button & Price */}
            <div className="btn-and-price-area flex justify-between items-end mb-4">
              <Link
                href={link}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition"
              >
                Book Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <div className="price-area text-right">
                <p className="text-xs text-gray-600">Per Person</p>
                <span className="text-2xl font-bold text-gray-900">${price}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>

            {/* Bottom Area */}
            {/* Bottom Area */}
            <div className="bottom-area mt-3">
              <ul>
                <li>
                  {svgIcon.exp1st}
                  Experience
                  <div className="info">
                    {svgIcon.info}
                    <Tooltip
                      text1="Including Activities"
                      text2={formatList(experiences)}
                      text3=""
                    />
                  </div>
                </li>
                <li>
                  {svgIcon.inclusionIcon}
                  Inclusion
                  <div className="info">
                    {svgIcon.info}
                    <Tooltip
                      text1="This package covers"
                      text2={formatList(inclusions)}
                      text3=""
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

  // List View
  return (
    <div
      className="wow animate fadeInDown"
      data-wow-delay={`${delay}ms`}
      data-wow-duration="1500ms"
    >
      <div className="package-card bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
        <div className="flex flex-col sm:flex-row gap-6 p-6">
          {/* Image */}
          <div className="package-img-wrap relative overflow-hidden rounded-lg flex-shrink-0 w-full sm:w-[300px] h-[200px] sm:h-[250px]">
            <Link href={link} className="package-img block h-full">
              <Image
                src={image}
                alt={title}
                width={300}
                height={250}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </Link>
            {badge && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {badge}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="package-content flex-grow flex flex-col">
            <h5 className="text-2xl font-bold text-gray-900 mb-4">
              <Link href={link} className="hover:text-blue-600 transition">
                {title}
              </Link>
            </h5>

            {/* Location & Duration */}
            <div className="location-and-time flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1 text-gray-700">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                </svg>
                {location}
              </span>
              <span className="text-gray-400">↔</span>
              <span className="text-gray-700 font-medium">{duration}</span>
            </div>

            {/* Expandable Details */}
            <div className="mb-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 transition"
              >
                {isExpanded ? "Hide Details" : "Show Details"}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {isExpanded && (
                <div className="mt-3 space-y-2 pl-4 border-l-2 border-blue-200">
                  <p className="text-gray-700 text-sm">✓ Crystal-Clear Waters</p>
                  <p className="text-gray-700 text-sm">✓ Luxury Overwater Villas</p>
                  <p className="text-gray-700 text-sm">✓ Dolphin Watching</p>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Button & Price */}
            <div className="btn-and-price-area flex justify-between items-center">
              <Link
                href={link}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
              >
                Book Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <div className="price-area text-right">
                <p className="text-sm text-gray-600">Per Person</p>
                <span className="text-3xl font-bold text-gray-900">${price}</span>
              </div>
            </div>

            {/* Bottom Area */}
            <div className="bottom-area mt-4 flex items-center justify-between text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
                <span className="font-medium">{experiences}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                <span className="font-medium">{inclusions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}