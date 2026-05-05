"use client";

import { Packages, PopularTravelPackageProps } from "@/types";
import PackageCard from "../Common/UI/Cards/PackageCard";
import { POPULAR_PACKAGES } from "@/lib/data";

export default function PopularTravelPackage({ packages = POPULAR_PACKAGES }: PopularTravelPackageProps) {


  return (
    <div className="home1-travel-package-section py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Popular Travel Package
          </h2>
          <p className="text-gray-600">
            A curated list of the most popular travel packages based on
            different destinations.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              {...pkg}
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}