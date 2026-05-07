"use client";

import Link from "next/link";
import Image from "next/image";
import { BsCaretDownFill, BsFilePerson } from "react-icons/bs";
import { usePathname } from "next/navigation";
import SiteBtn from "../Common/SiteBtn/SiteBtn";
import { link } from "fs/promises";
import { svgIcon } from "../Common/Icons/SvgIcons";

const Header = () => {
  const languages = [
    { name: "English", img: "/assets/img/england-flag.png", code: "EN" },
    { name: "Dutch", img: "/assets/img/netherlands-flag.png", code: "NL" },
    { name: "Japanese", img: "/assets/img/japan-flag.png", code: "JP" },
    { name: "Korean", img: "/assets/img/korea-flag.png", code: "KR" },
    { name: "Chinese", img: "/assets/img/china-flag.png", code: "CN" },
  ];
  const pathname = usePathname();

  return (
    <>
      {/* ===================== Topbar ===================== */}
      <div className="topbar-area hidden lg:block bg-white border-b border-gray-200">
        <div className="container mx-auto px-3">
          <div className="topbar-wrap flex items-center justify-between ">
            {/* Logo and Search */}
            <div className="logo-and-search-area flex items-center gap-6">
              <Link href="/" className="header-logo flex items-center">
                <Image
                  src="/assets/img/header-logo.svg"
                  alt="Logo"
                  width={160}
                  height={50}
                  priority
                />
              </Link>

              {/* Search */}
              <form className="search-area">
                <div className="form-inner relative">
                  <button type="submit" className="">
                    {svgIcon.searchIcon}
                  </button>
                  <input
                    type="text"
                    placeholder="Find Your Perfect Tour Package"
                    className="w-80 xl:w-92 pl-10 pr-12 py-2.5 border border-gray-300 rounded-full text-sm"
                  />
                </div>
              </form>
            </div>

            {/* Right Section */}
            <div className="topbar-right flex items-center ">
              {/* Need Help */}
              <div className="support-and-language-area flex items-center gap-6">
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-primary transition"
                >
                  Need Help?
                </Link>

                {/* Language Selector */}
                <div className="language-area relative group">
                  <button className="language-btn flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {svgIcon.laguageIcon}
                    <span>EN</span>
                    <BsCaretDownFill size={13} fill="#525252" />
                  </button>

                  {/* Dropdown */}
                  <ul className="language-list absolute right-0 mt-3 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                    {languages.map((lang, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Image
                            src={lang.img}
                            alt={lang.name}
                            width={18}
                            height={18}
                          />
                          {lang.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Login Button */}
              <SiteBtn
                link=""
                text="Login"
                svgIcon={svgIcon.userIcon}
                iconPosition="start"
                className="primary-btn1 black-bg inline-flex items-center justify-center px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Main Header ===================== */}
      <header className="style-1 bg-white shadow-sm  ">
        <div className="container mx-auto px-3">
          <div className="flex flex-nowrap items-center justify-between ">
            {/* Mobile Logo */}
            <Link className="header-logo block lg:hidden" href="/">
              <Image
                src="/assets/img/header-logo.svg"
                alt="Logo"
                width={120}
                height={40}
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="main-menu hidden lg:flex items-center">
              <ul className="menu-list flex items-center text-gray-800 font-medium">
                {/* Home */}
                <li className="relative group menu-item-has-children ">
                  <Link
                    href="/"
                    className={`flex items-center gap-1 transition ${pathname === "/" ? "active" : ""
                      }`}
                  >
                    Home
                  </Link>
                </li>

                {/* Destination */}
                <li className="relative group">
                  <Link
                    href="/destination"
                    className={`flex items-center transition ${pathname.startsWith("/destination") ? "active" : ""
                      }`}
                  >
                    Destination
                    <BsCaretDownFill size={13} />
                  </Link>

                  {/* Mega Menu */}
                  <div className="absolute left-0 top-8 mt-6 w-[800px] bg-white shadow-xl rounded-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Europe */}
                      <div>
                        <h5 className="text-lg font-semibold mb-3">Europe</h5>
                        <ul className="space-y-2">
                          {[
                            { name: "Paris, France", img: "france-flag.webp" },
                            { name: "United Kingdom", img: "france-flag.webp" },
                            { name: "Netherlands", img: "france-flag.webp" },
                            { name: "Italy", img: "france-flag.webp" },
                            { name: "Greece", img: "france-flag.webp" },
                            { name: "Romania", img: "france-flag.webp" },
                          ].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/destination/details"
                                className="flex items-center gap-2 hover:text-primary"
                              >
                                <Image
                                  src={`/assets/img/${item.img}`}
                                  alt={item.name}
                                  width={18}
                                  height={18}
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Asia */}
                      <div>
                        <h5 className="text-lg font-semibold mb-3">Asia</h5>
                        <ul className="space-y-2">
                          {[
                            { name: "Tokyo, Japan", img: "france-flag.webp" },
                            { name: "Indonesia", img: "france-flag.webp" },
                            { name: "Thailand", img: "france-flag.webp" },
                            { name: "Malaysia", img: "france-flag.webp" },
                            { name: "Hanoi, Vietnam", img: "france-flag.webp" },
                            { name: "India", img: "france-flag.webp" },
                          ].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/destination/details"
                                className="flex items-center gap-2 hover:text-primary"
                              >
                                <Image
                                  src={`/assets/img/${item.img}`}
                                  alt={item.name}
                                  width={18}
                                  height={18}
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Travel Package */}
                <li>
                  <Link
                    href="/travel-package"
                    className={`flex items-center gap-1 transition ${pathname === "/travel-package" ? "active" : ""
                      }`}
                  >
                    Travel Package
                  </Link>
                </li>
                <li>
                  <Link href="/visa" className="hover:text-primary transition">
                    Visa
                  </Link>
                </li>
                <li>
                  <Link href="/hotel" className="hover:text-primary transition">
                    Hotel
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="hover:text-primary transition">
                    Experience
                  </Link>
                </li>
                {/* Contact */}
                <li>
                  <Link
                    href="/contact"
                    className={`flex items-center gap-1 transition ${pathname === "/contact" ? "active" : ""
                      }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* WhatsApp */}
              <div className="contact-area   ">
                <div className="single-contact">
                  <div className="icon">
                    <Image
                      src="/assets/img/whatsapp-icon.svg"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="content">
                    <span className="block text-gray-500">WhatsApp</span>
                    <a
                      href="https://wa.me/91345533865"
                      className="font-semibold text-gray-900 hover:text-primary"
                    >
                      +91 345 533 865
                    </a>
                  </div>
                </div>
                <BsCaretDownFill
                  className="contact-dropdown-btn"
                  size={13}
                  fill="#000"
                />
              </div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden text-2xl text-gray-700">
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
