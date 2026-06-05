import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlogCommentSection from './BlogCommentSection';
import { BASE_URL } from '@/lib/const';

interface BlogDetailContentProps {
  blog?: {
    title: string;
    content: string;
    image: string;
    country?: string;
    createdAt: string;
  };
}

const BlogDetailContent = ({ blog }: BlogDetailContentProps) => {
if (!blog) {
    return (
      <div className="inspiration-details">
        <div className="flex items-center justify-center min-h-[400px]">
          <h3>Blog not found</h3>
        </div>
      </div>
    );
  }
    return (
        <>
            <div className="inspiration-details">
                {/* Title */}
                <h2 className="wp-block-heading">
                    {blog?.title}
                </h2>

                <div style={{ height: 30 }} />

                {/* Date & Country */}
                <div className="mb-4 flex items-center gap-3">
                    <span>
                        {new Date(blog?.createdAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })}
                    </span>

                    {blog?.country && (
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
                            {blog.country}
                        </span>
                    )}
                </div>

    
 {blog?.image && (

                 <div className="relative w-full h-[250px] md:h-[450px] rounded-3xl overflow-hidden mb-8">
                                <Image
                                  src={`${BASE_URL}/${blog.image}`}
                                  alt={blog.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
 )}
                <div style={{ height: 30 }} />

                {/* Dynamic Blog Content */}
                <div
                    className="
      prose
      prose-lg
      max-w-none
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
      prose-blockquote:italic
    "
                    dangerouslySetInnerHTML={{
                        __html: blog?.content,
                    }}
                />

                <div style={{ height: 40 }} />

                {/* Tags */}
                <div className="tag-and-social-area mt-70">
                    <div className="tag-area">
                        <h6>Tag:</h6>

                        <ul className="tag-list">
                            <li>
                                <Link href="#">
                                    {blog?.country || "Travel"}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="social-area">
                        <h6>Share:</h6>

                        <ul className="social-list">
                            <li>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bx bxl-facebook" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-twitter-x" />
                                </a>
                            </li>

                            <li>
                                <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bx bxl-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Comment Form */}
                <BlogCommentSection />
            </div>
        </>
    )
}

export default BlogDetailContent