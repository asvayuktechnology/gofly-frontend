"use client";

import { whyChooseData } from "@/lib/data";
import type { WhyChooseItem } from "@/types";

export default function WhyChooseVisa() {
  return (
    <section
      className="why-choose-visa-section mb-100"
      aria-labelledby="why-choose-heading"
    >
      <div className="container mx-auto px-3">

        {/* SECTION TITLE */}
        <div className="row justify-center mb-12 wow animate fadeInDown">
          <div className="col-lg-8 text-center mx-auto">
            <div className="section-title text-center">
              <span>100% Trusted Agency!</span>
              <h2 id="why-choose-heading">
                Why Choose Our Visa Agency?
              </h2>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-6">
          {whyChooseData.map((item: WhyChooseItem) => (
            <div
              key={item.id}
              className="col-span-12 sm:col-span-6 lg:col-span-3 wow animate fadeInDown h-full"
              data-wow-delay={item.delay}
              data-wow-duration="1500ms"
            >
              <div className={`why-choose-card h-full ${item.variant ?? ""}`}>

                {/* ICON */}
                <div className="mb-4">
                  {/* Keep your SVG exactly as is */}
                  {item.icon}
                </div>

                {/* CONTENT */}
                <h4 className="text-lg font-semibold">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm text-gray-600">
                  {item.description}{" "}
                  {item.highlight && <span>{item.highlight}</span>}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}