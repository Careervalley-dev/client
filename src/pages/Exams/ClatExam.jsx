
import React from 'react';
import { NavLink } from 'react-router-dom';

const examDates = [
    {
      "Dates": "Jan '25",
      "Upcoming Exam Dates": "CLAT 2025 registration",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Mar '25",
      "Upcoming Exam Dates": "CLAT 2025 admit card download",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "May '25",
      "Upcoming Exam Dates": "CLAT 2025 exam",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Jun '25",
      "Upcoming Exam Dates": "CLAT 2025 result announcement",
      "Status": "TENTATIVE"
    }
  ];
  
  const syllabusData = [
    {
      section: "English Language",
      topics: ["Reading Comprehension", "Grammar", "Vocabulary"]
    },
    {
      section: "General Knowledge and Current Affairs",
      topics: ["Static GK", "Current Events"]
    },
    {
      section: "Legal Aptitude",
      topics: ["Law of Torts", "Indian Constitution", "Legal Maxims"]
    },
    {
      section: "Logical Reasoning",
      topics: ["Logical Games", "Critical Reasoning"]
    },
    {
      section: "Quantitative Techniques",
      topics: ["Mathematics", "Data Interpretation"]
    }
  ];
  
  const examPatternData = [
    {
      section: "English Language",
      MCQs: 40,
      "Type in the answer": 10,
      TITA: 5,
      "maximum marks": 50
    },
    {
      section: "General Knowledge and Current Affairs",
      MCQs: 50,
      "Type in the answer": 0,
      TITA: 0,
      "maximum marks": 50
    },
    {
      section: "Legal Aptitude",
      MCQs: 50,
      "Type in the answer": 0,
      TITA: 0,
      "maximum marks": 50
    },
    {
      section: "Logical Reasoning",
      MCQs: 40,
      "Type in the answer": 10,
      TITA: 5,
      "maximum marks": 50
    },
    {
      section: "Quantitative Techniques",
      MCQs: 20,
      "Type in the answer": 5,
      TITA: 5,
      "maximum marks": 50
    },
    {
      section: "Total",
      MCQs: 200,
      "Type in the answer": 25,
      TITA: 10,
      "maximum marks": 250
    }
  ];
  const government = [
    {
      "name": "National Law School of India University, Bangalore",
      "nirfRanking": 1,
      "location": "Bangalore, Karnataka",
      "fees": "₹2,00,000 (approx.)"
    },
    {
      "name": "National Academy of Legal Studies and Research, Hyderabad",
      "nirfRanking": 2,
      "location": "Hyderabad, Telangana",
      "fees": "₹1,80,000 (approx.)"
    },
    {
      "name": "National Law University, Delhi",
      "nirfRanking": 3,
      "location": "New Delhi, Delhi",
      "fees": "₹2,20,000 (approx.)"
    },
    {
      "name": "NALSAR University of Law, Hyderabad",
      "nirfRanking": 4,
      "location": "Hyderabad, Telangana",
      "fees": "₹1,90,000 (approx.)"
    },
    {
      "name": "The West Bengal National University of Juridical Sciences, Kolkata",
      "nirfRanking": 5,
      "location": "Kolkata, West Bengal",
      "fees": "₹1,70,000 (approx.)"
    }
  ];
  
  const privatecollege = [
    {
      "name": "Jindal Global Law School, Sonipat",
      "nirfRanking": 1,
      "location": "Sonipat, Haryana",
      "fees": "₹15,00,000 (approx.)"
    },
    {
      "name": "Symbiosis Law School, Pune",
      "nirfRanking": 2,
      "location": "Pune, Maharashtra",
      "fees": "₹14,00,000 (approx.)"
    },
    {
      "name": "NMIMS School of Law, Mumbai",
      "nirfRanking": 3,
      "location": "Mumbai, Maharashtra",
      "fees": "₹12,00,000 (approx.)"
    },
    {
      "name": "KIIT School of Law, Bhubaneswar",
      "nirfRanking": 4,
      "location": "Bhubaneswar, Odisha",
      "fees": "₹18,00,000 (approx.)"
    },
    {
      "name": "Christ University, School of Law, Bangalore",
      "nirfRanking": 5,
      "location": "Bangalore, Karnataka",
      "fees": "₹16,00,000 (approx.)"
    }
  ];
  
  const ClatExam = () => {
    return (
      <div className="btech-page-container mt-32">
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
          <h2 className="section-title">CLAT Exam Details</h2>
          <p className="section-content">
            The Common Law Admission Test (CLAT) is a national-level entrance exam for admission to undergraduate and postgraduate law programs offered by participating National Law Universities (NLUs) in India.
          </p>
        </section>

        <section id="eligibility" className="eligibility-section">
          <h2 className="section-title">Eligibility Criteria</h2>
          <p className="section-content">
            Eligibility criteria for CLAT include:
            <ul>
              <li>Candidates must have passed the 10+2 examination or equivalent.</li>
              <li>There is no upper age limit for CLAT.</li>
            </ul>
          </p>
        </section>
     
        <section id="exam-dates" className="exam-dates-section">
        <h2 className="section-title">Upcoming CLAT 2024 Exam Dates</h2>
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
            CLATE Exam Syllabus<br />
<b>Main Topics in CLAT 2024 </b>         </p>
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
          <h2 className="section-title">How to Prepare for CLAT Exam</h2>
          <p className="section-content">
            Preparation tips for CLAT:
            <ul>
              <li>Understand the CLAT syllabus and exam pattern.</li>
              <li>Practice previous years' question papers and mock tests.</li>
              <li>Focus on legal reasoning, English language, logical reasoning, etc.</li>
              <li>Refer to recommended study materials and coaching if necessary.</li>
            </ul>
            <a href="/pdf/CLAT-Previous-Year-Papers.pdf" download>Download CLAT Previous Year Papers</a>
          </p>
        </section>

        <section id="registration-process" className="registration-process-section">
          <h2 className="section-title">Registration Process for CLAT Exam</h2>
          <p className="section-content">
            To register for CLAT:
            <ol>
              <li>Visit the official CLAT website.</li>
              <li>Fill out the registration form with accurate details.</li>
              <li>Upload required documents and photographs.</li>
              <li>Pay the application fee online.</li>
              <li>Submit the form and save the confirmation page.</li>
            </ol>
          </p>
        </section>

        <section id="documents-required" className="documents-required-section">
          <h2 className="section-title">Documents Required for CLAT Exam</h2>
          <p className="section-content">
            Documents needed for CLAT registration:
            <ul>
              <li>Passport-sized photograph and signature.</li>
              <li>Valid ID proof (Aadhar card, passport, etc.).</li>
              <li>Category certificate (if applicable).</li>
              <li>Class 10th and 12th mark sheets.</li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ClatExam;