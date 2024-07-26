
import React from 'react';
import { NavLink } from 'react-router-dom';

const examDates = [
    {
      "Dates": "Sep '24",
      "Upcoming Exam Dates": "GATE 2024 registration",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Nov '24",
      "Upcoming Exam Dates": "GATE 2024 admit card download",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Feb '25",
      "Upcoming Exam Dates": "GATE 2024 exam",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Mar '25",
      "Upcoming Exam Dates": "GATE 2024 result announcement",
      "Status": "TENTATIVE"
    }
  ];
  
  const syllabusData = [
    {
      section: "General Aptitude",
      topics: ["Verbal Ability", "Numerical Ability"]
    },
    {
      section: "Engineering Mathematics",
      topics: ["Linear Algebra", "Calculus", "Differential Equations", "Complex Variables"]
    },
    {
      section: "Technical Section",
      topics: ["Mechanical Engineering", "Electrical Engineering", "Computer Science"]
    }
  ];
  
  const examPatternData = [
    {
      section: "General Aptitude",
      MCQs: 10,
      "Type in the answer": 5,
      TITA: 5,
      "maximum marks": 100
    },
    {
      section: "Technical Section",
      MCQs: 55,
      "Type in the answer": 10,
      TITA: 5,
      "maximum marks": 100
    },
    {
      section: "Total",
      MCQs: 65,
      "Type in the answer": 15,
      TITA: 10,
      "maximum marks": 200
    }
  ];
  
  const government = [
    {
      "name": "IISc Bangalore",
      "nirfRanking": 1,
      "location": "Bangalore, Karnataka",
      "fees": "₹34,000 (approx.)"
    },
    {
      "name": "IIT Bombay",
      "nirfRanking": 3,
      "location": "Mumbai, Maharashtra",
      "fees": "₹42,000 (approx.)"
    },
    {
      "name": "IIT Delhi",
      "nirfRanking": 2,
      "location": "Delhi",
      "fees": "₹38,000 (approx.)"
    },
    {
      "name": "IIT Madras",
      "nirfRanking": 1,
      "location": "Chennai, Tamil Nadu",
      "fees": "₹40,000 (approx.)"
    },
    {
      "name": "IIT Kharagpur",
      "nirfRanking": 5,
      "location": "Kharagpur, West Bengal",
      "fees": "₹36,000 (approx.)"
    }
  ];
  
  const privatecollege = [
    {
      "name": "BITS Pilani",
      "nirfRanking": 25,
      "location": "Pilani, Rajasthan",
      "fees": "₹15,00,000 (approx.)"
    },
    {
      "name": "VIT Vellore",
      "nirfRanking": 15,
      "location": "Vellore, Tamil Nadu",
      "fees": "₹14,00,000 (approx.)"
    },
    {
      "name": "SRM Institute of Science and Technology",
      "nirfRanking": 35,
      "location": "Chennai, Tamil Nadu",
      "fees": "₹12,00,000 (approx.)"
    },
    {
      "name": "Amity University",
      "nirfRanking": "Not ranked",
      "location": "Noida, Uttar Pradesh",
      "fees": "₹18,00,000 (approx.)"
    },
    {
      "name": "Manipal Institute of Technology",
      "nirfRanking": 10,
      "location": "Manipal, Karnataka",
      "fees": "₹16,00,000 (approx.)"
    }
  ];
  
  const GateExam = () => {
    return (
      <div  className="btech-page-container mt-32">
          <nav className="navbar">
          <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#exam-details">Exam Details</a></li>
    <li className="nav-item"><a className="nav-link" href="#eligibility">Eligibility</a></li>
    <li className="nav-item"><a className="nav-link" href="#exam-dates">Exam Dates</a></li>
    <li className="nav-item"><a className="nav-link" href="#syllabus">Syllabus</a></li>
    <li className="nav-item"><a className="nav-link" href="#exam-pattern">Exam Pattern</a></li>
    <li className="nav-item"><a className="nav-link" href="#top-colleges">Top Colleges</a></li>
    <li className="nav-item"><a className="nav-link" href="#how-to-prepare">How to Prepare</a></li>
    <li className="nav-item"><a className="nav-link" href="#registration-process">Registration Process</a></li>
    <li className="nav-item"><a className="nav-link" href="#documents-required">Documents Required</a></li>
  </ul>
        </nav>
      


      <div id="details" className="flex flex-col ml-10">
        <section id="exam-details" className="exam-details-section">
          <h2 className="section-title">GATE Exam 2024 Details</h2>
          <p className="section-content">
            The Graduate Aptitude Test in Engineering (GATE) is a national-level examination conducted for admission to postgraduate programs like M.Tech and PhD in Indian higher education institutes. It is also used by several PSUs (Public Sector Undertakings) for recruitment purposes. GATE 2024 will be conducted by IITs and IISc.
          </p>
        </section>

        <section id="eligibility" className="eligibility-section">
          <h2 className="section-title">Eligibility Criteria</h2>
          <p className="section-content">
            The eligibility criteria for GATE 2024 are as follows:
            <ul>
              <li>Candidates must have a bachelor's degree in Engineering/Technology/Architecture or equivalent.</li>
              <li>Final year students or graduates can apply.</li>
              <li>There is no age limit to apply for the GATE exam.</li>
            </ul>
          </p>
        </section>

     
        <section id="exam-dates" className="exam-dates-section">
        <h2 className="section-title">Upcoming CAT 2024 Exam Dates</h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Dates</th>
              <th scope="col" className="px-6 py-3">Upcoming Exam Dates</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {examDates.map((exam, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${index === 0 ? '' : 'border-t border-gray-200 dark:border-gray-700'}`}>
                <td className="px-6 py-4">{exam.Dates}</td>
                <td className="px-6 py-4">{exam['Upcoming Exam Dates']}</td>
                <td className="px-6 py-4">{exam.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </section>

        <section id="syllabus" className="syllabus-section">
          <h2 className="section-title">Syllabus</h2>
          <p className="section-content">
            GATE Exam Syllabus<br />
<b>Main Topics in GATE 2024 </b>         </p>
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">Section</th>
          <th scope="col" className="px-6 py-3">Topics</th>
        </tr>
      </thead>
      <tbody>
      {syllabusData.map((section, index) => (
  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${index === 0 ? '' : 'border-t border-gray-200 dark:border-gray-700'}`}>
    <td className="px-6 py-4">{section.section}</td>
    <td className="px-6 py-4">
      <ul>
        {section.topics.map((topic, i) => (
          <li key={i}>{topic}</li>
        ))}
      </ul>
    </td>
  </tr>
))}

      </tbody>
    </table>
        </section>
        <section id="exam-pattern" className="exam-pattern-section">
          <h2 className="section-title">Syllabus</h2>
         
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">Section</th>
          <th scope="col" className="px-6 py-3">MCQs</th>
          <th scope="col" className="px-6 py-3">Type in the answer</th>
          <th scope="col" className="px-6 py-3">TITA</th>
          <th scope="col" className="px-6 py-3">Maximum Marks</th>
        </tr>
      </thead>
      <tbody>
  {examPatternData.map((section, index) => (
    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${index === examPatternData.length - 1 ? 'border-t border-gray-200 dark:border-gray-700' : ''}`}>
      <td className="px-6 py-4">{section.section}</td>
      <td className="px-6 py-4">{section.MCQs}</td>
      <td className="px-6 py-4">{section['Type in the answer']}</td>
      <td className="px-6 py-4">{section.TITA}</td>
      <td className="px-6 py-4">{section['maximum marks']}</td>
    </tr>
  ))}
</tbody>

    </table>
        </section>
        <section id="top-colleges" className="top-colleges-section">
          <h2 className="section-title">Top Colleges</h2>
          <h3 className="section-sub-title"><b>Government Colleges</b></h3>
          <div className="relative overflow-x-auto ">
            <table id="government" className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    College Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                   NIRF Ranking
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fees
                  </th>
                </tr>
              </thead>
              <tbody>
          {government.map((college, index) => (
            <tr key={index}>
              <td>{college.name}</td>
              <td>{college.nirfRanking !== "Not ranked" ? college.nirfRanking : "N/A"}</td>
              <td>{college.location}</td>
              <td>{college.fees}</td>
            </tr>
          ))}
        </tbody>
             
            </table>
            </div>
            <h3 className="section-sub-title"><b>Private Colleges</b></h3>
          <div className="relative overflow-x-auto ">
            <table id="privatecolleges" className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-green-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    College Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                   NIRF Ranking
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fees
                  </th>
                </tr>
              </thead>
              <tbody>
          {privatecollege.map((college, index) => (
            <tr key={index}>
              <td>{college.name}</td>
              <td>{college.nirfRanking !== "Not ranked" ? college.nirfRanking : "N/A"}</td>
              <td>{college.location}</td>
              <td>{college.fees}</td>
            </tr>
          ))}
        </tbody>
             
            </table>
             
           
          </div>
        </section>
        <section id="how-to-prepare" className="how-to-prepare-section">
          <h2 className="section-title">How to Prepare for GATE Exam 2024</h2>
          <p className="section-content">
            Preparation for GATE requires systematic study and understanding of concepts. Here are some tips:
            <ul>
              <li>Understand the GATE syllabus thoroughly.</li>
              <li>Practice previous year question papers and mock tests.</li>
              <li>Focus on weak areas and time management.</li>
              <li>Refer to standard textbooks and study materials.</li>
            </ul>
            <a href="/pdf/GATE-2023-Previous-Year-Papers.pdf" download>Download GATE 2023 Previous Year Papers</a>
          </p>
        </section>

        <section id="registration-process" className="registration-process-section">
          <h2 className="section-title">Registration Process for GATE Exam 2024</h2>
          <p className="section-content">
            To register for GATE 2024, follow these steps:
            <ol>
              <li>Visit the official GATE website.</li>
              <li>Fill out the registration form with personal details.</li>
              <li>Upload required documents like photograph, signature, and academic certificates.</li>
              <li>Pay the application fee through online mode.</li>
              <li>Submit the form and take a printout of the confirmation page.</li>
            </ol>
          </p>
        </section>

        <section id="documents-required" className="documents-required-section">
          <h2 className="section-title">Documents Required for GATE Exam 2024</h2>
          <p className="section-content">
            Documents needed for GATE 2024 registration include:
            <ul>
              <li>Photograph and signature in prescribed format.</li>
              <li>Valid photo identity proof (Aadhar card, passport, PAN card, etc.).</li>
              <li>Final year mark sheet (if applicable).</li>
              <li>Category certificate (if applicable).</li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};

export default GateExam;