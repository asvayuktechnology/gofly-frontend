export interface ContactAddress {
  country: string;
  contactNumber: string;
  icon: string;
  address: string;
  mapEmbedUrl: string;
}

export interface ContactData {
  _id: string;
  bannerImage: string;
  addresses: ContactAddress[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ContactResponse {
  httpStatus: number;
  message: string;
  data: ContactData[];
}

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
  agree: boolean;
}

export interface EnquiryResponse {
  _id: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
  agree: boolean;
  createdAt: string;
  updatedAt: string;
}