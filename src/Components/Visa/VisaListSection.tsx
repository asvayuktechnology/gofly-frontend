'use client'
import { visaData } from '@/lib/data';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const VisaListSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="visa-list-area mb-[60px]">
            <Swiper
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                }}
                className="visa-dt-visa-list-slider"
            >
                {visaData.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <div
                            onClick={() => setActiveIndex(index)}
                            className={`single-visa ${activeIndex === index ? "active" : ""
                                }`}
                        >
                            {item.icon}

                            <h6>{item.title}</h6>

                            <span>
                                {item.price} <sub>/per person</sub>
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default VisaListSection