import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import Filters from "@/Components/Home/Filters";
import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";
import { ExperienceCardData } from "@/lib/data";



export default function Page() {
    return (
        <>
            <Breadcrumb
                title="Hotel"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Hotel" },
                ]}
            />
    <Filters />
            <div className="container mx-auto pt-100 mb-100">
                <LeftGridLayout data={ExperienceCardData} /> 
            </div>
        </>
    );
}