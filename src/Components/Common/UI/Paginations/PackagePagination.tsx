"use client";

import { PackagePaginationProps } from "@/types";
import React from "react";
import { svgIcon } from "../../Icons/SvgIcons";

const PackagePagination: React.FC<PackagePaginationProps> = ({
  currentPage = 1,
  totalPages = 4,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange?.(page);
  };

  return (
    <div
      className="pagination-area mt-60 wow animate fadeInUp"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      {/* Prev Button */}
      <div className="paginations-button">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleClick(currentPage - 1);
          }}
        >
          {svgIcon.travelrightarrow}
          Prev
        </a>
      </div>

      {/* Page Numbers */}
      <ul className="paginations">
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(page);
                }}
              >
                {String(page).padStart(2, "0")}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Next Button */}
      <div className="paginations-button">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleClick(currentPage + 1);
          }}
        >
          Next
          {svgIcon.travelleftarrow}
        </a>
      </div>
    </div>
  );
};

export default PackagePagination;
