"use client";

import Select, { components, SingleValue, OptionProps } from "react-select";
import { TbCurrentLocationFilled } from "react-icons/tb";
import { BiCurrentLocation } from "react-icons/bi";

type Destination = {
  label: string;
  value: string;
  country: string;
  tours: number;
};

const options: Destination[] = [
  { label: "Bali Paradise", value: "bali", country: "Indonesia", tours: 50 },
  { label: "Cox's Bazar", value: "coxs", country: "Bangladesh", tours: 50 },
  { label: "Pokhara", value: "pokhara", country: "Nepal", tours: 30 },
  { label: "Himachal", value: "himachal", country: "India", tours: 30 },
  { label: "Sao Paulo", value: "sao", country: "Brazil", tours: 20 },
  { label: "Bangkok", value: "bangkok", country: "Thailand", tours: 40 },
  { label: "Barcelona", value: "barcelona", country: "Spain", tours: 20 },
  { label: "Burj Khalifa", value: "dubai", country: "Dubai", tours: 35 },
  { label: "New York", value: "ny", country: "United States", tours: 45 },
];


// 🔹 Custom Option UI (dropdown list)
const CustomOption = (props: OptionProps<Destination>) => {
  const { data } = props;

  return (
    <components.Option {...props}>
      <li className="flex justify-between items-center">
        <div className="destination">
          <h6>{data.label}</h6>
          <span>{data.country}</span>
        </div>
        <div className="tour text-right">
          <span>
            {data.tours} <br /> Tour
          </span>
        </div>
      </li>
    </components.Option>
  );
};


// 🔹 Selected Value UI
const CustomSingleValue = ({ data }: { data: Destination }) => {
  return (
    <div className="input-field-value">
      <div className="destination">
        <h6>{data.label}</h6>
        <span>{data.country}</span>
      </div>
    </div>
  );
};


export default function DestinationSelect() {
  return (
    <div className="single-search-box">
        <BiCurrentLocation size={18} /> 
      <div className="custom-select-dropdown destination-dropdown">
        <Select
          options={options}
          defaultValue={options[0]}
          isSearchable
          components={{
            Option: CustomOption,
            SingleValue: CustomSingleValue,
          }}
          placeholder="Type Your Destination"
          className=""
          // 🔥 Remove default styles
          unstyled

          classNames={{
            control: () => "w-full",
            menu: () =>
              "custom-select-wrap active mt-2 bg-white shadow-lg rounded-md",
            menuList: () => "option-list-destination max-h-60 overflow-y-auto",
            option: ({ isFocused }) =>
              `p-2 cursor-pointer ${isFocused ? "bg-gray-100" : ""}`,
            input: () => "px-2 py-1 outline-none custom-select-hidden-input",
            placeholder: () => "text-gray-400 px-2",
          }}
        />
      </div> 
    </div>
  );
}