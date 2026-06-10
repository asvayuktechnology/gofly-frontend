import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import ContactPage from "@/Components/ContactPage/ContactPage";
import { BASE_URL } from "@/lib/const";
import { getContactInfo } from "@/services/contactService";

export default async function Contact() {
  let bannerImage = "/assets/img/breadcrumb-bg3.jpg";

  try {
    const response = await getContactInfo();
    const contactData = response?.data?.[0];

    if (contactData?.bannerImage) {
      bannerImage = `${BASE_URL}/${contactData.bannerImage}`;
    }
  } catch (error) {
    console.error("Failed to fetch contact banner:", error);
  }

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