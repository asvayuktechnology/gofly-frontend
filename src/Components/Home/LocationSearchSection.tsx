"use client";

import { useState } from "react";
import Link from "next/link";
import { svgIcon } from "../Common/Icons/SvgIcons";
import SiteBtn from "../Common/SiteBtn/SiteBtn";
import { locations } from "@/lib/data";

export default function LocationSearchSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSelect = (location: string) => {
    setSearchTerm(location);
    setShowDropdown(false);
  };

  return (
    <div className="home1-location-search-section mb-100">
      <div className="container mx-auto">
        <div className="location-search-wrapper">
          <div className="location-search-content">
            <h2>Customize Your Travel Package!</h2>

            {/* Search Form */}
            <form className="location-search-area">
              <div className="search-area">
                <div className="dropdown" id="search_vendor">
                  {/* Location Icon */}
                  {svgIcon.searchlocationIcon}

                  {/* Input Field */}
                  <input
                    type="text"
                    className="dropdown-search"
                    placeholder="Select Your Location"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                  />

                  {/* Dropdown List */}
                  <ul
                    className="dropdown-list"
                    style={{ display: showDropdown ? "block" : "none" }}
                  >
                    {filteredLocations.length > 0 ? (
                      filteredLocations.map((location, index) => (
                        <li
                          key={index}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleSelect(location)}
                        >
                          {location}
                        </li>
                      ))
                    ) : (
                      <li style={{ padding: "8px 12px" }}>
                        No locations found
                      </li>
                    )}
                  </ul>
                </div>

                {/* Search Button */}
                <SiteBtn
                  link="/travel-package"
                  text="Search Now"
                  className="primary-btn1"
                />
              </div>
            </form>

            {/* Features List */}
            <ul>
              <li>
                {svgIcon.checkIcon}
                Make Your Favourite Package
              </li>
              <li>
                {svgIcon.checkIcon}
                Easily Customize Tours
              </li>
              <li>
                {svgIcon.checkIcon}
                Enjoy Your Trip
              </li>
            </ul>

            {/* Contact Area */}
            <div className="contact-area">
              <span>Meet Our Local Tour Guider!</span>
              <Link href="/contact">Contact Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
