"use client";

import React, { useEffect, useRef, useState } from "react";

type Option = {
    label: string;
    value: string;
};

type CustomSelectProps = {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    className?: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    value,
    onChange,
    placeholder = "Select option",
    label = "",
    className = "",
}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedLabel =
        options.find((opt) => opt.value === value)?.label || "";

    // Close on outside click
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
        <div
            className={`single-search-box ${className}`}
            ref={dropdownRef}
        >
            {/* Label (optional) */}
            {label && <label className="block mb-1">{label}</label>}

            {/* Select Trigger */}
            <div
                className="custom-select-dropdown cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
            >
                <input
                    type="text"
                    readOnly
                    value={selectedLabel || ""}
                    placeholder={placeholder}
                />
                <span>{placeholder}</span>
            </div>

            {/* Dropdown */}
            <div
                className={`custom-select-wrap two ${open ? "active block" : "hidden"
                    }`}
            >
                <ul className="option-list">
                    {options.map((item) => (
                        <li
                            key={item.value}
                            className="single-item cursor-pointer hover:bg-gray-100 px-2 py-1"
                            onClick={() => {
                                onChange(item.value);
                                setOpen(false);
                            }}
                        >
                            <h6>{item.label}</h6>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CustomSelect;