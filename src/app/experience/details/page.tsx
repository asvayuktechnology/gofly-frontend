import BreadcrumbSlider from "@/Components/Common/UI/Breadcrumbs/BreadcrumbSlider";
import RightGridLayout from "@/Components/layouts/Grids/RightGridLayout";

export default function ExperiencedetailPage() {

    const data = {
        title: "Dubai Tour",
        price: 25000,
    };

    return (
        <>
            <BreadcrumbSlider />

            <div className="package-details-page">
                <div className="container mx-auto pt-100">
                    <RightGridLayout packageData={data} />
                </div>
            </div>
        </>
    );
}