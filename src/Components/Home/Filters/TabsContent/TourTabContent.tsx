"use client";

import TourDatePicker from "@/Components/Common/UI/Datepicker/TourDatePicker";
import CategorySelect from "@/Components/Common/UI/Selects/CategorySelect";
import DestinationSelect from "@/Components/Common/UI/Selects/DestinationSelects";
import React, { useEffect, useRef, useState } from "react";

const tourCategories = [
    "Family Tour",
    "Honeymoon Tour",
    "Group Tour",
    "Adventure Tour",
    "Solo Tour",
];

const TourTabContent: React.FC = () => {
    // const [selectedCategory, setSelectedCategory] = useState("Family Tour");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

        const categories = [
  "Family Tour",
  "Honeymoon Tour",
  "Group Tour",
  "Adventure Tour",
  "Solo Tour",
];
    const [category, setCategory] = useState("Family Tour");

      const [selected, setSelected] = useState<string>("Family Tour");
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef
  <HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


    return (
        <form className="filter-input show flex flex-wrap items-center gap-4">

            {/* Destination */}
            <DestinationSelect />

            {/* Date */}
            <TourDatePicker />

            <div className="single-search-box" ref={dropdownRef}>
                {/* ICON (unchanged) */}
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <g>
                        <path d="M19.3024 4.186H10C9.81501 4.186 9.63755 4.1125 9.50671 3.98166C9.37587 3.85082 9.30237 3.67336 9.30237 3.48833C9.30237 3.30329 9.37587 3.12583 9.50671 2.99499C9.63755 2.86415 9.81501 2.79065 10 2.79065H19.3024C19.4874 2.79065 19.6649 2.86415 19.7957 2.99499C19.9266 3.12583 20.0001 3.30329 20.0001 3.48833C20.0001 3.67336 19.9266 3.85082 19.7957 3.98166C19.6649 4.1125 19.4874 4.186 19.3024 4.186Z" />
                    </g>
                </svg>

                {/* SELECT INPUT */}
                <div
                    className="custom-select-dropdown cursor-pointer"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <input type="text" readOnly value={selected} />
                    <span>Category</span>
                </div>

                {/* DROPDOWN */}
                <div
                    className={`custom-select-wrap two ${open ? "active block" : "hidden"
                        }`}
                >
                    <ul className="option-list">
                        {categories.map((item) => (
                            <li
                                key={item}
                                className="single-item cursor-pointer hover:bg-gray-100 px-2 py-1"
                                onClick={() => {
                                    setSelected(item);
                                    setOpen(false);
                                }}
                            >
                                <h6>{item}</h6>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button type="submit" className="primary-btn1">
                <span>
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path d="M17.7799 16.746L14.6861 13.7226L14.6137 13.6126C14.4774 13.4781 14.2936 13.4028 14.1022 13.4028C13.9107 13.4028 13.7269 13.4781 13.5906 13.6126C10.9613 16.0246 6.91095 16.1554 4.12376 13.9188C1.33658 11.6821 0.680209 7.7696 2.58814 4.77921C4.49607 1.78882 8.37732 0.64519 11.6585 2.10734C14.9396 3.56949 16.5993 7.18566 15.539 10.555C15.5016 10.675 15.4972 10.8029 15.5262 10.9251C15.5552 11.0474 15.6166 11.1597 15.7039 11.2501C15.7921 11.3421 15.9027 11.4097 16.0248 11.4463C16.1469 11.4829 16.2764 11.4872 16.4007 11.4589C16.5243 11.4317 16.6387 11.3725 16.7323 11.2872C16.8258 11.202 16.8954 11.0936 16.934 10.973C18.1996 6.97472 16.2878 2.6716 12.434 0.848041C8.58017 -0.975514 3.94271 0.225775 1.52009 3.67706C-0.902526 7.12835 -0.382565 11.7918 2.74388 14.6518C5.87033 17.5118 10.6646 17.7083 14.0273 15.1173L16.7667 17.7955C16.9042 17.9276 17.0875 18.0014 17.2782 18.0014C17.4689 18.0014 17.6522 17.9276 17.7897 17.7955C17.8568 17.7298 17.9101 17.6513 17.9465 17.5648C17.9829 17.4782 18.0016 17.3852 18.0016 17.2913C18.0016 17.1974 17.9829 17.1045 17.9465 17.0179C17.9101 16.9313 17.8568 16.8529 17.7897 16.7872L17.7799 16.746Z"></path>
                        </g>
                    </svg>
                    SEARCH
                </span>
                <span>
                    <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path d="M17.7799 16.746L14.6861 13.7226L14.6137 13.6126C14.4774 13.4781 14.2936 13.4028 14.1022 13.4028C13.9107 13.4028 13.7269 13.4781 13.5906 13.6126C10.9613 16.0246 6.91095 16.1554 4.12376 13.9188C1.33658 11.6821 0.680209 7.7696 2.58814 4.77921C4.49607 1.78882 8.37732 0.64519 11.6585 2.10734C14.9396 3.56949 16.5993 7.18566 15.539 10.555C15.5016 10.675 15.4972 10.8029 15.5262 10.9251C15.5552 11.0474 15.6166 11.1597 15.7039 11.2501C15.7921 11.3421 15.9027 11.4097 16.0248 11.4463C16.1469 11.4829 16.2764 11.4872 16.4007 11.4589C16.5243 11.4317 16.6387 11.3725 16.7323 11.2872C16.8258 11.202 16.8954 11.0936 16.934 10.973C18.1996 6.97472 16.2878 2.6716 12.434 0.848041C8.58017 -0.975514 3.94271 0.225775 1.52009 3.67706C-0.902526 7.12835 -0.382565 11.7918 2.74388 14.6518C5.87033 17.5118 10.6646 17.7083 14.0273 15.1173L16.7667 17.7955C16.9042 17.9276 17.0875 18.0014 17.2782 18.0014C17.4689 18.0014 17.6522 17.9276 17.7897 17.7955C17.8568 17.7298 17.9101 17.6513 17.9465 17.5648C17.9829 17.4782 18.0016 17.3852 18.0016 17.2913C18.0016 17.1974 17.9829 17.1045 17.9465 17.0179C17.9101 16.9313 17.8568 16.8529 17.7897 16.7872L17.7799 16.746Z"></path>
                        </g>
                    </svg>
                    SEARCH
                </span>
            </button>
        </form>
    );
};

export default TourTabContent;