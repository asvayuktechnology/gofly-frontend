"use client";

import { SortingSectionProps } from "@/types";
import React, { useState } from "react";
import { svgIcon } from "./Icons/SvgIcons";

const SortingSection: React.FC<SortingSectionProps> = ({
  totalJourneys = 70,
  onFilterClick,
  onSortChange,
  onViewChange,
}) => {
  const [sortBy, setSortBy] = useState<string>("Default");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setIsSelectOpen(false);
    onSortChange?.(value);
  };

  const handleViewChange = (selectedView: "grid" | "list") => {
    setView(selectedView);
    onViewChange?.(selectedView);
  };

  return (
    <div className="package-grid-top-area flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      {/* Journey Count */}
      <span className="text-gray-700 text-sm md:text-base">
        <strong className="text-primary font-semibold">{totalJourneys}</strong>{" "}
        Unforgettable Journeys Await!
      </span>

      {/* Right Controls */}
      <div className="selector-and-list-grid-area flex items-center justify-between md:justify-end gap-[55px] w-full md:w-auto">
        {/* Mobile Filter Button */}
        <div
          className="lg:hidden flex filter-btn items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg cursor-pointer shadow-sm hover:bg-primary/90 transition"
          onClick={onFilterClick}
        >
          {svgIcon.filterSvg}
          <span>Filters</span>
        </div>

        {/* Sort Selector */}
        <div className="selector-area flex items-center gap-2 relative">
          <span className="text-sm text-gray-600">Sort By: </span>
          <div
            className="nice-select my-select relative cursor-pointer rounded-lg px-4 py-2 bg-white  min-w-[88px]"
            tabIndex={0}
            onClick={() => setIsSelectOpen(!isSelectOpen)}
            onBlur={() => setIsSelectOpen(false)}
          >
            <span className="current">{sortBy}</span>
            <ul
              className={`list absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 transition-all ${
                isSelectOpen ? "block" : "hidden"
              }`}
            >
              {["Default", "Latest", "Price High", "Price Low"].map(
                (option) => (
                  <li
                    key={option}
                    className="option px-4  hover:bg-gray-100 cursor-pointer"
                    data-value={option}
                    onClick={() => handleSortChange(option)}
                  >
                    {option}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Grid/List View Toggle */}
        <ul className="grid-view d-md-flex d-none items-center gap-[20px]">
          {/* Grid View */}
          <li
            className={`column-2  rounded-md cursor-pointer transition ${
              view === "grid" ? "active bg-primary/10 text-blue-500" : ""
            }`}
            onClick={() => handleViewChange("grid")}
          >
            {svgIcon.gridIcon(view)}
          </li>

          {/* List View */}
          <li
            className={`column-1 rounded-md cursor-pointer transition ${
              view === "list" ? "active bg-primary/10 text-blue-500" : ""
            }`}
            onClick={() => handleViewChange("list")}
          >
            {svgIcon.listIcon(view)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortingSection;
