"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";

import "swiper/css";
import "swiper/css/navigation";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const testimonials = [
  {
    id: 1,
    name: "Robert Kcarery",
    role: "GoFly Traveler",
    image: "/assets/img/testimonial-author-img1.webp",
    video: "https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s",
    title: "Excellent Tourist Place!",
    description:
      "Our honeymoon package to the Maldives was beyond amazing! The travel agency took care of every detail.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "Adventure Seeker",
    image: "/assets/img/testimonial-author-img1.webp",
    video: "https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s",
    title: "A Truly Memorable Experience!",
    description:
      "From booking to the final day, everything was perfectly organized. Highly recommended for stress-free travel.",
    rating: 5,
  },
  {
    id: 3,
    name: "Daniel Lee",
    role: "Family Traveler",
    image: "/assets/img/testimonial-author-img1.webp",
    video: "https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s",
    title: "Perfect Family Vacation!",
    description:
      "The itinerary was well-planned and suitable for our entire family. We created memories that will last forever.",
    rating: 4,
  },
  {
    id: 4,
    name: "Daniel Lee",
    role: "Family Traveler",
    image: "/assets/img/testimonial-author-img1.webp",
    video: "https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s",
    title: "Perfect Family Vacation!",
    description:
      "The itinerary was well-planned and suitable for our entire family. We created memories that will last forever.",
    rating: 4,
  },
];

export default function TestimonialSection() {
  useEffect(() => {
    // Initialize Fancybox for video popup
    Fancybox.bind("[data-fancybox='video-player']", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="home1-testimonial-section mb-100">
      <div className="container mx-auto">
        {/* Section Title */}
        <div
          className="row justify-content-center mb-50 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2>Hear It from Travelers</h2>
              <p>
                We go beyond just booking trips—we create unforgettable travel
                experiences that match your dreams!
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="row mb-40">
          <div className="col-lg-12">
            <Swiper
              className="swiper home1-testimonial-slider"
              modules={[Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".testimonial-slider-next",
                prevEl: ".testimonial-slider-prev",
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="author-area">
                      <div className="lg-react-element author-img">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={120}
                          height={120}
                        />
                        <a
                          data-fancybox="video-player"
                          className="gallery-item play-btn"
                          href={item.video}
                          style={{ cursor: "pointer" }}
                        >
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="13"
                              cy="13"
                              r="12.5"
                              fill="white"
                              stroke="#110F0F"
                            />
                            <path
                              d="M8.4375 13V9.7519C8.4375 8.4062 9.89453 7.5644 11.0586 8.23823L13.873 9.86323L16.6875 11.4882C17.8535 12.1601 17.8535 13.8437 16.6875 14.5156L13.873 16.1406L11.0586 17.7656C9.89453 18.4355 8.4375 17.5957 8.4375 16.25V13Z"
                              fill="#110F0F"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="author-info">
                        <h5>{item.name}</h5>
                        <span>{item.role}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <ul className="rating-area">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <li key={i}>
                          <i className="bi bi-circle-fill"></i>
                        </li>
                      ))}
                    </ul>

                    <h5>{item.title}</h5>
                    <div className="content">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Review Section */}
        <div
          className="review-wrap wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          {/* TripAdvisor */}
          {/* <div className="tripadvisor-rating-area">
            <a
              href="https://www.tripadvisor.com/"
              className="tripadvisor-rating"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/img/home1/icon/tripadvisor-logo.svg"
                alt="Tripadvisor"
                width={135}
                height={28}
              />
              <div className="rating-area">
                <span>Reviews</span>
                <Image
                  src="/assets/img/home1/icon/tripadvisor-start.svg"
                  alt="Tripadvisor rating"
                  width={65}
                  height={12}
                />
              </div>
            </a>
            <svg
              className="divider"
              width="6"
              height="52"
              viewBox="0 0 6 52"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.5 5L5.88675 0H0.113249L2.5 5H3.5ZM2.5 47L0.113249 52H5.88675L3.5 47H2.5ZM2.5 4.5V47.5H3.5V4.5H2.5Z" />
            </svg>
          </div> */}

          {/* Trustpilot */}
          {/* <a
            href="https://www.trustpilot.com/"
            className="trustpilot-rating-area"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>4.5</strong>
            <div className="trustpilot-rating">
              <Image
                src="/assets/img/home1/icon/trustpilot-logo.svg"
                alt="Trustpilot"
                width={100}
                height={24}
              />
              <div className="rating-area">
                <Image
                  src="/assets/img/home1/icon/trustpilot-star.svg"
                  alt="Trustpilot rating"
                  width={80}
                  height={16}
                />
                <span>(2K reviews)</span>
              </div>
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
}