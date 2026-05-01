"use client";

import Link from "next/link";
import Image from "next/image";
import { visaPackages } from "@/lib/data";
import type { VisaPackage } from "@/types";

export default function VisaPackageGrid() {
  return (
    <section
      className="visa-package-grid-section mb-100"
      aria-labelledby="visa-packages-heading"
    >
      <div className="container mx-auto px-3">

        {/* Hidden heading for SEO + accessibility */}
        <h2 id="visa-packages-heading" className="sr-only">
          Visa Packages
        </h2>

        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
          {visaPackages.map((item: VisaPackage) => (
            <article
              key={item.id}
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 wow animate fadeInDown"
            >
              <div className="visa-package-card group h-full flex flex-col">

                {/* IMAGE */}
                <div className="visa-package-img overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={305}
                    height={305}
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 1024px) 50vw,
                           (max-width: 1280px) 33vw,
                           25vw"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="visa-package-content mt-4 flex flex-col gap-2">
                  <h5 className="text-lg font-semibold leading-snug">
                    <Link
                      href={item.href}
                      className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {item.title}
                    </Link>
                  </h5>

                  <span className="text-sm text-gray-600">
                    Processing Time -{" "}
                    <strong className="text-black">
                      {item.processingTime}
                    </strong>
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}