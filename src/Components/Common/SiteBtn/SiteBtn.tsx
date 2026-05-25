import { btnprops } from "@/types";
import Link from "next/link";
import React from "react";

const SiteBtn = ({
  link,
  className,
  text,
  svgIcon,
  iconPosition,
   onClick,
}: btnprops) => {
  if (!link) {
    return (
      <button className={className}>
        <span>
          {iconPosition === "start" && svgIcon}
          {text}
          {iconPosition === "end" && svgIcon}
        </span>

        <span>
          {iconPosition === "start" && svgIcon}
          {text}
          {iconPosition === "end" && svgIcon}
        </span>
      </button>
    );
  }

  return (
    <Link href={link} className={className} onClick={onClick}>
      <span>
        {iconPosition === "start" && svgIcon}
        {text}
        {iconPosition === "end" && svgIcon}
      </span>

      <span>
        {iconPosition === "start" && svgIcon}
        {text}
        {iconPosition === "end" && svgIcon}
      </span>
    </Link>
  );
};

export default SiteBtn;
