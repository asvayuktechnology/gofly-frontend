"use client";

import LeftGridLayout from "@/Components/layouts/Grids/LeftGridLayout";
import HotelCard from "@/Components/Common/UI/Cards/HotelPackageCard";
import { hotelData } from "@/lib/data";
import Filters from "@/Components/Home/Filters";

export default function HotelPackageContainer() {
  return (
    <LeftGridLayout
      data={hotelData}
      sidebar={<Filters />}
      renderCard={(hotel) => (
        <HotelCard
          key={hotel.id}
          image={hotel.image}
          title={hotel.title}
          location={hotel.location}
          rating={hotel.rating}
          price={hotel.price}
          features={hotel.features}
        />
      )}
    />
  );
}