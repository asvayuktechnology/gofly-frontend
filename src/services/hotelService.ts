import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import { CheckAvailabilityPayload, CheckAvailabilityResponse, HotelFiltersResponse, HotelItem, HotelListResponse, HotelQueryParams } from "@/types/hotelType";



export const getHotels = async (params?: HotelQueryParams): Promise<HotelListResponse> => {
  const queryParams = new URLSearchParams();

  if (params?.keyword) queryParams.append("keyword", params.keyword);
  if (params?.destination) queryParams.append("destination", params.destination);
  if (params?.city) queryParams.append("city", params.city);
  if (params?.country) queryParams.append("country", params.country);
  if (params?.starRating !== undefined) queryParams.append("starRating", String(params.starRating));
  if (params?.minPrice !== undefined) queryParams.append("minPrice", String(params.minPrice));
  if (params?.maxPrice !== undefined) queryParams.append("maxPrice", String(params.maxPrice));
  if (params?.sortBy) queryParams.append("sortBy", params.sortBy);
  if (params?.page) queryParams.append("page", String(params.page));
  if (params?.limit) queryParams.append("limit", String(params.limit));

  params?.propertyType?.forEach((v) => {
    if (v) queryParams.append("propertyType", v);
  });

  params?.amenities?.forEach((v) => {
    if (v) queryParams.append("amenities", v);
  });

  const res = await HttpService.get(`/hotels?${queryParams.toString()}`);
  return res.data;
};

export const useHotels = (params?: HotelQueryParams) =>
  useQuery({
    queryKey: ["hotels", params],
    queryFn: () => getHotels(params),
    placeholderData: keepPreviousData,
  });

export const getHotelById = async (id: string): Promise<HotelItem> => {
  const res = await HttpService.get(`/hotels/${id}`);
  return res.data.data;
};

export const useHotel = (id: string) =>
  useQuery({
    queryKey: ["hotel", id],
    queryFn: () => getHotelById(id),
    enabled: !!id,
  });

// ─── Filters (categories + amenities from backend) ──────────────────


export const getHotelFilters = async (): Promise<HotelFiltersResponse> => {
  const res = await HttpService.get(`/hotels/filters`);
  return res.data;
};

export const useHotelFilters = () =>
  useQuery({
    queryKey: ["hotel-filters"],
    queryFn: () => getHotelFilters(),
    staleTime: 1000 * 60 * 5, // 5 min cache, filters rarely change
  });

// ─── Check Availability (destination-based) ──────────────────

export const checkHotelAvailability = async (payload: CheckAvailabilityPayload): Promise<CheckAvailabilityResponse> => {
  const res = await HttpService.get(`/hotels/check-availability`, payload);
  return res.data;
};

export const useCheckHotelAvailability = () =>
  useMutation({
    mutationFn: (payload: CheckAvailabilityPayload) => checkHotelAvailability(payload),
  });

// ─── Hotel Enquiry (public POST) ──────────────────
export interface HotelEnquiryPayload {
  hotelId: string;
  fullName: string;
  email: string;
  numberOfPeople: number;
  bookingDate: string | Date;
  bookingNote: string;
}

export const postHotelEnquiry = async (payload: HotelEnquiryPayload) => {
  const res = await HttpService.post(`/hotel-enquiry`, payload);
  return res.data;
};

export const usePostHotelEnquiry = () =>
  useMutation({
    mutationFn: postHotelEnquiry,
  });

// query version for auto-fetch when params present (POST via query)
export const useHotelAvailabilityQuery = (payload?: CheckAvailabilityPayload, enabled = true) =>
  useQuery({
    queryKey: ["hotel-availability", payload],
    queryFn: () => checkHotelAvailability(payload!),
    enabled: !!payload?.destinationId && !!payload?.checkIn && !!payload?.checkOut && enabled,
    staleTime: 1000 * 60 * 2,
  });
