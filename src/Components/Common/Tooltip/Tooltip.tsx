import { TooltipProps } from "@/types";
import React from "react";

const Tooltip = ({ text1, text2, text3 }: TooltipProps) => {
  return (
    <>
      <div className="tooltip-text">
        {text1}
        <span>{text2}</span>
        {text3}
      </div>
    </>
  );
};

export default Tooltip;
