
import BreadcrumbSlider from "@/Components/Common/UI/Breadcrumbs/BreadcrumbSlider";
import DestinationDetails from "@/Components/DestinationPage/DestinationDetails";



export default function DestinationDetailsPage() {
    return (
        <>
            <div className="mb-50">
                <BreadcrumbSlider />
            </div>
            <div className="">

                <DestinationDetails />
            </div>
        </>
    );
}