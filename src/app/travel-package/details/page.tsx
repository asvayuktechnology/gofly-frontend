import BreadcrumbSlider from "@/Components/Common/UI/Breadcrumbs/BreadcrumbSlider";
import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";
import RightGridLayout from "@/Components/layouts/Grids/RightGridLayout";




export default function TravelPackagePage() {
    return (
        <>
            <BreadcrumbSlider/>
            <div className="package-details-page">

            <div className="container mx-auto pt-100">
                <RightGridLayout /> 
            </div>
            </div>
        </>
    );
}