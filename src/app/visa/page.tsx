import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import Visapage from "@/Components/Visa/Visapage";



export default function TravelPackagePage() {
    return (
        <>
            <Breadcrumb
                title="Visa Package "
                items={[
                    { label: "Home", href: "/" },
                    { label: "Visa Package" },
                ]}
            />

            <div className=" mb-100">
                <Visapage /> 
            </div>
        </>
    );
}