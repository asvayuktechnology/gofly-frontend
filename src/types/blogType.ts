// types/blogType.ts

export interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  content: string;
  description: string;
  country: string;
  image: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BlogResponse {
  message: string;
  data: BlogItem[];
  totalCount: number;
  currentCount: number;
}