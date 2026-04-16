"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const languages = [
    { name: "English", img: "/assets/img/england-flag.png", code: "EN" },
    { name: "Dutch", img: "/assets/img/netherlands-flag.png", code: "NL" },
    { name: "Japanese", img: "/assets/img/japan-flag.png", code: "JP" },
    { name: "Korean", img: "/assets/img/korea-flag.png", code: "KR" },
    { name: "Chinese", img: "/assets/img/china-flag.png", code: "CN" },
  ];

  return (
    <>
      {/* ===================== Topbar ===================== */}
      <div className="topbar-area hidden lg:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <button
                    type="submit"
                    className=""
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.8044 14.8855L13.0544 12.198C15.436 9.1908 15.0601 4.81043 12.198 2.05444C9.33593 -0.701547 4.90327 -0.65327 2.1002 2.1002C-0.702864 4.85366 -0.768225 9.28632 2.05444 12.198C4.8771 15.1097 9.25747 15.4856 12.198 13.0544L14.8855 15.8044C15.1473 16.0652 15.5706 16.0652 15.8324 15.8044C16.0941 15.5426 16.0941 15.1193 15.8324 14.8575L15.8044 14.8855Z" />
                    </svg>
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
            <div className="topbar-right flex items-center gap-6">
              
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
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="currentColor"
                    >
                      <path d="M7 14C3.134 14 0 10.866 0 7C0 3.134 3.134 0 7 0C10.866 0 14 3.134 14 7C14 10.866 10.866 14 7 14Z" />
                    </svg>
                    <span>EN</span>
                    <i className="bi bi-caret-down-fill text-xs"></i>
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
              <Link
                href="#"
                className="primary-btn1 black-bg inline-flex items-center justify-center px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
              >
                <span className="flex items-center gap-2">
                  <i className="bi bi-person"></i>
                  Login
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Main Header ===================== */}
      <header className="style-1 bg-white shadow-sm  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-nowrap items-center justify-between ">
            
            {/* Mobile Logo */}
            <Link
              className="header-logo block lg:hidden"
              href="/"
            >
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
              <ul className="menu-list flex items-center gap-8 text-gray-800 font-medium">
                
                {/* Home */}
                <li className="relative group">
                  <Link
                    href="/"
                    className="flex items-center gap-1 hover:text-primary transition"
                  >
                    Home 
                  </Link>

              
                </li>

                {/* Destination */}
                <li className="relative group">
                  <Link
                    href="/destination"
                    className="flex items-center gap-1 hover:text-primary transition"
                  >
                    Destination <i className="bi bi-caret-down-fill text-xs"></i>
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
                  <Link href="/travel-package" className="hover:text-primary transition">
                    Travel Package
                  </Link>
                </li>
                {/* Contact */}
                <li>
                  <Link href="/contact" className="hover:text-primary transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* WhatsApp */}
              <div className="hidden lg:flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl">
                <Image
                  src="/assets/img/whatsapp-icon.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                <div className="text-sm">
                  <span className="block text-gray-500">WhatsApp</span>
                  <a
                    href="https://wa.me/91345533865"
                    className="font-semibold text-gray-900 hover:text-primary"
                  >
                    +91 345 533 865
                  </a>
                </div>
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