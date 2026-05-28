export interface VisaCategory {
  _id: string;
  name: string;
  country: string;
  flagImage: string;
  coverImage: string;
  description: string;

  processingTime: {
    min: number;
    max: number;
  };

  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface VisaCategoryResponse {
  httpStatus: number;
  message: string;
  data: VisaCategory[];
  totalCount: number;
  currentCount: number;
}

export interface VisaRequirement {
  _id: string;
  documents: string[];
  additionalReqs: string[];
  conditionalReqs: string[];
  rejectionReasons: string[];
  importantNotes: string[];

  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface VisaTypeItem {
  _id: string;
  visaType: string;
  icon: string;
  price: number;
  priceLabel: string;
  validity: string;
  entryType: string;
  processingTime: string;
  applyOnlineUrl: string;

  requirement?: VisaRequirement;
}

export interface VisaCategory {
  _id: string;
  name: string;
  coverImage: string;
  totalVisaTypes: number;

  visaTypes: VisaTypeItem[];
}

export interface VisaCategoryResponse {
  httpStatus: number;
  message: string;
  data: VisaCategory[];
}

export interface SingleVisaCategoryResponse {
  httpStatus: number;
  message: string;
  data: VisaCategory;
}

export interface VisaSetting {
  _id: string;
  coverImage: string;
  heading: string;
  subTitle: string;
  faqs: {
    question: string;
    answer: string;
  }[];
email:string
visaAssistance:string
}

export interface VisaSettingsResponse {
  data: VisaSetting[];
  httpStatus: number;
  message: string;
}

export interface CreateVisaRequestPayload {
  visaCategory: string;
  visaType: string;
  fullName: string;
  dob: string;
  phone: string;
  email: string;
  notes?: string;
  document?: File | null;
}
