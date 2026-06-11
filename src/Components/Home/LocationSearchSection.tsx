"use client";

import { useState } from "react";
import Link from "next/link";
import { svgIcon } from "../Common/Icons/SvgIcons";

import { useDestinations } from "@/services/destinationService";
import { useRouter } from "next/navigation";
export default function LocationSearchSection() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: destinationsData } = useDestinations();
  const destinations = destinationsData?.data || [];
  const [selectedDestinationId, setSelectedDestinationId] = useState("");
  const filteredDestinations = destinations.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.country.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const handleSearch = () => {
    if (!selectedDestinationId) return;

    router.push(`/travel-package?destinationId=${selectedDestinationId}`);
  };

  const handleSelect = (destination: any) => {
    setSearchTerm(`${destination.name}, ${destination.country}`);
    setSelectedDestinationId(destination._id);
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
                    {filteredDestinations.length > 0 ? (
                      filteredDestinations.map((destination) => (
                        <li
                          key={destination._id}
                          style={{ cursor: "pointer" }}
                          onClick={() => handleSelect(destination)}
                        >
                          {destination.name}, {destination.country}
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
                <button
                  type="button"
                  className="primary-btn1 cursor-pointer"
                  onClick={handleSearch}
                >
                  Search Now
                </button>
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
