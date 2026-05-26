// services/destinationService.ts

import { useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import {
  DestinationItem,
  DestinationResponse,
  DestinationWithCountResponse,
} from "@/types/destinationType";

// ─────────────────────────────────────────────
// GET DESTINATIONS
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// USE DESTINATIONS
// ─────────────────────────────────────────────


export const getDestinations = async (params?: {
  region?: string;
  isFeatured?: boolean;
  limit?: number;
  keyword?: string;
}): Promise<DestinationResponse> => {
  return HttpService.get("/destinations", {
    params,
  }).then((res) => res.data);
};

export const useDestinations = (params?: {
  region?: string;
  isFeatured?: boolean;
  limit?: number;
  keyword?: string;
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

  export const getDestinationsWithCount = async (params?: {
  page?: number;
  limit?: number;
}): Promise<DestinationWithCountResponse> => {
  return HttpService.get("/destinations/with-count", {
    params,
  }).then((res) => res.data);
};

// ─────────────────────────────────────────────
// USE DESTINATION WITH COUNT
// ─────────────────────────────────────────────

export const useDestinationsWithCount = (params?: {
  page?: number;
  limit?: number;
}) =>
  useQuery({
    queryKey: ["destinations-with-count", params],
    queryFn: () => getDestinationsWithCount(params),
  });