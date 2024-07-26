
import React from 'react';

const examDates = [
  {
    "Dates": "Jan '25",
    "Upcoming Exam Dates": "JEE Mains 2025 registration",
    "Status": "TENTATIVE"
  },
  {
    "Dates": "Mar '25",
    "Upcoming Exam Dates": "JEE Mains 2025 admit card download",
    "Status": "TENTATIVE"
  },
  {
    "Dates": "May '25",
    "Upcoming Exam Dates": "JEE Mains 2025 exam",
    "Status": "TENTATIVE"
  },
  {
    "Dates": "Jun '25",
    "Upcoming Exam Dates": "JEE Mains 2025 result announcement",
    "Status": "TENTATIVE"
  }
];

const syllabusData = [
  {
    section: "Physics",
    topics: ["Mechanics", "Electrodynamics", "Thermodynamics", "Optics", "Modern Physics"]
  },
  {
    section: "Chemistry",
    topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"]
  },
  {
    section: "Mathematics",
    topics: ["Algebra", "Trigonometry", "Calculus", "Coordinate Geometry", "Statistics"]
  }
];

const examPatternData = [
  {
    section: "Physics",
    MCQs: 20,
    "Type in the answer": 5,
    TITA: 5,
    "maximum marks": 100
  },
  {
    section: "Chemistry",
    MCQs: 20,
    "Type in the answer": 5,
    TITA: 5,
    "maximum marks": 100
  },
  {
    section: "Mathematics",
    MCQs: 30,
    "Type in the answer": 10,
    TITA: 5,
    "maximum marks": 100
  },
  {
    section: "Total",
    MCQs: 70,
    "Type in the answer": 20,
    TITA: 15,
    "maximum marks": 300
  }
];

const government = [
  {
    "name": "Indian Institute of Technology, Bombay",
    "nirfRanking": 1,
    "location": "Mumbai, Maharashtra",
    "fees": "₹2,00,000 (approx.)"
  },
  {
    "name": "Indian Institute of Technology, Delhi",
    "nirfRanking": 2,
    "location": "Delhi",
    "fees": "₹1,80,000 (approx.)"
  },
  {
    "name": "Indian Institute of Technology, Madras",
    "nirfRanking": 3,
    "location": "Chennai, Tamil Nadu",
    "fees": "₹2,20,000 (approx.)"
  },
  {
    "name": "Indian Institute of Technology, Kharagpur",
    "nirfRanking": 4,
    "location": "Kharagpur, West Bengal",
    "fees": "₹1,90,000 (approx.)"
  },
  {
    "name": "Indian Institute of Technology, Kanpur",
    "nirfRanking": 5,
    "location": "Kanpur, Uttar Pradesh",
    "fees": "₹1,70,000 (approx.)"
  },
  {
    "name": "Indian Institute of Technology, Roorkee",
    "nirfRanking": 6,
    "location": "Roorkee, Uttarakhand",
    "fees": "₹2,00,000 (approx.)"
  },
  {
    "name": "Indian Institute of Technology, Guwahati",
    "nirfRanking": 7,
    "location": "Guwahati, Assam",
    "fees": "₹1,80,000 (approx.)"
  },
  {
    "name": "Indian Institute of Technology, Hyderabad",
    "nirfRanking": 8,
    "location": "Hyderabad, Telangana",
    "fees": "₹2,20,000 (approx.)"
  },
  {
    "name": "Indian Institute of Technology, Indore",
    "nirfRanking": 9,
    "location": "Indore, Madhya Pradesh",
    "fees": "₹1,90,000 (approx.)"
  },
  {
    "name": "Indian Institute of Technology, Gandhinagar",
    "nirfRanking": 10,
    "location": "Gandhinagar, Gujarat",
    "fees": "₹1,70,000 (approx.)"
  }
];
const privatecollege= [
    {
      "name": "Birla Institute of Technology and Science (BITS Pilani)",
      "ranking": 30,
      "location": "Pilani, Rajasthan",
      "fees": "Rs. 4,23,000 per annum"
    },
    {
      "name": "Vellore Institute of Technology (VIT)",
      "ranking": 15,
      "location": "Vellore, Tamil Nadu",
      "fees": "Rs. 1,95,000 per annum"
    },
    {
      "name": "SRM Institute of Science and Technology",
      "ranking": 41,
      "location": "Chennai, Tamil Nadu",
      "fees": "Rs. 2,50,000 per annum"
    },
    {
      "name": "Manipal Institute of Technology",
      "ranking": 45,
      "location": "Manipal, Karnataka",
      "fees": "Rs. 4,00,000 per annum"
    },
    {
      "name": "Amity University",
      "ranking": null,
      "location": "Noida, Uttar Pradesh",
      "fees": "Rs. 2,85,000 per annum"
    }
  ]
  
const JeeExam = () => {
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

      <div id="details" className="flex flex-col ml-6">
        <section id="exam-details" className="exam-details-section">
          <h2 className="section-title">JEE Mains Exam Details</h2>
          <p className="section-content">
            The Joint Entrance Examination (JEE) Mains is a national-level entrance exam for undergraduate engineering programs in India.
          </p>
        </section>

        <section id="eligibility" className="eligibility-section">
          <h2 className="section-title">Eligibility Criteria</h2>
          <p className="section-content">
            Eligibility criteria for JEE Mains include:
            <ul>
              <li>Candidates must have passed the 10+2 examination or equivalent.</li>
              <li>There is no age limit for JEE Mains.</li>
              <li>Candidates can attempt JEE Mains a maximum of three times.</li>
            </ul>
          </p>
        </section>

        <section id="exam-dates" className="exam-dates-section">
          <h2 className="section-title">Upcoming JEE Mains 2025 Exam Dates</h2>
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
            JEE Mains Exam Syllabus:
          </p>
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
  <h2 className="section-title">How to Prepare for JEE Mains Exam</h2>
  <p className="section-content">
    Preparation tips for JEE Mains:
    <ul>
      <li>Understand the JEE Mains syllabus and exam pattern.</li>
      <li>Practice previous years' question papers and mock tests.</li>
      <li>Focus on Physics, Chemistry, and Mathematics.</li>
      <li>Take coaching classes or use recommended study materials.</li>
      <li>Time management is crucial; practice solving problems under timed conditions.</li>
      <li>Stay updated with current exam trends and changes in syllabus.</li>
      <li>Revise regularly and solve sample papers to improve speed and accuracy.</li>
      <li>Stay calm and confident during the exam; manage stress effectively.</li>
    </ul>
    <a href="/pdf/JEE-Mains-Previous-Year-Papers.pdf" download>Download JEE Mains Previous Year Papers</a>
  </p>
</section>

<section id="registration-process" className="registration-process-section">
  <h2 className="section-title">Registration Process for JEE Mains Exam</h2>
  <p className="section-content">
    To register for JEE Mains:
    <ol>
      <li>Visit the official JEE Mains website.</li>
      <li>Fill out the registration form with accurate details.</li>
      <li>Upload required documents such as photograph and signature.</li>
      <li>Pay the application fee online through prescribed modes.</li>
      <li>Choose preferred exam centers and exam date slots.</li>
      <li>Submit the form and save the confirmation page.</li>
      <li>Check for any updates or corrections through the application correction window.</li>
    </ol>
  </p>
</section>

<section id="documents-required" className="documents-required-section">
  <h2 className="section-title">Documents Required for JEE Mains Exam</h2>
  <p className="section-content">
    Documents needed for JEE Mains registration:
    <ul>
      <li>Passport-sized photograph and signature in prescribed formats.</li>
      <li>Valid ID proof (Aadhar card, passport, etc.).</li>
      <li>Class 10th and 12th mark sheets or equivalent.</li>
      <li>Category certificate (if applicable) for reserved category candidates.</li>
      <li>Proof of fee payment (receipt or transaction details).</li>
    </ul>
  </p>
</section>
</div>
</div>
  );
};
export default JeeExam;