// Components/Destination/DestinationDetails.tsx

"use client";

import Image from "next/image";
// import { useSingleDestination } from "@/services/destinationService";
import { BASE_URL } from "@/lib/const";

import { useSingleDestination } from "@/services/destinationService";
interface Props {
  id: string;
}

export default function DestinationDetails({
  id,
}: Props) {
  const { data, isLoading } =
    useSingleDestination(id);

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-20 text-center">
        Destination not found.
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* IMAGE */}
        <div className="relative w-full h-[450px] overflow-hidden rounded-3xl mb-10">
          <Image
            src={`${BASE_URL}/${data.images?.[0]}`}
            alt={data.name}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="max-w-4xl">
          <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm mb-4 capitalize">
            {data.region.replace("_", " ")}
          </span>

          <h1 className="text-4xl font-bold text-black mb-4">
            {data.name}
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            {data.country}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-black">
                {data.totalTours}
              </h3>
              <p className="text-gray-500 mt-2">
                Total Tours
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-black">
                {data.totalDepartures}
              </h3>
              <p className="text-gray-500 mt-2">
                Total Departures
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="text-3xl font-bold text-black">
                {data.guestsTravelled}
              </h3>
              <p className="text-gray-500 mt-2">
                Guests Travelled
              </p>
            </div>
          </div>

          {/* GALLERY */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">
            {data.images?.map((img, index) => (
              <div
                key={index}
                className="relative h-[220px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={`${BASE_URL}/${img}`}
                  alt={data.name}
                  fill
                  unoptimized
                  className="object-cover hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}