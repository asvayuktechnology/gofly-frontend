// types/successStoryType.ts

export interface VisaCategory {
  _id: string;
  name: string;
}

export interface SuccessStory {
  _id: string;
  visaCategoryId: string;
  file: string;
  review: string;
  name: string;
  designation: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  visaCategory: VisaCategory;
}

export interface SuccessStoriesResponse {
  httpStatus: number;
  message: string;
  data: SuccessStory[];
  totalCount: number;
  currentCount: number;
}