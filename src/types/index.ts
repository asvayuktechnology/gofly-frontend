export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  pricePerPerson: number;
  originalPrice?: number;
  discountPercent?: number;
  isHotSale?: boolean;
  images: string[];
  category: "popular" | "lastMinute" | "oneDay";
  experience: string;
  inclusion: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: "Europe" | "Asia" | "Middle East" | "Africa" | "North America" | "Oceania";
  image: string;
  tourCount: number;
  departureCount: number;
  guestCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  title: string;
  review: string;
}

export interface BlogPost {
  id: string;
  location: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  href: string;
}

export interface SearchTabType {
  id: "tours" | "hotels" | "visa" | "experience";
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Packages {
  title: string;
  location: string;
  duration: string; // or more specific if needed
  price: number;
  image: string;
  badge: string;
  link: string;
  experiences: string;
  inclusions: string;
}


export interface Offer {
  id: number;
  image: string;
  link: string;
  alt: string;
}

export type TabKey =
  | "europe"
  | "asia"
  | "middle-east"
  | "africa"
  | "north-america"
  | "oceania";

export interface Destination {
  name: string;
  image: string;
  tours: number;
  departures: number;
  guests: number;
  link: string;
}


export type DestinationMap = Record<TabKey, Destination[]>;

 export interface btnprops {
    link: string;
    text: string;
    className?: string;
}

export interface TooltipProps {
  text1: string;
  text2: string;
  text3: string;
}

export interface PackageCardProps {
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  badge?: string;
  link: string;
  experiences: string;
  inclusions: string;
  delay?: number; // Optional for WOW.js animation
}