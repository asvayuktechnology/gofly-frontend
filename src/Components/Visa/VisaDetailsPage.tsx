import React from 'react'
import VisaPackageGrid from './VisaPackageGrid'
import WhyChooseVisa from './WhyChooseVisa'
import ContactCTASection from './ContactCtaSection'
import WorkingProcessSection from './WorkingProcessSection'
import FaqSection from '../Common/FaqSection'
import RightGridLayout from '../layouts/Grids/RightGridLayout'

const VisaDetailsPage = () => {
    return (
        <>
            <div className="container mx-auto pt-100">
                <RightGridLayout />
            </div>
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

export default VisaDetailsPage