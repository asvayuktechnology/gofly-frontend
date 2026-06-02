import { useMutation, useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import { EnquiryPayload, EnquiryResponse, PackageItem, PackageListResponse, PackageResponse } from "@/types/packageType";



// ─────────────────────────────────────────────
// GET PACKAGE LIST
// ─────────────────────────────────────────────
// export const getPackages = async (): Promise<PackageListResponse> =>
//   HttpService.get("/packages").then((res) => res.data);

// ─────────────────────────────────────────────
// GET SINGLE PACKAGE
// ─────────────────────────────────────────────
export const getSinglePackage = async (id: string) => {
  if (!id) {
    throw new Error("Package ID is required");
  }

  const res = await HttpService.get(`/packages/${id}`);

  return {
    ...res.data.data,
    relevantPackages: res.data.relevantPackages || [],
  };
};
// ─────────────────────────────────────────────
// USE PACKAGE LIST
// ─────────────────────────────────────────────
// export const usePackages = () =>
//   useQuery({
//     queryKey: ["packages"],
//     queryFn: getPackages,
//   });

// ─────────────────────────────────────────────
// USE SINGLE PACKAGE
// ─────────────────────────────────────────────
export const useSinglePackage = (id: string) =>
  useQuery({
    queryKey: ["package", id],

    // important fix
    queryFn: async () => await getSinglePackage(id),

    // prevent undefined api call
    enabled: !!id,
  });

export interface PackageQueryParams {
  destinationId?: string[];
    category?: string[];
  keyword?: string;
  startDate?: string;
  endDate?: string;
  minPrice?: number;
  maxPrice?: number;
  minDays?: number;
  maxDays?: number;
  sortBy?: string;
  page?: number;
  limit?: number;
  isActive?: boolean;
}

// ─────────────────────────────────────────────
// GET PACKAGE LIST
// ─────────────────────────────────────────────

export const getPackages = async (
  params?: PackageQueryParams
): Promise<PackageResponse> => {
  const queryParams = new URLSearchParams();

  // multiple destination ids
  params?.destinationId?.forEach((id) => {
    if (id) {
      queryParams.append("destinationId", id);
    }
  });
 params?.category?.forEach((category) => {
  if (category) {
    queryParams.append(
      "category",
      category
    );
  }
});

  // keyword
  if (params?.keyword) {
    queryParams.append(
      "keyword",
      params.keyword
    );
  }

  // dates
  if (params?.startDate) {
    queryParams.append(
      "startDate",
      params.startDate
    );
  }

  if (params?.endDate) {
    queryParams.append(
      "endDate",
      params.endDate
    );
  }

  // price
  if (params?.minPrice !== undefined) {
    queryParams.append(
      "minPrice",
      String(params.minPrice)
    );
  }

  if (params?.maxPrice !== undefined) {
    queryParams.append(
      "maxPrice",
      String(params.maxPrice)
    );
  }

  // days
  if (params?.minDays !== undefined) {
    queryParams.append(
      "minDays",
      String(params.minDays)
    );
  }

  if (params?.maxDays !== undefined) {
    queryParams.append(
      "maxDays",
      String(params.maxDays)
    );
  }

  // sort
  if (params?.sortBy) {
    queryParams.append(
      "sortBy",
      params.sortBy
    );
  }

  // page
  if (params?.page) {
    queryParams.append(
      "page",
      String(params.page)
    );
  }

  // limit
  if (params?.limit) {
    queryParams.append(
      "limit",
      String(params.limit)
    );
  }

  // active
  if (params?.isActive !== undefined) {
    queryParams.append(
      "isActive",
      String(params.isActive)
    );
  }

  const res = await HttpService.get(
    `/packages?${queryParams.toString()}`
  );

  return res.data;
};



export const postEnquiry = async (
  payload: EnquiryPayload
): Promise<EnquiryResponse> => {
  const res = await HttpService.post(
    "/packages-enquiry",
    payload
  );

  return res.data.data;
};


export const usePostEnquiry = () =>
  useMutation({
    mutationFn: postEnquiry,
  });
// ─────────────────────────────────────────────
// USE PACKAGES
// ─────────────────────────────────────────────

export const usePackages = (
  params?: PackageQueryParams
) =>
  useQuery({
    queryKey: ["packages", params],

    queryFn: () => getPackages(params),
  });
