import { svgIcon } from "@/Components/Common/Icons/SvgIcons";
import {
  TravelPackage,
  Destination,
  Testimonial,
  BlogPost,
  Offer,
  Packages,
  VisaPackage,
  WhyChooseItem,
  Partner,
  CounterItem,
} from "@/types";

// export const POPULAR_PACKAGES: TravelPackage[] = [
//   {
//     id: "maldives-paradise",
//     title: "Maldives Beach Paradise",
//     destination: "Maldives",
//     country: "Maldives",
//     duration: "05 Days",
//     pricePerPerson: 399,
//     isHotSale: true,
//     images: ["/assets/img/home1/tour-package-img1.jpg"],
//     category: "popular",
//     experience: "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
//     inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
//   },
//   {
//     id: "bali-paradise",
//     title: "Bali Paradise Tour",
//     destination: "Indonesia",
//     country: "Indonesia",
//     duration: "07 Days",
//     pricePerPerson: 599,
//     isHotSale: true,
//     images: ["/assets/img/home1/tour-package-img2.jpg"],
//     category: "popular",
//     experience: "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
//     inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
//   },
//   {
//     id: "phuket-krabi",
//     title: "Phuket & Krabi Island",
//     destination: "Thailand",
//     country: "Thailand",
//     duration: "08 Days",
//     pricePerPerson: 499,
//     images: ["/assets/img/home1/tour-package-img3.jpg"],
//     category: "popular",
//     experience: "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
//     inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
//   },
//   {
//     id: "rome-florence-venice",
//     title: "Rome, Florence & Venice",
//     destination: "Italy, France",
//     country: "Italy",
//     duration: "06 Days/07 Nights",
//     pricePerPerson: 999,
//     isHotSale: true,
//     images: ["/assets/img/home1/tour-package-img4.jpg"],
//     category: "popular",
//     experience: "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
//     inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
//   },
//   {
//     id: "egypt-nile-cruise",
//     title: "Egypt & Nile Cruise Adventure",
//     destination: "Egypt",
//     country: "Egypt",
//     duration: "10 Days",
//     pricePerPerson: 499,
//     images: ["/assets/img/home1/tour-package-img5.jpg"],
//     category: "popular",
//     experience: "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
//     inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
//   },
//   {
//     id: "norway-northern-lights",
//     title: "Norway Northern Lights",
//     destination: "Norway",
//     country: "Norway",
//     duration: "07 Days/06 Nights",
//     pricePerPerson: 359,
//     isHotSale: true,
//     images: ["/assets/img/home1/tour-package-img6.jpg"],
//     category: "popular",
//     experience: "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
//     inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
//   },
// ];

export const LAST_MINUTE_PACKAGES: TravelPackage[] = [
  {
    id: "japan-cherry-blossom",
    title: "Japan Cherry Blossom",
    destination: "Tokyo, Japan",
    country: "Japan",
    duration: "06 Days",
    pricePerPerson: 399,
    originalPrice: 999,
    isHotSale: true,
    images: ["/assets/img/home1/tour-package-img7.jpg"],
    category: "lastMinute",
    experience:
      "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
    inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
  },
  {
    id: "abu-dhabi-luxury",
    title: "Abu Dhabi Luxury Escape",
    destination: "UAE, Qatar",
    country: "UAE",
    duration: "05 Days/04 Nights",
    pricePerPerson: 720,
    originalPrice: 899,
    discountPercent: 20,
    images: ["/assets/img/home1/tour-package-img8.jpg"],
    category: "lastMinute",
    experience:
      "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
    inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
  },
  {
    id: "morocco-desert",
    title: "Morocco Desert & City Adventure",
    destination: "Europe",
    country: "Morocco",
    duration: "07 Days/06 Nights",
    pricePerPerson: 339,
    originalPrice: 399,
    discountPercent: 15,
    images: ["/assets/img/home1/tour-package-img9.jpg"],
    category: "lastMinute",
    experience:
      "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
    inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
  },
];

export const ONE_DAY_TRIPS: TravelPackage[] = [
  {
    id: "hanoi-kiem-lake",
    title: "Hanoi Kiem Lake",
    destination: "Hanoi, Vietnam",
    country: "Vietnam",
    duration: "1 Day",
    pricePerPerson: 99,
    isHotSale: true,
    images: ["/assets/img/home1/tour-package-img10.jpg"],
    category: "oneDay",
    experience:
      "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
    inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
  },
  {
    id: "newlands-safari",
    title: "Newlands Safari Forest",
    destination: "South Africa",
    country: "South Africa",
    duration: "1 Day",
    pricePerPerson: 89,
    images: ["/assets/img/home1/tour-package-img11.jpg"],
    category: "oneDay",
    experience:
      "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
    inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
  },
  {
    id: "ho-chi-minh-saigon",
    title: "Ho Chi Minh City (Saigon)",
    destination: "Saigon, Vietnam",
    country: "Vietnam",
    duration: "1 Day",
    pricePerPerson: 69,
    isHotSale: true,
    images: ["/assets/img/home1/tour-package-img12.jpg"],
    category: "oneDay",
    experience:
      "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
    inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
  },
  {
    id: "norway-northern-lights-day",
    title: "Norway Northern Lights",
    destination: "Norway",
    country: "Norway",
    duration: "1 Day",
    pricePerPerson: 89,
    isHotSale: true,
    images: ["/assets/img/home1/tour-package-img6.jpg"],
    category: "oneDay",
    experience:
      "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
    inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
  },
  {
    id: "rome-day",
    title: "Rome, Florence & Venice",
    destination: "Europe",
    country: "Italy",
    duration: "1 Day",
    pricePerPerson: 49,
    images: ["/assets/img/home1/tour-package-img4.jpg"],
    category: "oneDay",
    experience:
      "Including Activities Scuba Diving, Zip-lining, Rafting & Rock Climbing.",
    inclusion: "Accommodation, Daily Meals, Entry Fees & Local Transfers.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Robert Kcarery",
    role: "GoFly Traveler",
    avatar: "/assets/img/testimonial-author-img1.webp",
    rating: 5,
    title: "Excellent Tourist Place!",
    review:
      "Our honeymoon package to the Maldives was beyond amazing! The travel agency took care of every detail.",
    video: "https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s",
  },
  {
    id: "2",
    name: "Selina Henry",
    role: "GoFly Traveler",
    avatar: "/assets/img/testimonial-author-img1.webp",
    rating: 5,
    title: "Great Experience!",
    review:
      "This was the best trip of my life! Everything was perfectly planned, from airport pickup to guided tours. Highly recommended!",
    video: "https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s",
  },
  {
    id: "3",
    name: "James Bonde",
    role: "GoFly Traveler",
    avatar: "/assets/img/testimonial-author-img1.webp",
    rating: 4,
    title: "Average Experience",
    review:
      "The tour was well-organized, and we enjoyed every bit of it. However, I wish we had more free time to explore on our own.",
    video: "https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s",
  },
  {
    id: "4",
    name: "Michael D Linda",
    role: "GoFly Traveler",
    avatar: "/assets/img/testimonial-author-img1.webp",
    rating: 5,
    title: "Great Visitors Venue!",
    review:
      "Thank you so much for your work on our honeymoon. We really did have such a great time!",
    video: "https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s",
  },
  {
    id: "5",
    name: "Amber Lashley",
    role: "GoFly Traveler",
    avatar: "/assets/img/testimonial-author-img1.webp",
    rating: 5,
    title: "Fantastic Service!",
    review:
      "We have returned from Greece and want to let you know how terrific the trip was! Everything was great.",
    video: "https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s",
  },
];

// export const BLOG_POSTS: BlogPost[] = [
//   { id: "1", location: "Tokyo, Japan", title: "Top 10 Beaches to Visit This Summer Season.", date: "31 January, 2025", excerpt: "Famous for its pure white silica sand & crystal-clear waters. Perfect for snorkeling & sailing!", image: "/assets/img/home1/blog-img1.jpg", href: "/travel-inspiration/details" },
//   { id: "2", location: "Vietnam", title: "Tropical Escapes & Beach Getaways.", date: "23 January, 2025", excerpt: "A beach getaway is perfect for those seeking relaxation, adventure, or a romantic retreat.", image: "/assets/img/home1/blog-img2.jpg", href: "/travel-inspiration/details" },
//   { id: "3", location: "Maldives", title: "Crystal-Clear Waters & White Sands.", date: "01 April, 2025", excerpt: "Perfect for couples, families, and solo travelers alike, these beach destinations promise relaxation.", image: "/assets/img/home1/blog-img3.jpg", href: "/travel-inspiration/details" },
//   { id: "4", location: "Bali, Indonesia", title: "Escape to the World's Breathtaking Islands.", date: "23 March, 2025", excerpt: "Escape to the World's Most Breathtaking Islands and immerse yourself in paradise.", image: "/assets/img/home1/blog-img4.jpg", href: "/travel-inspiration/details" },
// ];

export const DESTINATION_REGIONS = [
  "Europe",
  "Asia",
  "Middle East",
  "Africa",
  "North America",
  "Oceania",
] as const;

export const QUICK_SEARCH_TAGS = [
  "Thailand Tour",
  "Philippines Tour",
  "Bali Tour",
  "Hawaii, USA Tour",
  "Switzerland Tour",
  "Maldives Tour",
  "Paris Tour",
];

export const FAQ_ITEMS = [
  {
    id: "1",
    question: "What services does your travel agency provide?",
    answer:
      "A travel agency typically provides a wide range of services to ensure a smooth and enjoyable travel experience. As like — Hotel booking, Flight Booking, Visa & Customized Travel Package etc.",
  },
  {
    id: "2",
    question: "Do you offer customized travel packages?",
    answer:
      "Absolutely! We offer fully customized travel packages based on your interests, budget, and schedule. Whether you're planning a solo adventure, a family vacation, a romantic getaway, or a group tour.",
  },
  {
    id: "3",
    question: "Can I book flights, hotels, and tours separately?",
    answer:
      "Yes, you can! We provide the flexibility to book flights, hotels, and tours separately based on your specific needs.",
  },
  {
    id: "4",
    question: "Do you provide visa assistance?",
    answer:
      "Yes, we do! Our team offers complete visa assistance services to help you navigate the application process smoothly.",
  },
  {
    id: "5",
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods including cash, bank transfers, mobile payments (such as bKash, Nagad), and major debit/credit cards.",
  },
  {
    id: "6",
    question: "What travel documents are required for international travel?",
    answer:
      "For international travel, you'll typically need a valid passport, visa (if required), airline tickets, travel insurance, and any health certificates.",
  },
];

export const offers: Offer[] = [
  {
    id: 1,
    image: "/assets/img/home1-offer-img5.jpg",
    link: "/travel-package",
    alt: "Travel Offer 1",
  },
  {
    id: 2,
    image: "/assets/img/home1-offer-img5.jpg",
    link: "/travel-package/details",
    alt: "Travel Offer 2",
  },
  {
    id: 3,
    image: "/assets/img/home1-offer-img5.jpg",
    link: "/travel-package",
    alt: "Travel Offer 3",
  },
  {
    id: 4,
    image: "/assets/img/home1-offer-img5.jpg",
    link: "/travel-package",
    alt: "Travel Offer 3",
  },
];

export const POPULAR_PACKAGES: Packages[] = [
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences: "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions: "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences: "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions: "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences: "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions: "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences: "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions: "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences: "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions: "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
  {
    title: "Maldives Beach Paradise",
    location: "Maldives",
    duration: "05 Days",
    price: 399,
    image: "/assets/img/tour-package-img4.webp",
    badge: "Hot Sale!",
    link: "/travel-package/details",
    experiences: "Scuba Diving, Zip-lining, Rafting & Rock Climbing",
    inclusions: "Accommodation, Daily Meals, Entry Fees & Local Transfers",
  },
];

export const visaPackages: VisaPackage[] = [
  {
    id: "australia",
    title: "Australia",
    processingTime: "(15 - 30) Days",
    image: "/assets/img/visa-package-img1.webp",
    href: "/visa/details",
  },
  {
    id: "canada",
    title: "Canada",
    processingTime: "(10 - 20) Days",
    image: "/assets/img/visa-package-img1.webp",
    href: "/visa/details",
  },
  {
    id: "uk",
    title: "United Kingdom",
    processingTime: "(01 - 02) Months",
    image: "/assets/img/visa-package-img1.webp",
    href: "/visa/details",
  },
  {
    id: "usa",
    title: "United State",
    processingTime: "(01 - 03) Months",
    image: "/assets/img/visa-package-img1.webp",
    href: "/visa/details",
  },
  {
    id: "france",
    title: "France",
    processingTime: "(01 - 02) Months",
    image: "/assets/img/visa-package-img1.webp",
    href: "/visa/details",
  },
  {
    id: "germany",
    title: "Germany",
    processingTime: "(15 - 30) Days",
    image: "/assets/img/visa-package-img1.webp",
    href: "/visa/details",
  },
  {
    id: "qatar",
    title: "Qatar",
    processingTime: "(15 - 25) Days",
    image: "/assets/img/visa-package-img1.webp",
    href: "/visa/details",
  },
  {
    id: "switzerland",
    title: "Switzerland",
    processingTime: "(10 - 20) Days",
    image: "/assets/img/visa-package-img1.webp",
    href: "/visa/details",
  },
];

export const whyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    title: "High Visa Approval Rate & it’s 99%.",
    description: "Fast & Hassle-Free Visa Processing –",
    highlight: "99% Approval Rate.",
    delay: "200ms",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <g>
          <path d="M50.0003 25C50.0003 26.7257 48.6007 28.1248 46.875 28.1248C45.1455 28.1248 43.7498 26.7258 43.7498 25.0001C43.7498 23.2749 45.1455 21.8749 46.875 21.8749C48.6007 21.8749 50.0003 23.2748 50.0003 25ZM43.7498 9.375C43.7498 11.0999 42.3508 12.4998 40.6251 12.4998C38.8956 12.4998 37.4999 11.0999 37.4999 9.37512C37.4999 7.6499 38.8956 6.24988 40.6251 6.24988C42.3507 6.24988 43.7498 7.64978 43.7498 9.375ZM40.625 43.7498C38.8975 43.7498 37.5 42.3527 37.5 40.6251C37.5 38.8956 38.8975 37.4999 40.625 37.4999C42.3507 37.4999 43.7498 38.8956 43.7498 40.6251C43.7498 42.3507 42.3508 43.7498 40.6251 43.7498H40.625ZM22.5344 27.0829C21.6727 29.5044 19.3839 31.25 16.6669 31.25C13.2156 31.25 10.4169 28.4504 10.4169 25C10.4169 21.5492 13.2156 18.7502 16.6669 18.7502C19.3844 18.7502 21.6732 20.4954 22.5344 22.9168H29.6874L35.4171 0L0 25L35.4171 50.0003L29.6874 27.0829H22.5344Z">
            {" "}
          </path>
        </g>{" "}
      </svg>
    ),
  },
  {
    id: 2,
    title: "Fast & Reliable Visa Processing.",
    description: "Get your visa processed and approved within just",
    highlight: "48 hours.",
    variant: "two",
    delay: "400ms",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path d="M29.25 29.2502H47.9996V48.0001H29.25V29.2502Z"> </path>
        <path d="M25.4997 44.2498C15.1442 44.2498 6.75014 35.8545 6.75014 25.5C6.75014 15.1433 15.1448 6.75019 25.4997 6.75019C35.8541 6.75019 44.2493 15.1438 44.2493 25.5H47.9995C47.9995 13.0744 37.9252 3 25.4997 3C13.0737 3 3 13.0744 3 25.5C3 37.9256 13.0737 48 25.4997 48V44.2498Z"></path>{" "}
        <path d="M25.5 36.75C19.2867 36.75 14.2501 31.7128 14.2501 25.5C14.2501 19.2855 19.2867 14.25 25.5 14.25C31.7127 14.25 36.7499 19.2855 36.7499 25.5H40.5C40.5 17.2161 33.7838 10.4998 25.5 10.4998C17.2156 10.4998 10.5 17.2161 10.5 25.5C10.5 33.7839 17.2156 40.5002 25.5 40.5002V36.75Z">
          {" "}
        </path>
        <path d="M25.4997 29.2502C24.758 29.2502 24.033 29.0303 23.4163 28.6182C22.7995 28.2062 22.3189 27.6205 22.035 26.9352C21.7512 26.2499 21.6769 25.4959 21.8216 24.7684C21.9663 24.041 22.3235 23.3727 22.848 22.8483C23.3724 22.3238 24.0406 21.9666 24.7681 21.8219C25.4956 21.6772 26.2496 21.7515 26.9348 22.0353C27.6201 22.3192 28.2058 22.7998 28.6179 23.4166C29.0299 24.0333 29.2499 24.7583 29.2499 25.5001H32.9994C32.9994 21.3584 29.6414 18.0002 25.4997 18.0002C21.357 18.0002 18 21.3584 18 25.5001C18 29.6417 21.357 32.9999 25.4997 32.9999V29.2502Z"></path>{" "}
      </svg>
    ),
  },
  {
    id: 3,
    title: "100% Secure & Confidential.",
    description: "We ensure",
    highlight: "data privacy",
    variant: "three",
    delay: "600ms",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 25V45.2148H18.8477V31.1523H5.66406V25H25ZM12.6953 37.3047H5.66406V45.2148H12.6953V37.3047ZM44.3359 25V18.8477H31.1523V4.78516H25V25H44.3359ZM37.3047 12.6953H44.3359V4.78516H37.3047V12.6953Z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "24/7 Customer Support.",
    description: "Dedicated visa experts available via",
    highlight: "phone, WhatsApp, and email.",
    variant: "four",
    delay: "800ms",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          fillRule="evenodd"
          d="M28.278 44.2914C28.1869 44.6838 27.9655 45.0339 27.65 45.2845C27.3345 45.5351 26.9435 45.6715 26.5406 45.6715H23.4595C22.9864 45.6715 22.5327 45.4835 22.1982 45.149C21.8637 44.8145 21.6758 44.3608 21.6758 43.8877V43.3428C21.6758 42.8697 21.8638 42.4161 22.1983 42.0816C22.5328 41.7471 22.9864 41.5591 23.4595 41.559H26.5406C26.9435 41.559 27.3345 41.6954 27.65 41.946C27.9655 42.1966 28.1869 42.5467 28.278 42.9391H33.6433C34.5906 42.9391 35.5287 42.7525 36.4039 42.39C37.2791 42.0275 38.0744 41.4961 38.7443 40.8262C39.4142 40.1564 39.9455 39.3611 40.308 38.4859C40.6706 37.6106 40.8572 36.6726 40.8571 35.7252V33.9105C41.2654 34.0648 41.6982 34.1439 42.1347 34.1438H42.2094V35.7252C42.2093 37.9971 41.3068 40.1759 39.7004 41.7823C38.0939 43.3888 35.9151 44.2913 33.6433 44.2914H28.278ZM7.86299 17.4125C8.22231 13.8269 9.90091 10.5027 12.573 8.08498C15.2451 5.66726 18.7202 4.32849 22.3237 4.32849H27.6764C31.2799 4.32843 34.755 5.66718 37.4271 8.0849C40.0992 10.5026 41.7778 13.8269 42.1371 17.4125H42.1347C41.6742 17.4125 41.2228 17.5004 40.803 17.6668C40.5048 14.3914 38.9929 11.3458 36.5641 9.12813C34.1354 6.91042 30.9653 5.68081 27.6764 5.68076H22.3237C19.0348 5.68079 15.8647 6.91039 13.4359 9.12811C11.0072 11.3458 9.49526 14.3914 9.1971 17.6668C8.77322 17.4988 8.32137 17.4125 7.8654 17.4125H7.86299ZM44.1304 18.7648C46.3679 18.7648 48.1818 20.5786 48.1818 22.8163V28.7401C48.1818 30.9777 46.3679 32.7916 44.1304 32.7916H42.1347C41.8376 32.7916 41.5435 32.7331 41.269 32.6195C40.9946 32.5058 40.7453 32.3392 40.5352 32.1291C40.3252 31.9191 40.1586 31.6698 40.0449 31.3953C39.9313 31.1209 39.8728 30.8267 39.8728 30.5297V21.0266C39.8728 20.7296 39.9313 20.4354 40.0449 20.161C40.1586 19.8866 40.3252 19.6372 40.5352 19.4272C40.7453 19.2171 40.9946 19.0505 41.269 18.9369C41.5435 18.8232 41.8376 18.7647 42.1347 18.7648H44.1304ZM5.86964 18.7648H7.8654C8.16244 18.7647 8.45658 18.8232 8.73101 18.9369C9.00544 19.0505 9.2548 19.2171 9.46484 19.4272C9.67488 19.6372 9.84148 19.8866 9.95514 20.161C10.0688 20.4354 10.1273 20.7296 10.1273 21.0266V30.5297C10.1273 30.8267 10.0688 31.1209 9.95514 31.3953C9.84148 31.6698 9.67488 31.9191 9.46484 32.1291C9.2548 32.3392 9.00544 32.5058 8.73101 32.6195C8.45658 32.7331 8.16244 32.7916 7.8654 32.7916H5.86964C3.63212 32.7916 1.81824 30.9777 1.81824 28.7401V22.8163C1.81824 20.5786 3.63212 18.7648 5.86964 18.7648ZM16.4136 31.9192C14.1685 30.0718 12.7764 27.5063 12.7764 24.672C12.7764 19.0499 18.2536 14.4856 25 14.4856C31.7464 14.4856 37.2237 19.0499 37.2237 24.672C37.2237 30.2939 31.7464 34.8583 25 34.8583C22.8763 34.8583 20.8782 34.406 19.1373 33.6107L15.196 36.0165C15.1051 36.0719 14.9985 36.0958 14.8927 36.0845C14.7869 36.0731 14.6878 36.0271 14.6109 35.9536C14.5339 35.8802 14.4833 35.7833 14.467 35.6782C14.4507 35.573 14.4696 35.4654 14.5208 35.3721L16.4136 31.9192ZM25.0006 31.8849C25.4724 31.8849 25.8575 31.4999 25.8575 31.028C25.8575 30.5551 25.4724 30.1701 25.0006 30.1701C24.5277 30.1701 24.1426 30.5551 24.1426 31.028C24.1426 31.4999 24.5277 31.8849 25.0006 31.8849ZM22.2478 22.1438C22.2478 21.3835 22.5558 20.6958 23.0536 20.1969C23.3091 19.941 23.6126 19.738 23.9467 19.5997C24.2808 19.4614 24.639 19.3905 25.0006 19.3911C25.7598 19.3911 26.4486 19.6991 26.9464 20.1969C27.4443 20.6958 27.7523 21.3835 27.7523 22.1438C27.7523 23.7708 26.813 24.3109 26.0114 24.773C25.1286 25.2806 24.3574 25.7242 24.3574 26.9205V28.2427C24.3574 28.3271 24.3741 28.4107 24.4064 28.4887C24.4388 28.5666 24.4862 28.6375 24.5459 28.6971C24.6056 28.7567 24.6765 28.804 24.7546 28.8362C24.8326 28.8684 24.9162 28.8849 25.0006 28.8848C25.0849 28.8848 25.1684 28.8682 25.2463 28.8359C25.3242 28.8037 25.395 28.7564 25.4546 28.6967C25.5142 28.6371 25.5615 28.5663 25.5938 28.4884C25.6261 28.4105 25.6427 28.327 25.6426 28.2427V26.9205C25.6426 26.4606 26.1112 26.1916 26.6482 25.8825C27.7501 25.2491 29.0375 24.5073 29.0375 22.1438C29.0384 21.6135 28.9345 21.0883 28.7316 20.5983C28.5287 20.1084 28.2309 19.6634 27.8553 19.2891C27.1243 18.5581 26.1145 18.1057 25.0006 18.1057C23.8856 18.1057 22.8758 18.5581 22.1447 19.2891C21.7692 19.6634 21.4714 20.1084 21.2685 20.5983C21.0656 21.0883 20.9616 21.6135 20.9625 22.1438C20.9625 22.4985 21.2499 22.787 21.6046 22.787C21.7752 22.787 21.9387 22.7192 22.0594 22.5986C22.18 22.478 22.2477 22.3144 22.2478 22.1438Z"
        >
          {" "}
        </path>
      </svg>
    ),
  },
];

export const locations = [
  "Cox's Bazar, BD",
  "Bangkok, TH",
  "Dubai, AE",
  "Singapore, SG",
  "Paris, FR",
  "London, UK",
  "New York, US",
  "Toronto, CA",
  "Male, MV",
  "Tokyo, JP",
  "Kuala Lumpur, MY",
  "Delhi, IN",
];

export const partners: Partner[] = [
  { id: 1, image: "/assets/img/partner-04.webp", link: "#" },
  { id: 2, image: "/assets/img/partner-04.webp", link: "#" },
  { id: 3, image: "/assets/img/partner-04.webp", link: "#" },
  { id: 4, image: "/assets/img/partner-04.webp", link: "#" },
  { id: 5, image: "/assets/img/partner-04.webp", link: "#" },
  { id: 6, image: "/assets/img/partner-04.webp", link: "#" },
];

export const blogData = [
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

export const counterData: CounterItem[] = [
  {
    id: 1,
    value: 26,
    suffix: "K+",
    label: "Tour Completed",
    icon:svgIcon.toursvg,
  },
  {
    id: 2,
    value: 12,
    suffix: "+",
    label: "Travel Experience",
     icon:svgIcon.travelIcon,
  },
  {
    id: 3,
    value: 20,
    suffix: "+",
    label: "Happy Traveler",
     icon:svgIcon.happyTravelIcon,
  },
  {
    id: 4,
    value: 98,
    suffix: "%",
    label: "Retention Rate",
      icon:svgIcon.retentionIcon,
  },
];
