"use client";

import React, { useState, useEffect } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";

interface Destination {
  _id: string;
  name: string;
  count: number;
}

interface DestinationRegion {
  region: string;
  destinations: Destination[];
}

interface Props {
  destinations: DestinationRegion[];
  selectedDestinationIds: string[];
  setSelectedDestinationIds: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

const categoryOptions = [
  {
    label: "Family Tour",
    value: "family_tour",
  },
  {
    label: "Honeymoon Tour",
    value: "honeymoon_tour",
  },
  {
    label: "Adventure Tour",
    value: "adventure_tour",
  },
  {
    label: "Group Tour",
    value: "group_tour",
  },
  {
    label: "Solo Tour",
    value: "solo_tour",
  },
];

const FilterSidebar: React.FC<Props> = ({
  destinations,
  selectedDestinationIds,
  setSelectedDestinationIds,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [openRegions, setOpenRegions] = useState<Record<string, boolean>>({});
  const [expandedActivities, setExpandedActivities] = useState(false);

  // Sync selected destinations with props on mount
  useEffect(() => {
    if (selectedDestinationIds.length > 0) {
      // Open regions that have selected destinations
      const regionsToOpen: Record<string, boolean> = {};
      destinations.forEach((region) => {
        const hasSelectedDestination = region.destinations.some((dest) =>
          selectedDestinationIds.includes(dest._id)
        );
        if (hasSelectedDestination) {
          regionsToOpen[region.region] = true;
        }
      });
      setOpenRegions(regionsToOpen);
    }
  }, []);

  // Toggle region dropdown
  const toggleRegion = (regionName: string) => {
    setOpenRegions((prev) => ({
      ...prev,
      [regionName]: !prev[regionName],
    }));
  };

  // Select all destinations in a region
  const handleRegionSelect = (
    regionDestinations: Destination[],
    regionName: string
  ) => {
    const ids = regionDestinations.map((item) => item._id);
    const isCurrentlySelected = ids.every((id) =>
      selectedDestinationIds.includes(id)
    );

    if (isCurrentlySelected) {
      // Deselect all
      setSelectedDestinationIds((prev) =>
        prev.filter((id) => !ids.includes(id))
      );
    } else {
      // Select all
      setSelectedDestinationIds((prev) => [
        ...new Set([...prev, ...ids]),
      ]);
    }
  };

  // Select single destination
  const handleDestinationSelect = (id: string) => {
    if (selectedDestinationIds.includes(id)) {
      setSelectedDestinationIds((prev) =>
        prev.filter((item) => item !== id)
      );
    } else {
      setSelectedDestinationIds((prev) => [...prev, id]);
    }
  };

  // Category select
  const handleCategorySelect = (value: string) => {
    if (selectedCategories.includes(value)) {
      setSelectedCategories((prev) =>
        prev.filter((item) => item !== value)
      );
    } else {
      setSelectedCategories((prev) => [...prev, value]);
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedDestinationIds([]);
    setSelectedCategories([]);
  };

  return (
    <div className="package-sidebar-area w-full">
      <div className="sidebar-wrapper bg-white rounded-2xl shadow-sm p-6">
        {/* Title */}
        <div className="title-area flex items-center justify-between mb-6">
          <h5 className="text-lg font-semibold text-gray-900">Filter</h5>
          <span
            onClick={clearAllFilters}
            className="text-sm text-primary cursor-pointer hover:underline transition"
          >
            Clear All
          </span>
        </div>

        {/* Destinations */}
        <div className="single-widgets">
          <div className="widget-title mb-4">
            <h5 className="text-md font-semibold text-gray-800">
              Destinations
            </h5>
          </div>

          <ul className="space-y-3">
            {destinations.map((region) => {
              const regionIds = region.destinations.map((item) => item._id);
              const isRegionSelected = regionIds.every((id) =>
                selectedDestinationIds.includes(id)
              );

              return (
                <li key={region.region}>
                  {/* Region Header */}
                  <div
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <div 
                      className="flex items-center gap-2 flex-1"
                      onClick={() => handleRegionSelect(region.destinations, region.region)}
                    >
                      <span
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                          isRegionSelected
                            ? "bg-blue-500 border-blue-500"
                            : "border-gray-300 group-hover:border-blue-500"
                        }`}
                      >
                        {isRegionSelected && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </span>
                      <strong className="capitalize text-[#525252] font-medium">
                        {region.region.replace(/_/g, " ")}
                      </strong>
                    </div>

                    <BsFillCaretRightFill
                      size={13}
                      fill="rgba(82,82,82,.6)"
                      onClick={() => toggleRegion(region.region)}
                      className={`transition-transform ${
                        openRegions[region.region] ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {/* Destinations List */}
                  {openRegions[region.region] && (
                    <ul className="ml-6 mt-3 space-y-2">
                      {region.destinations.map((destination) => (
                        <li
                          key={destination._id}
                          className="flex items-center justify-between cursor-pointer group"
                        >
                          <div 
                            className="flex items-center gap-2 flex-1"
                            onClick={() =>
                              handleDestinationSelect(destination._id)
                            }
                          >
                            <span
                              className={`w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center transition-colors flex-shrink-0 ${
                                selectedDestinationIds.includes(
                                  destination._id
                                )
                                  ? "bg-blue-500 border-blue-500"
                                  : "group-hover:border-blue-500"
                              }`}
                            >
                              {selectedDestinationIds.includes(
                                destination._id
                              ) && (
                                <svg
                                  className="w-3 h-3 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </span>
                            <span className="text-[16px] font-medium text-[#525252]">
                              {destination.name}
                            </span>
                          </div>

                          <span className="text-[16px] font-semibold text-[#525252]">
                            {String(destination.count).padStart(2, "0")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Categories */}
        <div className="single-widgets mt-8">
          <div className="widget-title mb-4">
            <h5 className="text-md font-semibold text-gray-800">
              Select Category
            </h5>
          </div>

          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategorySelect(category.value)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  selectedCategories.includes(category.value)
                    ? "bg-blue-500 text-white border border-blue-500"
                    : "bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
