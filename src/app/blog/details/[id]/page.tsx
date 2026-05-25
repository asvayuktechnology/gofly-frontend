


import BlogDetailsPage from "@/Components/blogDetail/blogDetails";
import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";
import Visapage from "@/Components/Visa/Visapage";
import { BASE_URL } from "@/lib/const";
import { getVisaSettings } from "@/services/visaService";
interface Props {
    params: Promise<{
        id: string;
    }>;
}
export default async function Blogs({
    params,
}: Props) {
    const { id } = await params;
  return (
    <>
      <Breadcrumb
         title={  "Blog Details"}
      
        items={[
          { label: "Home", href: "/" },
          {
            label:
               "Blog Details",
          },
        ]}
      />

      <div className="mb-100">
        <BlogDetailsPage id={id} />
      </div>
    </>
  );
}