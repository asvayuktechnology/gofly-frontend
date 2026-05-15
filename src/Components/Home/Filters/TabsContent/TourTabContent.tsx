"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import TourDatePicker from "@/Components/Common/UI/Datepicker/TourDatePicker";

import DestinationSelect, {
  DestinationOption,
} from "@/Components/Common/UI/Selects/DestinationSelects";

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

const TourTabContent = () => {
  const router = useRouter();

  // Destination
  const [destination, setDestination] =
    useState<DestinationOption | null>(null);

  // Category
  const [selectedCategory, setSelectedCategory] =
    useState<{
      label: string;
      value: string;
    } | null>(null);
 const [selectedDate, setSelectedDate] =
    useState<Date | null>(null);
  // Date Range
  const [dateRange, setDateRange] = useState<
    [Date | null, Date | null]
  >([null, null]);

  const [startDate, endDate] = dateRange;

  // Dropdown
  const [categoryOpen, setCategoryOpen] =
    useState(false);

  const categoryRef =
    useRef<HTMLDivElement>(null);

  // Outside Click
  useEffect(() => {
    const handleClickOutside = (
      e: MouseEvent
    ) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(
          e.target as Node
        )
      ) {
        setCategoryOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Search
  const handleSearch = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const params = new URLSearchParams();

    // Destination
    if (destination?.value) {
      params.set(
        "destination",
        destination.value
      );
    }

    // Category
    if (selectedCategory?.value) {
      params.set(
        "category",
        selectedCategory.value
      );
    }

    // Dates
    if (startDate) {
      params.set(
        "startDate",
        startDate.toISOString()
      );
    }

    if (endDate) {
      params.set(
        "endDate",
        endDate.toISOString()
      );
    }

    router.push(
      `/travel-package?${params.toString()}`
    );
  };

  return (
    <form
      className="filter-input show"
      onSubmit={handleSearch}
    >
      {/* Destination */}
      <DestinationSelect
        value={destination}
        onChange={setDestination}
      />

      {/* Date Picker */}
      <TourDatePicker
        selectedDate={selectedDate}
        onChange={setSelectedDate}
      />

  
{/* Category */}
<div
  className="single-search-box relative"
  ref={categoryRef}
>
  {/* Selected Box */}
  <div
    className="custom-select-dropdown cursor-pointer"
    onClick={() =>
      setCategoryOpen((prev) => !prev)
    }
  >
    <div className="w-full">
      <h6 className="mb-0">
        {selectedCategory?.label ||
          "Select Category"}
      </h6>

      <span>Category</span>
    </div>
  </div>

  {/* Dropdown List */}
  {categoryOpen && (
    <div
      className="absolute left-0 top-[110%] w-full bg-white rounded-lg shadow-lg z-[99999] border"
      style={{
        display: "block",
      }}
    >
      <ul className="max-h-[250px] overflow-y-auto">
        {categoryOptions.map((cat) => (
         <li
  key={cat.value}
  className={`p-3 cursor-pointer text-black hover:bg-gray-100 ${
    selectedCategory?.value === cat.value
      ? "bg-gray-100"
      : ""
  }`}
  onClick={() => {
    setSelectedCategory(cat);
    setCategoryOpen(false);
  }}
>
  <h6 className="text-black mb-0">
    {cat.label}
  </h6>
</li>
        ))}
      </ul>
    </div>
  )}
</div>

      {/* Search Button */}
      <button
        type="submit"
        className="primary-btn1"
      >
        <span>
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.7799 16.746L14.6861 13.7226L14.6137 13.6126C14.4774 13.4781 14.2936 13.4028 14.1022 13.4028C13.9107 13.4028 13.7269 13.4781 13.5906 13.6126C10.9613 16.0246 6.91095 16.1554 4.12376 13.9188C1.33658 11.6821 0.680209 7.7696 2.58814 4.77921C4.49607 1.78882 8.37732 0.64519 11.6585 2.10734C14.9396 3.56949 16.5993 7.18566 15.539 10.555C15.5016 10.675 15.4972 10.8029 15.5262 10.9251C15.5552 11.0474 15.6166 11.1597 15.7039 11.2501C15.7921 11.3421 15.9027 11.4097 16.0248 11.4463C16.1469 11.4829 16.2764 11.4872 16.4007 11.4589C16.5243 11.4317 16.6387 11.3725 16.7323 11.2872C16.8258 11.202 16.8954 11.0936 16.934 10.973C18.1996 6.97472 16.2878 2.6716 12.434 0.848041C8.58017 -0.975514 3.94271 0.225775 1.52009 3.67706C-0.902526 7.12835 -0.382565 11.7918 2.74388 14.6518C5.87033 17.5118 10.6646 17.7083 14.0273 15.1173L16.7667 17.7955C16.9042 17.9276 17.0875 18.0014 17.2782 18.0014C17.4689 18.0014 17.6522 17.9276 17.7897 17.7955C17.8568 17.7298 17.9101 17.6513 17.9465 17.5648C17.9829 17.4782 18.0016 17.3852 18.0016 17.2913C18.0016 17.1974 17.9829 17.1045 17.9465 17.0179C17.9101 16.9313 17.8568 16.8529 17.7897 16.7872L17.7799 16.746Z" />
          </svg>

          SEARCH
        </span>
      </button>
    </form>
  );
};

export default TourTabContent;