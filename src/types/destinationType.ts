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