import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import Filters from "@/Components/Home/Filters";
import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";
import { hotelData } from "@/lib/data";
interface Props {
  searchParams: Promise<{
    destinationId?: string | string[];
    category?: string | string[];
    keyword?: string;
    page?: string;
    limit?: string;
    sortBy?: string;
    startDate?: string;
    endDate?: string;
    minPrice?: string;
    maxPrice?: string;
    minDays?: string;
    maxDays?: string;
  }>;
}

export default async function TravelPackagePage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const destinationId = Array.isArray(
    params.destinationId
  )
    ? params.destinationId
    : params.destinationId
    ? [params.destinationId]
    : [];

    const category = Array.isArray(
  params.category
)
  ? params.category
  : params.category
  ? [params.category]
  : [];
//   console.log("destinationId", destinationId);

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


      <Filters/>

      <div className="container mx-auto pt-100 mb-100">
        <LeftGridLayout
          carddata={hotelData}
        />
      </div>
    </>
  );
}
