"use client";

import { useEffect } from "react";
import Link from "next/link";
import { svgIcon } from "../Common/Icons/SvgIcons";

export default function ServiceSection() {
  useEffect(() => {
    // Initialize WOW.js if available
    if (typeof window !== "undefined" && (window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  return (
    <div className="home1-service-section mb-100">
      <div className="container mx-auto">
        <div className="service-wrapper">
          {/* Section Title */}
          <div
            className="row justify-content-center wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-9">
              <div className="section-title">
                <h2 className="pb-4">We’re Providing Best Service Ever!</h2>
                {svgIcon.dividerbig}
              </div>
            </div>
          </div>

          {/* Services List */}
          <ul
            className="service-list wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            {/* Service 1 */}
            <li className="single-service">
              <div className="icon">{svgIcon.guidenceIcon}</div>
              <div className="content">
                <h4>Local Guidance</h4>
                <p>Travel agencies have experienced professionals guidance.</p>
              </div>
            </li>

            {/* Service 2 */}
            <li className="single-service">
              <div className="icon">{svgIcon.dealicon}</div>
              <div className="content">
                <h4>Deals & Discounts</h4>
                <p>
                  Agencies have special discounts on flights, hotels, &amp;
                  packages.
                </p>
              </div>
            </li>

            {/* Service 3 */}
            <li className="single-service">
              <div className="icon">{svgIcon.svaemoneyIcon}</div>
              <div className="content">
                <h4>Saves Money</h4>
                <p>
                  Avoids hidden fees &amp; tourist traps, Multi-destination
                  &amp; budget-friendly options.
                </p>
              </div>
            </li>
          </ul>

          {/* Bottom Offer Area */}
          <div
            className="bottom-area flex justify-center wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="batch">
              <span>Flat 30% Discounts All Packages</span>
              <Link href="/travel-package">
                Check Offer
                {svgIcon.offerArrow}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
