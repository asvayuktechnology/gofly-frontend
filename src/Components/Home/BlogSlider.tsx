"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BlogCard from "./BlogCard";
import { blogData } from "@/lib/data";
import { svgIcon } from "../Common/Icons/SvgIcons";
import { link } from "fs/promises";
import SiteBtn from "../Common/SiteBtn/SiteBtn";

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
                  {svgIcon.rightarrow}
                </div>
                <div className="slider-btn blog-slider-next">
                  {svgIcon.leftarrow}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <SiteBtn
            link="/travel-inspiration"
            svgIcon={svgIcon.arrow}
            iconPosition="end"
            text=" View All Inspiration"
            className="primary-btn1 transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
