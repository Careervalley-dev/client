import React from "react";
import { Link } from "react-router-dom";
import { GrWorkshop } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { TypeAnimation } from "react-type-animation";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import {
  FaGavel,
  // FaShield,
  FaBalanceScale,
  FaBuilding,
  FaGlobe,
  FaHandshake,
} from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";

const examData = [
  {
    exam: "CLAT (Common Law Admission Test)",
    siteUrl: "https://consortiumofnlus.ac.in/clat-2024/",
    examDates: [{ session: "", dates: "TBD" }],
  },
  {
    exam: "LSAT India",
    siteUrl: "https://www.pearsonvueindia.com/lsat/",
    examDates: [{ session: "", dates: "TBD" }],
  },
  {
    exam: "AILET (All India Law Entrance Test)",
    siteUrl: "https://ailet.ac.in/",
    examDates: [{ session: "", dates: "TBD" }],
  },
  {
    exam: "BLAT (Bar Council Law Admission Test)",
    siteUrl: "https://barcouncilofindia.org/",
    examDates: [{ session: "", dates: "Varies by State" }],
  },
];

const government = [
  {
    name: "National Law School of India University (NLSIU)",
    location: "Bangalore, Karnataka",
    rank: 1,
    siteUrl: "https://www.nls.ac.in/",
  },
  {
    name: "National Law University Delhi (NLU Delhi)",
    location: "New Delhi, Delhi",
    rank: 2,
    siteUrl: "https://www.nludelhi.ac.in/",
  },
  {
    name: "National Law Institute University (NLIU) Bhopal",
    location: "Bhopal, Madhya Pradesh",
    rank: 3,
    siteUrl: "https://www.nliu.ac.in/",
  },
  {
    name: "Hidayatullah National Law University (HNLU)",
    location: "Raipur, Chhattisgarh",
    rank: 4,
    siteUrl: "[invalid URL removed]",
  },
  {
    name: "Gujarat National Law University (GNLU)",
    location: "Gandhinagar, Gujarat",
    rank: 5,
    siteUrl: "https://www.gnlu.ac.in/",
  },
];

const privateCollege = [
  {
    name: "Symbiosis Law School Pune",
    location: "Pune, Maharashtra",
    rank: 1,
    siteUrl: "https://m.symlaw.ac.in/",
  },
  {
    name: "Amity Law School Delhi",
    location: "New Delhi, Delhi",
    rank: 2,
    siteUrl: "https://www.amity.edu/als/",
  },
  {
    name: "Christ University School of Law Bangalore",
    location: "Bangalore, Karnataka",
    rank: 3,
    siteUrl: "https://law.christuniversity.in/",
  },
  {
    name: "Jindal Global Law School Sonipat",
    location: "Sonipat, Haryana",
    rank: 4,
    siteUrl: "https://jgu.edu.in/jgls/",
  },
  {
    name: "O.P. Jindal Global University Raigarh",
    location: "Raigarh, Chhattisgarh",
    rank: 5,
    siteUrl: "https://www.jgu.edu.in/",
  },
];

const featuredCollege = [
  {
    name: "Indian Institute of Technology Kharagpur (IIT Kharagpur)",
    location: "Kharagpur, West Bengal",
    rank: 1,
    siteUrl: "https://www.iitkgp.ac.in/",
    program: "B.Tech + LLB (Hons.)",
  },
  {
    name: "Azim Premji University Bangalore",
    location: "Bangalore, Karnataka",
    rank: 2,
    siteUrl: "https://azimpremjiuniversity.edu.in/",
    program: "BA + LLB (Hons.)",
  },
  {
    name: "Ashoka University Sonipat",
    location: "Sonipat, Haryana",
    rank: 3,
    siteUrl: "https://www.ashoka.edu.in/",
    program: "BA + LLB (Hons.)",
  },
  {
    name: "National Law School of India University (NLSIU)",
    location: "Bangalore, Karnataka",
    rank: 4,
    siteUrl: "https://www.nls.ac.in/",
    program: "LLB",
  },
  {
    name: "Indian Institute of Management Calcutta (IIM Calcutta)",
    location: "Kolkata, West Bengal",
    rank: 5,
    siteUrl: "https://www.iimcal.ac.in/",
    program: "BBA + LLB (Hons.)",
  },
];

const streams = [
  {
    name: "Corporate Law",
    icon: <FaBuilding className="text-4xl text-[#235950]" />,
  },
  {
    name: "Criminal Law",
    icon: <FaGavel className="text-4xl text-[#235950]" />,
  },
  {
    name: "Civil Law",
    icon: <FaBalanceScale className="text-4xl text-[#235950]" />,
  },
  { name: "Tax Law", icon: <FaGlobe className="text-4xl text-[#235950]" /> },
  {
    name: "Intellectual Property Law",
    icon: <FaShieldHalved className="text-4xl text-[#235950]" />,
  },
  {
    name: "Dispute Resolution",
    icon: <FaHandshake className="text-4xl text-[#235950]" />,
  },
];

const LlbPage = () => {
  // Bachelor of Legislative Law (L.L.B)
  return (
    <div className="btech-page-container">
      <div className="hero-section bg-gradient-to-b lg:bg-gradient-to-br from-[#426e66] via-[#093029] to-[#0f312c] text-white pt-64 lg:pt-40 pb-20 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <TypeAnimation
              sequence={["Bachelor of Legislative Law", 1000, "(L.L.B)", 1000]}
              speed={50}
              className="inline-block text-5xl font-bold drop-shadow-lg"
              wrapper="span"
              repeat={Infinity}
            />
            <br />
            <TypeAnimation
              sequence={[
                "Empowering Tomorrow's Legal Leaders with Integrity and Insight",
                2000,
                "Empowering Tomorrow's Legal Leaders with Integrity and Insight",
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
            {/* <img src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722095288/vecteezy_online-banking-or-digital-bank-concept-with-money-people-and_-removebg_butrp6.png" alt="B.Tech Illustration" className="rounded-lg" /> */}
            <img
              src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722202936/law-removebg-preview_tuodif.png"
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
              Bachelor of Legislative Law (LLB) is a three-year (or five-year
              integrated) undergraduate program.
            </li>
            <li>
              Focuses on the principles and practice of law, equipping students
              with the knowledge and skills needed to analyze legal issues,
              apply legal principles, and advocate for clients.
            </li>
            <li>
              Covers a wide range of subjects, including constitutional law,
              criminal law, contract law, property law, torts, civil procedure,
                and legal writing.
            </li>
            <li>
              Develops critical thinking, analytical reasoning, research,
              communication, and advocacy skills essential for a successful
              legal career.
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
              Most law colleges require a bachelor's degree (BA, BCom, BSc,
              etc.) in any discipline.
            </li>
            <li>
              Some colleges have a minimum percentage requirement for admission.
            </li>
            <li>
              Admission to many law schools is based on entrance exams like
              CLAT, LSAT, AILET, and state-level law entrance exams.
            </li>
            <li>
              For integrated LLB programs (BA LLB, BBA LLB, etc.), the
              eligibility criteria might differ, often requiring completion of
              10+2 with specific subjects and minimum marks.
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
              LLB graduates can pursue a variety of legal careers, including:
            </li>
            <ul class="pl-4 custom-list list-inside">
              <li>
                Litigation lawyer: Representing clients in court proceedings.
              </li>
              <li>Corporate lawyer: Advising companies on legal matters.</li>
              <li>Criminal lawyer: Representing clients accused of crimes.</li>
              <li>
                Family lawyer: Handling legal issues related to marriage,
                divorce, and child custody.
              </li>
              <li>
                Judge: Presiding over court proceedings and making legal
                decisions.
              </li>
            </ul>
            <li>
              Further education options include pursuing an LLM (Master of Laws)
              degree to specialize in a particular area of law.
            </li>
            <li>
              Some graduates may choose careers in related fields such as legal
              journalism, human rights advocacy, or government service.
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

export default LlbPage;
