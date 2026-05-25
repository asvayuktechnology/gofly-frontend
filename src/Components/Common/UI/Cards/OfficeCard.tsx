"use client";

import { Office } from "@/types";
import React from "react";
import { svgIcon } from "../../Icons/SvgIcons";



type Props = {
    office: Office;
};

const OfficeCard: React.FC<Props> = ({ office }) => {
    return (
        <div className={`single-contact ${office.variant || ""}`}>
            {/* Icon */}
            <div className="icon mb-4">
                {svgIcon.LocationIcon2}
            </div>

            {/* Title */}
            <h4 className="text-xl font-semibold mb-2">
                {office.title}
            </h4>

            {/* Contact */}
            <h6 className="mb-2 text-sm">
                <span className="font-medium">Contact :</span>{" "}
                <a
                    href={`tel:${office.phone}`}
                    className="text-primary hover:underline"
                >
                    {office.phone}
                </a>
            </h6>

            {/* Address */}
            <p className="text-gray-600 text-sm leading-relaxed">
                {office.address}
            </p>
        </div>
    );
};

export default OfficeCard;