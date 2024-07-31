import React from "react";
import { Link } from "react-router-dom";
import { GrWorkshop } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { TypeAnimation } from "react-type-animation";
import {
  FaBookOpen,
  FaGlobe,
  FaMicrophone,
  FaChartLine,
  FaBalanceScale,
  FaCamera,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const examData = [
  {
    exam: "CUET (UG) - Central Universities Common Entrance Test",
    siteUrl: "https://cuet.samarth.ac.in/",
    examDates: [{ session: "", dates: "Check official website for dates" }],
  },
  {
    exam: "DUET (Delhi University Entrance Test)",
    siteUrl: "https://exam.du.ac.in/",
    examDates: [{ session: "", dates: "Check official website for dates" }],
  },
  {
    exam: "BHU UET (Banaras Hindu University Entrance Test)",
    siteUrl: "https://bhuonline.in/",
    examDates: [{ session: "", dates: "Check official website for dates" }],
  },
  {
    exam: "AMU Entrance Exam (Aligarh Muslim University)",
    siteUrl: "https://amuedu.in/",
    examDates: [{ session: "", dates: "Check official website for dates" }],
  },
  {
    exam: "IPU CET (Indraprastha University Common Entrance Test)",
    siteUrl: "https://ipu.ac.in/cet",
    examDates: [{ session: "", dates: "Check official website for dates" }],
  },
];

const government = [
  {
    name: "University of Delhi",
    location: "Delhi",
    specializations: [
      "English Literature",
      "History",
      "Political Science",
      "Economics",
      "Mathematics",
    ],
    siteUrl: "https://www.du.ac.in/",
  },
  {
    name: "Banaras Hindu University (BHU)",
    location: "Varanasi, Uttar Pradesh",
    specializations: [
      "Philosophy",
      "Psychology",
      "Sociology",
      "Anthropology",
      "Geography",
    ],
    siteUrl: "https://www.bhu.ac.in/",
  },
  {
    name: "University of Mumbai",
    location: "Mumbai, Maharashtra",
    specializations: [
      "Mass Communication & Journalism",
      "Film Studies",
      "Fine Arts",
      "Performing Arts",
      "Languages",
    ],
    siteUrl: "https://mu.ac.in/",
  },
  {
    name: "Calcutta University",
    location: "Kolkata, West Bengal",
    specializations: [
      "Bengali Literature",
      "Sanskrit",
      "History",
      "Economics",
      "Political Science",
    ],
    siteUrl: "https://www.caluniv.ac.in/",
  },
  {
    name: "University of Hyderabad",
    location: "Hyderabad, Telangana",
    specializations: [
      "English Literature",
      "History",
      "Economics",
      "Political Science",
      "Psychology",
    ],
    siteUrl: "https://www.uohyd.ac.in/",
  },
];

const privateCollege = [
  {
    name: "Christ University",
    location: "Bangalore, Karnataka",
    specializations: [
      "English Literature",
      "Psychology",
      "Economics",
      "Business Administration",
      "Computer Science",
    ],
    siteUrl: "https://www.christuniversity.in/",
  },
  {
    name: "Symbiosis International (Deemed University)",
    location: "Pune, Maharashtra",
    specializations: [
      "Media & Communication",
      "Law",
      "Liberal Arts",
      "Management Studies",
      "Social Work",
    ],
    siteUrl: "https://www.siu.edu.in/",
  },
  {
    name: "Amity University",
    location: "Noida, Uttar Pradesh",
    specializations: [
      "Fashion Design",
      "Interior Design",
      "Mass Communication",
      "Psychology",
      "English Literature",
    ],
    siteUrl: "https://www.amity.edu/",
  },
  {
    name: "Jain University",
    location: "Bangalore, Karnataka",
    specializations: [
      "Commerce",
      "Journalism & Mass Communication",
      "Psychology",
      "History",
      "Political Science",
    ],
    siteUrl: "https://www.jainuniversity.ac.in/",
  },
  {
    name: "Lovely Professional University (LPU)",
    location: "Jalandhar, Punjab",
    specializations: [
      "English Literature",
      "History",
      "Political Science",
      "Psychology",
      "Economics",
    ],
    siteUrl: "https://www.lpu.in/",
  },
];

const featuredCollege = [
  {
    name: "Indian Institute of Science Education and Research (IISER) Pune",
    location: "Pune, Maharashtra",
    specializations: [
      "Science (Integrated Program)",
      "Mathematics (Integrated Program)",
    ],
    siteUrl: "https://www.iiserpune.ac.in/",
  },
  {
    name: "Ashoka University",
    location: "Sonipat, Haryana",
    specializations: [
      "Liberal Arts (Interdisciplinary Programs)",
      "Economics",
      "Political Science",
      "History",
      "English Literature",
    ],
    siteUrl: "https://www.ashoka.edu.in/",
  },
  {
    name: "Azim Premji University",
    location: "Bengaluru, Karnataka",
    specializations: [
      "Development Studies",
      "Education",
      "Law",
      "Public Policy",
      "Humanities",
    ],
    siteUrl: "https://www.azimpremjiuniversity.edu.in/",
  },
];

const streams = [
  {
    name: "English Literature",
    icon: <FaBookOpen className="text-4xl text-[#235950]" />,
  },
  { name: "History", icon: <FaGlobe className="text-4xl text-[#235950]" /> },
  {
    name: "Mass Communication",
    icon: <FaMicrophone className="text-4xl text-[#235950]" />,
  },
  {
    name: "Economics",
    icon: <FaChartLine className="text-4xl text-[#235950]" />,
  },
  {
    name: "Political Science",
    icon: <FaBalanceScale className="text-4xl text-[#235950]" />,
  },
  { name: "Psychology", icon: <GiBrain className="text-4xl text-[#235950]" /> },
];

const BaPage = () => {
  // Bachelor of Arts (B.A)
  return (
    <div className="btech-page-container">
      <div className="hero-section bg-gradient-to-b lg:bg-gradient-to-br from-[#426e66] via-[#093029] to-[#0f312c] text-white pt-64 lg:pt-40 pb-20 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <TypeAnimation
              sequence={["Bachelor of Arts", 1000, "(B.A)", 1000]}
              speed={50}
              className="inline-block text-5xl font-bold drop-shadow-lg"
              wrapper="span"
              repeat={Infinity}
            />
            <br />
            <TypeAnimation
              sequence={[
                "Navigating the World of Creativity with a Bachelor of Arts: Your Pathway to Cultural Mastery and Innovative Perspectives.",
                2000,
                "Navigating the World of Creativity with a Bachelor of Arts: Your Pathway to Cultural Mastery and Innovative Perspectives.",
              ]}
              speed={50}
              className="inline-block text-lg drop-shadow-lg mt-4"
              wrapper="span"
              repeat={Infinity}
            />
            {/* <h1 className="text-5xl font-bold drop-shadow-lg">Bachelor of Arts (B.A)</h1>
          <p className="mt-4 text-lg">An in-depth look at the premier undergraduate program in engineering and technology.</p> */}
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* <img src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722089786/Pngtree_artificial_intelligence_concept_in_3d_7601735_s9kzlq.png" alt="B.Tech Illustration" className="rounded-lg" /> */}
            <img
              src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722202936/arts_1_iddxrl.png"
              alt="B.Tech Illustration"
              className="rounded-lg floating w-[400px]"
            />
          </div>
        </div>
      </div>

      <main className="container mx-auto pb-12 pt-12 lg:pt-24 px-6">
        <section id="course-details" class="mb-12">
          <h2 class="text-3xl font-bold mb-4 text-[#235950] flex items-center">
            <PiStudent className="mr-2" /> Course Details
          </h2>
          <ul class="custom-list list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
            <li>
              Bachelor of Arts (BA) is a three-year undergraduate program.
            </li>
            <li>
              Focuses on the liberal arts and humanities, providing a broad
              foundation in knowledge and critical thinking skills.
            </li>
            <li>
              Covers a wide range of subjects, such as English Literature,
              History, Political Science, Economics, Psychology, Sociology, and
              many more. Students can choose a major or specialize in a specific
              area later in their studies.
            </li>
            <li>
              Develops essential skills like communication, writing, critical
              analysis, research, problem-solving, and cultural understanding.
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

        <section id="eligibility-criteria" class="mb-12">
          <h2 class="text-3xl font-bold mb-4 text-[#235950] flex items-center">
            <IoMdCheckmarkCircleOutline className="mr-2" /> Eligibility Criteria
          </h2>
          <ul class="custom-list list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
            <li>
              Eligibility criteria vary depending on the college and specific
              program.
            </li>
            <li>
              Most colleges require candidates to have completed their 10+2 or
              equivalent examination with a minimum percentage in relevant
              subjects (percentage may vary by college).
            </li>
            <li>
              Some colleges might conduct their own entrance exams or require
              scores from national or state-level entrance exams specific to BA
              programs (check individual college websites for details).
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

        <section id="career-prospects" class="mb-12">
          <h2 class="text-3xl font-bold mb-4 text-[#235950] flex items-center">
            <FaBriefcase className="mr-2" /> Career Prospects
          </h2>
          <ul class="custom-list list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
            <li>
              BA graduates can pursue careers in various fields, including
              education, research, government, media, public relations,
              marketing, social work, law, and more (specific career paths will
              depend on the chosen specialization).
            </li>
            <li>
              Further education options include pursuing Master's degrees (MA)
              or specialized professional programs.
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

export default BaPage;
