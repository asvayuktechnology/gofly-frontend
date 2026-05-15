"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import BlogCard from "./BlogCard";
import { svgIcon } from "../Common/Icons/SvgIcons";
import SiteBtn from "../Common/SiteBtn/SiteBtn";
import { useBlogs } from "@/services/blogService";
import { BASE_URL } from "@/lib/const";
// import { BASE_URL } from "@/config/axios.config";

const BlogSlider = () => {
  const { data, isLoading } = useBlogs();

  const blogs = data?.data || [];

  return (
    <div className="home1-blog-section mb-120">
      <div className="container mx-auto px-4">
        {/* TITLE */}
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

        {/* SLIDER */}
        <div className="blog-slider-area mb-50">
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper blog-slider">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={{
                    nextEl: ".blog-slider-next",
                    prevEl: ".blog-slider-prev",
                  }}
                  loop={blogs.length > 2}
                  speed={800}
                  spaceBetween={24}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {!isLoading &&
                    blogs.map((blog) => (
                      <SwiperSlide
                        key={blog._id}
                        className="swiper-slide"
                      >
                        <BlogCard
                          image={`${BASE_URL}/${blog.image}`}
                          location={blog.country}
                          title={blog.title}
                          date={new Date(
                            blog.createdAt
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                          description={blog.description}
                          link={`/travel-inspiration/${blog.slug}`}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>

              {/* SAME DESIGN NAVIGATION */}
              <div className="slider-btn-grp">
                <div className="slider-btn blog-slider-prev swiper-button-disabled">
                  {svgIcon.rightarrow}
                </div>

                <div className="slider-btn blog-slider-next">
                  {svgIcon.leftarrow}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <SiteBtn
            link="/blog/"
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