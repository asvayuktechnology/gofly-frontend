"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container mx-auto">
        {/* Top Contact Section */}
        <div className="footer-contact-wrap">
          <div className="inquiry-area">
            <svg width="36" height="36" viewBox="0 0 36 36">
              <path d="M35.8703 28.2548L33.7795 22.1697..." />
            </svg>
            <div className="content">
              <h6>To More Inquiry</h6>
              <span>Don’t hesitate Call to GoFly.</span>
            </div>
          </div>

          <ul className="contact-area">
            <li className="single-contact">
              <div className="icon">
                <Image
                  src="/assets/img/whatsapp-icon.svg"
                  alt="whatsapp"
                  width={22}
                  height={22}
                />
              </div>
              <div className="content">
                <span>WhatsApp</span>
                <a href="https://wa.me/91345533865">+91 345 533 865</a>
              </div>
            </li>

            <li className="single-contact">
              <div className="icon">
                <Image
                  src="/assets/img/mail-icon2.svg"
                  alt="mail"
                  width={22}
                  height={22}
                />
              </div>
              <div className="content">
                <span>Mail Us</span>
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
            </li>

            <li className="single-contact">
              <div className="icon">
                <Image
                  src="/assets/img/call-icon.svg"
                  alt="call"
                  width={22}
                  height={22}
                />
              </div>
              <div className="content">
                <span>Call Us</span>
                <a href="tel:+91456453345">+91 456 453 345</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <svg className="divider" width="1320" height="6" viewBox="0 0 1320 6">
          <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5Z" />
        </svg>

        {/* Footer Menu */}
        <div className="footer-menu-wrap">
          <div className="grid grid-cols-12 gy-md-4 gy-5">
            {/* Logo + Info */}
            <div className="lg:col-span-3 md:col-span-4 sm:col-span-6">
              <div className="footer-logo-and-addition-info">
                <Link href="/" className="footer-logo">
                  <Image
                    src="/assets/img/footer-logo.svg"
                    alt="logo"
                    width={120}
                    height={45}
                  />
                </Link>

                <div className="address-area">
                  <span>GoFly Travel Agency</span>
                  <a href="#">
                    Skyline Plaza, 5th Floor, 123 Main Street Los Angeles, CA
                    90001, USA
                  </a>
                </div>

                <ul className="social-list">
                  <li><a href="#"><BiLogoFacebook/> </a></li>
                  <li><a href="#"><BiLogoLinkedin/></a></li>
                  <li><a href="#"><BiLogoYoutube/></a></li>
                  <li><a href="#"><BiLogoInstagram/></a></li>
                </ul>

                <a href="#">
                  <Image
                    src="/assets/img/google-play.svg"
                    alt="playstore"
                    width={157}
                    height={50}
                  />
                </a>
              </div>
            </div>

            {/* Widget Column */}
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
                        <Link href="#">{item}</Link>
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
              Copyright 2025{" "}
               | All Right
              Reserved.
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