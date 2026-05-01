"use client";

import Link from "next/link";
import Image from "next/image";

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Apply Online",
    description:
      "The first step is to assess the client's needs based on the type of visa",
    highlight: "(Tourist, Business, Student, etc.).",
  },
  {
    id: 2,
    number: "02",
    title: "Get an Appointment",
    description:
      "Booking an appointment with a visa agency ensures a",
    highlight: "smooth and hassle-free process.",
  },
  {
    id: 3,
    number: "03",
    title: "Submit Documents",
    description:
      "Ensure you have all necessary paperwork when submit included",
    highlight: "(passport, photos, travel itinerary, etc.).",
  },
  {
    id: 4,
    number: "04",
    title: "Receive Visa",
    description:
      "We inform you as soon as your visa is approved & receive your visa",
    highlight: "via email, courier, or pick it up in person.",
  },
];

const ArrowIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
  </svg>
);

const MailIcon = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.7006 1.22694L7.64404 7.17295C8.94032 8.46674 11.0593 8.46786 12.3566 7.17295L18.3001 1.22694C18.3141 1.21297 18.3249 1.19607 18.3317 1.17746C18.3385 1.15884 18.3411 1.13896 18.3394 1.11922C18.3377 1.09948 18.3316 1.08037 18.3216 1.06324C18.3117 1.0461 18.2981 1.03137 18.2818 1.02009C17.6756 0.597317 16.938 0.34668 16.1435 0.34668H3.8572C3.06267 0.34668 2.32511 0.59736 1.71891 1.02009C1.70262 1.03137 1.68901 1.0461 1.67905 1.06324C1.66909 1.08037 1.66302 1.09948 1.66128 1.11922C1.65953 1.13896 1.66215 1.15884 1.66894 1.17746C1.67574 1.19607 1.68655 1.21297 1.7006 1.22694Z"
    ></path>
    <path d="M0.112306 4.09154C0.111822 3.48738 0.258646 2.89223 0.54006 2.35762C0.549884 2.33877 0.564016 2.32251 0.581309 2.31015C0.598601 2.29779 0.618565 2.28969 0.639578 2.2865C0.660591 2.28331 0.68206 2.28512 0.702241 2.29179C0.722422 2.29846 0.740745 2.30979 0.75572 2.32488L6.62392 8.19307C8.48219 10.0541 11.5174 10.0551 13.3768 8.19307L19.245 2.32488C19.26 2.30979 19.2783 2.29846 19.2985 2.29179C19.3187 2.28512 19.3401 2.28331 19.3611 2.2865C19.3822 2.28969 19.4021 2.29779 19.4194 2.31015C19.4367 2.32251 19.4508 2.33877 19.4607 2.35762C19.7421 2.89223 19.8889 3.48739 19.8884 4.09154V11.9091C19.8884 13.9756 18.2074 15.654 16.1435 15.654H3.8572C1.79333 15.654 0.112306 13.9756 0.112306 11.9091V4.09154Z"></path>
  </svg>
);

export default function WorkingProcessSection() {
  return (
    <section className="home8-process-section two mb-100">
      <div className="container mx-auto">
        <div
          className="row justify-center mb-12 wow animate fadeInDown"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="w-full lg:w-1/2 mx-auto">
            <div className="section-title white text-center">
              <h2>Working Process</h2>

              <p>
                A curated list of the most popular travel packages based on
                different destinations.
              </p>
            </div>
          </div>
        </div>

        <div className="process-wrapper mb-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.id}>
                <div className="process-card">
                  <span className="process-no">{step.number}</span>

                  <h4>{step.title}</h4>

                  <p>
                    {step.description} <span>{step.highlight}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <svg
            className="line"
            height="6"
            viewBox="0 0 1320 6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1315 3.5L1320 5.88675V0.113249L1315 2.5V3.5ZM4.5 3.5H1315.5V2.5H4.5V3.5Z"></path>
          </svg>
        </div>

        <div
          className="apply-area wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="contact-area">
            <div className="icon">
              <MailIcon />
            </div>

            <div className="content">
              <span>E-Message</span>

              <a href="mailto:info@example.com">info@example.com</a>
            </div>
          </div>

          <strong>OR</strong>

          <Link href="/contact" className="primary-btn1 two">
            <span>
              Apply Online
              <ArrowIcon />
            </span>

            <span>
              Apply Online
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>

      <div className="vector">
        <Image
          src="/assets/img/home8-process-section-vector.webp"
          alt="Process Section Vector"
          width={400}
          height={380}
        />
      </div>
    </section>
  );
}