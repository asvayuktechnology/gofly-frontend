import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";

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
        title="Discover Tour Package Highlights"
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

      <div className="container mx-auto pt-100 mb-100">
        <LeftGridLayout
          destinationId={destinationId}
          category={category}
          keyword={params.keyword}
          page={Number(params.page) || 1}
          limit={Number(params.limit) || 5}
          sortBy={params.sortBy || "latest"}
          startDate={params.startDate}
          endDate={params.endDate}
          minPrice={
            Number(params.minPrice) || undefined
          }
          maxPrice={
            Number(params.maxPrice) || undefined
          }
          minDays={
            Number(params.minDays) || undefined
          }
          maxDays={
            Number(params.maxDays) || undefined
          }
        />
      </div>
    </>
  );
}
