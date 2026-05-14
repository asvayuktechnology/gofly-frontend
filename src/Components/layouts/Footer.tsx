"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
  BiLogoTwitter,
  BiLogoTelegram,
} from "react-icons/bi";

import { svgIcon } from "../Common/Icons/SvgIcons";
import { BASE_URL } from "@/lib/const";
import { useGetSettings } from "@/services/settingService";

const Footer: React.FC = () => {
  const { data: settings } = useGetSettings();

  return (
    <footer className="footer-section">
      <div className="container mx-auto">
        {/* Top Contact Section */}
        <div className="footer-contact-wrap">
          <div className="inquiry-area">
            {svgIcon.msgIcon}

            <div className="content">
              <h6>To More Inquiry</h6>
              <span>Don’t hesitate Call to GoFly.</span>
            </div>
          </div>

          <ul className="contact-area">
            {/* WhatsApp */}
            <li className="single-contact">
              <div className="icon">
                <Image
                  src="/assets/img/whatsapp-icon.svg"
                  alt="whatsapp"
                  width={22}
                  height={22}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              <div className="content">
                <span>WhatsApp</span>

                <a
                  href={`https://wa.me/${settings?.basicDetails?.whatsappNo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 {settings?.basicDetails?.whatsappNo}
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="single-contact">
              <div className="icon">
                <Image
                  src="/assets/img/mail-icon2.svg"
                  alt="mail"
                  width={22}
                  height={22}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              <div className="content">
                <span>Mail Us</span>

                <a href={`mailto:${settings?.basicDetails?.email}`}>
                  {settings?.basicDetails?.email}
                </a>
              </div>
            </li>

            {/* Phone */}
            <li className="single-contact">
              <div className="icon">
                <Image
                  src="/assets/img/call-icon.svg"
                  alt="call"
                  width={22}
                  height={22}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              <div className="content">
                <span>Call Us</span>

                <a href={`tel:${settings?.basicDetails?.phoneNumber}`}>
                  +91 {settings?.basicDetails?.phoneNumber}
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Divider */}
        {svgIcon.footerDivider}

        {/* Footer Menu */}
        <div className="footer-menu-wrap">
          <div className="grid grid-cols-12 gy-md-4 gy-5">
            {/* Logo + Info */}
            <div className="lg:col-span-3 md:col-span-4 sm:col-span-6">
              <div className="footer-logo-and-addition-info">
                <Link href="/" className="footer-logo">
                  <Image
                    src={
                      settings?.logo
                        ? `${BASE_URL}/${settings.logo}`
                        : "/assets/img/footer-logo.svg"
                    }
                    alt="logo"
                    width={120}
                    height={45}
                    // style={{ width: "auto", height: "auto" }}
                    priority
                    unoptimized
                  />
                </Link>

                <div className="address-area">
                  <span>GoFly Travel Agency</span>

                  <a href="#">
                    {settings?.basicDetails?.address}
                  </a>
                </div>

                <ul className="social-list">
  {/* Facebook */}
  {settings?.socialLinks?.facebook && (
    <li>
      <a
        href={settings.socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoFacebook />
      </a>
    </li>
  )}

  {/* Twitter */}
  {settings?.socialLinks?.twitter && (
    <li>
      <a
        href={settings.socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoTwitter />
      </a>
    </li>
  )}

  {/* Telegram */}
  {settings?.socialLinks?.telegram && (
    <li>
      <a
        href={settings.socialLinks.telegram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoTelegram />
      </a>
    </li>
  )}

  {/* LinkedIn */}
  {settings?.socialLinks?.linkedin && (
    <li>
      <a
        href={settings.socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoLinkedin />
      </a>
    </li>
  )}

  {/* YouTube */}
  {settings?.socialLinks?.youtube && (
    <li>
      <a
        href={settings.socialLinks.youtube}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoYoutube />
      </a>
    </li>
  )}

  {/* Instagram */}
  {settings?.socialLinks?.instagram && (
    <li>
      <a
        href={settings.socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoInstagram />
      </a>
    </li>
  )}
</ul>

                <a href="#">
                  <Image
                    src="/assets/img/google-play.svg"
                    width={150}
                    height={50}
                    className="h-[30px] w-auto"
                    alt="Google Play"
                  />
                </a>
              </div>
            </div>

            {/* Widgets */}
            {[
              {
                title: "Top Destination",
                links: [
                  "Maldives Tour",
                  "Bali, Indonesia Tour",
                  "Thailand Tour",
                  "Philippines Tour",
                ],
              },
              {
                title: "Popular Search",
                links: [
                  "Adventure",
                  "Hiking & Stiking",
                  "Holiday Packages",
                  "Flights And Hotels",
                ],
              },
              {
                title: "Resources",
                links: [
                  "About GoFly",
                  "Visa Processing",
                  "Customize Tour",
                  "Travel Inspirations",
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="lg:col-span-3 md:col-span-3 sm:col-span-2 flex justify-end"
              >
                <div className="footer-widget">
                  <div className="widget-title">
                    <h5>{section.title}</h5>
                  </div>

                  <ul className="widget-list">
                    {section.links.map((item, idx) => (
                      <li key={idx}>
                        <Link href="#">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container mx-auto">
          <div className="copyright-and-payment-method-area">
            <p>
              Copyright {new Date().getFullYear()} | All Right Reserved.
            </p>

            <div className="payment-method-area">
              <span>Accepted Payment Methods :</span>

              <ul>
                {[
                  "mastar-card-icon.svg",
                  "visa-icon.svg",
                  "paypal-icon.svg",
                  "gpay-icon.svg",
                ].map((icon, i) => (
                  <li key={i}>
                    <Image
                      src={`/assets/img/${icon}`}
                      alt="payment"
                      width={52}
                      height={28}
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;