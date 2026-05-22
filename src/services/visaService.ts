import { useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";

import {
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
  id: string
) => {
  const res = await HttpService.get(
    `/visa/categories/detail/${id}`
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



export const useVisaCategoryDetails = (id: string) =>
  useQuery({
    queryKey: ["visa-category-details", id],
    queryFn: () => getVisaCategoryDetails(id),
    enabled: !!id,
  });

  export const getVisaSettings =
  async (): Promise<VisaSettingsResponse> =>
    HttpService.get("/settings/visa").then(
      (res) => res.data
    );

// ─────────────────────────────────────────────
// USE VISA SETTINGS
// ─────────────────────────────────────────────

export const useVisaSettings = () =>
  useQuery({
    queryKey: ["visa-settings"],
    queryFn: getVisaSettings,
  });