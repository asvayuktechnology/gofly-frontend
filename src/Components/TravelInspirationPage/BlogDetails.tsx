"use client";
import Breadcrumb from "../Common/UI/Breadcrumbs/Breadcrumb";
import BlogDetailContent from "./BlogDetailContent";
import { useBlogs, useSingleBlog } from "@/services/blogService";
import BlogSidebar from "./BlogSidebar";
import { useState } from "react";
interface BlogDetailsProps {
  id: string;
}
const BlogDetails = ({ id }: BlogDetailsProps) => {
  

const { data, isLoading, error } = useSingleBlog(id);
const [selectedBlog, setSelectedBlog] = useState<any>(null);
const [searchPerformed, setSearchPerformed] = useState(false);

const blog = searchPerformed
  ? selectedBlog
  : data?.blog;

  const categories = data?.categories || [];
  const recentPosts = data?.recentPosts || [];
  
  if (isLoading) {
    return (
      <div className="container py-20 text-center">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <>
   <Breadcrumb
  title={blog?.title || "Blog Not Found"}
  items={[
    { label: "Home" },
    { label: "Blog" },
    { label: blog?.title || "Blog Not Found" },
  ]}
/>
      <div className="inspiration-details-page pt-100 mb-100">
        <div className="container mx-auto">
          <div className="grid gap-8 grid-cols-12">
            <div className="col-xl-7 col-lg-8 col-span-7">
           <div className="col-xl-7 col-lg-8 col-span-7">
  <BlogDetailContent blog={blog} />
</div>
            </div>

            <div className="col-lg-4 col-span-4 col-start-9">
           <BlogSidebar
  currentBlog={blog}
  categories={categories}
  recentBlogs={recentPosts}
  onBlogSelect={(blog) => {
    setSearchPerformed(true);
    setSelectedBlog(blog);
  }}
/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
