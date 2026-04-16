"use client";

import React, { useState } from "react";

interface SubCategory {
  name: string;
  count: number;
}

interface Category {
  name: string;
  subCategories: SubCategory[];
}

const destinations: Category[] = [
  {
    name: "Europe",
    subCategories: [
      { name: "Paris, France", count: 8 },
      { name: "Rome, Italy", count: 12 },
      { name: "United Kingdom", count: 15 },
      { name: "Netherlands", count: 2 },
      { name: "Portugal", count: 10 },
      { name: "Germany", count: 12 },
    ],
  },
  {
    name: "Asia",
    subCategories: [
      { name: "Tokyo, Japan", count: 15 },
      { name: "Indonesia", count: 7 },
      { name: "Thailand", count: 18 },
      { name: "Malaysia", count: 8 },
      { name: "Hanoi, Vietnam", count: 10 },
    ],
  },
  {
    name: "Africa",
    subCategories: [
      { name: "Egypt", count: 5 },
      { name: "South Africa", count: 7 },
      { name: "Zimbabwe", count: 2 },
      { name: "Morocco", count: 12 },
    ],
  },
  {
    name: "North America",
    subCategories: [
      { name: "United States", count: 20 },
      { name: "Canada", count: 8 },
      { name: "Mexico", count: 13 },
      { name: "Costa Rica", count: 6 },
    ],
  },
  {
    name: "Oceania",
    subCategories: [
      { name: "Australia", count: 12 },
      { name: "New Zealand", count: 8 },
      { name: "Papua New Guinea", count: 14 },
    ],
  },
  {
    name: "Middle East",
    subCategories: [
      { name: "United Arab Emirates", count: 4 },
      { name: "Qatar", count: 6 },
      { name: "Saudi Arabia", count: 13 },
      { name: "Jordan", count: 3 },
    ],
  },
];

const activities = [
  { name: "Hiking & Trekking", count: 4 },
  { name: "Rock Climbing", count: 6 },
  { name: "Zip-lining", count: 2 },
  { name: "Bungee Jumping", count: 7 },
  { name: "Paragliding", count: 12 },
  { name: "Skydiving", count: 6 },
  { name: "Surfing", count: 8 },
];

const tourTypes = [
  "Group Tours",
  "Small Group",
  "Family",
  "Single Tours",
  "Private Tours",
];

const offers = [
  { name: "Special Offer", count: 4 },
  { name: "Last Minutes Deal", count: 6 },
];

const FilterSidebar: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    { Europe: true }
  );
  const [expandedActivities, setExpandedActivities] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Toggle category dropdown
  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Toggle checkbox
  const handleCheckboxChange = (name: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setCheckedItems({});
  };

  return (
    <div className="package-sidebar-area w-full">
      <div className="sidebar-wrapper bg-white p-6 rounded-2xl shadow-sm">
        {/* Title */}
        <div className="title-area flex items-center justify-between mb-6">
          <h5 className="text-lg font-semibold text-gray-900">Filter</h5>
          <span
            id="clear-filters"
            onClick={clearFilters}
            className="text-sm text-primary cursor-pointer hover:underline"
          >
            Clear All
          </span>
        </div>

        {/* Destinations */}
        <div className="single-widgets mb-8">
          <div className="widget-title mb-4">
            <h5 className="text-md font-semibold text-gray-800">
              Destinations
            </h5>
          </div>

          <div className="checkbox-container">
            <ul className="space-y-3">
              {destinations.map((category) => (
                <li
                  key={category.name}
                  className="sidebar-category-dropdown"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleCategory(category.name)}
                  >
                    <label className="containerss flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!!checkedItems[category.name]}
                        onChange={() =>
                          handleCheckboxChange(category.name)
                        }
                      />
                      <span className="checkmark"></span>
                      <strong>{category.name}</strong>
                    </label>
                    <i
                      className={`bi bi-caret-right-fill sidebar-category-icon transition-transform ${
                        openCategories[category.name]
                          ? "rotate-90"
                          : ""
                      }`}
                    ></i>
                  </div>

                  {/* Sub Categories */}
                  {openCategories[category.name] && (
                    <ul className="sub-category ml-6 mt-2 space-y-2">
                      {category.subCategories.map((sub) => (
                        <li key={sub.name}>
                          <label className="containerss flex items-center justify-between cursor-pointer">
                            <span className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={!!checkedItems[sub.name]}
                                onChange={() =>
                                  handleCheckboxChange(sub.name)
                                }
                              />
                              <span className="checkmark"></span>
                              <strong>
                                <span>{sub.name}</span>
                              </strong>
                            </span>
                            <span className="text-sm text-gray-500">
                              {String(sub.count).padStart(2, "0")}
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tour Type */}
        <div className="single-widgets mb-8">
          <div className="widget-title mb-4">
            <h5 className="text-md font-semibold text-gray-800">
              Tour Type
            </h5>
          </div>
          <ul className="tour-type space-y-2 text-gray-700">
            {tourTypes.map((type) => (
              <li
                key={type}
                className="cursor-pointer hover:text-primary transition"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>

        {/* Activities */}
        <div className="single-widgets mb-8">
          <div className="widget-title mb-4">
            <h5 className="text-md font-semibold text-gray-800">
              Activities
            </h5>
          </div>
          <div className="checkbox-container two">
            <ul
              className="experience space-y-2 overflow-hidden transition-all duration-300"
              style={{ height: expandedActivities ? "auto" : "160px" }}
            >
              {activities.map((activity) => (
                <li key={activity.name}>
                  <label className="containerss flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={!!checkedItems[activity.name]}
                        onChange={() =>
                          handleCheckboxChange(activity.name)
                        }
                      />
                      <span className="checkmark"></span>
                      <strong>
                        <span>{activity.name}</span>
                      </strong>
                    </span>
                    <span className="text-sm text-gray-500">
                      {String(activity.count).padStart(2, "0")}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
            <span
              onClick={() =>
                setExpandedActivities(!expandedActivities)
              }
              className="expand cursor-pointer block mt-3 text-primary hover:underline"
            >
              {expandedActivities ? "See Less -" : "See More +"}
            </span>
          </div>
        </div>

        {/* Discount & Offer */}
        <div className="single-widgets">
          <div className="widget-title mb-4">
            <h5 className="text-md font-semibold text-gray-800">
              Discount & Offer
            </h5>
          </div>
          <div className="checkbox-container two">
            <ul className="space-y-2">
              {offers.map((offer) => (
                <li key={offer.name}>
                  <label className="containerss flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={!!checkedItems[offer.name]}
                        onChange={() =>
                          handleCheckboxChange(offer.name)
                        }
                      />
                      <span className="checkmark"></span>
                      <strong>
                        <span>{offer.name}</span>
                      </strong>
                    </span>
                    <span className="text-sm text-gray-500">
                      {String(offer.count).padStart(2, "0")}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;