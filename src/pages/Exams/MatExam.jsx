
import React from 'react';

const examDates = [
    {
      "Dates": "Feb '25",
      "Upcoming Exam Dates": "MAT 2025 registration",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Mar '25",
      "Upcoming Exam Dates": "MAT 2025 admit card download",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Apr '25",
      "Upcoming Exam Dates": "MAT 2025 paper-based test",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "May '25",
      "Upcoming Exam Dates": "MAT 2025 computer-based test",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Jun '25",
      "Upcoming Exam Dates": "MAT 2025 result announcement",
      "Status": "TENTATIVE"
    }
  ];
  
  const syllabusData = [
    {
      section: "Language Comprehension",
      topics: ["Reading Comprehension", "Verbal Ability"]
    },
    {
      section: "Mathematical Skills",
      topics: ["Geometry", "Arithmetic", "Algebra", "Data Interpretation"]
    },
    {
      section: "Data Analysis and Sufficiency",
      topics: ["Data Interpretation", "Data Sufficiency"]
    },
    {
      section: "Intelligence and Critical Reasoning",
      topics: ["Critical Reasoning", "Analytical Reasoning"]
    }
  ];
  
  const examPatternData = [
    {
      section: "Language Comprehension",
      MCQs: 40,
      "maximum marks": 160
    },
    {
      section: "Mathematical Skills",
      MCQs: 40,
      "maximum marks": 160
    },
    {
      section: "Data Analysis and Sufficiency",
      MCQs: 40,
      "maximum marks": 160
    },
    {
      section: "Intelligence and Critical Reasoning",
      MCQs: 40,
      "maximum marks": 160
    },
    {
      section: "Total",
      MCQs: 160,
      "maximum marks": 640
    }
  ];
  
  const government = [
    {
      "name": "Indian Institute of Management, Ahmedabad",
      "nirfRanking": 1,
      "location": "Ahmedabad, Gujarat",
      "fees": "₹23,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management, Bangalore",
      "nirfRanking": 2,
      "location": "Bangalore, Karnataka",
      "fees": "₹21,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management, Calcutta",
      "nirfRanking": 3,
      "location": "Kolkata, West Bengal",
      "fees": "₹21,50,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management, Lucknow",
      "nirfRanking": 4,
      "location": "Lucknow, Uttar Pradesh",
      "fees": "₹19,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management, Indore",
      "nirfRanking": 5,
      "location": "Indore, Madhya Pradesh",
      "fees": "₹16,00,000 (approx.)"
    }
  ];
  
  const privatecollege = [
    {
      "name": "Xavier Labour Relations Institute (XLRI)",
      "location": "Jamshedpur, Jharkhand",
      "fees": "Rs. 25,00,000 per annum",
      "nirfRanking": 11
    },
    {
      "name": "Management Development Institute (MDI)",
      "location": "Gurgaon, Haryana",
      "fees": "Rs. 21,00,000 per annum",
      "nirfRanking": 10
    },
    {
      "name": "SP Jain Institute of Management and Research (SPJIMR)",
      "location": "Mumbai, Maharashtra",
      "fees": "Rs. 17,50,000 per annum",
      "nirfRanking": 18
    },
    {
      "name": "Narsee Monjee Institute of Management Studies (NMIMS)",
      "location": "Mumbai, Maharashtra",
      "fees": "Rs. 19,00,000 per annum",
      "nirfRanking": 24
    },
    {
      "name": "Symbiosis Institute of Business Management (SIBM)",
      "location": "Pune, Maharashtra",
      "fees": "Rs. 20,00,000 per annum",
      "nirfRanking": 20
    }
  ];
  
  

const MatExam = () => {
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
          <h2 className="section-title">MAT Exam Details</h2>
          <p className="section-content">
          The Management Aptitude Test (MAT) is a standardized test conducted by the All India Management Association (AIMA). It is used for admission to various MBA and allied programs offered by B-schools across India. MAT is held multiple times a year, typically in February, May, September, and December, allowing candidates flexibility in choosing their exam date. Here are key details about the MAT exam:          </p>
        <br/>  Scoring: Each section in MAT is scored on a scale of 0-100. The overall score ranges from 199 to 801.<br/>Duration: The exam duration is 150 minutes (2.5 hours).<br/>Mode of Examination: Candidates can choose to take MAT either online (CBT) or offline (PBT), depending on their preference and availability of test centers.<br/>Validity: MAT scores are valid for one year from the date of the exam. </section>

        <section id="eligibility" className="eligibility-section">
          <h2 className="section-title">Eligibility Criteria</h2>
          <p className="section-content">
          To appear for the MAT exam, candidates must meet the following eligibility criteria:<br/>Educational Qualification: Applicants must have completed a Bachelor’s degree in any discipline from a recognized university or equivalent.<br/>No Age Limit: There is no age restriction for candidates applying for MAT.
          </p>
        </section>

        <section id="exam-dates" className="exam-dates-section">
          <h2 className="section-title">Upcoming MAT Exam Dates</h2>
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
            MAT Exam Syllabus:
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
          
          
          <th scope="col" className="px-6 py-3">Maximum Marks</th>
        </tr>
      </thead>
      <tbody>
  {examPatternData.map((section, index) => (
    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} ${index === examPatternData.length - 1 ? 'border-t border-gray-200 dark:border-gray-700' : ''}`}>
      <td className="px-6 py-4">{section.section}</td>
      <td className="px-6 py-4">{section.MCQs}</td>
      
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
  <h2 className="section-title">How to Prepare for MAT Exam</h2>
  <p className="section-content">
  Preparing for the MAT exam requires a strategic approach and thorough understanding of the exam pattern and syllabus. Here are effective preparation tips:<br/>Understand the Syllabus: Familiarize yourself with the MAT syllabus which includes topics from various subjects like Language Comprehension, Mathematics, Data Analysis, Critical Reasoning, and General Awareness.<br/>Create a Study Plan: Develop a structured study plan that allocates sufficient time to cover each section thoroughly.Practice Previous Papers: Solve previous years' MAT question papers and sample papers to understand the exam pattern and types of questions asked.<br/>Mock Tests: Take regular mock tests to assess your preparation level and improve time management skills.<br/>Focus on Strengths and Weaknesses: Identify your strengths and weaknesses in each section and focus more on improving weaker areas.Study Material: Refer to standard study materials recommended by coaching institutes or reliable sources to enhance your preparation.<br/>Time Management: Practice solving questions within the stipulated time to improve speed and accuracy.<br/>Revision Strategy: Regularly revise important topics and formulas to retain information effectively.Stay Updated: Stay updated with current affairs and general knowledge as it helps in the Indian and Global Environment section.Healthy Lifestyle: Maintain a healthy lifestyle with proper diet, sleep, and exercise to stay mentally and physically fit during the preparation period.
    <a href="/pdf/JEE-Mains-Previous-Year-Papers.pdf" download>Download MAT Previous Year Papers</a>
  </p>
</section>

<section id="registration-process" className="registration-process-section">
  <h2 className="section-title">Registration Process for MAT Exam</h2>
  <p className="section-content">
  The registration process for MAT is straightforward and can be completed online. Here’s a step-by-step guide:<br/>Visit Official Website: Go to the AIMA MAT official website (www.aima.in/mat).<br/>Fill Application Form: Fill in the MAT application form with accurate details such as personal information, educational qualifications, and preferred exam mode (PBT/CBT).<br/>Upload Documents: Upload scanned copies of your photograph and signature as per the specified format and size.<br/>Payment of Fees: Pay the MAT registration fee online using a debit card, credit card, or net banking.<br/>Submit Application: After completing the form and fee payment, submit the application online.<br/>Download Confirmation: Download and print the MAT application confirmation for future reference.  </p>
</section>

<section id="documents-required" className="documents-required-section">
  <h2 className="section-title">Documents Required for MAT Exam</h2>
  <p className="section-content">
  Documents Required for MAT ExamDuring MAT registration, candidates need to upload the following documents:<br/>Photograph: Recent passport-sized photograph in JPEG/JPG format with a maximum file size of 100 KB.<br/>Signature: Scanned signature in JPEG/JPG format with a maximum file size of 40 KB.<br/>Educational Qualification Certificates: Copies of Bachelor’s degree mark sheets and certificate.<br/>Category Certificate: If applying under any reserved category, provide a valid category certificate (if applicable).<br/>Identification Proof: Any government-issued ID proof such as Aadhar card, passport, PAN card, or driving license.

  </p>
</section>
</div>
</div>
  );
};
export default MatExam;