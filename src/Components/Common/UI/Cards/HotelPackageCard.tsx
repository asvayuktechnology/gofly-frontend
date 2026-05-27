"use client";

import { HotelCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const HotelCard = ({
    image,
    title,
    location,
    rating,
    price,
    features,
    badge = "Hot Sale!",
    mapUrl = "https://www.google.com/maps",
    detailUrl = "/hotel/details",
    cancellationText = "Free Cancellation Policy",
}: HotelCardProps) => {
    return (
        <div className="hotel-card">
            <div className="hotel-img-wrap">
                <Link className="hotel-img" href={detailUrl}>
                    <Image
                        src={image}
                        alt={title}
                        width={650}
                        height={385}
                    />
                </Link>

                <div className="batch">
                    <span>{badge}</span>
                </div>
            </div>

            <div className="hotel-content">
                <div className="rating-area">
                    <ul className="star">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <li key={index}>
                                <i className="bi bi-star-fill" />
                            </li>
                        ))}
                    </ul>

                    <span>{rating}</span>
                </div>

                <h5>
                    <Link href={detailUrl}>{title}</Link>
                </h5>

                <div className="location-area">
                    <div className="location">
                        <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6.83615 0C3.77766 0 1.28891 2.48879 1.28891 5.54892C1.28891 7.93837 4.6241 11.8351 6.05811 13.3994C6.25669 13.6175 6.54154 13.7411 6.83615 13.7411C7.13076 13.7411 7.41561 13.6175 7.6142 13.3994C9.04821 11.8351 12.3834 7.93833 12.3834 5.54892C12.3834 2.48879 9.89464 0 6.83615 0ZM7.31469 13.1243C7.18936 13.2594 7.02008 13.3342 6.83615 13.3342C6.65222 13.3342 6.48295 13.2594 6.35761 13.1243C4.95614 11.5959 1.69584 7.79515 1.69584 5.54896C1.69584 2.7134 4.00067 0.406933 6.83615 0.406933C9.67164 0.406933 11.9765 2.7134 11.9765 5.54896C11.9765 7.79515 8.71617 11.5959 7.31469 13.1243Z" />
                            <path d="M6.83618 8.54554C8.4624 8.54554 9.7807 7.22723 9.7807 5.60102C9.7807 3.9748 8.4624 2.65649 6.83618 2.65649C5.20997 2.65649 3.89166 3.9748 3.89166 5.60102C3.89166 7.22723 5.20997 8.54554 6.83618 8.54554Z" />
                        </svg>

                        <Link href="/hotel">{location}</Link>
                    </div>

                    <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-view"
                    >
                        View Map
                    </a>
                </div>

                <ul className="hotel-feature-list">
                    {features.map((feature, index) => (
                        <li key={index}>
                            <svg
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width={13}
                                    height={13}
                                    rx="6.5"
                                />

                                <path d="M10.6947 5.45777L6.24644 9.90841C6.17556 9.97689 6.08572 10.0124 5.99596 10.0124C5.9494 10.0125 5.90328 10.0033 5.86027 9.98548C5.81727 9.96763 5.77822 9.94144 5.7454 9.90841L3.3038 7.46681C3.16436 7.32969 3.16436 7.10521 3.3038 6.96577L4.16652 6.10065C4.29892 5.96833 4.53524 5.96833 4.66764 6.10065L5.99596 7.42897L9.33092 4.09161C9.36377 4.05868 9.40278 4.03255 9.44573 4.01471C9.48868 3.99686 9.53473 3.98766 9.58124 3.98761C9.67572 3.98761 9.76556 4.02545 9.83172 4.09161L10.6944 4.95681C10.8341 5.09625 10.8341 5.32073 10.6947 5.45777Z" />
                            </svg>

                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="cancellation">
                    <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width={14} height={14} rx={7} />

                        <path d="M10.6947 5.45777L6.24644 9.90841C6.17556 9.97689 6.08572 10.0124 5.99596 10.0124C5.9494 10.0125 5.90328 10.0033 5.86027 9.98548C5.81727 9.96763 5.77822 9.94144 5.7454 9.90841L3.3038 7.46681C3.16436 7.32969 3.16436 7.10521 3.3038 6.96577L4.16652 6.10065C4.29892 5.96833 4.53524 5.96833 4.66764 6.10065L5.99596 7.42897L9.33092 4.09161C9.36377 4.05868 9.40278 4.03255 9.44573 4.01471C9.48868 3.99686 9.53473 3.98766 9.58124 3.98761C9.67572 3.98761 9.76556 4.02545 9.83172 4.09161L10.6944 4.95681C10.8341 5.09625 10.8341 5.32073 10.6947 5.45777Z" />
                    </svg>

                    <span>{cancellationText}</span>
                </div>

                <div className="btn-and-price-area">
                    <Link className="primary-btn1" href={detailUrl}>
                        <span>Book Now</span>
                        <span>Book Now</span>
                    </Link>

                    <div className="price-area">
                        <h6>Per Night</h6>
                        <span>{price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;