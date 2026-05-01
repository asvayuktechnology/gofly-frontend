import { btnprops } from "@/types";
import Link from "next/link";
import React from "react";
import { svgIcon } from "../Icons/SvgIcons";

const SiteBtn = ({ link, text, className }: btnprops) => {
  return (
    <>
      <Link href={link} className={className}>
        <span>
          {text}
          {svgIcon.arrow}
        </span>
        <span>
          {text}
          {svgIcon.arrow}
        </span>
      </Link>
    </>
  );
};

export default SiteBtn;
