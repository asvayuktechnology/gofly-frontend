export interface PackageItem {
  _id: string;
  title: string;
  destination: string;
  country: string;
  pricePerPerson: number;
  durationDays: number;
  category: string;
  images: string[];
  isHotSale: boolean;
  isLastMinuteDeal: boolean;
  isOneDayTrip: boolean;
  isActive: boolean;
  createdAt: string;
   PackageItem?: string;
   durationNights?:number;
   bannerImages?: string[];
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