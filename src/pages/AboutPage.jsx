import React from "react";
import Banner from "../components/AboutPage/Banner";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Link } from "react-router-dom";
import Heading from "../components/common/Heading";

const AboutPage = () => {
  return (
    <div className="relative">
      {/* Banner Image Section */}
      {/* <Banner /> */}
      <section className="relative pt-44 lg:pt-32 w-full">
        <img
          src="https://res.cloudinary.com/du3i8e0se/image/upload/v1721851897/modern-business_64654966_1_xqcwwn.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold mb-2">
            Welcome to The Career Valley
          </h1>
          <p className="text-xl">Your Pathway to Success Starts Here</p>
        </div> */}
      </section>
      <div className="container mx-auto px-4 py-12">
        {/* Our Mission */}
        <section className="text-left mb-12 font-cat bg-white p-4 flex flex-col justify-center items-center">
          <Heading normalText="Our" highlightText="Mission" />
          {/* <h2 className="text-4xl font-dosis font-bold mb-4">Our Mission</h2> */}
          <p className="text-lg lg:ml-16">
            To be the premier education portal, we strive to provide the most
            interactive user interface and rigorously validated content. Our
            mission is to support students comprehensively, ensuring their
            college selection process is simplified and informed.
          </p>
        </section>

        {/* Our Story */}
        <section className="text-left mb-12 font-cat bg-white px-4 flex flex-col justify-center items-center">
          <Heading normalText="Our" highlightText="Story" />
          <div className="flex flex-col-reverse lg:flex-row gap-x-4 lg:ml-16">
            <div className="text-md text-justify w-full lg:w-2/5 flex justify-start items-start pt-4">
              <div className="ring-2 ring-black rounded-md p-2">
                <div className="flex justify-start">
                  <RiDoubleQuotesL className="text-[20px]" />
                </div>
                <p className="p-6">
                  At The Career Valley, we envision creating a student-friendly
                  ecosystem where every individual finds a ladder to climb the
                  stairs of success. Our mission is to provide new minds with
                  not just knowledge, but also aspirations and determination,
                  empowering them to craft their unique success stories.
                </p>
                <div className="flex justify-end">
                  <RiDoubleQuotesR className="text-[20px]" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/5 lg:pl-10 lg:p-6 p-2">
              <img
                src="https://res.cloudinary.com/du3i8e0se/image/upload/v1721844626/js2nqbft8hklayhw6swd.jpg"
                className="rounded-md h-full w-full"
              />
            </div>
          </div>
        </section>

        {/* Our Founder */}
        <section className="text-left mb-12 font-cat bg-white px-4 flex flex-col justify-center items-center">
          <Heading normalText="Our" highlightText="Founder" />
          <div className="flex flex-col-reverse lg:flex-row-reverse gap-x-2 lg:last:ml-16">
            <div className="text-md text-justify w-full lg:w-3/5 flex flex-col justify-start items-start pt-4">
              <div className="ring-2 ring-black rounded-md p-2">
                <h1 className="text-2xl pl-2 font-dosis font-semibold">
                  Divya Rupainwar
                </h1>
                <h2 className="text-xl pl-2 font-dosis font-medium">
                  Founder & CEO
                </h2>
                <div className="mb-4 pl-2 gap-x-3 flex text-[18px] mt-2">
                  <Link to="https://www.linkedin.com/in/aditya--sahu89/">
                    <FaLinkedin className="hover:text-[#2d49ff]" />
                  </Link>
                  <Link to="https://www.facebook.com">
                    <FaFacebook className="hover:text-[#3470fb]" />
                  </Link>
                  <Link to="https://www.instagram.com">
                    <FaInstagram className="hover:text-[#ea3773]" />
                  </Link>
                  <Link to="mailto:example@gmail.com">
                    <FaEnvelope className="hover:text-red-600" />
                  </Link>
                </div>
                <div>
                  <div className="flex justify-start">
                    <RiDoubleQuotesL className="text-[20px]" />
                  </div>
                  <p className="p-6 text-[18px]">
                    Imagine a student, full of dreams and ready to take on the
                    world, standing at the bottom of a big staircase. Each step
                    is a new achievement, a challenge, and a chance to grow.
                    This staircase is like the path to success, and at The
                    Career Valley, we're here to help every student climb it
                    with confidence. Our goal is to create a place where
                    students can learn, be inspired, and use that inspiration to
                    reach their goals. We believe education is about growing
                    your mind, finding what you love, and having the courage to
                    make your own path. As we start this journey together, we're
                    inviting you to join us in making education better. Let's
                    build bridges to knowledge, dreams, and possibilities, and
                    together, let's create a legacy of success that will inspire
                    future generations. Welcome to a place where every dream has
                    a purpose, and every student is the architect of their own
                    destiny.
                  </p>
                  <div className="flex justify-end">
                    <RiDoubleQuotesR className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 pl-0 p-0 lg:p-4">
              <div className="cards flex justify-center items-center">
                <figure className="card1">
                  <img
                    src="https://res.cloudinary.com/du3i8e0se/image/upload/v1721847900/qkvrjqtsook5wjnzbzwb.jpg"
                    alt="3D Hover"
                    className="card1_image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
