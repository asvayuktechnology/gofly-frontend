// services/blogService.ts

import { useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import { BlogItem, BlogResponse } from "@/types/blogType";
// import { BlogItem, BlogResponse } from "@/types/blogType";

// ─────────────────────────────────────────────
// GET BLOG LIST
// ─────────────────────────────────────────────
export const getBlogs = async (): Promise<BlogResponse> =>
  HttpService.get("/blog").then((res) => res.data);

// ─────────────────────────────────────────────
// GET SINGLE BLOG
// ─────────────────────────────────────────────
export const getSingleBlog = async (
  slug: string
): Promise<BlogItem> => {
  if (!slug) {
    throw new Error("Blog slug is required");
  }

  const res = await HttpService.get(`/blog/${slug}`);

  return res.data.data;
};

// ─────────────────────────────────────────────
// USE BLOG LIST
// ─────────────────────────────────────────────
export const useBlogs = () =>
  useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

// ─────────────────────────────────────────────
// USE SINGLE BLOG
// ─────────────────────────────────────────────
export const useSingleBlog = (slug: string) =>
  useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => await getSingleBlog(slug),
    enabled: !!slug,
  });