import { BlogCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { svgIcon } from "../Common/Icons/SvgIcons";

const BlogCard = ({
  image,
  location,
  title,
  date,
  description,
  link,
}: BlogCardProps) => {
  return (
    <div className="blog-card style-1">
      <div className="blog-card-img-wrap">
        <Link href={link} className="blog-img">
          <Image
            src={image}
            alt={title}
            width={550}
            height={220}
            className="w-full h-auto"
          />
        </Link>
      </div>

      <div className="blog-content">
        <div className="blog-content-top">
          <Link href={link} className="location">
            {svgIcon.location}
            {location}
          </Link>

          <h4>
            <Link href={link}>{title}</Link>
          </h4>

          <Link href={link} className="blog-date">
            {svgIcon.date}
            {date}
          </Link>
        </div>

        {svgIcon.divider}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
