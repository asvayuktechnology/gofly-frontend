"use client";

import { Office } from "@/types";
import React from "react";
import { svgIcon } from "../../Icons/SvgIcons";

type Props = {
    office: Office;
    isActive?: boolean;
    onClick?: () => void;
};

const OfficeCard: React.FC<Props> = ({ office, isActive, onClick }) => {
    return (
        <div
            className={`single-contact ${office.variant || ""} ${isActive ? "active" : ""}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick?.();
                }
            }}
        >
            <div className="icon mb-4">
                {svgIcon.LocationIcon2}
            </div>

            <h4 className="text-xl font-semibold mb-2">
                {office.title}
            </h4>

            <h6 className="mb-2 text-sm">
                <span className="font-medium">Contact :</span>{" "}
                <a
                    href={`tel:${office.phone}`}
                    className="text-primary hover:underline"
                >
                    {office.phone}
                </a>
            </h6>

            <p className="text-gray-600 text-sm leading-relaxed">
                {office.address}
            </p>
        </div>
    );
};

export default OfficeCard;