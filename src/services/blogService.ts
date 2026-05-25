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
  id: string
): Promise<BlogItem> => {
  if (!id) {
    throw new Error("Blog id is required");
  }

  const res = await HttpService.get(`/blog/${id}`);

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
export const useSingleBlog = (id: string) =>
  useQuery({
    queryKey: ["blog", id],
    queryFn: async () => await getSingleBlog(id),
    enabled: !!id,
  });