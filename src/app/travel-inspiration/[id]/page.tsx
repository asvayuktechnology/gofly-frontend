import React from "react";
import BlogDetails from "@/Components/TravelInspirationPage/BlogDetails";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const BlogDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

  return <BlogDetails id={id} />;
};

export default BlogDetailsPage;