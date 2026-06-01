import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import HotelSearchBar from "@/Components/HotePage/HotelSearchBar";
import HotelPackageSearchSection from "@/Components/HotePage/HotePackageSearchSection";



export default async function HotelPackagePage() {
  return (
    <>
      <Breadcrumb
        title="Hotel"
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Explore This Travel Package",
          },
        ]}
      />

      <HotelSearchBar />


      <div className="hotel-grid-page mb-100">
        <div className="container mx-auto">
          <HotelPackageSearchSection />
        </div>
      </div>

    </>
  );
}
