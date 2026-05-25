export interface PackageItem {
  _id: string;
  title: string;
  destination: string;
  country: string;
  pricePerPerson: number;
  durationDays: number;
  category: string;
  images: string[];
    image?: string[];
  isHotSale: boolean;
  isLastMinuteDeal: boolean;
  isOneDayTrip: boolean;
  isActive: boolean;
  createdAt: string;
   PackageItem?: string;
   durationNights?:number;
   bannerImages?: string[];
    badge?: string;
}

export interface PackageListResponse {
  httpStatus: number;
  message: string;
  data: PackageItem[];
  totalCount: number;
  currentCount: number;
}

export interface MutationParams {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export interface Package {
  _id: string;
  title: string;
  country: string;
  durationDays: number;
  pricePerPerson: number;
  image: string;

  isHotSale?: boolean;
  isLastMinuteDeal?: boolean;
  isOneDayTrip?: boolean;
}

export interface PackageResponse {
  data: Package[];
  totalCount: number;
  currentCount: number;
}