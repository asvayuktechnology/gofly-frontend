import { btnprops } from "@/types";
import Link from "next/link";
import React from "react";

const SiteBtn = ({
  link ,
  text,
  className,
  svgIcon,
  iconPosition,
   onClick,
}: btnprops) => {
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
