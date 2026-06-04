'use client';
import { BASE_URL } from '@/lib/const';
import { useBlogs } from '@/services/blogService';
import React from 'react'
import BlogCard from '../Home/BlogCard';

const AllBlogs = () => {

    const { data, isLoading } = useBlogs();

    const blogs = data?.data || [];
    return (
        <>
            <div className="travel-inspiration-page pt-100 mb-100">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-8">

                        {!isLoading &&
                            blogs.map((blog) => (

                                <BlogCard key={blog._id}
                                    image={`${BASE_URL}/${blog.image}`}
                                    location={blog.country}
                                    title={blog.title}
                                    date={new Date(
                                        blog.createdAt
                                    ).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                    description={blog.description}
                                    link={`/travel-inspiration/${blog._id}`}
                                />

                            ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default AllBlogs