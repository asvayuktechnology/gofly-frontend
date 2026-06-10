"use client";

import Image from "next/image";
import React from "react";
import { Play } from "lucide-react";

type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    thumbnail?: string;
};

const VideoSection = ({ setIsOpen, thumbnail }: Props) => {
    return (
        <div className="about-video-section mb-24">
            <div className="container mx-auto px-4">
                <div className="lg-react-element video-wrap relative overflow-hidden rounded-3xl">
                    <Image
                        src={thumbnail || "/assets/img/about-video-img.webp"}
                        alt="About Video Thumbnail"
                        width={1300}
                        height={220}
                        priority
                        className="w-full h-auto object-cover "
                    />

                    <button
                        type="button"
                        aria-label="Play video"
                        onClick={() => setIsOpen(true)}
                        className="gallery-item play-btn absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer"
                    >
                        <Play className="h-8 w-8 fill-current" />

                        <div className="waves-block absolute inset-0 flex items-center justify-center">
                            <div className="waves wave-1 absolute h-20 w-20 rounded-full border border-white/70 animate-ping" />
                            <div className="waves wave-2 absolute h-24 w-24 rounded-full border border-white/50 animate-ping [animation-delay:0.5s]" />
                            <div className="waves wave-3 absolute h-28 w-28 rounded-full border border-white/30 animate-ping [animation-delay:1s]" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;