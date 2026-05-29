import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import VisaDetailsPage from "@/Components/Visa/VisaDetailsPage";
import { BASE_URL } from "@/lib/const";
import { getVisaCategoryDetails, useVisaCategoryDetails } from "@/services/visaService";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function TravelPackagePage({ params }: Props) {
  const { id } = await params;

  const res = await getVisaCategoryDetails(id);

  // array ka first item
  const category = res?.data?.data?.[0];

  return (
    <>
      <Breadcrumb
        title={category?.name || "Visa Package"}
        backgroundImage={
          category?.coverImage
            ? `${BASE_URL}/${category.coverImage}`
            : "/assets/img/breadcrumb-bg3.jpg"
        }
        items={[
          { label: "Home", href: "/" },
          { label: category?.name || "Visa Package" },
        ]}
      />

      <div className="mb-100">
        <VisaDetailsPage categoryId={id} />
      </div>
    </>
  );
}