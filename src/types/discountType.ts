export interface DiscountItem {
  _id: string;
  title: string;
  description: string;
  couponCode: string;
  discountType: "flat" | "percentage";
  discountValue: number;
  maxDiscountAmount: number;
  file?: string;
applicablePackage?:string
  appliesTo: "all" | "specific_packages" | "specific_categories";

  applicablePackages: string[];
  applicableCategories: string[];

  usageLimit: number;
  usedCount: number;
  perUserLimit: number;

  startDate: string;
  endDate: string;

  minOrderAmount: number;
  minPersons: number;

  isActive: boolean;
  isPublic: boolean;
  isAutoApply: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface DiscountResponse {
  httpStatus: number;
  message: string;
  data: DiscountItem[];
  totalCount: number;
  currentCount: number;
}