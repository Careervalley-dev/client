import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const StreamSlider = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 640, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  // Create a reference to the Slider component
  const sliderRef = React.useRef(null);

  // Function to go to the next slide
  const next = () => {
    sliderRef.current.slickNext();
  };

  // Function to go to the previous slide
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="container flex flex-col justify-center items-center mx-auto px-6 lg:px-24 w-[100vw] lg:w-[90vw] h-full mb-12 pt-20 font-cat relative">
      <h1 className="text-2xl font-bold heading mb-4">
        Explore Streams
      </h1>
      <div className="flex justify-between items-center mt-8 absolute top-1/2 left-6 right-6">
        <button
          onClick={previous}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={next}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <Slider ref={sliderRef} {...settings} className="w-[200px] lg:w-[1100px]">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="flex justify-center items-center h-[300px]">
            <Card
              imgUrl={item.img}
              title={item.stream}
              colleges={item.colleges}
              streams={item.courses}
            />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StreamSlider;
