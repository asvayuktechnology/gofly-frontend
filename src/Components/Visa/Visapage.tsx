"use client";
import React from 'react'
import VisaPackageGrid from './VisaPackageGrid'
import WhyChooseVisa from './WhyChooseVisa'
import ContactCTASection from './ContactCtaSection'
import WorkingProcessSection from './WorkingProcessSection'

import VisaFaqSection from './VisaFaqSections'
import { useVisaCategories, useVisaSettings } from '@/services/visaService'

const Visapage = () => {
  const { data, isLoading } = useVisaCategories(1, 20);
  const { data: settingsData } = useVisaSettings();

  const settings = settingsData?.data?.[0];

  return (
    <>
      <VisaPackageGrid
        visaPackages={data?.data || []}
        isLoading={isLoading}
      />
      <WhyChooseVisa />
      <ContactCTASection />
      <WorkingProcessSection
        basicDetails={{
          email: settings?.email,
          phoneNumber: settings?.visaAssistance,
        }}
      />
      <div className="container mx-auto">

        <div className="grid grid-cols-12">
          <div className="xl:col-span-8 lg:col-span-10 xl:col-start-3 lg:col-start-2">


            <VisaFaqSection
              faqs={settings?.faqs || []}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Visapage