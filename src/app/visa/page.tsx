import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import Visapage from "@/Components/Visa/Visapage";
import { BASE_URL } from "@/lib/const";
import { getVisaSettings } from "@/services/visaService";

export default async function TravelPackagePage() {
  const response = await getVisaSettings();

  const settings = response?.data?.[0];

 
  const imageUrl = settings?.coverImage
    ? `${BASE_URL}/${settings.coverImage}`
    : "/assets/img/breadcrumb-bg3.jpg";

  return (
    <>
      <Breadcrumb
         title={settings?.heading || "Visa Package"}
        backgroundImage={imageUrl}
        items={[
          { label: "Home", href: "/" },
          {
            label:
              settings?.subTitle || "Visa Package",
          },
        ]}
      />

      <div className="mb-100">
        <Visapage />
      </div>
    </>
  );
}