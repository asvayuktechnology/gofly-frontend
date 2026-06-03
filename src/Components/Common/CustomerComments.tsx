import React from 'react'
import { svgIcon } from './Icons/SvgIcons'
import Image from 'next/image'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const CustomerComments = () => {
    return (
        <>
            {/* Comments */}
            <div className="comment-area">
                <ul className="comment">
                    <li>
                        <div className="single-comment-area">
                            <div className="author-img">
                                <Image
                                    src="/assets/img/comment-author-01.webp"
                                    alt="author"
                                    width={100}
                                    height={100}
                                />
                            </div>

                            <div className="comment-content">
                                <div className="author-name-deg">
                                    <h6>Mr. Bowmik Haldar,</h6>
                                    <span>05 June, 2024</span>
                                </div>

                                <p>
                                    Organization decides to seek consulting services to address a
                                    particular issue or to achieve specific objectives.
                                </p>

                                {/* Review Items */}
                                <ul className="review-item-list">
                                    {[
                                        "Overall",
                                        "Transport",
                                        "Food",
                                        "Destination",
                                        "Hospitality",
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <span>{item}</span>
                                            <ul className="star-list">
                                                {[1, 2, 3, 4].map((_, j) => (
                                                    <li key={j}>
                                                        <BsStarFill fill="#DDA701" />
                                                    </li>
                                                ))}
                                                <li>
                                                    <BsStarHalf fill="#DDA701" />
                                                </li>
                                            </ul>
                                        </li>
                                    ))}
                                </ul>

                                <div className="replay-btn">
                                    {svgIcon.replyicon}
                                    Reply (01)
                                </div>
                            </div>
                        </div>

                        {/* Reply */}
                        <CustomerComments />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CustomerComments