'use client'
import React, { useState, useMemo } from 'react'
import AboutSection from './AboutSection'
import ServiceSection from '../Home/ServiceSection'
import AboutJourneySection from './AboutJourneySection'
import PartnerSection from '../Home/PartnerSections'
import TestimonialSection from '../Home/TestimonialSection'
import FaqSection from '../Common/FaqSection'
import CounterSection from '../Common/CounterSection'
import { useGetSettings } from '@/services/settingService'
import { useGetAbout } from '@/services/aboutService'
import { BASE_URL, UPLOAD_URL } from '@/lib/const'
import VideoSection from '../Common/VideoSection'
import Breadcrumb from '@/Components/Common/UI/Breadcrumbs/Breadcrumb'

const IMG_BASE = UPLOAD_URL || BASE_URL;

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: settings } = useGetSettings();
  const { data: about } = useGetAbout();

  const videoId = useMemo(() => {
    const url = about?.videoSection?.youtubeUrl || "";
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : "u31qwQUeGuM";
  }, [about]);

  return (
    <>
      <Breadcrumb
        title="About"
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        backgroundImage={about?.bannerImage ? `${IMG_BASE}/${about.bannerImage}` : undefined}
      />
      <AboutSection
        title={about?.aboutContent?.title}
        subtitle={about?.aboutContent?.subtitle}
        descriptionOne={about?.aboutContent?.descriptionOne}
        descriptionTwo={about?.aboutContent?.descriptionTwo}
        aboutImage={about?.aboutContent?.image ? `${IMG_BASE}/${about.aboutContent.image}` : undefined}
      />
      <ServiceSection />
      <AboutJourneySection
        journeys={about?.journeyTimeline?.map((j) => ({
          year: j.year,
          image: j.journeyImage ? `${IMG_BASE}/${j.journeyImage}` : "",
          title: j.title,
          description: j.description,
        }))}
      />
      <PartnerSection />
      <VideoSection
        setIsOpen={setIsOpen}
        thumbnail={about?.videoSection?.thumbnail ? `${IMG_BASE}/${about.videoSection.thumbnail}` : undefined}
      />

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            aria-label="Close video modal"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 cursor-default"
          />
          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <button
              type="button"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
            >
              ✕
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="About Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
      <TestimonialSection />
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-8 col-start-3">
            <FaqSection faqData={about?.faqs || []} />
          </div>
        </div>
      </div>
      <CounterSection counterData={settings?.numberSpeak || []} />
    </>
  );
};

export default AboutPage