import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";
import { ExperienceCardData } from "@/lib/data";



export default function TravelPackagePage() {
    return (
        <>
            <Breadcrumb
                title="Experience"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Experience" },
                ]}
            />

            <div className="container mx-auto pt-100 mb-100">
                <LeftGridLayout data={ExperienceCardData} /> 
            </div>
        </>
    );
}