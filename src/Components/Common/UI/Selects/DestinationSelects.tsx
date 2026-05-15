"use client";

import Select, { SingleValue, components } from "react-select";
import { BiCurrentLocation } from "react-icons/bi";
import { useDestinations } from "@/services/destinationService";
import { useState } from "react";

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

// DROPDOWN OPTION UI
const CustomOption = (props: any) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center justify-between py-1">
        <div>
          <h6 className="text-[15px] font-semibold text-[#1a1a1a] leading-[20px]">
            {props.data.label}
          </h6>

          <span className="text-[13px] text-[#777]">
            {props.data.country}
          </span>
        </div>

        <div className="w-[44px] h-[44px] rounded-full bg-[#2979ff] text-white flex flex-col items-center justify-center text-[11px] leading-[12px] font-medium">
          <span>{props.data.totalTours}</span>
          <span>Tour</span>
        </div>
      </div>
    </components.Option>
  );
};

// SELECTED VALUE UI
const CustomSingleValue = (props: any) => {
  return (
    <components.SingleValue {...props}>
      <div className="flex items-center justify-between w-full pr-3">
        <div>
          <h6>{props.data.label}</h6>
          <span>{props.data.country}</span>
        </div>
      </div>
    </components.SingleValue>
  );
};

export default function DestinationSelect({
  value,
  onChange,
}: Props) {
 const [keyword, setKeyword] = useState("");

const { data, isLoading } = useDestinations({
  limit: 100,
  // keyword,
});

  const destinations = data?.data ?? [];

  const options: DestinationOption[] = destinations.map((item: any) => ({
    value: item._id,
    label: item.name,
    country: item.country,
    totalTours: item.totalTours,
  }));

  return (
    <div className="single-search-box">
      <BiCurrentLocation
        size={20}
        className="text-gray-500 absolute left-4 top-1/2 -translate-y-1/2 z-10"
      />

      <div className="destination-dropdown">
        <Select
          instanceId="destination-select"
          options={options}
          value={value}
          onChange={(selected) =>
            onChange(selected as SingleValue<DestinationOption>)
          }
          isSearchable
          isLoading={isLoading}
          placeholder="Type Your Destination"
          components={{
            Option: CustomOption,
            SingleValue: CustomSingleValue,
            IndicatorSeparator: () => null,
            DropdownIndicator: () => null,
          }}
          unstyled
          classNames={{
            control: ({ isFocused }) =>
              `min-h-[72px] border rounded-[14px] bg-white pl-10 pr-3 py-2 shadow-sm cursor-pointer ${
                isFocused
                  ? "border-[#2979ff]"
                  : "border-[#e5e5e5]"
              }`,

            valueContainer: () => "p-0",

            input: () =>
              "text-[15px] text-[#222] m-0 p-0",

            placeholder: () =>
              "text-[#999] text-[15px]",

            singleValue: () => "m-0 p-0 w-full",

            menu: () =>
              "mt-2 bg-white border border-[#eee] rounded-[12px] shadow-xl overflow-hidden z-50",

            menuList: () =>
              "max-h-[280px] overflow-y-auto py-1",

            option: ({ isFocused, isSelected }) =>
              `px-4 py-3 cursor-pointer border-b border-[#f3f3f3] last:border-b-0 ${
                isSelected
                  ? "bg-[#f8f8f8]"
                  : isFocused
                  ? "bg-[#f7f7f7]"
                  : "bg-white"
              }`,
          }}
        />
      </div>
    </div>
  );
}