import React from "react";
import { Link } from "react-router-dom";
import { GrWorkshop } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { TypeAnimation } from "react-type-animation";
import {
  FaLaptopCode,
  FaCogs,
  FaProjectDiagram,
  FaMicrochip,
  FaTools,
  FaBroadcastTower,
  FaBriefcase,
} from "react-icons/fa";

const government = [
  {
    name: "University of Madras",
    location: "Chennai, Tamil Nadu",
    rank: 1,
    siteUrl: "https://www.unom.ac.in/",
  },
  {
    name: "Bharathidasan University",
    location: "Tiruchirappalli, Tamil Nadu",
    rank: 2,
    siteUrl: "https://www.bdu.ac.in/",
  },
  {
    name: "Savitribai Phule Pune University",
    location: "Pune, Maharashtra",
    rank: 3,
    siteUrl: "http://www.unipune.ac.in/",
  },
  {
    name: "Jamia Millia Islamia",
    location: "New Delhi, Delhi",
    rank: 4,
    siteUrl: "https://www.jmi.ac.in/",
  },
  {
    name: "Guru Gobind Singh Indraprastha University",
    location: "New Delhi, Delhi",
    rank: 5,
    siteUrl: "http://www.ipu.ac.in/",
  },
];

const privateCollege = [
  {
    name: "Christ University",
    location: "Bangalore, Karnataka",
    rank: 1,
    siteUrl: "https://www.christuniversity.in/",
  },
  {
    name: "Symbiosis Institute of Computer Studies and Research",
    location: "Pune, Maharashtra",
    rank: 2,
    siteUrl: "https://www.sicsr.ac.in/",
  },
  {
    name: "Presidency College",
    location: "Bangalore, Karnataka",
    rank: 3,
    siteUrl: "https://presidencycollege.ac.in/",
  },
  {
    name: "Loyola College",
    location: "Chennai, Tamil Nadu",
    rank: 4,
    siteUrl: "https://www.loyolacollege.edu/",
  },
  {
    name: "St. Xavier's College",
    location: "Mumbai, Maharashtra",
    rank: 5,
    siteUrl: "https://xaviers.edu/main/",
  },
];

const featuredCollege = [
  {
    name: "ISBR",
    location: "Bengaluru, Karnataka",
    siteUrl: "https://www.isbr.in/",
  },
  {
    name: "Mangalmay Group of Institutions",
    location: "Greater Noida, UP",
    siteUrl: "https://www.mangalmay.org/",
  },
  {
    name: "Graphic Era University",
    location: "Dehradun, Uttarakhand",
    siteUrl: "https://geu.ac.in/",
  },
  {
    name: "Poddar Group of Institutions",
    location: "Jaipur, Rajasthan",
    siteUrl: "https://www.poddarinstitute.org/",
  },
  {
    name: "R V University",
    location: "Bengaluru, Karnataka",
    siteUrl: "https://rvu.edu.in/",
  },
  {
    name: "SRM UNIVERSITY",
    location: "Sonepat, Haryana",
    siteUrl: "https://srmuniversity.ac.in/",
  },
  {
    name: "GNIOT Group of Institutes",
    location: "Greater Noida, UP",
    siteUrl: "https://www.gniotgroup.edu.in/",
  },
];

const examData = [
  {
    exam: "CUET",
    siteUrl: "https://exams.nta.ac.in/CUET-UG/",
    examDates: [{ session: "", dates: "15 May '24 - 31 May '24" }],
  },
  {
    exam: "IPU CET",
    siteUrl: "https://ipu.ac.in/",
    examDates: [{ session: "", dates: "Date to be announced" }],
  },
  {
    exam: "AIMA UGAT",
    siteUrl: "https://www.aima.in/",
    examDates: [{ session: "", dates: "Date to be announced" }],
  },
  {
    exam: "SET",
    siteUrl: "https://www.set-test.org/",
    examDates: [{ session: "", dates: "Date to be announced" }],
  },
  {
    exam: "SUAT",
    siteUrl: "https://suat.sharda.ac.in/",
    examDates: [{ session: "", dates: "Date to be announced" }],
  },
];

const streams = [
  {
    name: "Information Technology",
    icon: <FaLaptopCode className="text-4xl text-[#235950]" />,
  },
  {
    name: "Software Development",
    icon: <FaCogs className="text-4xl text-[#235950]" />,
  },
  {
    name: "Network Security",
    icon: <FaProjectDiagram className="text-4xl text-[#235950]" />,
  },
  {
    name: "Database Management",
    icon: <FaMicrochip className="text-4xl text-[#235950]" />,
  },
  {
    name: "Web Development",
    icon: <FaTools className="text-4xl text-[#235950]" />,
  },
  {
    name: "Artificial Intelligence",
    icon: <FaBroadcastTower className="text-4xl text-[#235950]" />,
  },
];

const BcaPage = () => {
  //
  return (
    <div className="btech-page-container">
      <div className="hero-section bg-gradient-to-b lg:bg-gradient-to-br from-[#426e66] via-[#093029] to-[#0f312c] text-white pt-64 lg:pt-40 pb-20 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <TypeAnimation
              sequence={[
                "Bachelor of Computer Application",
                1000,
                "(B.C.A)",
                1000,
              ]}
              speed={50}
              className="inline-block text-5xl font-bold drop-shadow-lg"
              wrapper="span"
              repeat={Infinity}
            />
            <br />
            <TypeAnimation
              sequence={[
                "Code Your Future: Empowering the Next Generation of Tech Innovators.",
                2000,
                "Code Your Future: Empowering the Next Generation of Tech Innovators.",
              ]}
              speed={50}
              className="inline-block text-lg drop-shadow-lg mt-4"
              wrapper="span"
              repeat={Infinity}
            />
            {/* <h1 className="text-5xl font-bold drop-shadow-lg">Bachelor of Computer Application (B.C.A)</h1>
            <p className="mt-4 text-lg">An in-depth look at the premier undergraduate program in engineering and technology.</p> */}
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* <img src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722095288/vecteezy_online-banking-or-digital-bank-concept-with-money-people-and_-removebg_butrp6.png" alt="B.Tech Illustration" className="rounded-lg" /> */}
            <img
              src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722202938/bca_lmawqa.png"
              alt="B.Tech Illustration"
              className="rounded-lg w-[400px] floating"
            />
          </div>
        </div>
      </div>

      <main className="container mx-auto pb-12 pt-12 lg:pt-24 px-6">
        <section id="course-details" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#235950] flex items-center">
            <PiStudent className="mr-2" /> Course Details
          </h2>
          <ul className="custom-list list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
            <li>
              BCA (Bachelor of Computer Application) is a three-year
              undergraduate program.
            </li>
            <li>
              Focuses on practical aspects of computer applications and software
              development.
            </li>
            <li>
              Provides a strong foundation in programming, database management,
              and networking.
            </li>
            <li>
              Covers various disciplines such as information technology,
              software development, and web development.
            </li>
          </ul>
        </section>

        <section id="streams" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#235950] flex items-center"><FaLaptopCode className="mr-2"/> Associated Streams</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {streams.map((stream, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
                {stream.icon}
                <h4 className="text-lg font-bold mt-4 text-[#235950]">{stream.name}</h4>
              </div>
            ))}
          </div>
        </section>

        <section id="eligibility-criteria" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#235950] flex items-center">
            <IoMdCheckmarkCircleOutline className="mr-2" /> Eligibility Criteria
          </h2>
          <ul className="custom-list list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
            <li>
              Completion of 10+2 or equivalent examination from a recognized
              board.
            </li>
            <li>
              Minimum aggregate marks of 50% in 10+2 (may vary by institution).
            </li>
            <li>
              Background in mathematics or computer science is preferred but not
              mandatory.
            </li>
            <li>
              Some institutions may require candidates to clear entrance exams
              or interviews.
            </li>
          </ul>
        </section>

        <section id="top-exams" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#235950] flex items-center">
            <TfiWrite className="mr-2" /> Top Exams
          </h2>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-gray-200 text-gray-600">
                <tr>
                  <th scope="col" className="px-6 py-3 text-[#235950]">
                    Exam Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-[#235950]">
                    Exam Dates
                  </th>
                </tr>
              </thead>
              <tbody>
                {examData.map((exam, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } border-t border-gray-200`}
                  >
                    <td className="px-6 py-4">
                      <Link
                        to={exam.siteUrl}
                        className="hover:text-black text-[#235950]"
                      >
                        {exam.exam}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <ul>
                        {exam.examDates.map((session, idx) => (
                          <li key={idx}>
                            {session.session ? `${session.session}: ` : ""}
                            {session.dates}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="placement-details" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#235950] flex items-center">
            <FaBriefcase className="mr-2" /> Career Prospects
          </h2>
          <ul className="custom-list list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
            <li>
              Eligibility criteria must be met before applying to any B.Tech
              placement, on- or off-campus.
            </li>
            <li>
              Some companies evaluate applicants based on basic skills and
              academic performance.
            </li>
            <li>
              Top recruiters have specific eligibility criteria for applicants.
            </li>
          </ul>
        </section>

        <section id="top-colleges" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#235950] flex items-center">
            <LiaUniversitySolid className="mr-2" /> Top Colleges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#235950]">
                Government Colleges
              </h3>
              <div className="bg-white shadow-md rounded-lg p-6">
                {government.map((college, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      index < government.length - 1
                        ? "border-b border-gray-200 pb-4"
                        : ""
                    }`}
                  >
                    <h4 className="text-lg font-bold">
                      <Link
                        to={college.siteUrl}
                        className="hover:text-black text-[#235950]"
                      >
                        {college.name}
                      </Link>
                    </h4>
                    <p>{college.location}</p>
                    <p>Rank: {college.rank}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#235950]">
                Private Colleges
              </h3>
              <div className="bg-white shadow-md rounded-lg p-6">
                {privateCollege.map((college, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      index < privateCollege.length - 1
                        ? "border-b border-gray-200 pb-4"
                        : ""
                    }`}
                  >
                    <h4 className="text-lg font-bold">
                      <Link
                        to={college.siteUrl}
                        className="hover:text-black text-[#235950]"
                      >
                        {college.name}
                      </Link>
                    </h4>
                    <p>{college.location}</p>
                    <p>Rank: {college.rank}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#235950]">
                Featured Colleges
              </h3>
              <div className="bg-white shadow-md rounded-lg p-6">
                {featuredCollege.map((college, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      index < featuredCollege.length - 1
                        ? "border-b border-gray-200 pb-4"
                        : ""
                    }`}
                  >
                    <h4 className="text-lg font-bold">
                      <Link
                        to={college.siteUrl}
                        className="hover:text-black text-[#235950]"
                      >
                        {college.name}
                      </Link>
                    </h4>
                    <p>{college.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
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
    </div>
  );
};

export default BcaPage;
