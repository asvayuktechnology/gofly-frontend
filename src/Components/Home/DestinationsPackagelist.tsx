"use client";

import PackageCard from "../Common/UI/Cards/PackageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BASE_URL } from "@/lib/const";
import { usePackages } from "@/services/packageService";
import { Package } from "@/types/packageType";

interface Props {
  packages?: Package[];
  title: string;
  subtitle: string;
  paginate?: boolean;
  destinationId?: string;
}

export default function DestinationsPackagelist({
  title,
  subtitle,
  paginate,
  destinationId,
}: Props) {
  const { data, isLoading } = usePackages({
    destinationId: destinationId ? [destinationId] : undefined,
  });

  const packages = data?.data || [];

  if (isLoading) {
    return <div className="text-center py-10">Loading packages...</div>;
  }

  return (
    <div className="home1-travel-package-section mb-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        {packages.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-black text-lg font-medium">
              No Trips available.
            </p>
          </div>
        ) : (
          <>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".offer-pagination",
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mb-40"
            >
              {packages.map((pkg: any, index: number) => (
                <SwiperSlide key={pkg._id}>
                  <PackageCard
                    title={pkg.title}
                    location={pkg.country}
                    duration={`${pkg.durationDays} Days`}
                    price={pkg.pricePerPerson}
                    image={`${BASE_URL}/${pkg.image}`}
                    badge={
                      pkg.isHotSale
                        ? "Hot Sale"
                        : pkg.isLastMinuteDeal
                          ? "Last Minute Deal"
                          : pkg.isOneDayTrip
                            ? "One Day Trip"
                            : ""
                    }
                    link={`/travel-package/details/${pkg._id}`}
                    experiences="Adventure"
                    inclusions="Meals Included"
                    delay={200 + index * 100}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {paginate && (
              <div className="slider-pagi-wrap">
                <div className="offer-pagination relative flex justify-center paginations"></div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
