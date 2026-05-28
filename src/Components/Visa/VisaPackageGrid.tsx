"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

import { VisaCategory } from "@/types/visaType";
import { BASE_URL } from "@/lib/const";
import GlobalLoader from "../Common/GlobalLoader";

interface Props {
  visaPackages: VisaCategory[];
  isLoading?: boolean;
}

const ITEMS_PER_LOAD = 4;

export default function VisaPackageGrid({
  visaPackages,
  isLoading,
}: Props) {
  const [visibleCount, setVisibleCount] = useState(8);

  const visiblePackages = useMemo(() => {
    return visaPackages.slice(0, visibleCount);
  }, [visaPackages, visibleCount]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  if (isLoading) {
    return <GlobalLoader text="Fetching visa details..." />;
  }

  return (
    <section
      className="visa-package-grid-section mb-100"
      aria-labelledby="visa-packages-heading"
    >
      <div className="container mx-auto px-3">
        <h2
          id="visa-packages-heading"
          className="sr-only"
        >
          Visa Packages
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
          {visiblePackages.map((item) => (
            <article
              key={item._id}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
            >
              <div className="visa-package-card group h-full flex flex-col">
                {/* IMAGE */}
                <div className="visa-package-img overflow-hidden rounded-md">
                  <Image
                    src={`${BASE_URL}/${item.coverImage}`}
                    alt={item.name}
                    width={305}
                    height={305}
                    className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="visa-package-content mt-4 flex flex-col gap-2">
                  <h5 className="text-lg font-semibold leading-snug">
                    <Link
                      href={
                        item?.visaTypes?.[0]?.visaType
                          ? `/visa/details/${item._id}?visaType=${item.visaTypes[0].visaType}`
                          : `/visa/details/${item._id}`
                      }
                      className="hover:text-primary transition-colors"
                    >
                      {item.country}
                    </Link>
                  </h5>

                  <span className="text-sm text-gray-600">
                    Processing Time -{" "}
                    <strong className="text-black">
                      {item.processingTime?.min} -{" "}
                      {item.processingTime?.max} Days
                    </strong>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY */}
        {visaPackages.length === 0 && (
          <div className="text-center py-10">
            No Visa Packages Found
          </div>
        )}

        {/* VIEW MORE BUTTON */}
        {visibleCount < visaPackages.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleViewMore}
              className="primary-btn1"
            >
              <span>View More</span>
              <span>View More</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}