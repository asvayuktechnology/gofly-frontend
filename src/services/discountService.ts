import { useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";

import {
  DiscountItem,
  DiscountResponse,
} from "@/types/discountType";

// ─────────────────────────────────────────────
// GET DISCOUNTS
// ─────────────────────────────────────────────

export const getDiscounts = async (): Promise<DiscountResponse> => {
  return HttpService.get("/discount").then((res) => res.data);
};

// ─────────────────────────────────────────────
// USE DISCOUNTS
// ─────────────────────────────────────────────

export const useDiscounts = () =>
  useQuery({
    queryKey: ["discount"],
    queryFn: getDiscounts,
  });

// ─────────────────────────────────────────────
// GET SINGLE DISCOUNT
// ─────────────────────────────────────────────

export const getSingleDiscount = async (
  id: string
): Promise<DiscountItem> =>
  HttpService.get(`/discount/${id}`).then(
    (res) => res.data.data
  );

// ─────────────────────────────────────────────
// USE SINGLE DISCOUNT
// ─────────────────────────────────────────────

export const useSingleDiscount = (id: string) =>
  useQuery({
    queryKey: ["discounts", id],
    queryFn: () => getSingleDiscount(id),
    enabled: !!id,
  });