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
    name: "Saurav Singh",
    text: "Career Valley's guidance was invaluable in choosing my undergraduate college. Their events clarified UG programs, and they assisted me in securing a scholarship and a long-term loan. Thanks to their support, I'm now thriving at my preferred college. I'm very grateful for their help.",
    avatar: "https://res.cloudinary.com/du3i8e0se/image/upload/v1723024885/saurav_nhznqm.png",
    bgcolor: "bg-gradient-to-r from-blue-500 to-blue-900",
  },
  {
    id: 2,
    name: "Sneha Singh",
    text: "After my undergraduate degree, I was unsure about my future and which B-school to choose for my PGDM. Career Valley's campus immersion at Badruka School of Management was pivotal. They guided me through the application process, helped secure a scholarship, and arranged a loan. Thanks to them, I am now at Welingkar Institute of Management, Bangalore.",
    avatar: "https://res.cloudinary.com/du3i8e0se/image/upload/v1723024924/sneha_n4jhjf.png",
    bgcolor: "bg-gradient-to-r from-red-500 to-red-900",
  },
  {
    id: 3,
    name: "Sruthi Muthyala",
    text: "From the start of my bachelor's, I wanted to pursue an MBA but was anxious about choosing the right school. 'The Career Valley' guided me to the best institutes and simplified my decision. I enrolled in the MBA Program at Nalsar University of Law, thanks to Career Valley and Divya ma'am.",
    avatar: "https://via.placeholder.com/150/0000FF/808080?text=User+Icon",
    bgcolor: "bg-gradient-to-r from-green-500 to-green-900",
  },
  {
    id: 4,
    name: "Abhishek",
    text: "Before Career Valley, I was unsure about my college choice for management studies. Their guidance led me to the new program at Badruka School of Management in Hyderabad. They also helped me secure a scholarship and navigate the loan process. Now, I am happily studying at Badruka, confident about my future. Career Valley made my dream come true.",
    avatar: "https://res.cloudinary.com/du3i8e0se/image/upload/v1723024960/Abhisek_ib0xuw.png",
    bgcolor: "bg-gradient-to-r from-yellow-500 to-yellow-900",
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
      <Heading normalText="Our" highlightText="Testimonials!" />
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
              <div className="reviewer flex items-center gap-x-6 absolute bottom-0 left-40 lg:left-28">
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
