"use client";

import React from "react";
import OfficeCard from "../Common/UI/Cards/OfficeCard";
import { ContactAddress } from "@/types/contactType";

interface OfficeLocationsProps {
  offices: ContactAddress[];
  selectedIndex: number;
  onSelectOffice: (index: number) => void;
}

const OfficeLocations: React.FC<OfficeLocationsProps> = ({ offices, selectedIndex, onSelectOffice }) => (
  <div className="mb-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offices?.map((office, index) => (
          <OfficeCard
            key={index}
            office={{
              id: index,
              title: office.country,
              phone: office.contactNumber,
              address: office.address,
              variant: index === 0 ? "" : index === 1 ? "two" : "three",
            }}
            isActive={selectedIndex === index}
            onClick={() => onSelectOffice(index)}
          />
        ))}
      </div>
    </div>
  </div>
);

export default OfficeLocations;