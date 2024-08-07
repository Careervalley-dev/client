import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const ExpertProfileCarousel = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={'creative'}
            slidesPerView={1}
            pagination={{ clickable: true, type: 'progressbar' }}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar, EffectCreative, Autoplay]}
            autoplay={{ delay: 3000 }}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: ['-120%', 0, -500],
                    rotate: [0, 100, 0],
                },
                next: {
                    shadow: true,
                    translate: ['120%', 0, -500],
                    rotate: [0, -100, 0],
                },
            }}
        >

            <SwiperSlide>
                <section className="lg:h-[230px] h-[400px] ring-2 my-12 px-6 py-4 mx-4 ring-[#235950] rounded-lg bg-white shadow-lg transition-all duration-300 transform hover:scale-95 hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-[#235950] mt-2">Professional Summary</h3>
                    <div className='mt-2'>
                        <div className="flex justify-start">
                            <RiDoubleQuotesL className="text-[20px] text-[#235950]" />
                        </div>
                        <p className="p-6 text-[18px] text-[#235950]">
                            Divya Rupainwar is a seasoned expert in higher education admissions in India, with over a decade of experience. She has guided more than 10,000 students in making informed decisions about their academic and career paths.
                        </p>
                        <div className="flex justify-end">
                            <RiDoubleQuotesR className="text-[20px] text-[#235950]" />
                        </div>
                    </div>
                </section>
            </SwiperSlide>


            <SwiperSlide>
                <section className="lg:h-[230px] h-[400px] ring-2 my-12 px-6 py-4 mx-4 ring-[#235950] rounded-lg bg-white shadow-lg transition-all duration-300 transform hover:scale-95 hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-[#235950] mt-2">Experience & Specialization</h3>
                    <ul className="mt-2 custom-list text-[18px] text-[#235950] list-inside">
                        <li className="custom-bullet">
                            <strong>Experience:</strong> Over a decade in higher education admissions
                        </li>
                        <li className="custom-bullet">
                            <strong>Specialization:</strong> Student counseling, university admissions, career guidance
                        </li>
                        <li className="custom-bullet">
                            <strong>Collaborations:</strong> Worked with leading institutions like WOXSEN, IMT, iNurture, and Mahindra Education.
                        </li>
                    </ul>
                </section>
            </SwiperSlide>


            <SwiperSlide>
                <section className="lg:h-[230px] h-[400px] ring-2 my-12 px-6 py-4 mx-4 ring-[#235950] rounded-lg bg-white shadow-lg transition-all duration-300 transform hover:scale-95 hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-[#235950] mt-2">Expertise</h3>
                    <ul className="mt-2 custom-list text-[18px] text-[#235950] list-inside">
                        <li className="custom-bullet">
                            <strong>Student Counseling:</strong> Personalized advice for educational paths. <br />
                        </li>
                        <li className="custom-bullet">
                            <strong>University Admissions:</strong> Facilitating connections between students and top universities. <br />
                        </li>
                        <li className="custom-bullet">
                            <strong>Career Guidance:</strong> Ongoing support for career success.
                        </li>
                    </ul>
                </section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="lg:h-[230px] h-[400px] ring-2 my-12 px-6 py-4 mx-4 ring-[#235950] rounded-lg bg-white shadow-lg transition-all duration-300 transform hover:scale-95 hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-[#235950] mt-2">Mission</h3>
                    <div className='mt-2'>
                        <div className="flex justify-start">
                            <RiDoubleQuotesL className="text-[20px] text-[#235950]" />
                        </div>
                        <p className="p-6 text-[18px] text-[#235950]">
                            To empower students to achieve their highest potential by providing them with the knowledge and tools to make informed educational decisions.
                        </p>
                        <div className="flex justify-end">
                            <RiDoubleQuotesR className="text-[20px] text-[#235950]" />
                        </div>
                    </div>
                </section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="lg:h-[230px] h-[400px] ring-2 my-12 px-6 py-4 mx-4 ring-[#235950] rounded-lg bg-white shadow-lg transition-all duration-300 transform hover:scale-95 hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-[#235950] mt-2">Achievements</h3>
                    <ul className="custom-list list-inside mt-2 text-[18px] text-[#235950]">
                        <li className="">Guided over 10,000 students.</li>
                        <li className="">Built strong partnerships with top educational institutions.</li>
                        <li className="">Established Career Valley as a trusted name in higher education.</li>
                    </ul>
                </section>
            </SwiperSlide>

            <SwiperSlide>
                <section className="lg:h-[230px] h-[400px] ring-2 my-12 px-6 py-4 mx-4 ring-[#235950] rounded-lg bg-white shadow-lg transition-all duration-300 transform hover:scale-95 hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-[#235950] mt-2">Contact Information</h3>
                    <p className="mt-2 text-[18px] text-[#235950]">
                        <strong>Email:</strong> divya@careervalley.com <br />
                        <strong>Phone:</strong> +91-123-456-7890 <br />
                        <strong>Website:</strong> {" "}
                        <Link to="https://www.careervalley.com" className="hover:underline">
                            www.careervalley.com
                        </Link>
                    </p>
                    <div className="mb-4 gap-x-4 flex text-[#235950] text-[18px] mt-4">
                        <Link to="https://www.linkedin.com/in/aditya--sahu89/" className="hover:text-[#2d49ff]">
                            <FaLinkedin />
                        </Link>
                        <Link to="https://www.facebook.com" className="hover:text-[#3470fb]">
                            <FaFacebook />
                        </Link>
                        <Link to="https://www.instagram.com" className="hover:text-[#ea3773]">
                            <FaInstagram />
                        </Link>
                        <Link to="mailto:divya@careervalley.com" className="hover:text-red-600">
                            <FaEnvelope />
                        </Link>
                    </div>
                </section>
            </SwiperSlide>
            <style jsx>{`
        .custom-list li {
          position: relative;
          padding-left: 1.5em;
        }
        .custom-list li::before {
          content: "\\2713"; 
          position: absolute;
          left: 0;
          top: -5px;
          color: #235950; 
          font-size: 1.2em;
          font-weight: 800; 
        }
      `}</style>
        </Swiper>
    );
};

export default ExpertProfileCarousel;
