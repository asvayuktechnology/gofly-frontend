"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PackageSidebarProps {
  packageData: any;
}

const PackageSidebar = ({ packageData }: PackageSidebarProps) => {
  const [showBooking, setShowBooking] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
const discount = packageData?.discounts?.[0];
  return (
    <div className="package-details-sidebar">
      
      {/* Pricing */}
      <div className="pricing-and-booking-area mb-40">
        <div className="batch">
 {discount?.discount > 0 && (
  <div className="batch">
    <span>
      {discount?.discount}
      {discount?.type === "percentage" ? "% Off" : "$ Off"}
    </span>
  </div>
)}
    </div>

        <div className="price-area">
          <h6>Starting From</h6>
           <span>
            <del>${packageData?.originalPrice}</del> ${packageData?.pricePerPerson}
            <sub>/per person</sub>
          </span>
        </div>

        <ul>
          <li>✔ Money Back Guarantee.</li>
          <li>✔ Your Safety is Our Top Priority.</li>
        </ul>

        {/* Buttons */}
        <button
          className="primary-btn1 mb-20"
          onClick={() => setShowBooking(true)}
        >
          <span>Check Availability</span>
          <span>Check Availability</span>
        </button>

        <button
          className="primary-btn1 transparent"
          onClick={() => setShowEnquiry(true)}
        >
          <span>Submit an Enquiry</span>
          <span>Submit an Enquiry</span>
        </button>

        <span>
          ℹ Bonus Activity Included – Limited Time!
        </span>
      </div>

      {/* Customize Package */}
      <div className="customize-package-banner-wrap">
        <h2>
          <span>Customize</span> Travel Package!
        </h2>

        <ul>
          <li>✔ Make Your Favourite Package</li>
          <li>✔ Enjoy Your Trip</li>
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

        <Link
          href="/contact"
          className="primary-btn1 two black-bg"
        >
          <span>Customize Package</span>
          <span>Customize Package</span>
        </Link>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <h4 className="mb-4">Check Availability</h4>

            <input
              type="date"
              className="w-full border p-2 mb-3"
            />
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