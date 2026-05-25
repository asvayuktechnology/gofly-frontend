"use client";

import Link from "next/link";
import Image from "next/image";
import { BsCaretDownFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import SiteBtn from "../Common/SiteBtn/SiteBtn";
import { svgIcon } from "../Common/Icons/SvgIcons";
import { useLogout } from "@/services/authService";
import useAppCookies from "@/hook/useCookies";
import { toastSuccess } from "@/utils/toast";
import { useState } from "react";
import { LogoutModal } from "../Common/Modal";
import { useGetSettings } from "@/services/settingService";
import { BASE_URL } from "@/lib/const";

const Header = () => {
  const router = useRouter();

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

  return (
    <div className="topbar-area hidden lg:block bg-white border-b border-gray-200">
      <div className="container mx-auto px-3">
        <div className="topbar-wrap flex items-center justify-between">

          {/* Logo */}
          <div className="logo-and-search-area flex items-center gap-6">
            <Link href="/" className="header-logo flex items-center">
              <Image
                src={
                  settings?.logo
                    ? `${BASE_URL}/${settings?.logo}`
                    : "/assets/img/header-logo.svg"
                }
                alt="Logo"
                width={160}
                height={50}
                priority
                className="w-[160px] h-auto object-contain"
              />
            </Link>

            {/* Search */}
            <form className="search-area">
              <div className="form-inner relative">
                <button type="submit">
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

          {/* Right */}
          <div className="topbar-right flex items-center">
            <div className="support-and-language-area flex items-center gap-6">
              <Link
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-primary transition"
              >
                Need Help?
              </Link>

              {/* Language */}
              <div className="language-area relative group">
                <button className="language-btn flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary">
                  {svgIcon.laguageIcon}

                  <span>EN</span>

                  <BsCaretDownFill
                    size={13}
                    fill="#525252"
                  />
                </button>

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
                className="primary-btn1 black-bg cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition disabled:opacity-60"
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
                className="primary-btn1 black-bg cursor-pointer inline-flex items-center justify-center px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
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

  );

};

export default Header;