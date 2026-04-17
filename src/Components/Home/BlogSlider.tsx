"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BlogCard from "./BlogCard";


const blogData = [
  {
    image: "/assets/img/blog-img1.webp",
    location: "Tokyo, Japan",
    title: "Top 10 Beaches to Visit This Summer Season.",
    date: "31 January, 2025",
    link: "#",
    description:
      "Famous for its pure white silica sand & crystal-clear waters.",
  },
  {
    image: "/assets/img/blog-img1.webp",
    location: "Vietnam",
    title: "Tropical Escapes & Beach Getaways.",
    date: "23 January, 2025",
    link: "#",
    description: "A beach getaway is perfect for relaxation and adventure.",
  },
  {
    image: "/assets/img/blog-img1.webp",
    location: "Maldives",
    title: "Crystal-Clear Waters & White Sands.",
    date: "01 April, 2025",
    link: "#",
    description: "Perfect for couples, families, and solo travelers.",
  },
  {
    image: "/assets/img/blog-img1.webp",
    location: "Bali, Indonesia",
    title: "Escape to the World’s Breathtaking Islands.",
    date: "23 March, 2025",
    link: "#",
    description: "Escape to paradise and breathtaking islands.",
  },
];

const BlogSlider = () => {
  return (
    <div className="home1-blog-section mb-120">
      <div className="container mx-auto px-4">
        <div className="row mb-50">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2>Travel Inspirations</h2>
              <p>
                A curated list of inspiration the most tour & travel based on
                different destinations.
              </p>
            </div>
          </div>
        </div>

        <div className="blog-slider-area mb-50">
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper blog-slider">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".blog-slider-next",
                    prevEl: ".blog-slider-prev",
                  }}
                  loop={true}
                  speed={800}
                  spaceBetween={24}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  grabCursor={true}
                  centeredSlides={false}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                  }}
                >
                  {blogData.map((blog, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <BlogCard {...blog} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* SAME navigation classes */}
              <div className="slider-btn-grp">
                <div className="slider-btn blog-slider-prev slider-btn blog-slider-prev swiper-button-disabled">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="slider-btn blog-slider-next">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <a className="primary-btn1 transparent" href="/travel-inspiration">
            <span>
              View All Inspiration
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
              </svg>
            </span>
            <span>
              View All Inspiration
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
