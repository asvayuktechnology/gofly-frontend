"use client";

import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/lib/const";

interface Blog {
  _id: string;
  title: string;
  image: string;
  createdAt: string;
  country?: string;
  tags?: string[];
}

interface BlogSidebarProps {
  currentBlog: Blog;
  recentBlogs?: Blog[];
}

const BlogSidebar = ({
  currentBlog,
  recentBlogs = [],
}: BlogSidebarProps) => {
  return (
    <div className="blog-sidebar-area">
      {/* Search Widget */}
      <div className="search-widget mb-40">
        <form>
          <div className="search-box">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8044 14.8845L13.0544 12.197L12.9901 12.0992C12.8689 11.9797 12.7055 11.9127 12.5354 11.9127C12.3652 11.9127 12.2018 11.9797 12.0807 12.0992C9.74349 14.2433 6.14318 14.3595 3.66568 12.3714C1.18818 10.3833 0.604738 6.90545 2.30068 4.24732C3.99661 1.5892 7.44661 0.572634 10.3632 1.87232C13.2797 3.17201 14.7551 6.38638 13.8126 9.38138C13.7793 9.48804 13.7754 9.60167 13.8012 9.71037C13.827 9.81907 13.8815 9.91883 13.9591 9.9992C14.0375 10.081 14.1358 10.1411 14.2444 10.1736C14.3529 10.2061 14.468 10.21 14.5785 10.1848C14.6884 10.1606 14.79 10.108 14.8732 10.0322C14.9564 9.95643 15.0183 9.86013 15.0526 9.75295C16.1776 6.19888 14.4782 2.37388 11.0526 0.752946C7.62693 -0.867991 3.50474 0.199821 1.3513 3.26763C-0.802137 6.33545 -0.339949 10.4808 2.43911 13.0229C5.21818 15.5651 9.47974 15.7398 12.4688 13.4367L14.9038 15.8173C15.026 15.9348 15.189 16.0004 15.3585 16.0004C15.528 16.0004 15.6909 15.9348 15.8132 15.8173C15.8728 15.7589 15.9202 15.6892 15.9525 15.6123C15.9849 15.5353 16.0016 15.4527 16.0016 15.3692C16.0016 15.2857 15.9849 15.2031 15.9525 15.1261C15.9202 15.0492 15.8728 14.9795 15.8132 14.9211L15.8044 14.8845Z"
                fill="#110F0F"
              />
            </svg>

            <input
              type="text"
              placeholder="Tag: adventure, beach, activities etc."
            />
          </div>
        </form>
      </div>

      {/* Categories */}
      <div className="single-widget mb-40">
        <h5 className="widget-title">
          Categories
        </h5>

        <ul className="category-list">
          <li>
            <Link href="#">
              <span>{currentBlog.country || "Travel"}</span>
              <span>(01)</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="single-widget mb-30">
        <h5 className="widget-title">
          Recent Post
        </h5>

        {recentBlogs.length > 0 ? (
          recentBlogs.map((post, index) => (
            <div
              key={post._id}
              className={`recent-post-widget ${
                index !== recentBlogs.length - 1 ? "mb-30" : ""
              }`}
            >
              <div className="recent-post-img">
                <Link href={`/blog/details/${post._id}`}>
                  <Image
                    src={`${BASE_URL}/${post.image}`}
                    alt={post.title}
                    width={80}
                    height={90}
                  />
                </Link>
              </div>

              <div className="recent-post-content">
                <Link href={`/blog/details/${post._id}`}>
                  {new Date(post.createdAt).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </Link>

                <h6>
                  <Link href={`/blog/details/${post._id}`}>
                    {post.title}
                  </Link>
                </h6>
              </div>
            </div>
          ))
        ) : (
          <p>No recent posts found.</p>
        )}
      </div>

      {/* Tags */}
      <div className="single-widget">
        <h5 className="widget-title">
          Discover By Tags
        </h5>

        <ul className="tag-list">
          {currentBlog.tags?.length ? (
            currentBlog.tags.map((tag) => (
              <li key={tag}>
                <Link href="#">
                  {tag}
                </Link>
              </li>
            ))
          ) : (
            <>
              <li>
                <Link href="#">
                  {currentBlog.country || "Travel"}
                </Link>
              </li>

              <li>
                <Link href="#">
                  Adventure
                </Link>
              </li>

              <li>
                <Link href="#">
                  Beach
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;