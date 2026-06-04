// Components/Home/ScrollingTripCardSection.tsx

"use client";

import PackageCard from "../Common/UI/Cards/PackageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BASE_URL } from "@/lib/const";



interface Props {
  packages: any[];
  title: string;
  subtitle: string;
  paginate?: boolean;
  destinationId?: string;
}

export default function ScrollingTripCardSection({
  packages,
  title,
  subtitle,
  paginate,
  destinationId,
}: Props) {
 const filteredPackages = packages.filter(
  (pkg) => String(pkg.destinationId) === String(destinationId)
);
// console.log("destinationId prop:", destinationId);
// console.log("id:", destinationId);
// console.log("packages:", packages);
// console.log("filteredPackages:", filteredPackages);
// console.log("destinationId:", destinationId);
// console.log("first package:", packages[0]);
// console.log("pkg.destinationId:", packages[0]?.destinationId);
  return (
    <div className="home1-travel-package-section mb-100">
      <div className="container mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            {title}
          </h2>

          <p className="text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* No Data */}
        {packages.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-black text-lg font-medium">
              No one day trips available.
            </p>
          </div>
        ) : (
          <>
            {/* Swiper Slider */}
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
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
              {filteredPackages.map((pkg, index) => (
  <SwiperSlide key={pkg._id}>
                 <PackageCard
  title={pkg.title}
  location={pkg.country}
  duration={`${pkg.durationDays} Days`}
  price={pkg.pricePerPerson}
  image={`${BASE_URL}/${pkg.image}`}
  badge="One Day Trip"
  link={`/travel-package/details/${pkg._id}?destinationId=${destinationId}`}
  experiences="Adventure"
  inclusions="Meals Included"
  delay={200 + index * 100}
/>
               </SwiperSlide>
))}
            </Swiper>

            {/* Pagination */}
            {paginate && (
              <div className="slider-pagi-wrap">
                <div className="offer-pagination relative flex justify-center paginations"></div>
              </div>
            )
            }
          </>
        )}
      </div>
    </div>
  );
}