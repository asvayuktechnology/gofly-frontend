"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
    room: {
        id: string;
        category: string;
        name: string;
        price: number;
        oldPrice?: number;
        description: string;
        images: string[];
        services: string[];
    };
}

export default function RoomAccordion({ room }: Props) {
    const [open, setOpen] = useState(false);

    return (
   
<>
            <div className="accordion-item">
                <div
                    className="accordion-header"
                    id={`flush-package-heading-${room.id}`}
                >
                    <div
                        className={`accordion-button ${!open ? "collapsed" : ""}`}
                        role="button"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                    >
                        <div className="batch">
                            <span>{room.category}</span>
                        </div>

                        <div className="title-area">
                            <span className="check" />
                            <h6>{room.name}</h6>
                        </div>

                        <span>
                            {room.oldPrice && <del>${room.oldPrice}</del>} ${room.price}
                        </span>
                    </div>
                </div>

                {open && (
                    <div
                        className="accordion-collapse collapse show"
                        aria-labelledby={`flush-package-heading-${room.id}`}
                    >
                        <div className="accordion-body">
                            <p>{room.description}</p>

                            {room.images?.length > 0 && (
                                <div className="room-gallery-area">
                                    <div className="grid grid-cols-3 g-xl-4 g-md-3 g-sm-2 g-2">
                                        {room.images.map((image, index) => (
                                            <div
                                                key={index}
                                                className=""
                                            >
                                                <a
                                                    className="gallery-item"
                                                    data-fancybox={`gallery-${room.id}`}
                                                    data-src={image}
                                                >
                                                    <Image
                                                        src={image}
                                                        alt={room.name}
                                                        width={550}
                                                        height={220}
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {room.services?.length > 0 && (
                                <div className="additional-service-area">
                                    <h6>Additional Services -</h6>

                                    <ul className="service-list">
                                        {room.services.map((service, index) => (
                                            <li key={index}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="btn-area">
                                <button
                                    type="button"
                                    className="primary-btn1 two"
                                >
                                    <span>Book Now</span>
                                    <span>Book Now</span>
                                </button>

                                <button
                                    type="button"
                                    className="primary-btn1 two transparent"
                                >
                                    <span>Add to Cart</span>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
</>
       
    );
}