import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "./textimonialCarousel.css";
import Heading from "../../common/Heading";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "This is an amazing service! Highly recommended.",
    avatar: "https://i.postimg.cc/YCyNw8MW/adi.jpg",
    bgcolor: "bg-gradient-to-r from-blue-500 to-blue-900",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "A wonderful experience, I am very satisfied with the results.",
    avatar: "https://i.postimg.cc/YCyNw8MW/adi.jpg",
    bgcolor: "bg-gradient-to-r from-red-500 to-red-900",
  },
  {
    id: 3,
    name: "Sam Wilson",
    text: "Exceptional service and support.",
    avatar: "https://i.postimg.cc/YCyNw8MW/adi.jpg",
    bgcolor: "bg-gradient-to-r from-green-500 to-green-900",
  },
  {
    id: 4,
    name: "Kate Johnson",
    text: "I would highly recommend them to anyone.",
    avatar: "https://i.postimg.cc/YCyNw8MW/adi.jpg",
    bgcolor: "bg-gradient-to-r from-yellow-500 to-yellow-900",
  },
  {
    id: 5,
    name: "Michael Brown",
    text: "Truly outstanding experience!",
    avatar: "https://i.postimg.cc/YCyNw8MW/adi.jpg",
    bgcolor: "bg-gradient-to-r from-purple-500 to-purple-900",
  },
  {
    id: 6,
    name: "Emily Davis",
    text: "I am extremely happy with the results.",
    avatar: "https://i.postimg.cc/YCyNw8MW/adi.jpg",
    bgcolor: "bg-gradient-to-r from-pink-500 to-pink-900",
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute flex justify-center items-center right-[10px] top-[-30px] lg:top-4 lg:right-4 bg-[#235950] text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute flex justify-center items-center top-[-30px] right-[60px] lg:top-4 lg:right-16 bg-[#235950] text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </button>
  );
};

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i) => <div className="w-8 h-1 bg-[#235950] mx-1"></div>,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-4">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Heading normalText="Our" highlightText="Testimonials!"/>
      <div className="container h-[600px] flex justify-center items-center lg:mx-auto px-4 relative">
        <Slider {...settings} className="lg:py-16 w-[400px] md:w-[768px] lg:w-[1400px]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial bg-gradient-to-r from-[#235950] to-[#1e3c3b] m-4 flex flex-col justify-center items-center relative p-4 rounded-tr-none rounded-bl-none rounded-br-[25px] rounded-tl-[25px]`}
            >
              <div className="review flex justify-center items-center h-full">
                <p className="text-white">{testimonial.text}</p>
              </div>
              <div className="reviewer flex items-center gap-x-6 absolute bottom-0 left-20">
                <img
                  src={testimonial.avatar}
                  className="rounded-full h-[50px]"
                  alt={testimonial.name}
                />
                <p className="source text-[18px] text-white">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
