import { Suspense } from "react";
import AboutPage from "@/Components/AboutPage/AboutPage";
import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";
import AllBlogs from "@/Components/TravelInspirationPage/AllBlogs";
import { ExperienceCardData } from "@/lib/data";

function BlogsWrapper() {
  return <AllBlogs />;
}

export default function AboutusPage() {
  return (
    <>
      <Breadcrumb
        title="Travel Inspiration"
        items={[
          { label: "Home", href: "/" },
          { label: "Travel Inspiration" },
        ]}
      />

      <Suspense fallback={<div className="p-8">Loading blogs...</div>}>
        <AllBlogs />
      </Suspense>
    </>
  );
}