// types/destinationType.ts

export interface DestinationItem {
  _id: string;
  name: string;
  country: string;
  region:
    | "europe"
    | "asia"
    | "middle_east"
    | "africa"
    | "north_america"
    | "oceania";

  images: string[];
  totalTours: number;
  totalDepartures: number;
  guestsTravelled: number;
  isActive: boolean;
  createdAt: string;
  capital?:string
  currency?:string
  language?:string
  description?:string
  bestTimeToVisit?:[]
   faqs?:[]
}

export interface DestinationResponse {
  httpStatus: number;
  message: string;
  data: DestinationItem[];
  totalCount: number;
  currentCount: number;
}
export interface Destination {
  _id: string;
  name: string;
  country: string;
  count: number;
}

export interface DestinationRegion {
  region: string;
  destinations: Destination[];
}

export interface DestinationWithCountResponse {
  httpStatus: number;
  message: string;
  data: DestinationRegion[];
  totalCount: number;
  currentCount: number;
}

// export interface DestinationItem {
//   _id: string;
//   name: string;
//   region: string;
//   image?: string;
// }

export interface DestinationResponse {
  data: DestinationItem[];
}

export interface DestinationInfoItem {
    label: string;
    value: string;
    tooltip?: string;
    icon?: React.ReactNode;
}

export interface TouristPlace {
    title: string;
    image: string;
    href?: string;
    gallery?: string[];
}

export interface DestinationDetailsSectionProps {
    id?: string;
    title?: string;
    description?: string;
    destinationInfo?: DestinationInfoItem[];
    touristPlaces?: TouristPlace[];
}