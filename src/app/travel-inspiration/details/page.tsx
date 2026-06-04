import React from "react";
import BlogDetails from "@/Components/TravelInspirationPage/BlogDetails";
import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

const BlogDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params;

    return (
        <>
      

            <BlogDetails id={id} />;
        </>
    )

};

export default BlogDetailsPage;