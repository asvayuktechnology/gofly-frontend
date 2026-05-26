'use client'
import { BASE_URL } from '@/lib/const';
import { visaData } from '@/lib/data';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

interface VisaType {
  _id: string
  visaType: string
  price: number
  priceLabel: string
  icon: string
}

interface Props {
  visaTypes: any[];
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}

const VisaListSection = ({ visaTypes, activeIndex, setActiveIndex }: Props) => {

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
                {visaTypes.map((item, index) => (
                    <SwiperSlide key={item._id}>
            <div
              onClick={() => setActiveIndex(index)}
              className={`single-visa ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={`${BASE_URL}/${item.icon}`}
                  alt={item.visaType}
                  className="w-[50px] h-[50px] object-cover rounded-full"
                />
              </div>

              <h6 className="capitalize text-center">
                {item.visaType.replaceAll('_', ' ')}
              </h6>

              <span>
                ${item.price} <sub>/{item.priceLabel}</sub>
              </span>
            </div>
          </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default VisaListSection