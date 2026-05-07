"use client";
import CustomerReviewSection from "@/Components/Common/CustomerReviewSection";
import FaqSection from "@/Components/Common/FaqSection";
import FilterSidebar from "@/Components/Common/FilterSidebar";
import { svgIcon } from "@/Components/Common/Icons/SvgIcons";
import MapSection from "@/Components/Common/MapSection";
import RelevantPackageSection from "@/Components/Common/RelaventPackageSection";
import PackageSidebar from "@/Components/Common/Sidebars/PackageSidebar";
import SortingSection from "@/Components/Common/SortingSection";
import PackageCard from "@/Components/Common/UI/Cards/PackageCard";
import PackagePagination from "@/Components/Common/UI/Paginations/PackagePagination";
import { itineraryData, locationsdetail } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

export default function RightGridLayout() {
  const [page, setPage] = useState(1);
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  const isAllOpen = openIndexes.length === itineraryData.length;
  const toggleAll = () => {
    if (isAllOpen) {
      setOpenIndexes([]);
    } else {
      setOpenIndexes(itineraryData.map((_, i) => i));
    }
  };

  const [openItems, setOpenItems] = useState<number[]>([0]);

  //   const [openItems, setOpenItems] = useState([0]);
  const [expandAll, setExpandAll] = useState(false);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const handleExpandAll = () => {
    if (expandAll) {
      setOpenItems([]);
    } else {
      setOpenItems([0, 1, 2]); // update dynamically if needed
    }
    setExpandAll(!expandAll);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7">
        <div className="package-details-warpper">
          <div className="package-info-wrap mb-60">
            <div className="mb-16 px-3">
              <h4 className="text-2xl font-semibold mb-4">
                About Tour Package
              </h4>

              <p className="text-gray-600 leading-relaxed mb-6">
                Paris, the City of Lights, and the surrounding Île-de-France
                region offer a perfect blend of history, culture, luxury, and
                romance. Whether you’re exploring iconic landmarks, indulging in
                French cuisine, or enjoying the charming countryside, this
                region has something for every traveler.
              </p>

              <ul className="package-info-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
                {/* Single Item */}
                <li>
                  {svgIcon.hotelSvg}
                  <div className="content">
                    <span>Accomodation</span>
                    <strong>5 Star Hotel</strong>
                  </div>
                </li>
                <li>
                  {svgIcon.hotelSvg}
                  <div className="content">
                    <span>Accomodation</span>
                    <strong>5 Star Hotel</strong>
                  </div>
                </li>
                <li>
                  {svgIcon.hotelSvg}
                  <div className="content">
                    <span>Accomodation</span>
                    <strong>5 Star Hotel</strong>
                  </div>
                </li>
                <li>
                  {svgIcon.hotelSvg}
                  <div className="content">
                    <span>Accomodation</span>
                    <strong>5 Star Hotel</strong>
                  </div>
                </li>
                <li>
                  {svgIcon.hotelSvg}
                  <div className="content">
                    <span>Accomodation</span>
                    <strong>5 Star Hotel</strong>
                  </div>
                </li>
                <li>
                  {svgIcon.hotelSvg}
                  <div className="content">
                    <span>Accomodation</span>
                    <strong>5 Star Hotel</strong>
                  </div>
                </li>
              </ul>
            </div>

            <div className="location-slider-wrap mb-60">
              <h4>Explore Locations</h4>

              <div className="location-slider-area">
                {/* Swiper */}
                <Swiper
                  className="package-dt-location-slider"
                  modules={[Navigation, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={3}
                  loop={true}
                  navigation={{
                    nextEl: ".location-slider-next",
                    prevEl: ".location-slider-prev",
                  }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                  }}
                >
                  {locationsdetail.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="location-card">
                        <a href="#" className="location-img">
                          <Image
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[220px] object-cover"
                            width={370}
                            height={220}
                          />
                        </a>

                        <div className="location-content">
                          <h6>
                            <a href="#">{item.title}</a>
                          </h6>
                          <span>({item.days})</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="slider-btn-grp two">
                  <div className="slider-btn location-slider-prev cursor-pointer">
                  {svgIcon.detaillocationprev}
                  </div>

                  <div className="slider-btn location-slider-next cursor-pointer">
                   {svgIcon.detaillocationnext}  
                  </div>
                </div>
              </div>
            </div>

            <div className="highlights-tour-area mb-60">
              <h4>Highlights of the Tour</h4>
              <div className="highlights-wrap">
                <ul className="items-list">
                  <li>
                   {svgIcon.detailcheckIcon}
                    Eiffel Tower – Skip-the-line access &amp; breathtaking views
                    from the summit.
                  </li>
                  <li>
                   {svgIcon.detailcheckIcon}
                    Louvre Museum – See the Mona Lisa and world-renowned
                    masterpieces.
                  </li>
                  <li>
                   {svgIcon.detailcheckIcon}
                    Opéra Garnier – Visit the stunning opera house that inspired
                    &quot;The Phantom of the Opera”.
                  </li>
                  <li>
                   {svgIcon.detailcheckIcon}
                    French Café &amp; Bakery Tour – Savor croissants, macarons
                    &amp; espresso at historic cafés.
                  </li>
                  <li>
                    {svgIcon.detailcheckIcon}
                    Sunset Dinner Cruise on the Seine – Romantic fine dining on
                    the river.
                  </li>
                </ul>
              </div>
            </div>

            <div className="tour-itinerary-area mb-16">
              {/* Title */}
              <div className="itinerary-title flex items-center justify-between mb-6">
                <h4 className="text-2xl font-semibold">Tour Itinerary</h4>
                <button
                  onClick={handleExpandAll}
                  className="expand-btn text-primary text-sm font-medium hover:underline"
                >
                  {expandAll ? "Collapse All -" : "Expand All +"}
                </button>
              </div>

              {/* List */}
              <ul className="itinerary-list space-y-4">
                {/* Item */}
                {[0, 1].map((item, index) => (
                  <li
                    key={index}
                    className="single-itinerary  rounded-xl overflow-hidden"
                  >
                    {/* Location Title */}
                    <div className="location-title flex items-center gap-3 p-4">
                      <div className="icon">
                        {svgIcon.detailtourlocation}
                      </div>
                      <h5 className="font-semibold">
                        Paris, France{" "}
                        <span className="text-sm text-gray-500">
                          ( Departure: <strong>8:00 am - 8:30am</strong> )
                        </span>
                      </h5>
                    </div>

                    <div className="tour-plan-wrap">
                      <div className="space-y-2  accordion ">
                        {/* Accordion Item */}
                        <div className="border-b accordion-item">
                          {/* Header */}
                          <div className="accordion-header">
                            <button
                              onClick={() => toggleItem(index)}
                              className="accordion-button    w-full flex justify-between items-center text-left  transition"
                            >
                              <h6 className="">
                                <span className="mr-2 text-primary">
                                 {svgIcon.locationIcon2}
                                  Day-0{index + 1}
                                </span>
                                Eiffel Tower – The symbol of France
                              </h6>
                              <span className="text-lg">
                                {openItems.includes(index) ? (
                                  <BsFillCaretUpFill
                                    size={12}
                                    color="#525252"
                                  />
                                ) : (
                                  <BsFillCaretDownFill
                                    size={12}
                                    color="#525252"
                                  />
                                )}
                              </span>
                            </button>
                          </div>

                          {/* Content */}
                          {openItems.includes(index) && (
                            <div className="accordion-body p-4 text-gray-600 text-sm">
                              The Eiffel Tower is the heart of Paris and offers
                              a variety of exciting activities for visitors.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <MapSection mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5647631857846!2d90.36311167605992!3d23.83407118555764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1700138349574!5m2!1sen!2sbd" />

            <div className="feature-list-area mb-60">
              <h4>Package Features List</h4>
              <div className="grid grid-cols-12 gy-md-5 gy-4">
                <div className="col-span-5 ">
                  <div className="single-feature-list">
                    <h5>Include Features</h5>
                    <ul className="items-list two">
                      <li>
                      {svgIcon.detailcheckIcon}
                        Accommodation (Hotel, Resort, Villa, Camping, etc.)
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-5 col-start-8">
                  <div className="single-feature-list">
                    <h5>Exclude Features</h5>
                    <ul className="items-list two">
                      <li>
                      {svgIcon.detailrejectIcon}
                        Visa Fees &amp; Processing.
                      </li>
                      <li>
                       {svgIcon.detailrejectIcon}
                        Personal Expenses (Shopping, Souvenirs, Tips, etc.)
                      </li>
                      <li>
                       {svgIcon.detailrejectIcon}
                        Optional Excursions &amp; Activities.
                      </li>
                      <li>
                        {svgIcon.detailrejectIcon}
                        Meals Not Mentioned in Itinerary.
                      </li>
                      <li>
                      {svgIcon.detailrejectIcon}
                        Travel Insurance (if not included).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="assets/company-desk.pdf"
              download="company-desk.pdf"
              className="download-area mb-60"
            >
              <Image
                alt=""
                className="w-full h-auto"
                width={1000}
                height={100}
                src="/assets/img/package-dt-brochure-download-img.webp"
              />
            </Link>

            <div className="additional-info mb-60">
              <h4>Additional Info</h4>
              <ul className="items-list two">
                <li>
                 {svgIcon.detailcheckIcon}
                  <div className="content">
                    <span>Free Cancellation</span> – Some tours offer free
                    cancellation up to a certain period (e.g., 24–48 hours
                    before departure).
                  </div>
                </li>
                <li>
                 {svgIcon.detailcheckIcon}
                  <div className="content">
                    <span>Health &amp; Safety Guidelines</span> – COVID-19
                    regulations, vaccinations, or travel restrictions.
                  </div>
                </li>
              </ul>
            </div>

            <FaqSection />
            <CustomerReviewSection />
          </div>
        </div>
      </div>
      <div className="lg:col-span-4 lg:col-start-9">
        <PackageSidebar />
      </div>

      <div className="col-span-12">
        <RelevantPackageSection />
      </div>
    </div>
  );
}
