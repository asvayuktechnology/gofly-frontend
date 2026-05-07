"use client";
import FilterSidebar from "@/Components/Common/FilterSidebar";
import SortingSection from "@/Components/Common/SortingSection";
import PackageCard from "@/Components/Common/UI/Cards/PackageCard";
import PackagePagination from "@/Components/Common/UI/Paginations/PackagePagination";
import { POPULAR_PACKAGES } from "@/lib/data";
import { useState } from "react";

export default function LeftGridLayout() {
  const [page, setPage] = useState(1);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4">
        <FilterSidebar />
      </div>
      <div className="lg:col-span-8">
        <div className="package-grid-page">
          <SortingSection
            totalJourneys={70}
            onFilterClick={() => console.log("Filter clicked")}
            onSortChange={(value) => console.log("Sort:", value)}
            onViewChange={(view) => console.log("View:", view)}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {POPULAR_PACKAGES.map((pkg, index) => (
            <PackageCard key={index} {...pkg} delay={200 + index * 100} />
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
