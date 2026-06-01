"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import FilterSidebar from "@/Components/Common/FilterSidebar";
import SortingSection from "@/Components/Common/SortingSection";
import PackageCard from "@/Components/Common/UI/Cards/PackageCard";
import PackagePagination from "@/Components/Common/UI/Paginations/PackagePagination";

import { usePackages } from "@/services/packageService";
import { useDestinationsWithCount } from "@/services/destinationService";

import { BASE_URL } from "@/lib/const";
import HotelCard from "../Common/UI/Cards/HotelPackageCard";

interface Props {
    destinationId?: string[];
    category?: string[];
    keyword?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    startDate?: string;
    endDate?: string;
    minPrice?: number;
    maxPrice?: number;
    minDays?: number;
    maxDays?: number;
    isActive?: boolean;
    carddata?: {};
}

export default function HotelPackageSearchSection({
    carddata = [],
    destinationId = [],
    category = [],
    keyword,
    page,
    limit,
    sortBy,
    startDate,
    endDate,
    minPrice,
    maxPrice,
    minDays,
    maxDays,
    isActive,
}: Props) {
    const [sortByState, setSortByState] = useState<string>("default");
    const [currentPage, setCurrentPage] = useState<number>(page || 1);
    const [viewType, setViewType] = useState<"grid" | "list">("grid");
    const pathname = usePathname();
    const [
        selectedDestinationIds,
        setSelectedDestinationIds,
    ] = useState<string[]>([]);

    const [
        selectedCategories,
        setSelectedCategories,
    ] = useState<string[]>(
        category || []
    );

    // sync destination from url
    useEffect(() => {
        setSelectedDestinationIds((prev) => {
            const prevStr = JSON.stringify(prev);
            const nextStr = JSON.stringify(destinationId);

            return prevStr === nextStr ? prev : destinationId;
        });
    }, [destinationId]);

    // Update current page when page prop changes
    useEffect(() => {
        setCurrentPage(page || 1);
    }, [page]);

    // Update URL when filters, sorting, or pagination changes
    useEffect(() => {
        const params = new URLSearchParams();

        selectedDestinationIds.forEach((id) => {
            params.append("destinationId", id);
        });

        selectedCategories.forEach((category) => {
            params.append("category", category);
        });

        if (keyword) {
            params.set("keyword", keyword);
        }

        if (currentPage && currentPage > 1) {
            params.set("page", String(currentPage));
        }

        const queryString = params.toString();
        const newUrl = queryString
            ? `${pathname}?${queryString}`
            : pathname;

        const currentUrl =
            window.location.pathname +
            window.location.search;

        if (currentUrl !== newUrl) {
            window.history.replaceState(
                {},
                "",
                newUrl
            );
        }
    }, [
        pathname,
        selectedDestinationIds,
        selectedCategories,
        keyword,
        currentPage,
    ]);

    useEffect(() => {
        setSelectedCategories((prev) => {
            const prevStr = JSON.stringify(prev);
            const nextStr = JSON.stringify(category || []);

            return prevStr === nextStr ? prev : category || [];
        });
    }, [category]);

    const {
        data,
        isLoading,
        isError,
    } = usePackages({
        destinationId:
            selectedDestinationIds.length > 0
                ? selectedDestinationIds
                : undefined,

        category:
            selectedCategories.length > 0
                ? selectedCategories
                : undefined,

        keyword,

        page: currentPage,

        limit,

        sortBy: sortByState !== "default" ? sortByState : undefined,

        startDate,

        endDate,

        minPrice,

        maxPrice,

        minDays,

        maxDays,

        isActive,
    });

    // destinations api
    const { data: destinationData } =
        useDestinationsWithCount({
            page: 1,
            limit: 40,
        });

    const totalPages = Math.ceil((data?.totalCount || 0) / (limit || 10));
    const packages = data?.data || [];

    // Handle page change
    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        setCurrentPage(newPage);
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (isLoading) {
        return (
            <div className="py-20 text-center">
                <h4>Loading packages...</h4>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="py-20 text-center text-red-500">
                <h4>Failed to load packages</h4>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-4">
                <FilterSidebar
                    destinations={
                        destinationData?.data || []
                    }
                    selectedDestinationIds={
                        selectedDestinationIds
                    }
                    setSelectedDestinationIds={
                        setSelectedDestinationIds
                    }
                    selectedCategories={
                        selectedCategories
                    }
                    setSelectedCategories={
                        setSelectedCategories
                    }
                />
            </div>

            {/* Content */}
            <div className="lg:col-span-8">
                <div className="package-grid-page">
                    <SortingSection
                        totalJourneys={packages.length}
                        onSortChange={(value) => setSortByState(value)}
                        onViewChange={(v) => setViewType(v)}
                        onFilterClick={() => console.log("filter")}
                    />
                </div>

                {packages.length === 0 ? (
                    <div className="py-20 text-center">
                        <h4 className="text-xl font-semibold">
                            No Packages Found
                        </h4>
                    </div>
                ) : (
                    <>
                        {/* Grid View */}
                        {viewType === "grid" && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {packages.map((pkg) => {
                                    let badge = "";

                                    if (pkg.isHotSale) {
                                        badge = "Hot Sale!";
                                    } else if (pkg.isLastMinuteDeal) {
                                        badge = "Last Minute Deal";
                                    } else if (pkg.isOneDayTrip) {
                                        badge = "One Day Trip";
                                    }

                                    return (
                                        <HotelCard
                                            key={pkg._id}
                                            image={`${BASE_URL}/${pkg.image}`}
                                            title={pkg.title}
                                            location={pkg.country}
                                            rating={pkg.rating || "4.5"}
                                            price={`$${pkg.pricePerPerson}`}
                                            badge={badge}
                                            detailUrl={`/travel-package/details/${pkg._id}`}
                                            features={[
                                                `${pkg.durationDays} Days`,
                                                "Meals Included",
                                                "Free WiFi",
                                                "Airport Transfer",
                                            ]}
                                            cancellationText="Free Cancellation Policy"
                                        />
                                    );
                                })}
                            </div>
                        )}

                        {/* List View */}
                        {viewType === "list" && (
                            <div className="space-y-6">
                                {packages.map((pkg) => {
                                    let badge = "";

                                    if (pkg.isHotSale) {
                                        badge = "Hot Sale!";
                                    } else if (pkg.isLastMinuteDeal) {
                                        badge = "Last Minute Deal";
                                    } else if (pkg.isOneDayTrip) {
                                        badge = "One Day Trip";
                                    }

                                    return (
                                        <HotelCard
                                            key={pkg._id}
                                            image={`${BASE_URL}/${pkg.image}`}
                                            title={pkg.title}
                                            location={pkg.country}
                                            rating={pkg.rating || "4.5"}
                                            price={`$${pkg.pricePerPerson}`}
                                            badge={badge}
                                            detailUrl={`/travel-package/details/${pkg._id}`}
                                            features={[
                                                `${pkg.durationDays} Days`,
                                                "Meals Included",
                                                "Free WiFi",
                                                "Airport Transfer",
                                            ]}
                                            cancellationText="Free Cancellation Policy"
                                            layout="list"
                                        />
                                    );
                                })}
                            </div>
                        )}

                        <div className="mt-10">
                            <PackagePagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
