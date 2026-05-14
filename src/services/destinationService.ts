// services/destinationService.ts

import { useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import {
  DestinationItem,
  DestinationResponse,
} from "@/types/destinationType";

// ─────────────────────────────────────────────
// GET DESTINATIONS
// ─────────────────────────────────────────────

export const getDestinations = async (params?: {
  region?: string;
  isFeatured?: boolean;
  limit?: number;
}): Promise<DestinationResponse> => {
  return HttpService.get("/destinations", {
    params,
  }).then((res) => res.data);
};

// ─────────────────────────────────────────────
// USE DESTINATIONS
// ─────────────────────────────────────────────

export const useDestinations = (params?: {
  region?: string;
  isFeatured?: boolean;
  limit?: number;
}) =>
  useQuery({
    queryKey: ["destinations", params],
    queryFn: () => getDestinations(params),
  });
// ─────────────────────────────────────────────
// GET SINGLE DESTINATION
// ─────────────────────────────────────────────

export const getSingleDestination = async (
  id: string
): Promise<DestinationItem> =>
  HttpService.get(`/destinations/${id}`).then(
    (res) => res.data.data
  );

// ─────────────────────────────────────────────
// USE SINGLE DESTINATION
// ─────────────────────────────────────────────

export const useSingleDestination = (id: string) =>
  useQuery({
    queryKey: ["destination", id],
    queryFn: () => getSingleDestination(id),
    enabled: !!id,
  });