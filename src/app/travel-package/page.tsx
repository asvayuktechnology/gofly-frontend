import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";
import { travelPackagesData } from "@/lib/data";

export default function TravelPackagePage() {
  return (
    <>
      <Breadcrumb
        title="Tour Package 01"
        items={[{ label: "Home", href: "/" }, { label: "Tour Package 01" }]}
      />

            <div className="container mx-auto pt-100 mb-100">
                <LeftGridLayout
                    data={travelPackagesData}
                    type="package"
                />
            </div>
        </>
    );
}
