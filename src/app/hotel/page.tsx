import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import HotelSearchBar from "@/Components/HotePage/HotelSearchBar";
import HotelPackageSearchSection from "@/Components/HotePage/HotePackageSearchSection";

interface Props {
  searchParams: Promise<{
    propertyType?: string | string[];
    amenities?: string | string[];
    keyword?: string;
    page?: string;
    limit?: string;
    sortBy?: string;
    minPrice?: string;
    maxPrice?: string;
    destination?: string;
    checkIn?: string;
    checkOut?: string;
    rooms?: string;
    adults?: string;
    children?: string;
  }>;
}

export default async function HotelPackagePage({ searchParams }: Props) {
  const params = await searchParams;
  console.log(params, 'params')

  const propertyType = Array.isArray(params.propertyType)
    ? params.propertyType
    : params.propertyType
    ? [params.propertyType]
    : [];

  const amenities = Array.isArray(params.amenities)
    ? params.amenities
    : params.amenities
    ? [params.amenities]
    : [];

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
          <HotelPackageSearchSection
            propertyType={propertyType}
            amenities={amenities}
            keyword={params.keyword}
            page={Number(params.page) || 1}
            limit={Number(params.limit) || 10}
            sortBy={params.sortBy || "latest"}
            minPrice={params.minPrice ? Number(params.minPrice) : undefined}
            maxPrice={params.maxPrice ? Number(params.maxPrice) : undefined}
            destination={params.destination}
            checkIn={params.checkIn}
            checkOut={params.checkOut}
            rooms={params.rooms ? Number(params.rooms) : undefined}
            adults={params.adults ? Number(params.adults) : undefined}
            children={params.children ? Number(params.children) : undefined}
          />
        </div>
      </div>
    </>
  );
}
