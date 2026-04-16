import Breadcrumb from "@/Components/Common/Breadcrumb";
import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";



export default function TravelPackagePage() {
    return (
        <>
            <Breadcrumb
                title="Tour Package 01"
                items={[
                    { label: "Home", href: "/" },
                    { label: "Tour Package 01" },
                ]}
            />

            <div className="container mx-auto pt-100 mb-100">
                <LeftGridLayout /> 
            </div>
        </>
    );
}