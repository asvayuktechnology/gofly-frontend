import HotelPage from "@/Components/HotePage/HotelPage";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// /hotel/details/[id] -> id prop HotelPage ko pass hota hai, useHotel(id) dynamically fetch/update karta hai
export default async function TravelPackagePage({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    return <div className="py-20 text-center">Invalid Hotel ID</div>;
  }

  return <HotelPage id={id} />;
}
