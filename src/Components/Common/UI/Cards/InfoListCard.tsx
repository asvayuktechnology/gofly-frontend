// components/common/ui/InfoList.tsx

import { InfoListProps } from "@/types";
import { svgIcon } from "../../Icons/SvgIcons";




const InfoListCard = ({ items, className = "" }: InfoListProps) => {
    return (
        <ul className={`info-list  ${className}`}>
            {items.map((item, index) => (
                <li key={index} className="">
                    {svgIcon.TickIcon}
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
            ))}
        </ul>
    );
};

export default InfoListCard;