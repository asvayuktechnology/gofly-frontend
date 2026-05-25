"use client";

import React from "react";

/* ---------------- COUNTER ---------------- */
const Counter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <h2 className="counter">{count}</h2>;
};

/* ---------------- TYPES ---------------- */
type CounterItem = {
  title: string;
  value: string | number;
};

/* ---------------- SAME ICONS (replace with your real icons) ---------------- */
import { FaPlane, FaUsers, FaGlobe, FaStar } from "react-icons/fa";

const icons = [FaPlane, FaUsers, FaGlobe, FaStar];

/* ---------------- SECTION ---------------- */
interface CounterSectionProps {
  counterData: CounterItem[];
}

const CounterSection: React.FC<CounterSectionProps> = ({ counterData }) => {
  return (
    <div className="counter-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gy-md-5 gy-4">
          {counterData.map((item, index) => {
  const value = Number(String(item.value).trim());

  const isRetention = item.title === "Retention Rate";
  const suffix = isRetention ? "%" : "+";

  const Icon = icons[index] || FaStar;

  return (
    <div
      key={index}
      className={`col-span-3 ${
        index !== 3 ? "divider" : ""
      } ${
        index === 1 || index === 2
          ? "flex lg:justify-center"
          : index === 3
          ? "flex lg:justify-end"
          : ""
      }`}
    >
      <div className="single-counter">

        {/* ICON */}
        <div className="icon">
          <Icon className="text-5xl md:text-6xl" />
        </div>

        {/* CONTENT */}
        <div className="content">
          <div className="number">
            <Counter target={value} />
            <span>{suffix}</span>
          </div>

          <span>{item.title}</span>
        </div>

      </div>
    </div>
  );
})}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;