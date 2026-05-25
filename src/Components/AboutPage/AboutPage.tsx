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
import AboutFaqSection from './aboutFaq'




const AboutPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <AboutSection />
            <ServiceSection />
            <AboutJourneySection /> 
            <PartnerSection />
            <div className="about-video-section mb-24">
                <div className="container mx-auto px-4">
                    <div className="lg-react-element video-wrap relative overflow-hidden rounded-3xl">

                        {/* Thumbnail */}
                        <Image
                            src="/assets/img/about-video-img.webp"
                            alt={"About Video Thumbnail"}
                            width={1300}
                            height={220}
                            priority
                            className="w-full h-auto object-cover"
                        />

                        {/* Play Button */}
                        <button
                            type="button"
                            aria-label="Play video"
                            onClick={() => setIsOpen(true)}
                            className="gallery-item play-btn absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform duration-300 hover:scale-110"
                        >
                            <Play className="h-8 w-8 fill-current" />

                            {/* Waves */}
                            <div className="waves-block absolute inset-0 flex items-center justify-center">
                                <div className="waves wave-1 absolute h-20 w-20 rounded-full border border-white/70 animate-ping" />
                                <div className="waves wave-2 absolute h-24 w-24 rounded-full border border-white/50 animate-ping [animation-delay:0.5s]" />
                                <div className="waves wave-3 absolute h-28 w-28 rounded-full border border-white/30 animate-ping [animation-delay:1s]" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

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
            
                      <AboutFaqSection />
                    </div>
                  </div>
                  </div>
                  {/* <CounterSection/> */}

        </>
    )
}

export default AboutPage