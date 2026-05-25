"use client";

import { stories } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgVideoSlider from "../Common/ImgVideoSlider";


const SuccessStories = () => {
    return (
        <ImgVideoSlider title="We’ve Success Stories" description="We’re committed to offering more than just products—we provide
                        exceptional experiences." />
    );
};

export default SuccessStories;