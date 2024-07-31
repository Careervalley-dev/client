import React from 'react';
import { Link } from 'react-router-dom';
import { GrWorkshop } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaLaptopCode, FaCogs, FaProjectDiagram, FaMicrochip, FaTools, FaBroadcastTower, FaBriefcase } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const examData = [
  { exam: "JEE Main", siteUrl: "https://jeemain.nta.nic.in/", examDates: [{ session: "", dates: "24 Jan '24 - 1 Feb '24" }] },
  { exam: "JEE Advanced", siteUrl: "https://jeeadv.ac.in/", examDates: [{ session: "", dates: "2 Jun '24" }] },
  { exam: "BITSAT", siteUrl: "https://www.bitsadmission.com/", examDates: [{ session: "", dates: "Tentative Date: May '24" }] },
  { exam: "VITEEE", siteUrl: "https://www.vit.ac.in/viteee", examDates: [{ session: "", dates: "Tentative Date: Apr '24" }] },
  { exam: "SRMJEEE", siteUrl: "https://www.srmuniv.ac.in/", examDates: [{ session: "", dates: "Tentative Date: Apr '24" }] },
  { exam: "AMUEEE", siteUrl: "https://www.amu.ac.in/", examDates: [{ session: "", dates: "Tentative Date: May '24" }] },
];

const government = [
  { name: "Indian Institute of Technology Bombay (IIT Bombay)", location: "Mumbai, Maharashtra", rank: 1, siteUrl: "https://www.iitb.ac.in/" },
  { name: "Indian Institute of Technology Delhi (IIT Delhi)", location: "New Delhi, Delhi", rank: 2, siteUrl: "https://home.iitd.ac.in/" },
  { name: "Indian Institute of Technology Kanpur (IIT Kanpur)", location: "Kanpur, Uttar Pradesh", rank: 3, siteUrl: "https://www.iitk.ac.in/" },
  { name: "Indian Institute of Technology Madras (IIT Madras)", location: "Chennai, Tamil Nadu", rank: 4, siteUrl: "https://www.iitm.ac.in/" },
  { name: "Indian Institute of Science (IISc)", location: "Bangalore, Karnataka", rank: 5, siteUrl: "https://iisc.ac.in/" }
];

const privateCollege = [
  { name: "Birla Institute of Technology and Science (BITS Pilani)", location: "Pilani, Rajasthan", rank: 1, siteUrl: "https://www.bits-pilani.ac.in/" },
  { name: "Vellore Institute of Technology (VIT Vellore)", location: "Vellore, Tamil Nadu", rank: 2, siteUrl: "https://vit.ac.in/" },
  { name: "Thapar Institute of Engineering and Technology", location: "Patiala, Punjab", rank: 3, siteUrl: "https://www.thapar.edu/" },
  { name: "SRM Institute of Science and Technology (SRMIST)", location: "Chennai, Tamil Nadu", rank: 4, siteUrl: "https://www.srmist.edu.in/" },
  { name: "Amrita Vishwa Vidyapeetham", location: "Coimbatore, Tamil Nadu", rank: 5, siteUrl: "https://www.amrita.edu/" }
];

const featuredCollege = [
  { name: "Indian Institute of Technology Hyderabad (IIT Hyderabad)", location: "Hyderabad, Telangana", rank: 1, siteUrl: "https://www.iith.ac.in/" },
  { name: "Indian Institute of Technology Guwahati (IIT Guwahati)", location: "Guwahati, Assam", rank: 2, siteUrl: "https://www.iitg.ac.in/" },
  { name: "National Institute of Technology Tiruchirappalli (NIT Trichy)", location: "Tiruchirappalli, Tamil Nadu", rank: 3, siteUrl: "https://www.nitt.edu/" }
];

const streams = [
  { name: "Computer Science and Engineering", icon: <FaLaptopCode className="text-4xl text-[#235950]" /> },
  { name: "Mechanical Engineering", icon: <FaCogs className="text-4xl text-[#235950]" /> },
  { name: "Civil Engineering", icon: <FaProjectDiagram className="text-4xl text-[#235950]" /> },
  { name: "Electronics and Communication Engineering", icon: <FaMicrochip className="text-4xl text-[#235950]" /> },
  { name: "Electrical Engineering", icon: <FaTools className="text-4xl text-[#235950]" /> },
  { name: "Telecommunications Engineering", icon: <FaBroadcastTower className="text-4xl text-[#235950]" /> }
];

const BtechPage = () => {
  return (
    <div className="btech-page-container">
      <div className="hero-section bg-gradient-to-b lg:bg-gradient-to-br from-[#426e66] via-[#093029] to-[#0f312c] text-white pt-64 lg:pt-40 pb-20 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <TypeAnimation
              sequence={[
                "Bachelor of Technology",
                1000,
                "(B.Tech)",
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
                "Empowering Future Innovators with Cutting-Edge Engineering Knowledge.",
                2000,
                "Empowering Future Innovators with Cutting-Edge Engineering Knowledge.",
              ]}
              speed={50}
              className="inline-block text-lg drop-shadow-lg mt-4"
              wrapper="span"
              repeat={Infinity}
            />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722202937/Tech_2-removebg-preview_sn6kb9.png" alt="B.Tech Illustration" className="rounded-lg floating w-[400px]" />
          </div>
        </div>
      </div>

      <main className="container mx-auto pb-12 pt-12 lg:pt-24 px-6">
        <section id="course-details" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#235950] flex items-center"><PiStudent className="mr-2"/> Course Details</h2>
          <ul className="custom-list list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
            <li>B.Tech (Bachelor of Technology) is a four-year undergraduate program.</li>
            <li>Focuses on core engineering principles and practical skills.</li>
            <li>Offers specializations in various engineering disciplines such as computer science, mechanical engineering, civil engineering, etc.</li>
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
          <h2 className="text-3xl font-bold mb-4 text-[#235950] flex items-center"><IoMdCheckmarkCircleOutline className="mr-2"/> Eligibility Criteria</h2>
          <ul className="custom-list list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
            <li>Completion of 10+2 education with a background in Mathematics, Physics, and Chemistry.</li>
            <li>Admission is typically based on entrance exams and academic performance.</li>
          </ul>
        </section>

        <section id="top-exams" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#235950] flex items-center"><TfiWrite className="mr-2"/> Top Exams</h2>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-gray-200 text-gray-600">
                <tr>
                  <th scope="col" className="px-6 py-3 text-[#235950]">Exam Name</th>
                  <th scope="col" className="px-6 py-3 text-[#235950]">Exam Dates</th>
                </tr>
              </thead>
              <tbody>
                {examData.map((exam, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-t border-gray-200`}>
                    <td className="px-6 py-4"><Link to={exam.siteUrl} className='hover:text-black text-[#235950]'>{exam.exam}</Link></td>
                    <td className="px-6 py-4">
                      <ul>
                        {exam.examDates.map((session, idx) => (
                          <li key={idx}>{session.session ? `${session.session}: ` : ''}{session.dates}</li>
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
            <li>Internships and on-campus recruitment opportunities are available for B.Tech students.</li>
            <li>Various companies visit campuses to hire graduates based on their skills and performance.</li>
          </ul>
        </section>

        <section id="top-colleges" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#235950] flex items-center"><LiaUniversitySolid className="mr-2"/> Top Colleges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#235950]">Government Colleges</h3>
              <div className="bg-white shadow-md rounded-lg p-6">
                {government.map((college, index) => (
                  <div key={index} className={`mb-4 ${index < government.length - 1 ? 'border-b border-gray-200 pb-4' : ''}`}>
                    <h4 className="text-lg font-bold"><Link to={college.siteUrl} className='hover:text-black text-[#235950]'>{college.name}</Link></h4>
                    <p>{college.location}</p>
                    <p>Rank: {college.rank}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#235950]">Private Colleges</h3>
              <div className="bg-white shadow-md rounded-lg p-6">
                {privateCollege.map((college, index) => (
                  <div key={index} className={`mb-4 ${index < privateCollege.length - 1 ? 'border-b border-gray-200 pb-4' : ''}`}>
                    <h4 className="text-lg font-bold"><Link to={college.siteUrl} className='hover:text-black text-[#235950]'>{college.name}</Link></h4>
                    <p>{college.location}</p>
                    <p>Rank: {college.rank}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#235950]">Featured Colleges</h3>
              <div className="bg-white shadow-md rounded-lg p-6">
                {featuredCollege.map((college, index) => (
                  <div key={index} className={`mb-4 ${index < featuredCollege.length - 1 ? 'border-b border-gray-200 pb-4' : ''}`}>
                    <h4 className="text-lg font-bold"><Link to={college.siteUrl} className='hover:text-black text-[#235950]'>{college.name}</Link></h4>
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

export default BtechPage;
