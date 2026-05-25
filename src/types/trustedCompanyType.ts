export interface TrustedCompanyItem {
  _id: string;
  file: string;
  link: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TrustedCompanyResponse {
  data: TrustedCompanyItem[];
  httpStatus: number;
  message: string;
}