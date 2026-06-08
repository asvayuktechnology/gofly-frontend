import React from "react";
import BlogDetails from "@/Components/TravelInspirationPage/BlogDetails";
import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BlogDetailsPage({ params }: PageProps) {
    const { id } = await params;

    return (
        <>
            <Breadcrumb
                title="Blog Details"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Blog Details" },
                ]}
            />
            <BlogDetails id={id} />
        </>
    );
}