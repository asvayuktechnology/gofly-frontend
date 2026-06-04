import AboutPage from "@/Components/AboutPage/AboutPage";
import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";
import AllBlogs from "@/Components/TravelInspirationPage/AllBlogs";
import { ExperienceCardData } from "@/lib/data";



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

            <AllBlogs/>
        </>
    );
}