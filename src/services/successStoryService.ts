// services/successStoryService.ts

import { useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import { SuccessStoriesResponse } from "@/types/successStoryType";

// ─────────────────────────────────────────────
// GET SUCCESS STORIES
// ─────────────────────────────────────────────
export const getSuccessStories =
  async (): Promise<SuccessStoriesResponse> =>
    HttpService.get("/success-stories").then(
      (res) => res.data
    );

// ─────────────────────────────────────────────
// USE SUCCESS STORIES
// ─────────────────────────────────────────────
export const useSuccessStories = () =>
  useQuery({
    queryKey: ["success-stories"],
    queryFn: getSuccessStories,
  });