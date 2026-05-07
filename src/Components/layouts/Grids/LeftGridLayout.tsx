"use client";

import FilterSidebar from "@/Components/Common/FilterSidebar";
import SortingSection from "@/Components/Common/SortingSection";
import PackageCard from "@/Components/Common/UI/Cards/PackageCard";
import PackagePagination from "@/Components/Common/UI/Paginations/PackagePagination";
import { useState } from "react";
import { PackageItem } from "@/types";

type LeftGridLayoutProps = {
  data: PackageItem[];
  type: "package" | "experience";
};

export default function LeftGridLayout({ data, type }: LeftGridLayoutProps) {
  const [page, setPage] = useState(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4">
        <FilterSidebar />
      </div>

      <div className="lg:col-span-8">
        <div className="package-grid-page">
          <SortingSection
            totalJourneys={data.length}
            onFilterClick={() => console.log("Filter clicked")}
            onSortChange={(value) => console.log("Sort:", value)}
            onViewChange={(view) => console.log("View:", view)}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.map((item) => (
            <PackageCard key={item.id} type={type} {...item} />
          ))}
        </div>

        <PackagePagination
          currentPage={page}
          totalPages={4}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}