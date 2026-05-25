"use client";

import React from "react";
import OfficeCard from "../Common/UI/Cards/OfficeCard";
import { offices } from "@/lib/data";



const OfficeLocations: React.FC = () => {
    return (
        <div className="mb-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {offices.map((office) => (
                        <OfficeCard key={office.id} office={office} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OfficeLocations;