"use client";

interface LoaderProps {
  text?: string;
}

const GlobalLoader = ({ text = "Loading..." }: LoaderProps) => {
  return (
    <div className="global-loader-overlay">
      <div className="flex flex-col items-center">
        <div className="global-loader" />
        <p className="global-loader-text">{text}</p>
      </div>
    </div>
  );
};

export default GlobalLoader;