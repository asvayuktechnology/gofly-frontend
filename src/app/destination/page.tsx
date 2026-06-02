import Breadcrumb from "@/Components/Common/UI/Breadcrumbs/Breadcrumb";

import DestinationList from "@/Components/DestinationPage/DestinationList";

export default async function DestinationPage() {
  return (
    <>
      <Breadcrumb
        title="Destination"
        items={[
          { label: "Home", href: "/" },
          { label: "Destination" },
        ]}
      />

      <div className="mb-100">
        <DestinationList />
      </div>
    </>
  );
}