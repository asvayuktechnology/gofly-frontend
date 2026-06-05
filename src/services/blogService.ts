// services/blogService.ts

import { useQuery } from "@tanstack/react-query";
import HttpService from "./httpsService";
import { BlogItem, BlogResponse } from "@/types/blogType";
// import { BlogItem, BlogResponse } from "@/types/blogType";

// ─────────────────────────────────────────────
// GET BLOG LIST
// ─────────────────────────────────────────────
export const getBlogs = async (params?: {
  title?: string;
  category?: string;
}): Promise<BlogResponse> =>
  HttpService.get("/blog", {
    params,
  }).then((res) => res.data);
  
export const getSingleBlog = async (id: string) => {
  const res = await HttpService.get(`/blog/${id}`);

  return res.data.data;
};
// ─────────────────────────────────────────────
// USE BLOG LIST
// ─────────────────────────────────────────────
// export const useBlogs = () =>
//   useQuery({
//     queryKey: ["blogs"],
//     queryFn: getBlogs,
//   });

// ─────────────────────────────────────────────
// USE SINGLE BLOG
// ─────────────────────────────────────────────
export const useSingleBlog = (id: string) =>
  useQuery({
    queryKey: ["blog", id],
    queryFn: async () => await getSingleBlog(id),
    enabled: !!id,
  });


export const useBlogs = (params?: { title?: string; category?: string }) =>
  useQuery({
    queryKey: ["blogs", params],
    queryFn: () => getBlogs(params),
  });