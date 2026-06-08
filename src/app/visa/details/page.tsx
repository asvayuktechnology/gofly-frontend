import { Suspense } from "react";
import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import VisaDetailsPage from "@/Components/Visa/VisaDetailsPage";
import Visapage from "@/Components/Visa/Visapage";


interface PageProps {
    params: {
        categoryId: string;
    };
}

export default function TravelPackagePage({ params }: PageProps) {
    return (
        <>
            <Breadcrumb
                title="Visa Package "
                items={[
                    { label: "Home", href: "/" },
                    { label: "Visa Package" },
                ]}
            />

            <Suspense fallback={<div>Loading...</div>}>
                <VisaDetailsPage categoryId={params.categoryId} />
            </Suspense>
        </>
    );
}