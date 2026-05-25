import AboutPage from "@/Components/AboutPage/AboutPage";
import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";
import { ExperienceCardData } from "@/lib/data";



export default function AboutusPage() {
    return (
        <>
            <Breadcrumb
                title="About"
                items={[
                    { label: "Home", href: "/" },
                    { label: "About" },
                ]}
            />

            <AboutPage/>
        </>
    );
}