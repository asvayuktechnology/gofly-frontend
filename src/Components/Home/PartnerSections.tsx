"use client";

import Image from "next/image";
import Link from "next/link";
import { useTrustedCompanies } from "@/services/trustedCompanyService";
import { BASE_URL } from "@/lib/const";


export default function PartnerSection() {
  const { data, isLoading } = useTrustedCompanies();

  const partners = data?.data || [];

  if (isLoading) {
    return null;
  }

  return (
    <div className="partner-section mb-100">
      <div className="container mx-auto">
        {/* Section Title */}
        <div
          className="partner-title wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <h5>Those Company You Can Easily Trust!</h5>
        </div>

        {/* Partner Logos */}
        <div className="partner-wrap">
          <div className="marquee">
            {/* First Group */}
            <div className="marquee__group">
              {partners.map((partner) => (
                <Link
                  key={partner._id}
                  href={partner.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`${BASE_URL}/${partner.file}`}
                    alt="partner-logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>

            {/* Duplicate Group */}
            <div
              className="marquee__group"
              aria-hidden="true"
            >
              {partners.map((partner) => (
                <Link
                  key={`duplicate-${partner._id}`}
                  href={partner.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`${BASE_URL}/${partner.file}`}
                    alt="partner-logo"
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}