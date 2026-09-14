import HotelPage from "@/Components/HotePage/HotelPage";

interface PageProps {
  searchParams: Promise<{ id?: string }>;
}

// /hotel/details?id=xxx  -> HotelPage ko id prop se call karta hai
// useHotel query id change par dynamically update hoti hai (queryKey ["hotel", id])
export default async function Page({ searchParams }: PageProps) {
  const { id } = await searchParams;

  if (!id) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-500 mb-2">Invalid Hotel ID</p>
        <p className="text-sm text-gray-500">Please provide hotel id via query param: /hotel/details?id=YOUR_HOTEL_ID</p>
        <p className="text-sm text-gray-500">Ya /hotel/details/[id] route use karo.</p>
      </div>
    );
  }

  return <HotelPage id={id} />;
}
