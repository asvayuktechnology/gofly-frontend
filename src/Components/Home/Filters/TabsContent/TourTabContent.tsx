"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import TourDatePicker from "@/Components/Common/UI/Datepicker/TourDatePicker";

import DestinationSelect, {
  DestinationOption,
} from "@/Components/Common/UI/Selects/DestinationSelects";
import SiteBtn from "@/Components/Common/SiteBtn/SiteBtn";

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

  const params =
    new URLSearchParams();

  // destination
  if (destination?.value) {
    params.set(
      "destinationId",
      destination.value
    );
  }

  // category
  if (selectedCategory?.value) {
    params.set(
      "category",
      selectedCategory.value
    );
  }

  // start date
  if (selectedDate) {
    const formattedDate =
      selectedDate
        .toISOString()
        .split("T")[0];

    params.set(
      "startDate",
      formattedDate
    );
  }

  // defaults
  // params.set("page", "1");
  // params.set("limit", "5");

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
{/* Category */}
<div className="single-search-box">
  <div className="custom-select-dropdown destination-dropdown">
    <select
      value={selectedCategory?.value || ""}
      onChange={(e) => {
        const selected = categoryOptions.find(
          (cat) => cat.value === e.target.value
        );

        setSelectedCategory(selected || null);
      }}
      className="absolute inset-0 opacity-0 cursor-pointer z-10"
    >
      <option value="">
        Select Category
      </option>

      {categoryOptions.map((cat) => (
        <option
          key={cat.value}
          value={cat.value}
        >
          {cat.label}
        </option>
      ))}
    </select>

    <div className="input-field-value">
      <div className="destination">
        <h6>
          {selectedCategory?.label ||
            "Select Category"}
        </h6>
        <span>Category</span>
      </div>
    </div>
  </div>
</div>

      {/* Search Button */}
      <SiteBtn
  type="submit"
  className="primary-btn1 cursor-pointer"
  text="SEARCH"
  disabled={
    !destination ||
    !selectedDate ||
    !selectedCategory
  }
  svgIcon={
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.7799 16.746L14.6861 13.7226..." />
    </svg>
  }
  iconPosition="start"
/>
    </form>
  );
};

export default TourTabContent;