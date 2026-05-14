import CounterSection from "@/Components/Common/CounterSection";
import FaqSection from "@/Components/Common/FaqSection";
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
import { getPackages } from "@/services/packageService";
// import { useGetSettings } from "@/services/settingService";
import { getSettings } from "@/services/settingService";
export const metadata = {
  title: "GoFly — All-in-one Travel Booking",
  description:
    "Find the best travel packages, destinations, hotels and visa assistance with GoFly Travel Agency.",
};


export default async function HomePage() {

  const response = await getPackages();

  const allPackages = response?.data || [];

  // filters
  const hotSalePackages = allPackages.filter(
    (item: any) => item.isHotSale
  );

  const lastMinuteDeals = allPackages.filter(
    (item: any) => item.isLastMinuteDeal
  );

  const oneDayTrips = allPackages.filter(
    (item: any) => item.isOneDayTrip
  );
  const settings = await getSettings();

  return (
    <main>
      <HeroBanner
        bannerFile={settings?.bannerFile}
        section={settings?.section}
      />
      <Filters />
      <OfferSection />
      <FeaturedDestinations />
      <ServiceSection />
      <PopularTravelPackage packages={hotSalePackages} />
      <OfferBanner backgroundImage="/assets/img/home1-offer-banner-bg.jpg"
        subtitle="Make Meet Happiness."
        title="Travel isn’t a luxury, it’s a way of life!"
        authorName="Mr. Gabriel Haringson"
        authorRole="CEO, GoFly"
        buttonText="Grab the Deal Now"
        buttonLink="/travel-package"
      />
      <LastMinDeals packages={lastMinuteDeals} />
      <LocationSearchSection />
      <PartnerSection />
      <OneDayTripSection packages={oneDayTrips} />
      <BlogSlider />
      <TestimonialSection />
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3">

            <FaqSection faqData={settings?.faq || []} />
          </div>
        </div>
      </div>
      <CounterSection counterData={settings?.numberSpeak || []} />
    </main>
  );
}
