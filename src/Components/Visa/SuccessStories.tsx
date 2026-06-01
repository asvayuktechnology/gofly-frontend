"use client";

import { stories } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgVideoSlider from "../Common/ImgVideoSlider";
import { useSuccessStories } from "@/services/successStoryService";

const SuccessStories = () => {
  const { data, isLoading } = useSuccessStories();

  if (isLoading) return null;

    return (
        <ImgVideoSlider title="We’ve Success Stories" description="We’re committed to offering more than just products—we provide
                        exceptional experiences." 
                        stories={data?.data || []}
                        />
    );
};

export default SuccessStories;