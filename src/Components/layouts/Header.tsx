"use client";

import Link from "next/link";
import Image from "next/image";
import { BsCaretDownFill, BsFilePerson } from "react-icons/bs";
import { usePathname } from "next/navigation";

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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      stroke="#000"
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
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M7 14C5.13023 14 3.37239 13.2719 2.05023 11.9498C0.728137 10.6276 0 8.86977 0 7C0 5.13023 0.728137 3.37239 2.05023 2.05023C3.37239 0.728137 5.13023 0 7 0C8.86977 0 10.6276 0.728137 11.9498 2.05023C13.2719 3.37239 14 5.13023 14 7C14 8.86977 13.2719 10.6276 11.9498 11.9498C10.6276 13.2719 8.86977 14 7 14ZM7 0.583324C3.46183 0.583324 0.583324 3.46183 0.583324 7C0.583324 10.5382 3.46183 13.4166 7 13.4166C10.5382 13.4166 13.4166 10.5382 13.4166 7C13.4166 3.46183 10.5382 0.583324 7 0.583324Z"></path>
                        <path d="M7 14C5.90297 14 4.8854 13.2486 4.13468 11.8841C3.41431 10.5747 3.01758 8.84018 3.01758 7C3.01758 5.15982 3.41431 3.42527 4.13468 2.11589C4.8854 0.751433 5.90297 0 7 0C8.09704 0 9.11461 0.751433 9.8653 2.11589C10.5857 3.42527 10.9824 5.15982 10.9824 7C10.9824 8.84018 10.5857 10.5747 9.8653 11.8841C9.11461 13.2486 8.09704 14 7 14ZM7 0.583324C6.12536 0.583324 5.2893 1.22746 4.64579 2.39709C3.97198 3.62179 3.6009 5.25645 3.6009 7C3.6009 8.74355 3.97198 10.3782 4.64576 11.6029C5.28927 12.7725 6.12533 13.4166 6.99998 13.4166C7.87462 13.4166 8.71068 12.7725 9.35419 11.6029C10.028 10.3782 10.3991 8.74355 10.3991 7C10.3991 5.25645 10.028 3.62179 9.35419 2.39709C8.71071 1.22746 7.87462 0.583324 7 0.583324Z"></path>
                        <path d="M6.99968 13.9573C6.8386 13.9573 6.70801 13.8267 6.70801 13.6657V0.334156C6.70801 0.173074 6.83857 0.0424805 6.99968 0.0424805C7.16077 0.0424805 7.29136 0.173074 7.29136 0.334156V13.6657C7.29136 13.8267 7.16077 13.9573 6.99968 13.9573Z"></path>
                        <path d="M13.6661 7.29147H0.334644C0.173562 7.29147 0.0429688 7.16088 0.0429688 6.99979C0.0429688 6.83871 0.173562 6.70812 0.334644 6.70812H13.6661C13.8272 6.70812 13.9578 6.83868 13.9578 6.99979C13.9578 7.16088 13.8272 7.29147 13.6661 7.29147ZM12.7022 3.81187H1.29862C1.13754 3.81187 1.00695 3.6813 1.00695 3.52019C1.00695 3.35908 1.13751 3.22852 1.29862 3.22852H12.7022C12.8633 3.22852 12.9939 3.35908 12.9939 3.52019C12.9939 3.6813 12.8632 3.81187 12.7022 3.81187ZM12.7022 10.771H1.29862C1.13754 10.771 1.00695 10.6404 1.00695 10.4794C1.00695 10.3183 1.13751 10.1877 1.29862 10.1877H12.7022C12.8633 10.1877 12.9939 10.3183 12.9939 10.4794C12.9939 10.6404 12.8632 10.771 12.7022 10.771Z"></path>
                      </g>
                    </svg>
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
              <Link
                href="#"
                className="primary-btn1 black-bg inline-flex items-center justify-center px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
              >
                <span className="flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M7.50105 7.78913C9.64392 7.78913 11.3956 6.03744 11.3956 3.89456C11.3956 1.75169 9.64392 0 7.50105 0C5.35818 0 3.60652 1.75169 3.60652 3.89456C3.60652 6.03744 5.35821 7.78913 7.50105 7.78913ZM14.1847 10.9014C14.0827 10.6463 13.9467 10.4082 13.7936 10.1871C13.0113 9.0306 11.8038 8.2653 10.4433 8.07822C10.2732 8.06123 10.0861 8.09522 9.95007 8.19727C9.23578 8.72448 8.38546 8.99658 7.50108 8.99658C6.61671 8.99658 5.76638 8.72448 5.05209 8.19727C4.91603 8.09522 4.72895 8.04421 4.5589 8.07822C3.19835 8.2653 1.97387 9.0306 1.20857 10.1871C1.05551 10.4082 0.919443 10.6633 0.817424 10.9014C0.766415 11.0034 0.783407 11.1225 0.834416 11.2245C0.970484 11.4626 1.14054 11.7007 1.2936 11.9048C1.53168 12.2279 1.78679 12.517 2.07592 12.7891C2.31401 13.0272 2.58611 13.2483 2.85824 13.4694C4.20177 14.4728 5.81742 15 7.48409 15C9.15076 15 10.7664 14.4728 12.1099 13.4694C12.382 13.2653 12.6541 13.0272 12.8923 12.7891C13.1644 12.517 13.4365 12.2279 13.6746 11.9048C13.8446 11.6837 13.9977 11.4626 14.1338 11.2245C14.2188 11.1225 14.2358 11.0034 14.1847 10.9014Z"></path>
                    </g>
                  </svg>
                  Login
                </span>
              </Link>
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
                    className={`flex items-center gap-1 transition ${
                      pathname === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>

                {/* Destination */}
                <li className="relative group">
                  <Link
                    href="/destination"
                    className={`flex items-center transition ${
                      pathname.startsWith("/destination") ? "active" : ""
                    }`}
                  >
                    Destination
                    <BsCaretDownFill size={13}  />
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
                    className={`flex items-center gap-1 transition ${
                      pathname === "/travel-package" ? "active" : ""
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
                {/* Contact */}
                <li>
                  <Link
                    href="/contact"
                    className={`flex items-center gap-1 transition ${
                      pathname === "/contact" ? "active" : ""
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
