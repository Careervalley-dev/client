import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const ExploreByCity = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 640, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const data = [
    {
      city: "Bangalore",
      img: "https://i.postimg.cc/wBn5mGD1/bangalore.png",
    },
    {
      city: "Mumbai",
      img: "https://i.postimg.cc/ZR38FxLV/mumbai.png",
    },
    {
      city: "Kolkata",
      img: "https://i.postimg.cc/mgXybDDN/kolkata.png",
    },
    {
      city: "Hyderabad",
      img: "https://i.postimg.cc/GtCkMT7r/hyderabad.png",
    },
    {
      city: "Chennai",
      img: "https://i.postimg.cc/6Q8LTX4s/chennai.png",
    },
    {
      city: "others",
      img: "https://i.postimg.cc/d18VhVLP/Untitled-design-1.png",
    },
  ];

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
    <div className="container flex  flex-col justify-center items-center mx-auto px-6 lg:px-24 w-[100vw] lg:w-[90vw] pt-20 font-anta relative">
      <h1 className="heading font-bold mb-4">Explore cities</h1>
      <div className="flex justify-between items-center mt-8 absolute top-1/2 left-9 right-9">
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
          <div key={index} className="w-[20vw]">
            <Link to="/explorecity" className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center w-[150px] text-center">
                <img
                  src={item.img}
                  alt={item.city}
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    padding: "15px",
                  }}
                  className="bg-black"
                />
                <h3 className="text">{item.city}</h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExploreByCity;
