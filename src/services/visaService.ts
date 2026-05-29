import { useMutation, useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";

import {
  CreateVisaRequestPayload,
  VisaCategoryResponse,
  VisaSettingsResponse,
} from "@/types/visaType";


// ─────────────────────────────────────────────
// GET VISA CATEGORIES
// ─────────────────────────────────────────────

export const getVisaCategories = async (
  page = 1,
  limit = 20
): Promise<VisaCategoryResponse> =>
  HttpService.get(
    `/visa/categories/all?page=${page}&limit=${limit}`
  ).then((res) => res.data);



// ─────────────────────────────────────────────
// GET SINGLE VISA CATEGORY
// ─────────────────────────────────────────────

export const getVisaCategoryDetails = async (
  categoryId: string,
  visaType?: string
) => {
  const query = new URLSearchParams({
    categoryId,
    ...(visaType ? { visaType } : {}),
  }).toString();
 
  const res = await HttpService.get(
    `/visa/categories/detail?${query}`
  );
 
  return res;
};

// ─────────────────────────────────────────────
// USE VISA CATEGORIES
// ─────────────────────────────────────────────

export const useVisaCategories = (
  page = 1,
  limit = 20
) =>
  useQuery({
    queryKey: ["visa-categories", page, limit],
    queryFn: () => getVisaCategories(page, limit),
  });



  export const useVisaCategoryDetails = (
    categoryId: string,
    visaType?: string
  ) =>
    useQuery({
      queryKey: [
        "visa-category-details",
        categoryId,
        visaType,
      ],
      queryFn: () =>
        getVisaCategoryDetails(
          categoryId,
          visaType
        ),
      enabled: !!categoryId,
    });




  export const getVisaSettings =
  async (): Promise<VisaSettingsResponse> =>
    HttpService.get("/settings/visa").then(
      (res) => res.data
    );


export const useVisaSettings = () =>
  useQuery({
    queryKey: ["visa-settings"],
    queryFn: getVisaSettings,
  });

  export const createVisaRequest = async (
    payload: CreateVisaRequestPayload
    ) => {
    const formData = new FormData();
    
    // Append form fields
    formData.append("visaCategory", payload.visaCategory);
    formData.append("visaType", payload.visaType);
    formData.append("fullName", payload.fullName);
    formData.append("dob", payload.dob);
    formData.append("phone", payload.phone);
    formData.append("email", payload.email);
    
    // Append optional fields
    if (payload.notes?.trim()) {
        formData.append("notes", payload.notes);
    }
    
    if (payload.document && payload.document instanceof File) {
        formData.append("document", payload.document);
    }
    
    const res = await HttpService.post(
        "/visa/request",
        formData,
        {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        }
    );
    
    return res.data;
    };
    
    
    export const useCreateVisaRequest = (
    {
        onSuccess,
        onError,
    }: {
        onSuccess?: (data: any) => void;
        onError?: (error: any) => void;
    } = {}
    ) =>
    useMutation({
        mutationFn: createVisaRequest,
        onSuccess,
        onError,
    });
    