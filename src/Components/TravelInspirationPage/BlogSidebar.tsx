"use client";

import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/lib/const";
import { useBlogs } from "@/services/blogService";
import { useEffect, useState } from "react";

interface Category {
  category: string;
  count: number;
}

interface BlogSidebarProps {
 currentBlog?: Blog | null;
  recentBlogs?: Blog[];
  categories?: Category[];
  onBlogSelect: (blog: Blog | null) => void;
}
interface Blog {
  _id: string;
  title: string;
  image: string;
  createdAt: string;
  country?: string;
  tags?: string[];
}
const BlogSidebar = ({
  currentBlog,
  recentBlogs = [],
  categories = [],
  onBlogSelect,
}: BlogSidebarProps) => {
 

const [search, setSearch] = useState("");
const [debouncedSearch, setDebouncedSearch] = useState("");
  const latestBlogs = recentBlogs.slice(0, 10);


const { data: blogs } = useBlogs({
  title: debouncedSearch || undefined,
});
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500); 
  return () => clearTimeout(timer);
}, [search]);

const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();

  const blogList = blogs?.data ?? [];

  if (blogList.length > 0) {
    onBlogSelect(blogList[0]);
  } else {
    onBlogSelect(null);
  }
};
  return (
    <div className="blog-sidebar-area">
      {/* Search Widget */}
      <div className="search-widget mb-40">
     <form onSubmit={handleSearch}>
  <div className="search-box">
    <input
      type="text"
      placeholder="Tag: adventure, beach, activities etc."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</form>
      </div>

      {/* Categories */}
      <div className="single-widget mb-40">
        <h5 className="widget-title">Categories</h5>

        <ul className="category-list">
          {categories.length > 0 ? (
            categories.map((item) => (
              <li key={item.category}>
               <Link href={`/travel-inspiration?category=${item.category}`}>
                  <span>
                    {item.category
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </span>
                  <span>({item.count})</span>
                </Link>
              </li>
            ))
          ) : (
            <li>
              <span>No categories found</span>
            </li>
          )}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="single-widget mb-30">
        <h5 className="widget-title">Recent Post</h5>

        {recentBlogs.length > 0 ? (
          latestBlogs.map((post, index) => (
            <div
              key={post._id}  
              className={`recent-post-widget ${
                index !== recentBlogs.length - 1 ? "mb-30" : ""
              }`}
            >
              <div className="recent-post-img">
              <Link href={`/travel-inspiration/${post._id}`}>
                  <Image
                    src={`${BASE_URL}/${post.image}`}
                    alt={post.title}
                    width={80}
                    height={90}
                  />
                </Link>
              </div>

              <div className="recent-post-content">
                <Link href={`/travel-inspiration/${post._id}`}>
                  {new Date(post?.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </Link>

                <h6>
                  <Link href={`/travel-inspiration/${post._id}`}>
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
      {/* <div className="single-widget">
        <h5 className="widget-title">Discover By Tags</h5>

        <ul className="tag-list">
          {currentBlog.tags?.length ? (
            currentBlog.tags.map((tag) => (
              <li key={tag}>
                <Link href="#">{tag}</Link>
              </li>
            ))
          ) : (
            <>
              <li>
                <Link href="#">{currentBlog.country || "Travel"}</Link>
              </li>

              <li>
                <Link href="#">Adventure</Link>
              </li>

              <li>
                <Link href="#">Beach</Link>
              </li>
            </>
          )}
        </ul>
      </div> */}
    </div>
  );
};

export default BlogSidebar;
