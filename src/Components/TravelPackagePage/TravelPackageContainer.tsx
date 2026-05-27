"use client";

import { useState } from "react";

import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";
import FilterSidebar from "@/Components/Common/FilterSidebar";
import PackageCard from "@/Components/Common/UI/Cards/PackageCard";

import { usePackages } from "@/services/packageService";
import { useDestinationsWithCount } from "@/services/destinationService";

import { BASE_URL } from "@/lib/const";

interface Props {
    destinationId?: string[];
    category?: string[];
    keyword?: string;
    page?: number;
    limit?: number;
}

export default function TravelPackageContainer({
    destinationId,
    category,
    keyword,
    page = 1,
    limit = 6,
}: Props) {
    const [currentPage, setCurrentPage] = useState(page);

    const { data, isLoading, isError } = usePackages({
        destinationId,
        category,
        keyword,
        page: currentPage,
        limit,
    });

    const { data: destinationData } =
        useDestinationsWithCount({
            page: 1,
            limit: 40,
        });

    const packages = data?.data || [];

    const totalPages = Math.ceil(
        (data?.totalCount || 0) / limit
    );

    return (
        <LeftGridLayout
            data={packages}
            loading={isLoading}
            error={isError}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            sidebar={
                <FilterSidebar
                    destinations={destinationData?.data || []}
                    selectedDestinationIds={destinationId || []}
                    setSelectedDestinationIds={() => {}}
                    selectedCategories={category || []}
                    setSelectedCategories={() => {}}
                />
            }
            renderCard={(pkg, index, viewType) => {
                let badge = "";

                if (pkg.isHotSale) {
                    badge = "Hot Sale!";
                } else if (pkg.isLastMinuteDeal) {
                    badge = "Last Minute Deal";
                } else if (pkg.isOneDayTrip) {
                    badge = "One Day Trip";
                }

                return (
                    <PackageCard
                        key={pkg._id}
                        title={pkg.title}
                        location={pkg.country}
                        duration={`${pkg.durationDays} Days`}
                        price={pkg.pricePerPerson}
                        image={`${BASE_URL}/${pkg.image}`}
                        badge={badge}
                        link={`/travel-package/details/${pkg._id}`}
                        experiences="Adventure"
                        inclusions="Meals Included"
                        delay={200 + index * 100}
                        viewType={viewType}
                    />
                );
            }}
        />
    );
}