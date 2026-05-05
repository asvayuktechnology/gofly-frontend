"use client";

import { counterData } from "@/lib/data";
import React, { useEffect, useState } from "react";

const Counter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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

const CounterSection: React.FC = () => {
  return (
    <div className="counter-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gy-md-5 gy-4">
          {counterData.map((item, index) => (
            <div
              key={item.id}
              className={`col-span-3 ${index !== 3 ? "divider" : ""} ${
                index === 1 || index === 2
                  ? "flex lg:justify-center"
                  : index === 3
                    ? "flex lg:justify-end"
                    : ""
              }`}
            >
              <div className="single-counter">
                <div className="icon">{item.icon}</div>

                <div className="content">
                  <div className="number">
                    <Counter target={item.value} />
                    <span>{item.suffix}</span>
                  </div>
                  <span>{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
