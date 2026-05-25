"use client";

import Image from "next/image";
import Link from "next/link";
import { useSingleBlog } from "@/services/blogService";
import { BASE_URL } from "@/lib/const";

interface BlogDetailsPageProps {
  id: string;
}

export default function BlogDetailsPage({
  id,
}: BlogDetailsPageProps) {
  const { data: blog, isLoading, error } = useSingleBlog(id);

  if (isLoading) {
    return (
      <div className="container py-20 text-center">
        <h4>Loading...</h4>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="container py-20 text-center">
        <h4>Blog not found</h4>
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* ================= MAIN SECTION ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* ================= LEFT CONTENT ================= */}
            <div className="lg:col-span-8">
              {/* Date + Category */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-sm text-gray-500">
                  {new Date(blog.createdAt).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </span>

                {blog.country && (
                  <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                    {blog.country}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {blog.title}
              </h2>

              {/* Featured Image */}
              <div className="relative w-full h-[250px] md:h-[450px] rounded-3xl overflow-hidden mb-8">
                <Image
                  src={`${BASE_URL}/${blog.image}`}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 md:p-8">
                <div
                  className="prose prose-lg max-w-none 
    overflow-hidden
    break-words
    prose-img:rounded-2xl
    prose-img:w-full
    prose-img:max-w-full
    prose-img:h-auto
    prose-headings:font-bold
    prose-p:text-gray-700
    prose-p:leading-8
    prose-li:text-gray-700
    prose-pre:overflow-x-auto
    prose-table:block
    prose-table:overflow-x-auto
    prose-blockquote:border-l-4
    prose-blockquote:border-blue-500
    prose-blockquote:pl-4
    prose-blockquote:italic"
                  dangerouslySetInnerHTML={{
                    __html: blog.content,
                  }}
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-10">
                <span className="font-semibold">Tags:</span>

                <button className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white transition">
                  Travel
                </button>

                <button className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white transition">
                  Adventure
                </button>

                <button className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white transition">
                  Beach
                </button>
              </div>

              {/* Comments Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-8">
                  Leave Your Comment
                </h3>

                <form className="bg-green-50 p-6 md:p-8 rounded-3xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black"
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black"
                    />
                  </div>

                  <textarea
                    rows={6}
                    placeholder="Write your comment..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black mb-5"
                  />

                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-black transition"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>

            {/* ================= SIDEBAR ================= */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <div className="border rounded-3xl p-6">
                  <h4 className="text-xl font-bold mb-5">
                    Search
                  </h4>

                  <input
                    type="text"
                    placeholder="Search blog..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                {/* Categories */}
                <div className="border rounded-3xl p-6">
                  <h4 className="text-xl font-bold mb-5">
                    Categories
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-gray-700">
                      <span>Adventure</span>
                      <span>(10)</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-700">
                      <span>Travel</span>
                      <span>(08)</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-700">
                      <span>Beach</span>
                      <span>(15)</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-700">
                      <span>Nature</span>
                      <span>(12)</span>
                    </div>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="border rounded-3xl p-6">
                  <h4 className="text-xl font-bold mb-5">
                    Recent Posts
                  </h4>

                  <div className="space-y-5">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex gap-4"
                      >
                        <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0">
                          <Image
                            src={`${BASE_URL}/${blog.image}`}
                            alt="blog"
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <p className="text-xs text-gray-500 mb-1">
                            22 May, 2026
                          </p>

                          <h5 className="font-semibold leading-6 hover:text-blue-600 transition cursor-pointer">
                            Beautiful travel destinations
                            for summer
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="border rounded-3xl p-6">
                  <h4 className="text-xl font-bold mb-5">
                    Discover Tags
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Travel",
                      "Beach",
                      "Adventure",
                      "Nature",
                      "Tour",
                      "Lifestyle",
                    ].map((tag) => (
                      <button
                        key={tag}
                        className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white transition"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RELATED BLOGS ================= */}
          <div className="mt-24">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold mb-4">
                You May Also Like
              </h2>

              <p className="text-gray-600">
                Discover more amazing travel stories and
                destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group border rounded-3xl overflow-hidden hover:shadow-xl transition"
                >
                  <div className="relative h-[240px] overflow-hidden">
                    <Image
                      src={`${BASE_URL}/${blog.image}`}
                      alt="blog"
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-3">
                      22 May, 2026
                    </p>

                    <h3 className="text-xl font-bold mb-3 leading-8 group-hover:text-blue-600 transition">
                      Amazing destinations you should
                      explore this year
                    </h3>

                    <p className="text-gray-600 leading-7">
                      Discover hidden gems and unforgettable
                      adventures around the world.
                    </p>

                    <Link
                      href="#"
                      className="inline-flex items-center mt-5 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}