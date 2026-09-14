"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import HotelFilterSidebar from "./HotelFilterSidebar";
import SortingSection from "@/Components/Common/SortingSection";
import PackagePagination from "@/Components/Common/UI/Paginations/PackagePagination";

import { useHotelAvailabilityQuery, useHotelFilters, useHotels } from "@/services/hotelService";
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

  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>(propertyType || []);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(amenities || []);
  const [priceMin, setPriceMin] = useState<number | undefined>(minPrice);
  const [priceMax, setPriceMax] = useState<number | undefined>(maxPrice);
  const destinationState = destination;

  // sync when destination/price props change externally (e.g., new search)
  useEffect(() => {
    setCurrentPage(1);
  }, [destination, checkIn, checkOut]);

  // availability search context (destination + dates + guests)
  const hasAvailabilitySearch = !!(destination && checkIn && checkOut);
  const availabilityPayload = hasAvailabilitySearch
    ? {
        destinationId: destination!,
        checkIn: checkIn!,
        checkOut: checkOut!,
        adults: adults ?? 1,
        children: children ?? 0,
        rooms: rooms ?? 1,
      }
    : undefined;

  const { data: destinationDetail } = useSingleDestination(destination || "");
  const destinationName = (destinationDetail as any)?.name || (availabilityPayload as any)?.destination?.name || ""; // fallback

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

  // Update URL - preserve availability params (destination, checkIn, checkOut, rooms, adults, children)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // update filter params
    // clear old propertyType/amenities then append current
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
    // keep destination/checkIn/checkOut/rooms/adults/children from initial props if present
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
  });

  // Availability query (destination-based check-availability with POST)
  const { data: availabilityData, isLoading: isLoadingAvailability, isError: isAvailabilityError } = useHotelAvailabilityQuery(availabilityPayload, hasAvailabilitySearch);

  // Filters from backend - /hotels/filters (categories & amenities)
  const { data: filterData, isLoading: isLoadingFilters } = useHotelFilters();
  const filterCategories = filterData?.data?.categories || [];
  const filterAmenities = filterData?.data?.amenities || [];

  // Decide data source: if availability search active, use availability hotels (paginated client-side)
  const isAvailabilityMode = hasAvailabilitySearch;
  const availabilityHotels = availabilityData?.data?.hotels || [];
  const availabilityCount = availabilityData?.data?.count ?? availabilityHotels.length;

  // when in availability mode, we still apply client-side pagination on availabilityHotels
  const paginatedAvailabilityHotels = isAvailabilityMode
    ? availabilityHotels.slice((currentPage - 1) * limit, currentPage * limit)
    : [];

  const totalPages = isAvailabilityMode
    ? Math.ceil(availabilityCount / (limit || 10))
    : Math.ceil((data?.totalCount || 0) / (limit || 10));
  const hotels = isAvailabilityMode ? paginatedAvailabilityHotels : data?.data || [];
  const totalCount = isAvailabilityMode ? availabilityCount : data?.totalCount || 0;
  const availabilityDestination = (availabilityData?.data as any)?.destination;

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const combinedLoading = isAvailabilityMode ? isLoadingAvailability : isLoading;
  const combinedError = isAvailabilityMode ? isAvailabilityError : isError;

  if (combinedLoading) {
    return (
      <div className="py-20 text-center">
        <h4>Loading hotels...</h4>
      </div>
    );
  }

  if (combinedError) {
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
        {/* Dynamic header showing destination, checkIn, checkOut, rooms, guests */}
        {isAvailabilityMode && (
          <div className="mb-4 rounded-xl bg-blue-50 border border-blue-100 p-4">
            <h4 className="text-sm font-semibold text-gray-900">
              {destinationName || availabilityDestination?.name ? `Hotels in ${destinationName || availabilityDestination?.name}` : "Available Hotels"}
              {availabilityData?.data?.nights ? ` • ${availabilityData.data.nights} Nights` : ""}
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
              {availabilityData?.data?.available === false && availabilityData?.data?.reason && (
                <span className="text-red-600 font-medium">{availabilityData.data.reason}</span>
              )}
            </p>
          </div>
        )}

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
          <div className="py-20 text-center">
            <h4 className="text-xl font-semibold">No Hotels Found</h4>
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
