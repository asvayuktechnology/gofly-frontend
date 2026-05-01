"use client";

import Select, { components } from "react-select";

type CategoryOption = {
  label: string;
  value: string;
};

const options: CategoryOption[] = [
  { label: "Family Tour", value: "family" },
  { label: "Honeymoon Tour", value: "honeymoon" },
  { label: "Group Tour", value: "group" },
  { label: "Adventure Tour", value: "adventure" },
  { label: "Solo Tour", value: "solo" },
];


// 🔹 Custom Option (dropdown list item)
const CustomOption = (props: any) => {
  const { data } = props;

  return (
    <components.Option {...props}>
      <div className="single-item">
        <h6>{data.label}</h6>
      </div>
    </components.Option>
  );
};


// 🔹 Selected Value UI (input look)
const CustomSingleValue = ({ data }: any) => {
  return (
    <div className="custom-select-dropdown">
      <input
        type="text"
        readOnly
        value={data.label}
        className="w-full bg-transparent outline-none cursor-pointer"
      />
      <span>Category</span>
    </div>
  );
};


export default function CategorySelect() {
  return (
    <div className="single-search-box">
      
      <Select
        options={options}
        defaultValue={options[0]}
        isSearchable={false}

        components={{
          Option: CustomOption,
          SingleValue: CustomSingleValue,
          IndicatorSeparator: () => null,
        }}

        unstyled

        classNames={{
          control: () => "w-full",
          menu: () =>
            "custom-select-wrap two mt-2 bg-white shadow-lg rounded-md",
          menuList: () => "option-list",
          option: ({ isFocused }) =>
            `cursor-pointer ${isFocused ? "bg-gray-100" : ""}`,
        }}
      />

    </div>
  );
}