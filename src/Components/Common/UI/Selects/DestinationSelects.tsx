"use client";

import Select, { SingleValue, components } from "react-select";
import { BiCurrentLocation } from "react-icons/bi";
import { useDestinations } from "@/services/destinationService";
import { useEffect, useState } from "react";

export type DestinationOption = {
  value: string;
  label: string;
  country: string;
  totalTours: number;
};

type Props = {
  value: DestinationOption | null;
  onChange: (value: DestinationOption | null) => void;
};

// =====================
// DROPDOWN OPTION
// =====================
const CustomOption = (props: any) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center justify-between cursor-pointer">
        <div>
          <h6 className="text-[17px] font-semibold text-[#1a1a1a] leading-[22px]">
            {props.data.label}
          </h6>

          <p className="text-[14px] text-[#666] mt-0.5">
            {props.data.country}
          </p>
        </div>

        <div className="w-[44px] h-[44px] rounded-full bg-[#2979ff] text-white flex flex-col items-center justify-center shrink-0">
          <span className="text-[12px] font-semibold leading-none">
            {props.data.totalTours}
          </span>

          <span className="text-[10px] leading-none mt-0.5">
            Tour
          </span>
        </div>
      </div>
    </components.Option>
  );
};

// =====================
// SELECTED VALUE
// =====================
const CustomSingleValue = (props: any) => {
  return (
    <components.SingleValue {...props}>
      <div className="flex items-center gap-3 ">
        <BiCurrentLocation
          size={18}
          className="text-[#666]"
        />

        <div className="leading-tight">
          <div className="text-[16px] font-semibold text-[#1a1a1a]">
            {props.data.label}
          </div>

          <div className="text-[13px] text-[#777]">
            {props.data.country}
          </div>
        </div>
      </div>
    </components.SingleValue>
  );
};

export default function DestinationSelect({
  value,
  onChange,
}: Props) {
  const [search, setSearch] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading } = useDestinations({
    limit: 100,
    keyword: debouncedKeyword,
  });

  const destinations = data?.data ?? [];

  const options: DestinationOption[] = destinations.map((item: any) => ({
    value: item._id,
    label: item.name,
    country: item.country,
    totalTours: item.totalTours,
  }));

  return (
    <div className="relative cursor-pointer">
      {!value && (
        <BiCurrentLocation
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-[#888] cursor-pointer"
        />
      )}

      <Select
        instanceId="destination-select"
        options={options}
        value={value}
        required
        isSearchable
        isLoading={isLoading}
        placeholder="Type Your Destination"
        onInputChange={(value) => setSearch(value)}
        onChange={(selected) =>
          onChange(selected as SingleValue<DestinationOption>)
        }
        components={{
          Option: CustomOption,
          SingleValue: CustomSingleValue,
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null,
        }}
        unstyled
   classNames={{
  control: ({ isFocused }) =>
    `h-[62px] border rounded-[14px] bg-white pl-10 pr-4 cursor-pointer transition-all ${
      isFocused
        ? "border-[#2979ff]"
        : "border-[#e5e5e5]"
    }`,

  valueContainer: () => "px-0 py-0",

  input: () =>
    "text-[15px] text-[#222] m-0 p-0 cursor-pointer",

  placeholder: () =>
    "text-[#8d8d8d] text-[15px] cursor-pointer",

  singleValue: () =>
    "m-0 p-0 w-full cursor-pointer",

  menu: () =>
    "mt-2 bg-white border border-[#ececec] rounded-[14px] shadow-xl overflow-hidden z-50",

  menuList: () =>
    "max-h-[320px] overflow-y-auto py-0",

  option: ({ isFocused, isSelected }) =>
    `px-4 py-4 border-b border-[#f3f3f3] last:border-b-0 cursor-pointer transition-colors ${
      isSelected
        ? "bg-[#f8f8f8]"
        : isFocused
        ? "bg-[#f8f9ff]"
        : "bg-white"
    }`,
}}
      />
    </div>
  );
}