"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { svgIcon } from "../Icons/SvgIcons";
import SiteBtn from "../SiteBtn/SiteBtn";

const PackageSidebar = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="package-details-sidebar">
      {/* Pricing */}
      <div className="pricing-and-booking-area mb-40">
        <div className="batch">
          <span>10% Off</span>
        </div>

        <div className="price-area">
          <h6>Starting From</h6>
          <span>
            <del>$899</del> $800<sub>/per person</sub>
          </span>
        </div>

        <ul>
          <li>{svgIcon.detailcheckIcon} Money Back Guarantee.</li>
          <li>{svgIcon.detailcheckIcon} Your Safety is Our Top Priority.</li>
        </ul>

        {/* Buttons */}

        <SiteBtn
          link={"#"}
          svgIcon={svgIcon.arrow}
          iconPosition="end"
          text="Check Availability"
          className="primary-btn1 mb-20"
          onClick={() => setShowBooking(true)}
        />

        <SiteBtn
          link={"#"}
          svgIcon={svgIcon.arrow}
          iconPosition="end"
          text="Submit an Enquiry"
          className="primary-btn1 transparent"
          onClick={() => setShowEnquiry(true)}
        />
        <span>
          {svgIcon.warningIcon2} Bonus Activity Included – Limited Time!
        </span>
      </div>

      {/* Customize Package */}
      <div className="customize-package-banner-wrap">
        <h2>
          <span>Customize</span> Travel Package!
        </h2>

        <ul>
          <li>{svgIcon.detailcheckIcon} Make Your Favourite Package</li>
          <li>{svgIcon.detailcheckIcon} Enjoy Your Trip</li>
        </ul>

        {/* Counter Area */}
        <div className="counter-area">
          <ul className="counter-img-grp">
            <li>
              <Image
                src="/assets/img/counter-people-img1.webp"
                alt="user"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src="/assets/img/counter-people-img1.webp"
                alt="user"
                width={50}
                height={50}
              />
            </li>
            <li>
              <Image
                src="/assets/img/counter-people-img1.webp"
                alt="user"
                width={50}
                height={50}
              />
            </li>
          </ul>

          <h6>
            <strong>
              <span className="counter">60</span>+
            </strong>{" "}
            Guide Await to Help You
          </h6>
        </div>

        <SiteBtn
          link="/contact"
          svgIcon={svgIcon.arrow}
          iconPosition="end"
          text="Customize Package"
          className="primary-btn1 two black-bg"
        />
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <h4 className="mb-4">Check Availability</h4>

            <input type="date" className="w-full border p-2 mb-3" />
            <input
              type="number"
              placeholder="Guests"
              className="w-full border p-2 mb-3"
            />

            <div className="flex justify-end gap-2">
              <button
                className="primary-btn1"
                onClick={() => setShowBooking(false)}
              >
                Close
              </button>
              <button className="primary-btn1 two">Submit</button>
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <h4 className="mb-4">Submit Enquiry</h4>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 mb-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 mb-3"
            />
            <textarea
              placeholder="Message"
              className="w-full border p-2 mb-3"
            />

            <div className="flex justify-end gap-2">
              <button
                className="primary-btn1"
                onClick={() => setShowEnquiry(false)}
              >
                Close
              </button>
              <button className="primary-btn1 two">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageSidebar;
