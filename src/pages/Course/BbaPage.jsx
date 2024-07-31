import React from "react";
import { Link } from "react-router-dom";
import { GrWorkshop } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { TypeAnimation } from "react-type-animation";
import {
  FaCalculator,
  FaMoneyBillWave,
  FaChartLine,
  FaUserCog,
  FaChartPie,
  FaGlobe,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

const examData = [
  {
    exam: "Common Admission Test (CAT)",
    siteUrl: "https://www.iimcat.in/",
    examDates: [{ session: "", dates: "Check official website for dates" }],
  },
  {
    exam: "Xavier Aptitude Test (XAT)",
    siteUrl: "https://xatonline.net.in/",
    examDates: [{ session: "", dates: "Check official website for dates" }],
  },
  {
    exam: "Management Aptitude Test (MAT)",
    siteUrl: "https://mat.aima.in/",
    examDates: [{ session: "", dates: "Check official website for dates" }],
  },
  {
    exam: "Delhi University Entrance Test (DUET)",
    siteUrl: "https://exam.du.ac.in/",
    examDates: [{ session: "", dates: "Check official website for dates" }],
  },
  {
    exam: "Symbiosis National Entrance Test (SNAP)",
    siteUrl: "https://www.snaptest.org/",
    examDates: [{ session: "", dates: "Check official website for dates" }],
  },
];

const government = [
  {
    name: "Delhi University (DU)",
    location: "Delhi",
    rank: "-", // Placeholder for rank
    siteUrl: "https://www.du.ac.in/",
  },
  {
    name: "University of Mumbai",
    location: "Mumbai",
    rank: "-",
    siteUrl: "https://mu.ac.in/",
  },
  {
    name: "University of Calcutta",
    location: "Kolkata",
    rank: "-",
    siteUrl: "https://www.cucal.ac.in/",
  },
  {
    name: "Banaras Hindu University (BHU)",
    location: "Varanasi",
    rank: "-",
    siteUrl: "https://www.bhu.ac.in/",
  },
  {
    name: "University of Hyderabad",
    location: "Hyderabad",
    rank: "-",
    siteUrl: "https://www.uohyd.ac.in/",
  },
];

const privateCollege = [
  {
    name: "Indian Institute of Management (IIM) Ahmedabad",
    location: "Ahmedabad",
    rank: 1, // Placeholder for actual rank
    siteUrl: "https://www.iimahd.ac.in/",
  },
  {
    name: "Indian School of Business (ISB)",
    location: "Hyderabad",
    rank: 2,
    siteUrl: "https://www.isb.edu/",
  },
  {
    name: "Xavier Labour Relations Institute (XLRI)",
    location: "Jamshedpur",
    rank: 3,
    siteUrl: "https://www.xlri.ac.in/",
  },
  {
    name: "Management Development Institute (MDI)",
    location: "Gurgaon",
    rank: 4,
    siteUrl: "https://www.mdi.ac.in/",
  },
  {
    name: "Symbiosis Institute of Business Management (SIBM) Pune",
    location: "Pune",
    rank: 5,
    siteUrl: "https://www.sibm.edu/",
  },
];

const featuredCollege = [
  {
    name: "Indian Institute of Management (IIM) Ahmedabad",
    location: "Ahmedabad",
    rank: 1,
    siteUrl: "https://www.iimahd.ac.in/",
  },
  {
    name: "Indian School of Business (ISB)",
    location: "Hyderabad",
    rank: 2,
    siteUrl: "https://www.isb.edu/",
  },
  {
    name: "Xavier Labour Relations Institute (XLRI)",
    location: "Jamshedpur",
    rank: 3,
    siteUrl: "https://www.xlri.ac.in/",
  },
  {
    name: "Delhi University (DU)",
    location: "Delhi",
    rank: 4,
    siteUrl: "https://www.du.ac.in/",
  },
  {
    name: "Symbiosis Institute of Business Management (SIBM) Pune",
    location: "Pune",
    rank: 5,
    siteUrl: "https://www.sibm.edu/",
  },
];

const streams = [
  {
    name: "Accounting",
    icon: <FaCalculator className="text-4xl text-[#235950]" />,
  },
  {
    name: "Finance",
    icon: <FaMoneyBillWave className="text-4xl text-[#235950]" />,
  },
  {
    name: "Marketing",
    icon: <FaChartLine className="text-4xl text-[#235950]" />,
  },
  {
    name: "Human Resource Management (HRM)",
    icon: <FaUserCog className="text-4xl text-[#235950]" />,
  },
  {
    name: "Business Analytics",
    icon: <FaChartPie className="text-4xl text-[#235950]" />,
  },
  { name: "Economics", icon: <FaGlobe className="text-4xl text-[#235950]" /> },
];

const BbaPage = () => {
  // bg-gradient-to-r from-[#235950] to-[#61bbac]
  return (
    <div className="btech-page-container">
      <div className="hero-section bg-gradient-to-b lg:bg-gradient-to-br from-[#426e66] via-[#093029] to-[#0f312c] text-white pt-64 lg:pt-40 pb-20 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <TypeAnimation
              sequence={[
                "Bachelor of Business Administration",
                1000,
                "(B.B.A)",
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
                "Empowering Future Business Leaders with Innovative Management Skills.",
                2000,
                "Empowering Future Business Leaders with Innovative Management Skills.",
              ]}
              speed={50}
              className="inline-block text-lg drop-shadow-lg mt-4"
              wrapper="span"
              repeat={Infinity}
            />
            {/* <h1 className="text-5xl font-bold drop-shadow-lg"></h1>
            <p className="mt-4 text-lg">An in-depth look at the premier undergraduate program in engineering and technology.</p> */}
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* <img src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722097730/Untitled_design__1_-removebg_d9cwlr.png" alt="B.Tech Illustration" className="rounded-lg w-[450px]" /> */}
            <img
              src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722202936/management-removebg-preview_1_ai37uj.png"
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
              BBA (Bachelor of Business Administration) is a three-year
              undergraduate program focused on business management.
            </li>
            <li>
              Provides a strong foundation in business principles, accounting,
              marketing, finance, and human resource management.
            </li>
            <li>
              Prepares students for various management roles in industries like
              finance, marketing, human resources, and consulting.
            </li>
            <li>
              May offer specializations in areas like marketing, finance,
              international business, or human resource management (depending on
              the college).
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
              Eligibility criteria vary depending on the college and program.
            </li>
            <li>
              Most colleges require candidates to have completed their 10+2 or
              equivalent examination with a minimum percentage in subjects
              relevant to business, such as Mathematics, Economics, and Commerce
              (check specific college requirements).
            </li>
            <li>
              Some colleges may also require candidates to have a valid score in
              entrance exams like Management Aptitude Test (MAT) or specific
              university entrance tests.
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
              Meeting eligibility criteria is essential for on-campus and
              off-campus BBA placements.
            </li>
            <li>
              Companies may evaluate applicants based on academic performance,
              communication skills, business acumen, and aptitude tests.
            </li>
            <li>
              Top recruiters have specific requirements; research their criteria
              before applying.
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
                    <p>Rank: {college.rank}</p>
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

export default BbaPage;
