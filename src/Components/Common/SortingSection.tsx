"use client";

import { SORT_OPTIONS } from "@/utils";
import React, { useState } from "react";
import { svgIcon } from "./Icons/SvgIcons";

const SortingSection: React.FC<SortingSectionProps> = ({
  totalJourneys = 70,
  onFilterClick,
  onSortChange,
  onViewChange,
}) => {
  
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

   const [sortBy, setSortBy] = useState<string>("default");

const selectedLabel =
  SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label || "Default";
    return (
        <div className="package-grid-top-area flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 p-4 bg-white rounded-lg border border-gray-200">

            {/* Journey Count */}
            <span className="text-gray-700 text-sm md:text-base">
                <strong className="text-blue-600 font-semibold">
                    {totalJourneys}
                </strong>{" "}
                Unforgettable Journeys Await!
            </span>

            {/* Right Controls */}
            <div className="selector-and-list-grid-area flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">

                {/* Filter Button */}
                <div
                    className="lg:hidden flex filter-btn items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer shadow-sm hover:bg-blue-700 transition"
                    onClick={onFilterClick}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                    >
                        <path d="M0.5625 3.17317H9.12674C9.38486 4.34806 10.4341 5.2301 11.6853 5.2301C12.9366 5.2301 13.9858 4.3481 14.2439 3.17317H17.4375C17.7481 3.17317 18 2.92131 18 2.61067C18 2.30003 17.7481 2.04817 17.4375 2.04817H14.2437C13.9851 0.873885 12.9344 -0.00871277 11.6853 -0.00871277C10.4356 -0.00871277 9.38545 0.873744 9.12695 2.04817H0.5625C0.251859 2.04817 0 2.30003 0 2.61067C0 2.92131 0.251859 3.17317 0.5625 3.17317Z" />
                    </svg>
                    <span>Filters</span>
                </div>

                {/* Sort Selector */}
                <div className="selector-area flex items-center gap-2 relative">
                    <span className="text-sm text-gray-600">Sort By: </span>

                    <div
                        className="nice-select my-select relative cursor-pointer rounded-lg px-4 py-2 bg-white border border-gray-300 min-w-[120px] hover:border-gray-400 transition"
                        tabIndex={0}
                        onClick={() => setIsSelectOpen(!isSelectOpen)}
                        onBlur={() => setIsSelectOpen(false)}
                    >
                        <span className="current text-sm font-medium">{selectedLabel}</span>
                        <ul
                            className={`list absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20 transition-all ${
                                isSelectOpen ? "block" : "hidden"
                            }`}
                        >
                            {SORT_OPTIONS.map((option) => (
                                <li
                                    key={option.value}
                                    className="option px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm transition"
                                    onClick={() => handleSortChange(option.value)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Grid/List View Toggle */}
                <div className="grid-view flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    {/* Grid View */}
                    <button
                        className={`p-2 rounded transition ${
                            view === "grid"
                                ? "bg-white shadow-sm"
                                : "hover:bg-white/50"
                        }`}
                        onClick={() => handleViewChange("grid")}
                        title="Grid View"
                    >
                        <svg 
                            width="18" 
                            height="18" 
                            viewBox="0 0 18 18"
                            className={view === "grid" ? "text-blue-600" : "text-gray-600"}
                        >
                            <path
                                fill="currentColor"
                                d="M4 11C5.65685 11 7 12.3431 7 14C7 15.6569 5.65685 17 4 17C2.34315 17 1 15.6569 1 14C1 12.3431 2.34315 11 4 11ZM14 11C15.6569 11 17 12.3431 17 14C17 15.6569 15.6569 17 14 17C12.3431 17 11 15.6569 11 14C11 12.3431 12.3431 11 14 11ZM4 1C5.65685 1 7 2.34315 7 4C7 5.65685 5.65685 7 4 7C2.34315 7 1 5.65685 1 4C1 2.34315 2.34315 1 4 1ZM14 1C15.6569 1 17 2.34315 17 4C17 5.65685 15.6569 7 14 7C12.3431 7 11 5.65685 11 4C11 2.34315 12.3431 1 14 1Z"
                            />
                        </svg>
                    </button>

                    {/* List View */}
                    <button
                        className={`p-2 rounded transition ${
                            view === "list"
                                ? "bg-white shadow-sm"
                                : "hover:bg-white/50"
                        }`}
                        onClick={() => handleViewChange("list")}
                        title="List View"
                    >
                        <svg 
                            width="18" 
                            height="18" 
                            viewBox="0 0 18 18"
                            className={view === "list" ? "text-blue-600" : "text-gray-600"}
                        >
                            <path
                                fill="currentColor"
                                d="M17.25 9.95007H0.75C0.336 9.95007 0 9.61407 0 9.20007C0 8.78607 0.336 8.45007 0.75 8.45007H17.25C17.664 8.45007 18 8.78607 18 9.20007C18 9.61407 17.664 9.95007 17.25 9.95007ZM17.25 4.20001H0.75C0.336 4.20001 0 3.86401 0 3.45001C0 3.03601 0.336 2.70001 0.75 2.70001H17.25C17.664 2.70001 18 3.03601 18 3.45001C18 3.86401 17.664 4.20001 17.25 4.20001ZM17.25 15.6999H0.75C0.336 15.6999 0 15.3639 0 14.9499C0 14.5359 0.336 14.1999 0.75 14.1999H17.25C17.664 14.1999 18 14.5359 18 14.9499C18 15.3639 17.664 15.6999 17.25 15.6999Z"
                            />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SortingSection;
