import React from 'react'
import VisaPackageGrid from './VisaPackageGrid'
import WhyChooseVisa from './WhyChooseVisa'
import ContactCTASection from './ContactCtaSection'
import WorkingProcessSection from './WorkingProcessSection'
import FaqSection from '../Common/FaqSection'
import RightGridLayout from '../layouts/Grids/RightGridLayout'
import VisaListSection from './VisaListSection'
import PackageSidebar from '../Common/Sidebars/PackageSidebar'
import RelevantPackageSection from '../Common/RelaventPackageSection'
import InfoListCard from '../Common/UI/Cards/InfoListCard'
import { VisaAdditionalRequirements, VisaConditionalRequirements, VisaDocumentsRequirements } from '@/lib/data'
import { svgIcon } from '../Common/Icons/SvgIcons'




const VisaDetailsPage = () => {
    return (
        <>
            <div className="visa-details-page pt-100 mb-100">
                <div className="container mx-auto">
                    <VisaListSection />

                </div>


                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7">
                            <div className="visa-details-wrapper active">
                                <div className="single-requirement mb-50">
                                    <h2>Documents Requirement</h2>
                                    <InfoListCard items={VisaDocumentsRequirements} />
                                </div>
                                <div className="single-requirement mb-50">
                                    <h2>Additional Requirement</h2>
                                    <InfoListCard items={VisaAdditionalRequirements} />
                                </div>
                                <div className="single-requirement mb-50">
                                    <h2>Conditional Requirement</h2>
                                    <InfoListCard items={VisaConditionalRequirements} />
                                </div>

                                <div className="visa-rejection-area mb-50">
                                    <h2>
                                        {svgIcon.VisaRejectionIcon}
                                        Visa Rejection Reasons
                                    </h2>
                                    <div className="visa-rejection-wrapper">
                                        <div className="visa-rejection-content">
                                            <h5>Common Reasons for Rejection:</h5>
                                            <ul className="info-list two">
                                                <li>
                                                    {svgIcon.TickIcon}
                                                    Insufficient financial proof.
                                                </li>
                                                <li>
                                                    {svgIcon.TickIcon}
                                                    Lack of strong ties to home country.
                                                </li>
                                                <li>
                                                    {svgIcon.TickIcon}
                                                    Incomplete or false documentation.
                                                </li>
                                                <li>
                                                    {svgIcon.TickIcon}
                                                    Suspicious travel history or security concerns.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="visa-rejection-img">
                                            <img
                                                alt=""
                                                loading="lazy"
                                                width={250}
                                                height={220}
                                                decoding="async"
                                                data-nimg={1}
                                                style={{ color: "transparent" }}
                                                src="/assets/img/visa-rejection-img.webp"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="note-area">
                                    <h2>
                                        {svgIcon.WarningIcon}
                                        Important Note
                                    </h2>
                                    <ul className="info-list three">
                                        <li>
                                            {svgIcon.TickIcon}
                                            Not all applicants need to submit these additional documents.
                                        </li>
                                        <li>
                                            {svgIcon.TickIcon}
                                            Conditional requirements depend on your nationality, travel history, and
                                            purpose of visit.
                                        </li>
                                        <li>
                                            {svgIcon.TickIcon}
                                            Providing incomplete or false information can lead to visa rejection.
                                        </li>
                                    </ul>
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
                </div>
                <div className="container mx-auto">

                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-8 lg:col-span-10 xl:col-start-3 lg:col-start-2">

                            <FaqSection />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default VisaDetailsPage