"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { BiPlayCircle, BiPlus } from "react-icons/bi";

interface GalleryImage {
    id: string;
    image: string;
}

interface HotelGalleryProps {
    sliderImages: GalleryImage[];
    galleryImages: GalleryImage[];
    videoThumbnail?: string;
    videoUrl?: string;
}

export default function HotelGallery({
    sliderImages,
    galleryImages,
    videoThumbnail,
    videoUrl,
}: HotelGalleryProps) {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const [showGallery, setShowGallery] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);
    const allImages = [
        ...sliderImages,
        ...galleryImages,
    ];

    return (
        <div className="hotel-dt-gallery-section mb-100">
            <div className="container mx-auto">
                <div className="room-img-group">
                    <div className="lg-react-element grid grid-cols-2 row gap-2">

                        {/* LEFT SLIDER */}
                        <div className="col-lg-6">
                            <div className="gallery-img-wrap">
                                <Swiper
                                    modules={[EffectFade, Navigation, Autoplay]}
                                    effect="fade"
                                    onSwiper={setSwiperInstance}
                                    className="hotel-dt-gallery-slider"
                                    autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false,
                                    }}
                                    speed={1600}
                                >
                                    {sliderImages.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <Image
                                                src={item.image}
                                                alt="Hotel Gallery"
                                                width={800}
                                                height={500}
                                                className="w-full h-full object-cover"
                                            />
                                        </SwiperSlide>
                                    ))}
                                    <div className="slider-btn-grp">
                                        <div
                                            className="slider-btn hotel-dt-gallery-slider-prev"
                                            onClick={() => swiperInstance?.slidePrev()}
                                        >
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                            >
                                                <path d="M4.84554 6.00254L9.33471 1.51317C9.45832 1.38985 9.52632 1.22498 9.52632 1.04917C9.52632 0.873268 9.45832 0.708488 9.33471 0.584976L8.94135 0.191805C8.81793 0.0680975 8.65295 0 8.47715 0C8.30134 0 8.13656 0.0680975 8.01305 0.191805L2.66798 5.53678C2.54398 5.66068 2.47608 5.82624 2.47657 6.00224C2.47608 6.17902 2.54388 6.34439 2.66798 6.46839L8.00808 11.8082C8.13159 11.9319 8.29637 12 8.47227 12C8.64808 12 8.81286 11.9319 8.93647 11.8082L9.32973 11.415C9.58564 11.1591 9.58564 10.7425 9.32973 10.4867L4.84554 6.00254Z" />
                                            </svg>
                                        </div>

                                        <div
                                            className="slider-btn hotel-dt-gallery-slider-next"
                                            onClick={() => swiperInstance?.slideNext()}
                                        >
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 12 12"
                                            >
                                                <path d="M7.15446 6.00254L2.66529 1.51317C2.54168 1.38985 2.47368 1.22498 2.47368 1.04917C2.47368 0.873268 2.54168 0.708488 2.66529 0.584976L3.05865 0.191805C3.18207 0.0680975 3.34705 0 3.52285 0C3.69866 0 3.86344 0.0680975 3.98695 0.191805L9.33202 5.53678C9.45602 5.66068 9.52392 5.82624 9.52343 6.00224C9.52392 6.17902 9.45612 6.34439 9.33202 6.46839L3.99192 11.8082C3.86841 11.9319 3.70363 12 3.52773 12C3.35192 12 3.18714 11.9319 3.06353 11.8082L2.67027 11.415C2.41436 11.1591 2.41436 10.7425 2.67027 10.4867L7.15446 6.00254Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </Swiper>

                            </div>
                        </div>

                        {/* RIGHT GALLERY */}
                        <div className="col-lg-6">
                            <div className="grid grid-cols-2 gap-2 ">

                                {galleryImages.slice(0, 2).map((item) => (
                                    <div
                                        key={item.id}
                                        className=""
                                    >
                                        <div className="gallery-img-wrap">
                                            <a
                                                className="gallery-item"
                                                data-fancybox="gallery-01"
                                                data-src={item.image}
                                            >
                                                <Image
                                                    src={item.image}
                                                    alt="Gallery"
                                                    width={550}
                                                    height={220}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                ))}

                                {/* VIDEO */}
                                {videoThumbnail && videoUrl && (
                                    <div className="">
                                        <div className="gallery-img-wrap two active">
                                            <Image
                                                src={videoThumbnail}
                                                alt="Video Thumbnail"
                                                width={550}
                                                height={220}
                                            />

                                            <button
                                                type="button"
                                                className="gallery-item cursor-pointer"
                                                onClick={() => setShowVideo(true)}
                                            >
                                                <BiPlayCircle size={25} />
                                                <span>Watch Video</span>
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* VIEW MORE */}
                                {galleryImages[2] && (
                                    <div className="">
                                        <div
                                            className="gallery-img-wrap two active gallery-item"
                                            data-fancybox="gallery-01"
                                            data-src={galleryImages[2].image}
                                        >
                                            <Image
                                                src={galleryImages[2].image}
                                                alt="View More"
                                                width={550}
                                                height={220}
                                            />

                                            <button
                                                type="button"
                                                className="StartSlideShowFirstImage cursor-pointer"
                                                onClick={() => {
                                                    setActiveIndex(0);
                                                    setShowGallery(true);
                                                }}
                                            >
                                                <BiPlus size={25} /> View More Images
                                            </button>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {showGallery && (
                <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4">

                    <button
                        onClick={() => setShowGallery(false)}
                        className="absolute top-5 right-5 text-white text-4xl"
                    >
                        ×
                    </button>

                    <div className="w-full max-w-6xl">
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            loop
                            initialSlide={activeIndex}
                            className="gallery-modal-slider"
                        >
                            {allImages.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="flex justify-center">
                                        <Image
                                            src={item.image}
                                            alt="Gallery Image"
                                            width={1400}
                                            height={900}
                                            className="max-h-[85vh] w-auto object-contain"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}


            {showVideo && videoUrl && (
                <div className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4">

                    <button
                        type="button"
                        onClick={() => setShowVideo(false)}
                        className="absolute top-5 right-5 text-white text-4xl leading-none"
                    >
                        ×
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black">

                        <iframe
                            src={
                                videoUrl.includes("youtube.com/watch?v=")
                                    ? `https://www.youtube.com/embed/${videoUrl.split("v=")[1]?.split("&")[0]
                                    }?autoplay=1`
                                    : videoUrl
                            }
                            title="Hotel Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}