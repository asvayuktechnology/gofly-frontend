"use client";

import React, { useState } from "react";
import type { HotelFilterOption } from "@/types/hotelType";

interface Props {
  categories?: HotelFilterOption[];
  amenities?: HotelFilterOption[];
  isLoadingFilters?: boolean;
  selectedPropertyTypes: string[];
  setSelectedPropertyTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAmenities: string[];
  setSelectedAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  minPrice?: number;
  maxPrice?: number;
  setMinPrice: (v: number | undefined) => void;
  setMaxPrice: (v: number | undefined) => void;
  // configurable range
  priceMinConfig?: number;
  priceMaxConfig?: number;
}

const PRICE_OPTIONS: { label: string; value: number | undefined }[] = [
  { label: "Min", value: undefined },
  { label: "₹500", value: 500 },
  { label: "₹1000", value: 1000 },
  { label: "₹1500", value: 1500 },
  { label: "₹2000", value: 2000 },
  { label: "₹3000", value: 3000 },
  { label: "₹5000", value: 5000 },
  { label: "₹10000+", value: 10000 },
];

const HotelFilterSidebar: React.FC<Props> = ({
  categories = [],
  amenities = [],
  isLoadingFilters = false,
  selectedPropertyTypes,
  setSelectedPropertyTypes,
  selectedAmenities,
  setSelectedAmenities,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  priceMinConfig = 0,
  priceMaxConfig = 10000,
}) => {
  const [visiblePropertyCount, setVisiblePropertyCount] = useState(6);
  const [visibleAmenityCount, setVisibleAmenityCount] = useState(6);

  // Slider internal state synced with props
  const sliderMin = minPrice ?? priceMinConfig;
  const sliderMax = maxPrice ?? priceMaxConfig;

  const togglePropertyType = (value: string) => {
    setSelectedPropertyTypes((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const toggleAmenity = (value: string) => {
    setSelectedAmenities((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const clearAll = () => {
    setSelectedPropertyTypes([]);
    setSelectedAmenities([]);
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setVisiblePropertyCount(6);
    setVisibleAmenityCount(6);
  };

  // --- Price handlers: immediate apply, synced ---
  const handleMinDropdown = (val: string) => {
    if (val === "undefined" || val === "") {
      setMinPrice(undefined);
      return;
    }
    const num = Number(val);
    if (isNaN(num)) {
      setMinPrice(undefined);
    } else {
      if (maxPrice !== undefined && num > maxPrice) {
        setMaxPrice(undefined);
      }
      setMinPrice(num);
    }
  };

  const handleMaxDropdown = (val: string) => {
    if (val === "undefined" || val === "") {
      setMaxPrice(undefined);
      return;
    }
    const num = Number(val);
    if (isNaN(num)) {
      setMaxPrice(undefined);
    } else {
      if (minPrice !== undefined && num < minPrice) {
        setMinPrice(undefined);
      }
      setMaxPrice(num);
    }
  };

  // Slider handlers - immediate apply
  const onMinSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    const next = maxPrice !== undefined && v > maxPrice ? maxPrice : v;
    setMinPrice(next <= priceMinConfig ? undefined : next);
  };
  const onMaxSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    const next = minPrice !== undefined && v < minPrice ? minPrice : v;
    setMaxPrice(next >= priceMaxConfig ? 10000 : next);
  };

  // Dropdown value helpers: map undefined to "" / "undefined" string for select
  const minSelectValue = minPrice === undefined ? "undefined" : String(minPrice);
  const maxSelectValue = maxPrice === undefined ? "undefined" : String(maxPrice);

  const sliderMinPercent = ((sliderMin - priceMinConfig) / (priceMaxConfig - priceMinConfig)) * 100;
  const sliderMaxPercent = ((sliderMax - priceMinConfig) / (priceMaxConfig - priceMinConfig)) * 100;

  return (
    <div className="package-sidebar-area w-full">
      <div className="sidebar-wrapper bg-white rounded-2xl shadow-sm p-6">
        <div className="title-area flex items-center justify-between mb-6">
          <h5 className="text-lg font-semibold text-gray-900">Filter</h5>
          <span onClick={clearAll} className="text-sm text-primary cursor-pointer hover:underline transition">
            Clear All
          </span>
        </div>

        {/* Property Type - from backend /hotels/filters categories */}
        <div className="single-widgets">
          <div className="widget-title mb-4">
            <h5 className="text-md font-semibold text-gray-800">Category</h5>
          </div>
          {isLoadingFilters ? (
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-5 bg-gray-100 animate-pulse rounded" />
              ))}
            </div>
          ) : categories.length === 0 ? (
            <p className="text-sm text-gray-400">No categories found</p>
          ) : (
            <>
              <ul className="space-y-2">
                {categories.slice(0, visiblePropertyCount).map((pt) => {
                  const selected = selectedPropertyTypes.includes(pt.value);
                  return (
                    <li key={pt.value} className="flex items-center justify-between cursor-pointer group" onClick={() => togglePropertyType(pt.value)}>
                      <div className="flex items-center gap-2 flex-1">
                        <span className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${selected ? "bg-blue-500 border-blue-500" : "border-gray-300 group-hover:border-blue-500"}`}>
                          {selected && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <span className="text-[14px] font-medium text-[#525252] capitalize">{pt.name}</span>
                      </div>
                      <span className="text-[14px] font-semibold text-[#525252]">{String(pt.count).padStart(2, "0")}</span>
                    </li>
                  );
                })}
              </ul>
              {categories.length > 6 && (
                <button
                  onClick={() => setVisiblePropertyCount((prev) => (prev >= categories.length ? 6 : prev + 6))}
                  className="mt-3 text-sm text-primary font-medium hover:underline"
                >
                  {visiblePropertyCount >= categories.length ? "Show Less" : `Show More (+${Math.min(6, categories.length - visiblePropertyCount)})`}
                </button>
              )}
            </>
          )}
        </div>

        {/* Price Range - dual thumb + dropdowns, immediate - same as before */}
        <div className="single-widgets mt-8">
          <div className="widget-title mb-4">
            <h5 className="text-md font-semibold text-gray-800">Price Range</h5>
          </div>

          {/* Dual thumb slider */}
          <div className="relative h-6 mt-2">
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-2 bg-gray-200 rounded-full" />
            <div
              className="absolute top-1/2 -translate-y-1/2 h-2 bg-blue-500 rounded-full"
              style={{ left: `${sliderMinPercent}%`, right: `${100 - sliderMaxPercent}%` }}
            />
            <input
              type="range"
              min={priceMinConfig}
              max={priceMaxConfig}
              step={100}
              value={sliderMin}
              onChange={onMinSliderChange}
              className="absolute w-full top-1/2 -translate-y-1/2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:shadow [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-500"
            />
            <input
              type="range"
              min={priceMinConfig}
              max={priceMaxConfig}
              step={100}
              value={sliderMax}
              onChange={onMaxSliderChange}
              className="absolute w-full top-1/2 -translate-y-1/2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:shadow [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-blue-500"
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹{sliderMin === priceMinConfig && minPrice === undefined ? 0 : sliderMin}</span>
            <span>₹{sliderMax >= priceMaxConfig ? "10000+" : sliderMax}</span>
          </div>

          {/* Min / Max Dropdowns */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div>
              <label className="text-xs font-medium text-gray-600">Min Price</label>
              <select
                value={minSelectValue}
                onChange={(e) => handleMinDropdown(e.target.value)}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white outline-none focus:border-blue-500"
              >
                {PRICE_OPTIONS.map((opt) => (
                  <option key={`min-${opt.label}`} value={opt.value === undefined ? "undefined" : String(opt.value)}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600">Max Price</label>
              <select
                value={maxSelectValue}
                onChange={(e) => handleMaxDropdown(e.target.value)}
                className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white outline-none focus:border-blue-500"
              >
                {PRICE_OPTIONS.map((opt) => (
                  <option key={`max-${opt.label}`} value={opt.value === undefined ? "undefined" : String(opt.value)}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Current range hint */}
          <p className="text-xs text-gray-400 mt-2">
            {minPrice === undefined && maxPrice === undefined
              ? "No price filter"
              : `₹${minPrice ?? priceMinConfig} - ${maxPrice === undefined ? "Any" : maxPrice >= 10000 ? "10000+" : "₹" + maxPrice}`}
          </p>
        </div>

        {/* Amenities - from backend /hotels/filters amenities */}
        <div className="single-widgets mt-8">
          <div className="widget-title mb-4">
            <h5 className="text-md font-semibold text-gray-800">Amenities</h5>
          </div>
          {isLoadingFilters ? (
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-5 bg-gray-100 animate-pulse rounded" />
              ))}
            </div>
          ) : amenities.length === 0 ? (
            <p className="text-sm text-gray-400">No amenities found</p>
          ) : (
            <>
              <ul className="space-y-2">
                {amenities.slice(0, visibleAmenityCount).map((am) => {
                  const selected = selectedAmenities.includes(am.value);
                  return (
                    <li key={am.value} className="flex items-center justify-between cursor-pointer group" onClick={() => toggleAmenity(am.value)}>
                      <div className="flex items-center gap-2 flex-1">
                        <span className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${selected ? "bg-blue-500 border-blue-500" : "border-gray-300 group-hover:border-blue-500"}`}>
                          {selected && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <span className="text-[14px] font-medium text-[#525252] line-clamp-1">{am.name}</span>
                      </div>
                      <span className="text-[14px] font-semibold text-[#525252] ml-2">{String(am.count).padStart(2, "0")}</span>
                    </li>
                  );
                })}
              </ul>
              {amenities.length > 6 && (
                <button
                  onClick={() => setVisibleAmenityCount((prev) => (prev >= amenities.length ? 6 : prev + 6))}
                  className="mt-3 text-sm text-primary font-medium hover:underline"
                >
                  {visibleAmenityCount >= amenities.length ? "Show Less" : `See More (+${Math.min(6, amenities.length - visibleAmenityCount)})`}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelFilterSidebar;
