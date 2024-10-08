import React from "react";
import { Link } from "react-router-dom";
import { GrWorkshop } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { TypeAnimation } from "react-type-animation";
import {
  FaBriefcase,
  FaCalculator,
  FaChartLine,
  FaChartPie,
  FaGlobe,
  FaLaptopCode,
  FaMoneyBillWave,
  FaUserCog,
} from "react-icons/fa";

const examData = [
  {
    exam: "DUET",
    siteUrl: "https://exam.du.ac.in/",
    examDates: [{ session: "", dates: "Tentative Date: Jul '24" }],
  },
  {
    exam: "IPU CET",
    siteUrl: "https://ipu.ac.in/cet",
    examDates: [{ session: "", dates: "Tentative Date: May '24" }],
  },
  {
    exam: "Symbiosis Entrance Test (SET)",
    siteUrl: "https://setadmission.siu.edu.in/",
    examDates: [{ session: "", dates: "Tentative Date: Dec '23" }],
  },
  {
    exam: "Christ University Entrance Test",
    siteUrl: "https://admissions.christuniversity.in/",
    examDates: [{ session: "", dates: "Tentative Date: Feb '24" }],
  },
  {
    exam: "Delhi University Entrance Test (DUET)",
    siteUrl: "https://exam.du.ac.in/",
    examDates: [{ session: "", dates: "Tentative Date: Jul '24" }],
  },
];

const government = [
  {
    name: "University of Delhi (DU)",
    location: "Delhi",
    rank: 1,
    siteUrl: "https://www.du.ac.in/",
  },
  {
    name: "Shri Ram College of Commerce (SRCC)",
    location: "Delhi",
    rank: 2,
    siteUrl: "https://www.srcc.du.ac.in/",
  },
  {
    name: "Hindu College",
    location: "Delhi",
    rank: 3,
    siteUrl: "https://www.hinducollege.ac.in/",
  },
  {
    name: "Lady Shri Ram College for Women (LSR)",
    location: "Delhi",
    rank: 4,
    siteUrl: "https://www.lsr.edu.in/",
  },
  {
    name: "Hansraj College",
    location: "Delhi",
    rank: 5,
    siteUrl: "https://hansrajcollege.ac.in/",
  },
];

const privateCollege = [
  {
    name: "Symbiosis College of Arts and Commerce",
    location: "Pune",
    rank: 1,
    siteUrl: "https://www.symbiosis.ac.in/",
  },
  {
    name: "Christ University",
    location: "Bangalore",
    rank: 2,
    siteUrl: "https://www.christuniversity.in/",
  },
  {
    name: "Narsee Monjee Institute of Management Studies (NMIMS)",
    location: "Mumbai",
    rank: 3,
    siteUrl: "https://www.nmims.edu/",
  },
  {
    name: "Institute of Management Studies (IMS)",
    location: "Noida",
    rank: 4,
    siteUrl: "https://www.ims-india.org/",
  },
  {
    name: "Pearl Academy",
    location: "Delhi",
    rank: 5,
    siteUrl: "https://pearlacademy.com/",
  },
];

const featuredCollege = [
  {
    name: "Amity University",
    location: "Noida, New Delhi",
    siteUrl: "https://www.amity.edu/",
  },
  {
    name: "GNIOT Group of Institutes",
    location: "Greater Noida, UP",
    siteUrl: "https://www.gniotgroup.edu.in/",
  },
  {
    name: "SRM UNIVERSITY",
    location: "Sonepat, Haryana",
    siteUrl: "https://srmuniversity.ac.in/",
  },
  {
    name: "Accurate Group of Institutions",
    location: "Greater Noida, Uttar Pradesh",
    siteUrl: "https://www.accurate.in/",
  },
  {
    name: "R V University",
    location: "Bengaluru, Karnataka",
    siteUrl: "https://rvu.edu.in/",
  },
  {
    name: "Poddar Group of Institutions",
    location: "Jaipur, Rajasthan",
    siteUrl: "https://www.poddarinstitute.org/",
  },
  {
    name: "Mody University",
    location: "Sikar, Rajasthan",
    siteUrl: "https://www.modyuniversity.ac.in/",
  },
  {
    name: "Graphic Era University",
    location: "Dehradun, Uttarakhand",
    siteUrl: "https://geu.ac.in/",
  },
  {
    name: "ISBR",
    location: "Bengaluru, Karnataka",
    siteUrl: "https://www.isbr.in/",
  },
  {
    name: "Gitam",
    location: "Hyderabad, Telengana",
    siteUrl: "https://www.gitam.edu/",
  },
  {
    name: "SOIM",
    location: "Hyderabad, Telengana",
    siteUrl: "https://soim.edu.in/",
  }
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

const BcomPage = () => {
  return (
    <div className="btech-page-container">
      <div className="hero-section bg-gradient-to-b lg:bg-gradient-to-br from-[#426e66] via-[#093029] to-[#0f312c] text-white pt-64 lg:pt-40 pb-20 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <TypeAnimation
              sequence={["Bachelor of Commerce", 1000, "(B.Com)", 1000]}
              speed={50}
              className="inline-block text-5xl font-bold drop-shadow-lg"
              wrapper="span"
              repeat={Infinity}
            />
            <br />
            <TypeAnimation
              sequence={[
                "Navigating the World of finance with a Bachelor of Commerce: Your Pathway to Financial Mastery and Market Insights.",
                2000,
                "Navigating the World of finance with a Bachelor of Commerce: Your Pathway to Financial Mastery and Market Insights.",
              ]}
              speed={50}
              className="inline-block text-lg drop-shadow-lg mt-4"
              wrapper="span"
              repeat={Infinity}
            />
            {/* <h1 className="text-5xl font-bold drop-shadow-lg">Bachelor of Commerce (B.Com)</h1>
            <p className="mt-4 text-lg">An in-depth look at the premier undergraduate program in engineering and technology.</p> */}
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* <img src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722095288/vecteezy_online-banking-or-digital-bank-concept-with-money-people-and_-removebg_butrp6.png" alt="B.Tech Illustration" className="rounded-lg" /> */}
            <img
              src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722202940/commerce_1_wcqy0d.png"
              alt="B.Tech Illustration"
              className="rounded-lg floating w-[400px]"
            />
          </div>
        </div>
      </div>

      <main className="container mx-auto pb-12 pt-12 lg:pt-24 px-6">
        <section id="course-details" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#235950] flex items-center">
            <PiStudent className="mr-2" />Course
            Details
          </h2>
          <ul className="custom-list list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
            <li>
              B.Com (Bachelor of Commerce) is a three-year undergraduate
              program.
            </li>
            <li>
              Focuses on theoretical and practical aspects of business and
              commerce.
            </li>
            <li>
              Provides a strong foundation in accounting, finance, marketing,
              and economics.
            </li>
            <li>
              Prepares students for careers in various fields such as
              accounting, banking, finance, marketing, and management.
            </li>
            <li>
              May offer specializations in areas like Accounting & Finance,
              Marketing Management, Human Resource Management, etc. (depending
              on the college)
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
              Eligibility criteria vary depending on the college and specific
              program.
            </li>
            <li>
              Most colleges require candidates to have completed their 10+2 or
              equivalent examination with a minimum percentage in subjects like
              commerce, mathematics, and economics (specific requirements may
              vary).
            </li>
            <li>
              Some colleges may conduct their own entrance exams for B.Com
              admissions.
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
              Eligibility criteria must be met before applying to any B.Com
              placement, on- or off-campus.
            </li>
            <li>
              Companies evaluate applicants based on academic performance,
              communication skills, and aptitude for business.
            </li>
            <li>
              Internships during the program can enhance your resume and
              placement opportunities.
            </li>
            <li>
              Top recruiters in finance, accounting, consulting, and marketing
              may visit campuses for placements.
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

export default BcomPage;
