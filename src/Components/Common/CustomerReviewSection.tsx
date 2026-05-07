"use client";

import { progressData } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { svgIcon } from "./Icons/SvgIcons";
import SiteBtn from "./SiteBtn/SiteBtn";

const CustomerReviewSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="customer-rating-area">
      <h4>Customer Review & Rating</h4>

      <div className="rating-wrapper">
        {/* Rating Summary */}
        <div className="rating-area">
          <span>Excellent!</span>

          <ul>
            {[1, 2, 3, 4].map((_, i) => (
              <li key={i}>
                <BsStarFill fill="#DDA701" />
              </li>
            ))}
            <li>
              <BsStarHalf />
            </li>
          </ul>

          <p>
            <strong>4.5</strong> based on 3,545 reviews
          </p>

          {/* <button
            className="primary-btn1 two"
            onClick={() => setShowModal(true)}
          >
            <span>Write a Review</span>
            <span>Write a Review</span>
          </button> */}
          <SiteBtn
            link={"#"}
            text="Write a Review"
            className="primary-btn1 two"
            onClick={() => setShowModal(true)}
          />
        </div>

        {/* Progress Bars */}
        <ul className="progress-list">
          {progressData.map((item, index) => (
            <li className="single-progress" key={index}>
              <span>{item.label}</span>

              <div className="rating-progress-bar-wrap">
                <div className="rating-progress-bar">
                  <div
                    className="rating-progress-bar-per"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <span className="data-per">{item.value}%</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

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
            <ul className="comment-replay">
              <li>
                <div className="single-comment-area">
                  <div className="author-img">
                    <Image
                      src="/assets/img/comment-author-02.webp"
                      alt="author"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="comment-content">
                    <div className="author-name-deg">
                      <h6>Jacoline Juie,</h6>
                      <span>05 June, 2023</span>
                    </div>

                    <p>
                      However, here are some well-regarded car dealerships known
                      for their customer service, inventory, and overall
                      reputation...
                    </p>

                    <div className="replay-btn">
                      {svgIcon.replyicon}
                      Reply
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Simple Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
            <h4 className="mb-4">Write a Review</h4>

            <textarea
              className="w-full border p-2 mb-4"
              placeholder="Write your review..."
            />

            <div className="flex justify-end gap-2">
              <SiteBtn
                link={"#"}
                text="Close"
                className="primary-btn1"
                onClick={() => setShowModal(false)}
              />

              <SiteBtn link={"#"} text="Submit" className="primary-btn1 two" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerReviewSection;
