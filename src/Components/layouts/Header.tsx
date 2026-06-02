
"use client";

import Link from "next/link";
import Image from "next/image";
import { BsCaretDownFill } from "react-icons/bs";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import SiteBtn from "../Common/SiteBtn/SiteBtn";
import { svgIcon } from "../Common/Icons/SvgIcons";
import { LogoutModal } from "../Common/Modal";

import { useLogout } from "@/services/authService";
import { useGetSettings } from "@/services/settingService";

import useAppCookies from "@/hook/useCookies";
import { toastSuccess } from "@/utils/toast";
import { BASE_URL } from "@/lib/const";
import { useDestinations } from "@/services/destinationService";
import { regionLabels } from "@/utils";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { isLoggedIn, refreshToken, clearTokens } = useAppCookies();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const { data: settings } = useGetSettings();

  const languages = [
    { name: "English", img: "/assets/img/england-flag.png", code: "EN" },
    { name: "Dutch", img: "/assets/img/netherlands-flag.png", code: "NL" },
    { name: "Japanese", img: "/assets/img/japan-flag.png", code: "JP" },
    { name: "Korean", img: "/assets/img/korea-flag.png", code: "KR" },
    { name: "Chinese", img: "/assets/img/china-flag.png", code: "CN" },
  ];

  const logoutMutation = useLogout({
    onSuccess: () => {
      clearTokens();
      router.replace("/login");
    },
    onError: () => {
      clearTokens();
      router.replace("/login");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate(
      {
        refreshToken: refreshToken ?? "",
      },
      {
        onSuccess: () => {
          clearTokens();
          toastSuccess("Logged out successfully");
          setShowLogoutModal(false);
          router.replace("/login");
        },
        onError: () => {
          clearTokens();
          setShowLogoutModal(false);
          router.replace("/login");
        },
      }
    );
  };
  const { data: destinationsData } = useDestinations();

  const destinations = destinationsData?.data || [];

  const groupedDestinations = Object.keys(regionLabels).reduce(
    (acc: any, region) => {
      acc[region] = destinations.filter(
        (item: any) => item.region === region
      );

      return acc;
    },
    {}
  );

  return (
    <>
      <div className="topbar-area hidden border-b border-gray-200 bg-white lg:block">
        <div className="container mx-auto px-3">
          <div className="topbar-wrap flex items-center justify-between ">
            {/* Left Side */}
            <div className="logo-and-search-area flex items-center gap-6">
              {/* Logo */}
              <Link href="/" className="header-logo flex items-center">
                <Image
                  src={
                    settings?.logo
                      ? `${BASE_URL}/${settings.logo}`
                      : "/assets/img/header-logo.svg"
                  }
                  alt="Logo"
                  width={160}
                  height={50}
                  priority
                  className="h-auto w-[160px] object-contain"
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

            {/* Right Side */}
            <div className="topbar-right flex items-center gap-6">


              {/* Help + Language */}
              <div className="support-and-language-area flex items-center gap-6">
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-700 transition hover:text-primary"
                >
                  Need Help?
                </Link>

                {/* Language */}
                <div className="language-area group relative">
                  <button className="language-btn flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {svgIcon.laguageIcon}

                    <span>EN</span>

                    <BsCaretDownFill size={13} fill="#525252" />
                  </button>

                  <ul className="invisible absolute right-0 z-50 mt-3 w-40 rounded-lg border border-gray-200 bg-white opacity-0 shadow-lg transition duration-200 group-hover:visible group-hover:opacity-100">
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
                            style={{
                              width: "18px",
                              height: "auto",
                            }}
                          />

                          {lang.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Auth Button */}
              {isLoggedIn ? (
                <button
                  onClick={() => setShowLogoutModal(true)}
                  disabled={logoutMutation.isPending}
                  className="primary-btn1 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-black px-6 py-2.5 font-medium text-white transition hover:bg-gray-800 disabled:opacity-60"
                >
                  {svgIcon.userIcon}
                  Logout
                </button>
              ) : (
                <SiteBtn
                  link="/login"
                  text="Login"
                  svgIcon={svgIcon.userIcon}
                  iconPosition="start"
                  className="primary-btn1 inline-flex cursor-pointer items-center justify-center rounded-full bg-black px-6 py-2.5 font-medium text-white transition hover:bg-gray-800"
                />
              )}
            </div>
          </div>
        </div>



        <LogoutModal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          handleLogout={handleLogout}
        />
      </div>
      {/* ===================== Main Header ===================== */}
      <header className="style-1 bg-white shadow-sm  relative">
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
              <ul className="menu-list flex items-center  font-medium text-gray-800">
                <li>
                  <Link
                    href="/"
                    className={`transition hover:text-primary ${pathname === "/" ? "text-primary" : ""
                      }`}
                  >
                    Home
                  </Link>
                </li>

                {/* Destination */}
                <li className="group static">
                  <Link
                    href="/destination"
                    className={`flex items-center gap-1 transition hover:text-primary ${pathname.startsWith("/destination")
                        ? "text-primary"
                        : ""
                      }`}
                  >
                    Destination
                    <BsCaretDownFill size={13} />
                  </Link>

                  {/* Mega Menu */}
                  <div className="invisible absolute left-0 top-8 z-50 mt-6 w-full  bg-white p-8 opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:opacity-100 border border-[#e8e8e8]">
                    <img alt="" loading="lazy" width="275" height="365" decoding="async" data-nimg="1" className="vector1 absolute bottom-0 -z-1 left-0" src="/assets/img/mega-menu-vector1.svg" ></img>
                    <img alt="" loading="lazy" width="275" height="365" decoding="async" data-nimg="1" className="vector2 absolute bottom-0 -z-1 right-0" src="/assets/img/mega-menu-vector2.svg" ></img>
                    <div className="container mx-auto">

                    <div className="grid grid-cols-3 gap-8">
                      {Object.entries(groupedDestinations).map(
                        ([region, items]: any, index) => (
                          <div key={index}>
                            <h5 className="mb-3 text-lg font-semibold">
                              {regionLabels[region] || region}
                            </h5>

                            <ul className="space-y-3">
                              {items.map((item: any) => (
                                <li key={item._id}>
                                  <Link
                                    href={`/destination/${item._id}`}
                                    className="flex items-center gap-2 hover:text-primary"
                                  >
                                    <Image
                                    src={
                                      item?.flagImage
                                        ? `${BASE_URL}/${item.flagImage}`
                                        : "/assets/img/header-logo.svg"
                                    }
                                    alt={item.name}
                                    width={22}
                                    height={22}
                                    className="h-[22px] w-[22px] rounded-full object-cover"
                                  unoptimized
                                  />

                                    <span>
                                      {item.country}
                                      {/* {item.name ? ` - ${item.name}` : ""} */}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    href="/travel-package"
                    className={`transition hover:text-primary ${pathname === "/travel-package"
                      ? "text-primary"
                      : ""
                      }`}
                  >
                    Travel Package
                  </Link>
                </li>

                <li>
                  <Link
                    href="/visa"
                    className={`transition hover:text-primary ${pathname === "/visa" ? "text-primary" : ""
                      }`}
                  >
                    Visa
                  </Link>
                </li>

                <li>
                  <Link
                    href="/hotel"
                    className={`transition hover:text-primary ${pathname === "/hotel" ? "text-primary" : ""
                      }`}
                  >
                    Hotel
                  </Link>
                </li>

                <li>
                  <Link
                    href="/experience"
                    className={`transition hover:text-primary ${pathname === "/experience" ? "text-primary" : ""
                      }`}
                  >
                    Experience
                  </Link>
                </li>

                 <li>
                  <Link
                    href="/about"
                    className={`transition hover:text-primary ${pathname === "/about" ? "text-primary" : ""
                      }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`transition hover:text-primary ${pathname === "/contact" ? "text-primary" : ""
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
                <span>WhatsApp</span>

                <a
                  href={`https://wa.me/${settings?.basicDetails?.whatsappNo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 {settings?.basicDetails?.whatsappNo}
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
