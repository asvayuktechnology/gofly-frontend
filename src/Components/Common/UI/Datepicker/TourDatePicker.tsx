"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
};

export default function TourDatePicker({
  selectedDate,
  onChange,
}: Props) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  };

  return (
    <div className="single-search-box">
      {/* Icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M16.125 1.28394H14.8913V2.43609C14.9509 2.57307 14.9755 2.72275 14.9629 2.87163C14.9502 3.0205 14.9007 3.16388 14.8188 3.28883C14.7368 3.41379 14.6251 3.51638 14.4936 3.58736C14.3622 3.65834 14.2151 3.69547 14.0657 3.6954Z"></path>
        </g>
      </svg>

  <div className="react-datepicker-wrapper w-full">
  <DatePicker
    selected={selectedDate}
    onChange={(date: Date | null) =>
      onChange(date)
    }
    minDate={new Date()}
    dateFormat="dd MMM yyyy"
    customInput={
      <button
        type="button"
        className="react-datepicker__input-container w-full text-left cursor-pointer"
      >
        <div className="selected-date rounded-md cursor-pointer">
          <span
            className={
              selectedDate
                ? "text-gray-800"
                : "text-gray-400"
            }
          >
            {selectedDate
              ? formatDate(selectedDate)
              : "Select a date"}
          </span>
        </div>
      </button>
    }
  />
</div>
    </div>
  );
}