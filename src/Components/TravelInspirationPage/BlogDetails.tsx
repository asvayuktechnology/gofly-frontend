'use client';
import Breadcrumb from '../Common/UI/Breadcrumbs/Breadcrumb';
import BlogDetailContent from './BlogDetailContent'
import { useBlogs, useSingleBlog } from '@/services/blogService'
import BlogSidebar from './BlogSidebar';

interface BlogDetailsProps {
    id: string;
}
const BlogDetails = ({ id,
}: BlogDetailsProps) => {

    const { data: blog, isLoading, error } = useSingleBlog(id);
    const { data: blogs } = useBlogs();
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
        <>
            {/* <Breadcrumb
                title={blog.title}
                items={[
                    { label: "Home" },
                    { label: "Blog" },
                    { label: blog.title },
                ]}
            /> */}
            <div className="inspiration-details-page pt-100 mb-100">
                <div className="container mx-auto">
                    <div className="grid gap-8 grid-cols-12">
                        <div className="col-xl-7 col-lg-8 col-span-7">
                            <BlogDetailContent blog={blog} />
                        </div>

                        <div className="col-lg-4 col-span-4 col-start-9">
                            <BlogSidebar
                                currentBlog={blog} 
                                recentBlogs={
                                    blogs?.data?.filter(
                                        (item) => item._id !== blog._id
                                    )?.slice(0, 4) || []
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails