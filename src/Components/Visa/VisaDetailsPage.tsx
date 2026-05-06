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
import SuccessStories from './SuccessStories'




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
                            <div className="visa-dt-sidebar">

                                <div className="visa-info-wrap active">
                                    <div className="title-area">
                                        <h4>Tourist E-Visa </h4>
                                        <span>Validity - 60 Days / Single entry</span>
                                    </div>
                                    <div className="pricing-area">
                                        <span>Visa Pricing</span>
                                        <strong>
                                            $8,000<sub>/per person</sub>
                                        </strong>
                                    </div>
                                    <a
                                        href="#"
                                        className="primary-btn1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#visaApplyModal"
                                    >
                                        <span>
                                            Apply Online
                                            {svgIcon.arrow}
                                        </span>
                                        <span>
                                            Apply Online
                                            {svgIcon.arrow}
                                        </span>
                                    </a>
                                    <span>
                                        <svg
                                            width={14}
                                            height={14}
                                            viewBox="0 0 14 14"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7 0C3.13423 0 0 3.13423 0 7C0 10.8662 3.13423 14 7 14C10.8662 14 14 10.8666 14 7C14 3.13423 10.8662 0 7 0ZM7 12.6875C3.85877 12.6875 1.31252 10.1412 1.31252 7C1.31252 3.85877 3.85877 1.31252 7 1.31252C10.1412 1.31252 12.6875 3.85877 12.6875 7C12.6875 10.1412 10.1412 12.6875 7 12.6875ZM7.00044 3.06992C6.49908 3.06992 6.11973 3.33157 6.11973 3.75418V7.63042C6.11973 8.05347 6.49903 8.31423 7.00044 8.31423C7.48956 8.31423 7.88115 8.04256 7.88115 7.63042V3.75418C7.8811 3.3416 7.48956 3.06992 7.00044 3.06992ZM7.00044 9.1875C6.51875 9.1875 6.12673 9.57952 6.12673 10.0616C6.12673 10.5428 6.51875 10.9349 7.00044 10.9349C7.48212 10.9349 7.87371 10.5428 7.87371 10.0616C7.87366 9.57948 7.48212 9.1875 7.00044 9.1875Z" />
                                        </svg>
                                        Exclusive Offers – Access travel, dining, and shopping deals.
                                    </span>
                                </div>


                                <div className="visa-assistance-wrap mt-40">
                                    <div className="visa-assistance-content">
                                        <h4>Need Visa Assistance?</h4>
                                        <ul>
                                            <li>
                                                <svg
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 16 16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width={16} height={16} rx={8} />
                                                    <path d="M11.6947 6.45771L7.24644 10.9083C7.17556 10.9768 7.08572 11.0123 6.99596 11.0123C6.9494 11.0124 6.90328 11.0033 6.86027 10.9854C6.81727 10.9676 6.77822 10.9414 6.7454 10.9083L4.3038 8.46675C4.16436 8.32963 4.16436 8.10515 4.3038 7.96571L5.16652 7.10059C5.29892 6.96827 5.53524 6.96827 5.66764 7.10059L6.99596 8.42891L10.3309 5.09155C10.3638 5.05862 10.4028 5.03249 10.4457 5.01465C10.4887 4.9968 10.5347 4.98759 10.5812 4.98755C10.6757 4.98755 10.7656 5.02539 10.8317 5.09155L11.6944 5.95675C11.8341 6.09619 11.8341 6.32067 11.6947 6.45771Z" />
                                                </svg>
                                                Expert Guidance
                                            </li>
                                            <li>
                                                <svg
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 16 16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width={16} height={16} rx={8} />
                                                    <path d="M11.6947 6.45771L7.24644 10.9083C7.17556 10.9768 7.08572 11.0123 6.99596 11.0123C6.9494 11.0124 6.90328 11.0033 6.86027 10.9854C6.81727 10.9676 6.77822 10.9414 6.7454 10.9083L4.3038 8.46675C4.16436 8.32963 4.16436 8.10515 4.3038 7.96571L5.16652 7.10059C5.29892 6.96827 5.53524 6.96827 5.66764 7.10059L6.99596 8.42891L10.3309 5.09155C10.3638 5.05862 10.4028 5.03249 10.4457 5.01465C10.4887 4.9968 10.5347 4.98759 10.5812 4.98755C10.6757 4.98755 10.7656 5.02539 10.8317 5.09155L11.6944 5.95675C11.8341 6.09619 11.8341 6.32067 11.6947 6.45771Z" />
                                                </svg>
                                                Fast Processing
                                            </li>
                                        </ul>
                                        <div className="contact-area">
                                            <div className="icon">
                                                <img
                                                    alt=""
                                                    loading="lazy"
                                                    width={550}
                                                    height={220}
                                                    decoding="async"
                                                    data-nimg={1}
                                                    style={{ color: "transparent" }}
                                                    src="/assets/img/whatsapp-icon-white.svg"
                                                />
                                            </div>
                                            <div className="content">
                                                <span>WhatsApp</span>
                                                <a href="https://wa.me/00000000">+91 345 546 4568</a>
                                            </div>
                                        </div>
                                    </div>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width={550}
                                        height={220}
                                        decoding="async"
                                        data-nimg={1}
                                        className="visa-assistance-img"
                                        style={{ color: "transparent" }}
                                        src="/assets/img/visa-dt-visa-assistance-img.webp"
                                    />
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
            <div className="">
                <SuccessStories />
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