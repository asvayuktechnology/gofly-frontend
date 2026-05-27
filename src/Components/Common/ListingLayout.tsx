"use client";

import React from "react";
import SortingSection from "./SortingSection";
import PackagePagination from "./UI/Paginations/PackagePagination";

type Props = {
  items: any[];
  viewType: "grid" | "list";
  setViewType: React.Dispatch<
    React.SetStateAction<"grid" | "list">
  >;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSortChange: (value: string) => void;
  children: React.ReactNode;
  emptyMessage?: string;
};

const ListingLayout = ({
  items,
  viewType,
  setViewType,
  currentPage,
  totalPages,
  onPageChange,
  onSortChange,
  children,
  emptyMessage = "No Items Found",
}: Props) => {
  return (
    <div className="lg:col-span-8">
      <div className="package-grid-page">
        <SortingSection
          totalJourneys={items.length}
          onSortChange={onSortChange}
          onViewChange={(v) => setViewType(v)}
          onFilterClick={() => console.log("filter")}
        />
      </div>

      {items.length === 0 ? (
        <div className="py-20 text-center">
          <h4 className="text-xl font-semibold">
            {emptyMessage}
          </h4>
        </div>
      ) : (
        <>
          {viewType === "grid" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {children}
            </div>
          ) : (
            <div className="space-y-6">
              {children}
            </div>
          )}

          <div className="mt-10">
            <PackagePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ListingLayout;