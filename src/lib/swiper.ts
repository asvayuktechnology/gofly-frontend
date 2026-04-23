import { Autoplay, Pagination } from "swiper/modules";

export const swiperModules = [Pagination, Autoplay];


export const swiperConfig = {
  spaceBetween: 24,
  slidesPerView: 1,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
};