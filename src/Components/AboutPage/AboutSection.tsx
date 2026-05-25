"use client";

import Image from "next/image";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  descriptionOne?: string;
  descriptionTwo?: string;
  founderName?: string;
  founderRole?: string;
  founderSignature?: string;
  aboutImage?: string;
}

export default function AboutSection({
  title = "Why We’re Best Agency",
  subtitle = "Welcome to GoFly Travel Agency – Your Gateway to Unforgettable Journeys!",
  descriptionOne = "GoFly Travel Agency is a trusted name in the travel industry, offering seamless travel planning, personalized itineraries, and unforgettable adventures. With years of experience and a network of global partners, we ensure a hassle-free and memorable journey for every traveler.",
  descriptionTwo = "We believe that travel is more than just moving from one place to another—it’s about discovering new cultures, creating unforgettable experiences, and making lifelong memories.",
  founderName = "Robert Harringson",
  founderRole = "Founder at GoFly",
  founderSignature = "/assets/img/innerpages/about-page-founder-signature.png",
  aboutImage = "/assets/img/about-img.webp",
}: AboutSectionProps) {
  return (
    <div className="about-section pt-24 mb-24">
      <div className="container mx-auto px-4">
        <div className="about-wrapper">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Content */}
            <div
              className="col-xl-6 col-lg-7 w-full xl:w-1/2 lg:w-7/12 wow animate fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="about-content">
                <div className="section-title">
                  <h2 className="text-4xl font-semibold mb-4">
                    {title}
                  </h2>

                  <h4 className="text-xl font-medium mb-5 leading-relaxed">
                    {subtitle}
                  </h4>

                  <p className="text-gray-600 leading-7 mb-4">
                    {descriptionOne}
                  </p>

                  <p className="text-gray-600 leading-7">
                    {descriptionTwo}
                  </p>
                </div>

                {/* Founder */}
                {/* <div className="founder-area flex items-center gap-4 mt-8">
                  <Image
                    src={founderSignature}
                    alt={`${founderName} signature`}
                    width={100}
                    height={220}
                    className="object-contain"
                  />

                  <div className="founder-info">
                    <h6 className="text-lg font-semibold">
                      {founderName}
                    </h6>

                    <span className="text-gray-500">
                      {founderRole}
                    </span>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Image */}
            <div
              className="col-lg-5 hidden lg:block lg:w-5/12 wow animate fadeInRight"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="about-img">
                <Image
                  src={aboutImage}
                  alt="About section image"
                  width={550}
                  height={220}
                  priority
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}