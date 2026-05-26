"use client";
import { useState } from 'react'
import VisaListSection from './VisaListSection'
import RelevantPackageSection from '../Common/RelaventPackageSection'
import InfoListCard from '../Common/UI/Cards/InfoListCard'
import { svgIcon } from '../Common/Icons/SvgIcons'
import VisaSidebar from '../Common/Sidebars/VisaSidebar'
import VisaFaqSection from './VisaFaqSections'
import { useVisaCategoryDetails } from '@/services/visaService'
import GlobalLoader from '../Common/GlobalLoader';
import SuccessStories from './SuccessStories'



interface Props {
    categoryId: string;
}

const VisaDetailsPage = ({ categoryId }: Props) => {
    const { data, isLoading } =
        useVisaCategoryDetails(categoryId);

    const visaData = data?.data?.data;
    const [activeIndex, setActiveIndex] = useState(0);
    const visaTypes = visaData?.visaTypes ?? [];

    const selectedVisa = visaTypes[activeIndex];
    const requirement = selectedVisa?.requirement;
    const hasDocs = requirement?.documents?.length > 0;
    const hasAdditional = requirement?.additionalReqs?.length > 0;
    const hasConditional = requirement?.conditionalReqs?.length > 0;
    const hasRejection = requirement?.rejectionReasons?.length > 0;
    const hasNotes = requirement?.importantNotes?.length > 0;
    const hasFaqs = requirement?.faqs?.length > 0;

    if (isLoading) {
        return <GlobalLoader text="Fetching visa details..." />;
    }
    return (
        <>
            <div className="visa-details-page pt-100 mb-100">
                <div className="container mx-auto">


                    <VisaListSection
                        visaTypes={visaTypes}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />

                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7">
                            <div className="visa-details-wrapper active">
                                {hasDocs && (
                                    <div className="single-requirement mb-50">
                                        <h2>Documents Requirement</h2>
                                        <InfoListCard items={requirement.documents} />
                                    </div>
                                )}
                                {hasAdditional && (
                                    <div className="single-requirement mb-50">
                                        <h2>Additional Requirement</h2>
                                        <InfoListCard items={requirement.additionalReqs} />
                                    </div>
                                )}
                                {hasConditional && (
                                    <div className="single-requirement mb-50">
                                        <h2>Conditional Requirement</h2>
                                        <InfoListCard items={requirement.conditionalReqs} />
                                    </div>
                                )}

                                {hasRejection && (
                                    <div className="visa-rejection-area mb-50">
                                        <h2>
                                            {svgIcon.VisaRejectionIcon}
                                            Visa Rejection Reasons
                                        </h2>

                                        <div className="visa-rejection-wrapper">
                                            <div className="visa-rejection-content">
                                                <h5>Common Reasons for Rejection:</h5>
                                                <ul className="info-list two">
                                                    {requirement.rejectionReasons.map((item: string, i: number) => (
                                                        <li key={i}>
                                                            {svgIcon.TickIcon}
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {hasNotes && (
                                    <div className="note-area">
                                        <h2>
                                            {svgIcon.WarningIcon}
                                            Important Note
                                        </h2>
                                        <ul className="info-list three">
                                            {requirement.importantNotes.map((item: string, i: number) => (
                                                <li key={i}>
                                                    {svgIcon.TickIcon}
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}



                            </div>


                        </div>
                        {selectedVisa && (
                            <div className="lg:col-span-4 lg:col-start-9">
                                <VisaSidebar visa={selectedVisa} />
                            </div>
                        )}

                        {/* <div className="col-span-12">
                            <RelevantPackageSection />
                        </div> */}
                    </div>
                </div>
                {/* <div className="container mx-auto">

                    <div className="grid grid-cols-12">
                       

                    </div>
                </div> */}
            </div>
            <div className="">
                <SuccessStories />
            </div>
            <div className="container mx-auto">

                <div className="grid grid-cols-12">
                     <div className="xl:col-span-8 lg:col-span-10 xl:col-start-3 lg:col-start-2">
                            {hasFaqs && (
                                <VisaFaqSection faqs={requirement.faqs} />
                            )}
                        </div>

                </div>
            </div>

        </>
    )
}

export default VisaDetailsPage