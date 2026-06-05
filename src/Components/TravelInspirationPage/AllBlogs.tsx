'use client';
import { BASE_URL } from '@/lib/const';
import { useBlogs } from '@/services/blogService';
import React, { useMemo, useState } from 'react'
import BlogCard from '../Home/BlogCard';
import { useSearchParams } from "next/navigation";
const ITEMS_PER_LOAD = 10;
const AllBlogs = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;

  const { data, isLoading } = useBlogs({ category });
  

    const blogs = data?.data || [];
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const visibleBlogs = useMemo(() => {
    return blogs.slice(0, visibleCount);
  }, [blogs, visibleCount]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

    return (
        <>
            <div className="travel-inspiration-page pt-100 mb-100">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-8">
  {!isLoading &&
    visibleBlogs.map((blog) => (
      <BlogCard
        key={blog._id}
        image={`${BASE_URL}/${blog.image}`}
        location={blog.country}
        title={blog.title}
        date={new Date(blog.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
        description={blog.description}
        link={`/travel-inspiration/${blog._id}`}
      />
    ))}
</div>
                     {!isLoading && blogs.length === 0 && (
          <div className="text-center py-10">
            No Blogs Found
          </div>
        )}

        {/* VIEW MORE BUTTON */}
        {visibleCount < blogs.length && (
          <div className="flex justify-center mt-10 cursor-pointer">
            <button
              onClick={handleViewMore}
              className="primary-btn1 cursor-pointer"
            >
              <span>View More</span>
              <span>View More</span>
            </button>
          </div>
        )}
                </div>
            </div>
        </>
    )
}

export default AllBlogs