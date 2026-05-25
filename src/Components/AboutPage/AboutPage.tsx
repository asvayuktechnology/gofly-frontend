'use client'
import React, { useState } from 'react'
import AboutSection from './AboutSection'
import ServiceSection from '../Home/ServiceSection'
import AboutJourneySection from './AboutJourneySection'
import PartnerSection from '../Home/PartnerSections'
import Image from 'next/image'
import { Play } from 'lucide-react'
import TestimonialSection from '../Home/TestimonialSection'
import FaqSection from '../Common/FaqSection'
import CounterSection from '../Common/CounterSection'
import { useGetSettings } from '@/services/settingService'
import VideoSection from '../Common/VideoSection'

const counterData = [
  {
    title: "Happy Travelers",
    value: 500,
  },
  {
    title: "Team Members",
    value: 120,
  },
  {
    title: "Countries Covered",
    value: 80,
  },
  {
    title: "Retention Rate",
    value: 98,
  },
];


const AboutPage = () => {
    const [isOpen, setIsOpen] = useState(false);
  const { data: settings } = useGetSettings();
    return (
        <>
            <AboutSection />
            <ServiceSection />
            <AboutJourneySection />
            <PartnerSection />
            <VideoSection setIsOpen={setIsOpen} />

            {/* Video Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">

                    {/* Close Overlay */}
                    <button
                        type="button"
                        aria-label="Close video modal"
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 cursor-default"
                    />

                    {/* Modal Content */}
                    <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl">

                        {/* Close Button */}
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
                        >
                            ✕
                        </button>

                        {/* Video */}
                        <div className="relative aspect-video w-full">
                            <iframe
                                src="https://www.youtube.com/embed/u31qwQUeGuM?autoplay=1"
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
            
                       <FaqSection faqData={settings?.faq || []} />
                    </div>
                  </div>
                  </div>
                  <CounterSection counterData={settings?.numberSpeak || []} />

        </>
    )
}

export default AboutPage