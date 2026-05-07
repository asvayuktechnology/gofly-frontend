import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { ReactNode } from "react";

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
  region:
  | "Europe"
  | "Asia"
  | "Middle East"
  | "Africa"
  | "North America"
  | "Oceania";
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
  video?: string;
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
  svgIcon?: ReactNode;
  iconPosition?: "start" | "end";
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

  image: string | string[]; // ✅ supports slider
  badge?: string;

  link?: string; // ✅ optional (fixes your error)

  experiences?: string[]; // ✅ always array (cleaner)
  inclusions?: string[]; // ✅ only for travel

  priceLabel?: string; // ✅ for "Per Person" / "Starting From"

  variant?: "travel" | "experience"; // ✅ future-safe UI control

  delay?: number;
}

export type VisaPackage = {
  id: string;
  title: string;
  processingTime: string;
  image: string;
  href: string;
};

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  highlight?: string;
  variant?: "two" | "three" | "four";
  delay: string;
  icon?: ReactNode;
};

export interface OfferProps {
  offer: Offer;
  priority?: boolean;
};

export interface PopularTravelPackageProps {
  packages?: Packages[];
};

export interface OfferBannerProps {
  backgroundImage: string;
  subtitle?: string;
  title: string;
  authorName?: string;
  authorRole?: string;
  buttonText?: string;
  buttonLink?: string;

}
export interface Partner {
  id: number;
  image: string;
  link?: string;
}
export type BlogCardProps = {
  image: string;
  location: string;
  title: string;
  date: string;
  description: string;
  link: string;
};

export interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
};

export interface CounterItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}
export interface VisaDataItem {
  id: number;
  title: string;
  price: string;
  icon?: ReactNode;
}

export interface InfoListProps {
  items: string[];
  className?: string;
}
export type Story = {
  id: number;
  image?: string;
  video?: string;
  quote?: string;
  name?: string;
  role?: string;
};

export type Office = {
  id: number;
  title: string;
  phone: string;
  address: string;
  variant?: string;
};

export interface ExperienceCardItem {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: string;
  priceLabel: string;
  image: string[];
  badge: string;
  link?: string;
  features: string[];
  isSlider?: boolean;
}