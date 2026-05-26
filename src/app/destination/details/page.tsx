import BreadcrumbSlider from "@/Components/Common/UI/Breadcrumbs/BreadcrumbSlider";
import DestinationDetailsSection from "@/Components/DestinationPage/DestinationDetailsSection";

export default function DestinationDetailsPage() {
  return (
    <>
      <div className="mb-50">
        <BreadcrumbSlider />
      </div>

      <DestinationDetailsSection />
    </>
  );
}