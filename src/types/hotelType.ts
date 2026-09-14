import { HotelCategoryValue } from "@/utils";

export interface HotelItem {
  _id: string;
  name: string;
  slug?: string;
  propertyType?: HotelCategoryValue;
  starRating?: number;
  city?: string;
  country?: string;
  destination?: any;
  pricePerNight: number;
  originalPricePerNight?: number;
  discountPercent?: number;
  currency?: string;
  image?: string;
  bannerImages?: string[];
  galleryImages?: string[];
  rating?: number;
  totalReviews?: number;
  amenities?: { category: string; items: string[] }[];
  cancellationPolicy?: string;
  isActive?: boolean;
  createdAt?: string;
}

export interface HotelListResponse {
  httpStatus: number;
  message: string;
  data: HotelItem[];
  totalCount: number;
  currentCount: number;
}

export interface HotelQueryParams {
  keyword?: string;
  destination?: string;
  city?: string;
  country?: string;
  propertyType?: (HotelCategoryValue | string)[];
  amenities?: string[];
  minPrice?: number;
  maxPrice?: number;
  starRating?: number;
  sortBy?: string;
  page?: number;
  limit?: number;
}

export interface HotelFilterOption {
  name: string;
  value: string;
  count: number;
}

export interface HotelFiltersResponse {
  httpStatus: number;
  message: string;
  data: {
    categories: HotelFilterOption[];
    amenities: HotelFilterOption[];
  };
}

export interface CheckAvailabilityPayload {
  destinationId: string;
  checkIn: string; // ISO date string YYYY-MM-DD
  checkOut: string;
  adults?: number;
  children?: number;
  rooms?: number;
}

export interface CheckAvailabilityResponse {
  httpStatus: number;
  message: string;
  data: {
    available: boolean;
    reason?: string;
    destinationId: string;
    destination?: any;
    checkIn: string;
    checkOut: string;
    nights: number;
    rooms: number;
    adults: number;
    children: number;
    count?: number;
    hotels: HotelItem[];
  };
}
