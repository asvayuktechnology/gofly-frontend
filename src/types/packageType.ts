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
  rating?: string;
  isHotSale?: boolean;
  isLastMinuteDeal?: boolean;
  isOneDayTrip?: boolean;
}

export interface PackageResponse {
  data: Package[];
  totalCount: number;
  currentCount: number;
}

export interface EnquiryPayload {
  packageId?: string;
  fullName: string;
  phone: string;
  email: string;
  details: string;
  numberOfPeople:number
  travelDate:Date
}

export interface EnquiryResponse {
  _id: string;
  packageId?: string;
  fullName: string;
  phone: string;
  email: string;
  details: string;
  createdAt: string;
  updatedAt: string;
}