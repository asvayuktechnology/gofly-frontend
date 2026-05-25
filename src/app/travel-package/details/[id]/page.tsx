import BreadcrumbSlider from "@/Components/Common/UI/Breadcrumbs/BreadcrumbSlider";
import RightGridLayout from "@/Components/layouts/Grids/RightGridLayout";
import { getSinglePackage } from "@/services/packageService";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export type BreadcrumbPackage = {
  title: string;
  pricePerPerson: number;
  durationDays: number;
  durationNights: number;
  bannerImages: string[];
};


export default async function TravelPackagePage({
  params,
}: PageProps) {
  const { id } = await params;

  if (!id) {
    return <div>Invalid Package ID</div>;
  }

  let data = null;

  try {
    data = await getSinglePackage(id);
  } catch (error) {
    console.log(error);

    return (
      <div className="py-20 text-center">
        Package not found
      </div>
    );
  }

  const packageData: BreadcrumbPackage = {
    title: data?.title || "",
    pricePerPerson: data?.pricePerPerson || 0,
    durationDays: data?.durationDays || 0,
    durationNights: data?.durationNights || 0,
    bannerImages: data?.bannerImages || [],
  };

  return (
    <>
      <BreadcrumbSlider packageData={packageData} />

      <div className="package-details-page">
        <div className="container mx-auto pt-100">
          <RightGridLayout packageData={data} />
        </div>
      </div>
    </>
  );
}