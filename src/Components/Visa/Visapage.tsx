import React from 'react'
import VisaPackageGrid from './VisaPackageGrid'
import WhyChooseVisa from './WhyChooseVisa'
import ContactCTASection from './ContactCtaSection'
import WorkingProcessSection from './WorkingProcessSection'
import FaqSection from '../Common/FaqSection'

const Visapage = () => {
  return (
    <>
      <VisaPackageGrid />
      <WhyChooseVisa />
      <ContactCTASection />
      <WorkingProcessSection />
      <div className="container mx-auto">

        <div className="grid grid-cols-12">
          <div className="xl:col-span-8 lg:col-span-10 xl:col-start-3 lg:col-start-2">

            <FaqSection />
          </div>

        </div>
      </div>
    </>
  )
}

export default Visapage