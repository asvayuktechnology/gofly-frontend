"use client";

import React, { useState } from "react";
import OfficeLocations from "./OfficeLocations";
import ContactForm from "./ContactForm";
import MapSection from "../Common/MapSection";
import { useContactInfo } from "@/services/contactService";

const ContactPage = () => {
  const { data, isLoading } = useContactInfo();
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const contactData = data?.data?.[0];
  const addresses = contactData?.addresses || [];
  const selectedAddress = addresses[selectedIndex];

  return (
    <>
      <div className="contact-page pt-100 mb-100">
        <OfficeLocations
          offices={addresses}
          selectedIndex={selectedIndex}
          onSelectOffice={setSelectedIndex}
        />

        <ContactForm />

        <>
          <img
            alt=""
            width={90}
            height={110}
            className="vector1"
            src="/assets/img/contact-page-vector1.svg"
          />
          <img
            alt=""
            width={100}
            height={80}
            className="vector2"
            src="/assets/img/contact-page-vector2.svg"
          />
          <img
            alt=""
            width={130}
            height={80}
            className="vector3"
            src="/assets/img/contact-page-vector3.svg"
          />
        </>
      </div>

      {selectedAddress?.mapEmbedUrl && (
        <div className="contact-map-section">
          <MapSection
            width="100%"
            height="500px"
            mapUrl={selectedAddress.mapEmbedUrl}
            title={selectedAddress.country}
          />
        </div>
      )}
    </>
  );
};

export default ContactPage;