import BreadcrumbSlider from "@/Components/Common/UI/Breadcrumbs/BreadcrumbSlider";
import DestinationDetailsSection from "@/Components/DestinationPage/DestinationDetailsSection";
import { getSingleDestination } from "@/services/destinationService";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export type BreadcrumbDestination = {
  title: string;
  country: string;
  bannerImages: string[];
};

export default async function DestinationDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  if (!id) {
    return <div>Invalid Destination ID</div>;
  }

  let data = null;

  try {
    data = await getSingleDestination(id);
  } catch (error) {
    console.log(error);

    return (
      <div className="py-20 text-center">
        Destination not found
      </div>
    );
  }

  const destinationData: BreadcrumbDestination = {
    title: "",
    country: "",
    bannerImages: data?.images || [],
  };

  return (
    <>
      <div className="mb-50">
        <BreadcrumbSlider packageData={destinationData} isDestinationPage={true}   />
      </div>
      <DestinationDetailsSection id={id} />
    </>
  );
}