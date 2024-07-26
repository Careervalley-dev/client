import React from "react";

const Heading = ({ normalText, highlightText }) => {
  return (
    <div className="px-16 pt-8">
      <h2 className="relative font-rubik font-semibold text-4xl leading-tight text-primary-dark">
        {normalText}{" "}
        <span className="relative text-primary-light">
          {highlightText}
          <div className="absolute w-full h-4 left-0 bottom-0 bg-secondary-light z-negative"></div>
        </span>
      </h2>
    </div>
  );
};

export default Heading;
