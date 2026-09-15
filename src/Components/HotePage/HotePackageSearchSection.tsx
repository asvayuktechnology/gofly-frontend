"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import HotelFilterSidebar from "./HotelFilterSidebar";
import SortingSection from "@/Components/Common/SortingSection";
import PackagePagination from "@/Components/Common/UI/Paginations/PackagePagination";

import { useHotelFilters, useHotels } from "@/services/hotelService";
import { useSingleDestination } from "@/services/destinationService";

import { BASE_URL } from "@/lib/const";
import HotelCard from "../Common/UI/Cards/HotelPackageCard";

const HOTEL_SORT_OPTIONS = [
  { label: "Default", value: "default" },
  { label: "Latest", value: "latest" },
  { label: "Price High", value: "price_high" },
  { label: "Price Low", value: "price_low" },
];

interface Props {
  propertyType?: string[];
  amenities?: string[];
  keyword?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  minPrice?: number;
  maxPrice?: number;
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  rooms?: number;
  adults?: number;
  children?: number;
}

export default function HotelPackageSearchSection({
  propertyType = [],
  amenities = [],
  keyword,
  page,
  limit = 10,
  sortBy,
  minPrice,
  maxPrice,
  destination,
  checkIn,
  checkOut,
  rooms,
  adults,
  children,
}: Props) {
  const [sortByState, setSortByState] = useState<string>(sortBy || "default");
  const [currentPage, setCurrentPage] = useState<number>(page || 1);
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const pathname = usePathname();
  const router = useRouter();

  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(propertyType || []);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(amenities || []);
  const [priceMin, setPriceMin] = useState<number | undefined>(minPrice);
  const [priceMax, setPriceMax] = useState<number | undefined>(maxPrice);
  const destinationState = destination;

  // sync when destination/price props change externally (e.g., new search)
  useEffect(() => {
    setCurrentPage(1);
  }, [destination, checkIn, checkOut]);

  // availability search context – now handled by single API (GET /hotels with checkIn/checkOut)
  const hasAvailabilitySearch = !!(destination && checkIn && checkOut);

  const { data: destinationDetail } = useSingleDestination(destination || "");
  const destinationName = (destinationDetail as any)?.name || "";

  // compute nights for header display (client-side, backend also returns meta.nights)
  const nights =
    hasAvailabilitySearch && checkIn && checkOut
      ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
      : undefined;

  useEffect(() => {
    setSelectedPropertyTypes(propertyType || []);
  }, [JSON.stringify(propertyType)]);
  useEffect(() => {
    setSelectedAmenities(amenities || []);
  }, [JSON.stringify(amenities)]);
  useEffect(() => {
    setPriceMin(minPrice);
  }, [minPrice]);
  useEffect(() => {
    setPriceMax(maxPrice);
  }, [maxPrice]);
  useEffect(() => {
    setCurrentPage(page || 1);
  }, [page]);
  useEffect(() => {
    if (sortBy) setSortByState(sortBy);
  }, [sortBy]);

  // Reset to page 1 when filters change (except initial)
  useEffect(() => {
    setCurrentPage(1);
  }, [JSON.stringify(selectedPropertyTypes), JSON.stringify(selectedAmenities), priceMin, priceMax]);

  // Update URL - preserve availability params (destination, checkIn, checkOut, rooms, adults, children) + filters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.delete("propertyType");
    params.delete("amenities");
    selectedPropertyTypes.forEach((v) => params.append("propertyType", v));
    selectedAmenities.forEach((v) => params.append("amenities", v));
    if (keyword) params.set("keyword", keyword);
    else params.delete("keyword");
    if (priceMin !== undefined) params.set("minPrice", String(priceMin));
    else params.delete("minPrice");
    if (priceMax !== undefined) params.set("maxPrice", String(priceMax));
    else params.delete("maxPrice");
    if (sortByState && sortByState !== "default") params.set("sortBy", sortByState);
    else params.delete("sortBy");
    if (currentPage && currentPage > 1) params.set("page", String(currentPage));
    else params.delete("page");
    if (destination) params.set("destination", destination);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (rooms !== undefined) params.set("rooms", String(rooms));
    if (adults !== undefined) params.set("adults", String(adults));
    if (children !== undefined) params.set("children", String(children));

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    const currentUrl = window.location.pathname + window.location.search;
    if (currentUrl !== newUrl) {
      window.history.replaceState({}, "", newUrl);
    }
  }, [pathname, selectedPropertyTypes, selectedAmenities, keyword, priceMin, priceMax, sortByState, currentPage, destination, checkIn, checkOut, rooms, adults, children]);

  // SINGLE API – GET /hotels now handles availability + all filters together (backend findAll merged)
  const { data, isLoading, isError } = useHotels({
    propertyType: selectedPropertyTypes.length ? (selectedPropertyTypes as any) : undefined,
    amenities: selectedAmenities.length ? selectedAmenities : undefined,
    destination: destinationState,
    keyword,
    minPrice: priceMin,
    maxPrice: priceMax,
    sortBy: sortByState !== "default" ? sortByState : undefined,
    page: currentPage,
    limit,
    checkIn: hasAvailabilitySearch ? checkIn : undefined,
    checkOut: hasAvailabilitySearch ? checkOut : undefined,
    adults: hasAvailabilitySearch ? (adults ?? 1) : undefined,
    children: hasAvailabilitySearch ? (children ?? 0) : undefined,
    rooms: hasAvailabilitySearch ? (rooms ?? 1) : undefined,
  });

  // Filters from backend - /hotels/filters (categories & amenities)
  const { data: filterData, isLoading: isLoadingFilters } = useHotelFilters();
  const filterCategories = filterData?.data?.categories || [];
  const filterAmenities = filterData?.data?.amenities || [];

  const totalPages = Math.ceil((data?.totalCount || 0) / (limit || 10));
  const hotels = data?.data || [];
  const totalCount = data?.totalCount || 0;

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearSearch = () => {
    router.push("/hotel");
  };

  const handleClearFiltersOnly = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("destination");
    params.delete("checkIn");
    params.delete("checkOut");
    params.delete("rooms");
    params.delete("adults");
    params.delete("children");
    params.delete("page");
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  };

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        <h4>Loading hotels...</h4>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center text-red-500">
        <h4>Failed to load hotels</h4>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-4">
        <HotelFilterSidebar
          categories={filterCategories}
          amenities={filterAmenities}
          isLoadingFilters={isLoadingFilters}
          selectedPropertyTypes={selectedPropertyTypes}
          setSelectedPropertyTypes={setSelectedPropertyTypes}
          selectedAmenities={selectedAmenities}
          setSelectedAmenities={setSelectedAmenities}
          minPrice={priceMin}
          maxPrice={priceMax}
          setMinPrice={setPriceMin}
          setMaxPrice={setPriceMax}
        />
      </div>

      <div className="lg:col-span-8">
        {/* Dynamic header showing destination, checkIn, checkOut, rooms, guests – now from single API context */}
        {/* {hasAvailabilitySearch && (
          <div className="mb-4 rounded-xl bg-blue-50 border border-blue-100 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900">
                {destinationName ? `Hotels in ${destinationName}` : "Available Hotels"}
                {nights ? ` • ${nights} Nights` : ""}
              </h4>
              <p className="text-xs text-gray-600 mt-1 flex flex-wrap gap-x-3 gap-y-1">
                {destinationName && <span>Destination: <strong className="text-gray-800">{destinationName}</strong></span>}
                {checkIn && checkOut && <span>Dates: <strong className="text-gray-800">{checkIn} → {checkOut}</strong></span>}
                {rooms !== undefined && <span>Rooms: <strong className="text-gray-800">{rooms}</strong></span>}
                {(adults !== undefined || children !== undefined) && (
                  <span>
                    Guests: <strong className="text-gray-800">{adults ?? 1} Adults{children ? `, ${children} Children` : ""}</strong>
                  </span>
                )}
              </p>
            </div>
            <button
              onClick={handleClearSearch}
              className="shrink-0 inline-flex items-center justify-center rounded-full bg-white border border-blue-200 px-4 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
            >
              Clear Search & View All Hotels
            </button>
          </div>
        )} */}

        <div className="package-grid-page">
          <SortingSection
            totalJourneys={totalCount}
            onSortChange={(value) => setSortByState(value)}
            onViewChange={(v) => setViewType(v)}
            onFilterClick={() => console.log("filter")}
            sortOptions={HOTEL_SORT_OPTIONS}
          />
        </div>

        {hotels.length === 0 ? (
          <div className="py-16 text-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6">
            <h4 className="text-xl font-semibold text-gray-900">No Hotels Found</h4>
            <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
              {hasAvailabilitySearch
                ? `No hotels available for ${destinationName || "this destination"} on selected dates with current filters. Try clearing filters or dates.`
                : "No hotels match your current filters. Try clearing filters or searching with different criteria."}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {hasAvailabilitySearch ? (
                <>
                  <button
                    onClick={handleClearSearch}
                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
                  >
                    View All Hotels
                  </button>
                  <button
                    onClick={handleClearFiltersOnly}
                    className="inline-flex items-center justify-center rounded-full bg-white border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
                  >
                    Clear Search Only
                  </button>
                </>
              ) : (
                <button
                  onClick={handleClearSearch}
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
                >
                  Clear Filters & View All Hotels
                </button>
              )}
            </div>
          </div>
        ) : (
          <>
            {viewType === "grid" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {hotels.map((hotel) => (
                  <HotelCard
                    key={hotel._id}
                    image={hotel.image ? `${BASE_URL}/${hotel.image}` : "/assets/img/placeholder.jpg"}
                    title={hotel.name}
                    location={hotel.city || hotel.country || ""}
                    rating={String(hotel.rating || hotel.starRating || "4.5")}
                    price={`$${hotel.pricePerNight}`}
                    badge={hotel.propertyType ? HOTEL_SORT_LABEL(hotel.propertyType) : ""}
                    detailUrl={`/hotel/details/${hotel._id}`}
                    features={hotel.amenities?.[0]?.items?.slice(0, 4) || ["Free WiFi", "Airport Transfer", "Meals Included"]}
                    cancellationText={hotel.cancellationPolicy || "Free Cancellation Policy"}
                  />
                ))}
              </div>
            )}

            {viewType === "list" && (
              <div className="space-y-6">
                {hotels.map((hotel) => (
                  <HotelCard
                    key={hotel._id}
                    image={hotel.image ? `${BASE_URL}/${hotel.image}` : "/assets/img/placeholder.jpg"}
                    title={hotel.name}
                    location={hotel.city || hotel.country || ""}
                    rating={String(hotel.rating || hotel.starRating || "4.5")}
                    price={`$${hotel.pricePerNight}`}
                    badge={hotel.propertyType ? HOTEL_SORT_LABEL(hotel.propertyType) : ""}
                    detailUrl={`/hotel/details/${hotel._id}`}
                    features={hotel.amenities?.[0]?.items?.slice(0, 4) || ["Free WiFi", "Airport Transfer", "Meals Included"]}
                    cancellationText={hotel.cancellationPolicy || "Free Cancellation Policy"}
                    layout="list"
                  />
                ))}
              </div>
            )}

            <div className="mt-10">
              <PackagePagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function HOTEL_SORT_LABEL(v: string) {
  const map: Record<string, string> = {
    hotel: "Hotel",
    resort: "Resort",
    apartment: "Apartment",
    villa: "Villa",
    hostel: "Hostel",
    guest_house: "Guest House",
  };
  return map[v] || v;
}
