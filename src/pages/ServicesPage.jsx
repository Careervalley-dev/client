import React from "react";
import Banner from "../components/ServicesPage/Banner";
import WelcomeComponent from "../components/ServicesPage/WelcomeComponent";
import Heading from "../components/common/Heading";

const ServicesPage = () => {
  const data = [
    {
      title: "Classroom Session",
      desc: "In our classroom sessions, we offer colleges, institutions, and universities a platform to engage in interactive sessions with students across multiple high schools and undergraduate colleges. Here, students gain insights into various institutes and their courses, while also having the opportunity to interact directly with top managerial representatives",
    },
    {
      title: "Open Houses/Seminars",
      desc: " In our Open Houses, we serve as the vital connectivity link between colleges, institutions, universities, and aspiring students. These events provide a platform for students to engage in interactive sessions with top managerial figures from educational institutions",
    },
    {
      title: "Educational Fair",
      desc: "Educational fair, where knowledge meets opportunity! Our educational fair is a vibrant and dynamic platform that brings together colleges, universities, institutions, and eager students under one roof. Here, attendees can explore a plethora of educational offerings, ranging from undergraduate and postgraduate programs to specialized courses and training modules",
    },
    {
      title: "Campus Visit",
      desc: "Our campus visit program immerses students in their dream colleges, offering firsthand insights beyond brochures. Students explore the campus, interact with current students and faculty, and attend classes. This hands-on experience helps them envision themselves as part of the college community and equips them with crucial information for making life-changing decisions.",
    },
    {
      title: "One to One Counseling",
      desc: "Our one-to-one counseling sessions offer personalized guidance, helping students navigate academic and career decisions. Experienced counselors understand each student's strengths, interests, and aspirations, providing tailored advice and resources. These sessions empower students to make informed choices, supporting them in achieving their academic and professional goals.",
    },
    {
      title: "Admission Support",
      desc: "Our one-to-one counseling sessions offer personalized guidance, helping students navigate academic and career decisions. Experienced counselors understand each student's strengths, interests, and aspirations, providing tailored advice and resources. These sessions empower students to make informed choices, supporting them in achieving their academic and professional goals.",
    },
  ];
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4 py-12">
        <div className="p-4 bg-white">
        <Heading normalText="Our" highlightText="Services" />
          {/* <h2 className="text-4xl font-bold font-dosis mb-4 bg-white">
            Services
          </h2> */}
          <p className="text-xl text-justify lg:ml-16 mt-6 mb-4 font-cat">
            At The Career Valley, we provide a wide range of services to the
            students affiliated with us, ranging from Campus visits, Educational
            fairs, Seminars, Classroom sessions and one-on-one Counseling, which
            helps the students in taking the right step towards a bright career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:ml-16 lg:grid-cols-2 p-8">
          {data.map((item, index) => (
            <div key={index} class="card2 bg-[#e8f1f0] shadow-2xl">
              <p class="card2-title font-dosis font-bold text-[24px]">
                {item.title}
              </p>
              <p class="small-desc font-cat text-[20px]">{item.desc}</p>
              <div class="go-corner">
                <div class="go-arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <WelcomeComponent /> */}
    </div>
  );
};

export default ServicesPage;
