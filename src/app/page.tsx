import BlogSlider from "@/Components/Home/BlogSlider";
import FeaturedDestinations from "@/Components/Home/FeaturedDestinations";
import Filters from "@/Components/Home/Filters";
import HeroBanner from "@/Components/Home/HeroBanner";
import LastMinDeals from "@/Components/Home/LastMinDeals";
import LocationSearchSection from "@/Components/Home/LocationSearchSection";
import OfferBanner from "@/Components/Home/OfferBanner";
import OfferSection from "@/Components/Home/Offersection";
import OneDayTripSection from "@/Components/Home/OnedayTripSection";
import PartnerSection from "@/Components/Home/PartnerSections";
import PopularTravelPackage from "@/Components/Home/PopularTravelPackage";
import ServiceSection from "@/Components/Home/ServiceSection";
import TestimonialSection from "@/Components/Home/TestimonialSection";

export const metadata = {
  title: "GoFly — All-in-one Travel Booking",
  description:
    "Find the best travel packages, destinations, hotels and visa assistance with GoFly Travel Agency.",
};

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <Filters />
      <OfferSection />
      <FeaturedDestinations />
      <ServiceSection />
      <PopularTravelPackage />
      <OfferBanner backgroundImage="/assets/img/home1-offer-banner-bg.jpg"
        subtitle="Make Meet Happiness."
        title="Travel isn’t a luxury, it’s a way of life!"
        authorName="Mr. Gabriel Haringson"
        authorRole="CEO, GoFly"
        buttonText="Grab the Deal Now"
        buttonLink="/travel-package"
      />
      <LastMinDeals/>
      <LocationSearchSection/>
      <PartnerSection/>
      <OneDayTripSection/>
      <TestimonialSection/>
      <BlogSlider />
    </main>
  );
}
