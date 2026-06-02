import toast from "react-hot-toast";
import moment from 'moment';
import { toastSuccess } from "./toast";





export type Captcha = {
  question: string;
  answer: number;
};

export function generateCaptcha(): Captcha {
  const num1 = Math.floor(Math.random() * 10) + 1; // 1 to 10
  const num2 = Math.floor(Math.random() * 10) + 1; // 1 to 10

  const question = `${num1} + ${num2}`;
  const answer = num1 + num2;

  return { question, answer };
}

export const isOver18YearsOld = (dateString: string): boolean => {
  const today = new Date();
  const birthDate = new Date(dateString);

  // Calculate age
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Adjust age if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age >= 18;
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
   toastSuccess("Copy successfully");
    return true;
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return false;
  }
};

export function formatAmountToMillions(amount: number): string {
  const inMillions = amount / 1_000_000;

  // Format to 2 decimal places and include commas
  const formatted = inMillions.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `${formatted}M`;
}

export function dateTimeFormat(value: string): string {
  return moment(value).format('D MMMM YYYY, h:mm A');
}
export function dateFormat(value: string): string {
  return moment(value).format('DD MMMM YYYY');
}

export const extractYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const getYouTubeThumbnailUrl = (videoId: string, quality: 'maxresdefault' | 'hqdefault' = 'maxresdefault') => {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

export const maskEmail = (email: string): string => {
  const [localPart, domain] = email.split("@");

  if (!localPart || !domain) return email;

  // Show first 2 characters, mask the rest (at least 2 *)
  const visibleLength = Math.min(2, localPart.length);
  const visible = localPart.slice(0, visibleLength);
  const maskedLength = Math.max(2, localPart.length - visibleLength);
  const masked = "*".repeat(maskedLength);

  return `${visible}${masked}@${domain}`;
};

export const maskWallet = (text: string): string => {
  if (!text || text.length <= 10) return text; // Return as-is if too short to mask
  
  const firstFive = text.slice(0, 5);
  const lastFive = text.slice(-5);
  
  return `${firstFive}****${lastFive}`; // Always shows exactly 4 stars in middle
};


// export const SORT_OPTIONS = [
//   { label: "Default", value: "default" },
//   { label: "Latest", value: "latest" },
//   { label: "Price High", value: "price_high" },
//   { label: "Price Low", value: "price_low" },
//   { label: "Popular", value: "popular" },
//   { label: "Duration Low", value: "duration_low" },
//   { label: "Duration High", value: "duration_high" },
// ] as const;
export const SORT_OPTIONS = [
  { label: "Default", value: "default" },
  { label: "Latest", value: "latest" },
  { label: "Price High", value: "price_high" },
  { label: "Price Low", value: "price_low" },
  { label: "Popular", value: "popular" },
  { label: "Duration Low", value: "duration_low" },
  { label: "Duration High", value: "duration_high" },
];
export const categoryOptions = [
  {
    label: "Family Tour",
    value: "family_tour",
  },
  {
    label: "Honeymoon Tour",
    value: "honeymoon_tour",
  },
  {
    label: "Adventure Tour",
    value: "adventure_tour",
  },
  {
    label: "Group Tour",
    value: "group_tour",
  },
  {
    label: "Solo Tour",
    value: "solo_tour",
  },
];


export enum VisaType {
  TOURIST_VISA = 'tourist_visa',
  TRAVEL_VISA = 'travel_visa',
  BUSINESS_VISA = 'business_visa',
  STUDENT_VISA = 'student_visa',
  WORK_VISA = 'work_visa',
  MEDICAL_VISA = 'medical_visa',
  SPOUSE_VISA = 'spouse_visa',
}

export const regionLabels: Record<string, string> = {
  europe: "Europe",
  asia: "Asia",
  middle_east: "Middle East",
  africa: "Africa",
  north_america: "North America",
  oceania: "Oceania",
};

export type TabKey =
  | "europe"
  | "asia"
  | "middle_east"
  | "africa"
  | "north_america"
  | "oceania";

export const TABS: { id: TabKey; label: string }[] = [
  { id: "europe", label: "Europe" },
  { id: "asia", label: "Asia" },
  { id: "middle_east", label: "Middle East" },
  { id: "africa", label: "Africa" },
  { id: "north_america", label: "North America" },
  { id: "oceania", label: "Oceania" },
];
