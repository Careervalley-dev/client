import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Heading from "../components/common/Heading";
import FounderProfile from "../components/AboutPage/founder/FounderProfile";

const AboutPage = () => {
  return (
    <div className="relative">
      {/* Banner Image Section */}
      <section className="relative pt-44 lg:pt-32 w-full">
        <img
          src="https://res.cloudinary.com/du3i8e0se/image/upload/v1721851897/modern-business_64654966_1_xqcwwn.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </section>
      
      <div className="container mx-auto px-4 py-12">
        {/* Our Mission */}
        <section className="text-left mb-6 font-cat bg-white p-4 flex flex-col justify-center items-center">
          <Heading normalText="Our" highlightText="Mission" />
          <p className="text-lg mt-6 text-wrap px-8 lg:ml-16 text-[#235950]">
            To be the premier education portal, we strive to provide the most
            interactive user interface and rigorously validated content. Our
            mission is to support students comprehensively, ensuring their
            college selection process is simplified and informed.
          </p>
        </section>

        {/* Our Story */}
        <section className="text-left mb-12 font-cat bg-white px-4 flex flex-col justify-center items-center">
          <Heading normalText="Our" highlightText="Story" />
          <div className="flex flex-col-reverse mt-6 lg:flex-row gap-x-4 lg:ml-16">
            <div className="text-md text-justify w-full lg:w-2/5 flex justify-start items-start pt-4">
              <div className="ring-2 ring-[#235950] rounded-md p-8">
                <div className="flex justify-start">
                  <RiDoubleQuotesL className="text-[20px] text-[#235950]" />
                </div>
                <p className="p-6 text-[#235950]">
                  In 2013, Ms. Divya Rupainwar observed that many students struggled with making informed decisions about their higher education and career paths.
                  Overwhelmed by the vast array of options and lacking proper guidance, they often found it challenging to navigate this complex landscape.
                  Driven by a passion to make a difference, Ms. Rupainwar founded Career Valley with a clear vision: to bridge the gap between educational opportunities and career aspirations for students across India.
                  As a passionate educator and industry professional, she recognized the growing need for personalized guidance and access to quality educational resources in an increasingly competitive world.
                </p>
                <div className="flex justify-end">
                  <RiDoubleQuotesR className="text-[20px] text-[#235950]" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/5 lg:pl-10 lg:p-6 p-2">
              <img
                src="https://res.cloudinary.com/du3i8e0se/image/upload/v1721844626/js2nqbft8hklayhw6swd.jpg"
                className="rounded-md h-full w-full "
              />
            </div>
          </div>
        </section>

        {/* Our Founder */}
        <section className="text-left mb-12 font-cat bg-white px-4 flex flex-col justify-center items-center">
          <Heading normalText="Our" highlightText="Founder" />
          <div className="flex flex-col-reverse mt-6 lg:flex-row-reverse gap-x-2 lg:last:ml-16">
            <div className="text-md text-justify w-full lg:w-3/5 flex flex-col justify-center items-start pt-4">
              <div className="ring-2 ring-[#235950] rounded-md p-12">
                <div>
                  <div className="flex justify-start">
                    <RiDoubleQuotesL className="text-[20px] text-[#235950]" />
                  </div>
                  <p className="p-6 text-[18px] text-[#235950]">
                    At The Career Valley, we help every student climb the staircase of success with confidence.
                    Here, education is about growing your mind, discovering your passion, and having the courage to forge your own path.
                    Join us in creating a legacy of knowledge, dreams, and possibilities. Welcome to a place where every dream has a purpose, and every student is the architect of their own destiny.
                  </p>
                  <div className="flex justify-end">
                    <RiDoubleQuotesR className="text-[20px] text-[#235950]" />
                  </div>
                </div>
                <h1 className="text-2xl pl-2 font-dosis font-semibold">
                  Divya Rupainwar
                </h1>
                <h2 className="text-xl pl-2 font-dosis font-medium">
                  Founder & CEO
                </h2>

              </div>
            </div>
            <div className="w-full lg:w-2/5 pl-0 p-0 lg:p-4">
              <div className="cards flex justify-center items-center">
                <figure className="card1">
                  <img
                    src="https://res.cloudinary.com/du3i8e0se/image/upload/v1721847900/qkvrjqtsook5wjnzbzwb.jpg"
                    alt="Divya Rupainwar"
                    className="card1_image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <FounderProfile />

        {/* Our Future */}
        <section className="text-left mb-12 font-cat bg-white p-4 flex flex-col justify-center items-center">
          <Heading normalText="Our" highlightText="Future" />
          {/* <h2 className="text-4xl font-dosis font-bold mb-4">Our Mission</h2> */}
          <p className="text-lg px-8 text-[#235950] mt-6 lg:ml-16">
            As we look to the future, Career Valley remains committed to evolving with the changing educational landscape. We are continuously exploring new ways to enhance our services, incorporating the latest technologies and methodologies to better serve our students.
            Our goal is to become the leading educational and career development platform in India, providing unmatched support and resources to students and professionals nationwide.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
