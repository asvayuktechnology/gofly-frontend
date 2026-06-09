import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import ContactPage from "@/Components/ContactPage/ContactPage";
import { BASE_URL } from "@/lib/const";
import { getContactInfo } from "@/services/contactService";

export default async function Contact() {
  const response = await getContactInfo();

  const contactData = response?.data?.[0];

  const bannerImage = contactData?.bannerImage
    ? `${BASE_URL}/${contactData?.bannerImage}`
    : "/assets/img/breadcrumb-bg2.jpg";

  return (
    <>
      <Breadcrumb
        title="Contact"
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        backgroundImage={bannerImage}
      />

      <ContactPage />
    </>
  );
}