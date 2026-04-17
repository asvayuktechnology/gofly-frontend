"use client";

import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string; // Optional for the current page
}

interface BreadcrumbProps {
  title: string;
  items: BreadcrumbItem[];
  backgroundImage?: string;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  items,
  backgroundImage = "/assets/img/breadcrumb-bg3.jpg",
  className = "",
}) => {
  return (
    <div
      className={`breadcrumb-section relative bg-cover bg-center bg-no-repeat flex items-center justify-center ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(
          0,
          0,
          0,
          0.3
        )), url(${backgroundImage})`,
      }}
    >
      {/* Bootstrap container preserved */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="banner-content text-center">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>

          {/* Breadcrumb Navigation */}
          <ul className="breadcrumb-list flex items-center justify-center flex-wrap gap-2 text-sm md:text-base font-medium">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">
                    {item.label}
                  </span>
                )}

                {/* Separator */}
                {index < items.length - 1 && (
                  <span className="mx-2 text-white/70">/</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;