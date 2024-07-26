
import React from 'react';
import { NavLink } from 'react-router-dom';


const examDates = [
    {
      "Dates": "Aug '24 - Sep '24",
      "Upcoming Exam Dates": "CAT 2024 registration",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Sep '24",
      "Upcoming Exam Dates": "CAT 2024 form correction process",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Oct '24 - Nov '24",
      "Upcoming Exam Dates": "CAT 2024 admit card download",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Nov '24",
      "Upcoming Exam Dates": "CAT 2024 exam",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Dec '24",
      "Upcoming Exam Dates": "CAT 2024 answer key challenge",
      "Status": "TENTATIVE"
    },
    {
      "Dates": "Dec '24",
      "Upcoming Exam Dates": "CAT 2024 result announcement",
      "Status": "TENTATIVE"
    }
  ]
  const syllabusData = [
      {
        section: "Quantitative Ability (QA)",
        topics: ["Geometry", "Number System", "Modern Math", "Arithmetic", "Mensuration", "Algebra"]
      },
      {
        section: "Data Interpretations & Logical Reasoning",
        topics: ["Team Formation", "Seating Arrangement", "Clocks and Calendars", "Venn Diagrams", "Bar Graphs"]
      },
      {
        section: "Verbal Ability & Reading Comprehension",
        topics: ["Para-jumbles", "Para-Summary", "Long & Short Passages"]
      }
    ]
  
  const government= [
    {
      "name": "Indian Institute of Management Ahmedabad",
      "nirfRanking": 1,
      "location": "Ahmedabad, Gujarat",
      "fees": "₹23,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Calcutta",
      "nirfRanking": 3,
      "location": "Kolkata, West Bengal",
      "fees": "₹27,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Bangalore",
      "nirfRanking": 2,
      "location": "Bangalore, Karnataka",
      "fees": "₹23,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Lucknow",
      "nirfRanking": 4,
      "location": "Lucknow, Uttar Pradesh",
      "fees": "₹19,25,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Indore",
      "nirfRanking": 6,
      "location": "Indore, Madhya Pradesh",
      "fees": "₹16,50,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Kozhikode",
      "nirfRanking": 8,
      "location": "Kozhikode, Kerala",
      "fees": "₹19,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Shillong",
      "nirfRanking": "Not ranked",
      "location": "Shillong, Meghalaya",
      "fees": "₹13,50,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Rohtak",
      "nirfRanking": 11,
      "location": "Rohtak, Haryana",
      "fees": "₹14,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Udaipur",
      "nirfRanking": 13,
      "location": "Udaipur, Rajasthan",
      "fees": "₹15,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Ranchi",
      "nirfRanking": 20,
      "location": "Ranchi, Jharkhand",
      "fees": "₹15,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Raipur",
      "nirfRanking": 19,
      "location": "Raipur, Chhattisgarh",
      "fees": "₹14,75,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Kashipur",
      "nirfRanking": 25,
      "location": "Kashipur, Uttarakhand",
      "fees": "₹13,75,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Tiruchirappalli",
      "nirfRanking": 15,
      "location": "Tiruchirappalli, Tamil Nadu",
      "fees": "₹16,50,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Visakhapatnam",
      "nirfRanking": "Not ranked",
      "location": "Visakhapatnam, Andhra Pradesh",
      "fees": "₹14,50,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Amritsar",
      "nirfRanking": "Not ranked",
      "location": "Amritsar, Punjab",
      "fees": "₹13,75,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Nagpur",
      "nirfRanking": "Not ranked",
      "location": "Nagpur, Maharashtra",
      "fees": "₹12,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Bodh Gaya",
      "nirfRanking": "Not ranked",
      "location": "Bodh Gaya, Bihar",
      "fees": "₹13,60,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Sirmaur",
      "nirfRanking": "Not ranked",
      "location": "Sirmaur, Himachal Pradesh",
      "fees": "₹12,50,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Sambalpur",
      "nirfRanking": "Not ranked",
      "location": "Sambalpur, Odisha",
      "fees": "₹13,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Management Jammu",
      "nirfRanking": "Not ranked",
      "location": "Jammu, Jammu and Kashmir",
      "fees": "₹13,80,000 (approx.)"
    }
  ]
  const privatecollege= [
    {
      "name": "Xavier Labour Relations Institute (XLRI)",
      "nirfRanking": "Not ranked",
      "location": "Jamshedpur",
      "fees": "₹20,00,000 (approx.)"
    },
    {
      "name": "Indian Institute of Foreign Trade (IIFT)",
      "nirfRanking": 26,
      "location": "Delhi",
      "fees": "₹16,70,000 (approx.)"
    },
    {
      "name": "Management Development Institute (MDI)",
      "nirfRanking": 10,
      "location": "Gurgaon",
      "fees": "₹21,34,000 (approx.)"
    },
    {
      "name": "SPJIMR",
      "nirfRanking": "Not ranked",
      "location": "Mumbai",
      "fees": "₹17,50,000 (approx.)"
    },
    {
      "name": "FMS",
      "nirfRanking": 7,
      "location": "Delhi",
      "fees": "₹25,000 (approx.)"
    },
    {
      "name": "IMI",
      "nirfRanking": "Not ranked",
      "location": "Delhi",
      "fees": "₹18,34,000 (approx.)"
    },
    {
      "name": "NITIE",
      "nirfRanking": 12,
      "location": "Mumbai",
      "fees": "₹12,36,000 (approx.)"
    },
    {
      "name": "TISS",
      "nirfRanking": 35,
      "location": "Mumbai",
      "fees": "₹1,23,600 (approx.)"
    }
  ]
  const examPatternData =  [
      {
        section: "Verbal Ability and Reading Comprehension",
        MCQs: 24,
        "Type in the answer": 21,
        TITA: 3,
        "maximum marks": 72
      },
      {
        section: "Data Interpretation and Logical Reasoning",
        MCQs: 20,
        "Type in the answer": 21,
        TITA: 6,
        "maximum marks": 60
      },
      {
        section: "Quantitative Aptitude",
        MCQs: 22,
        "Type in the answer": 14,
        TITA: 8,
        "maximum marks": 66
      },
      {
        section: "Total",
        MCQs: 66,
        "Type in the answer": 49,
        TITA: 17,
        "maximum marks": 198
      }
    ]
 
  const CatExam = () => {
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
  <div id="detail" className="flex flex-col ml-10">
  <section id="exam-details" className="exam-details-section">
  <h2 className="section-title">CAT Exam 2024 Details</h2>
  <p className="section-content">
    Common Admission Test or CAT is a national level management aptitude test which is conducted by the IIM for admission to the MBA courses offered by its 21 campuses and over 1,200 B-schools in India. NITIE Mumbai has been added to the cluster as IIM Mumbai. Over two lakh candidates apply for the CAT exam every year. In CAT 2023, the registration set a new record with 3.30 lakh applications. CAT exam is conducted on a single day in three sessions at about 400 test centres in 155 cities across India. Those planning to pursue MBA in the 2024 academic session must appear for CAT 2024 exam as its score is accepted by most of the government as well as private MBA colleges in India. The CAT exam is a business aptitude test and its syllabus comprises these subjects - Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR) and Quantitative Ability (QA). Difficulty level of the exam is moderate to high.
  </p>
</section>
  
        <section id="eligibility" className="eligibility-section">
          <h2 className="section-title">Eligibility Criteria</h2>
          <p className="section-content">
          The minimum eligibility criteria to appear in CAT exam is graduation in any stream. Read below detailed CAT eligibility criteria:

          <br />*Candidates must possess a bachelor's degree with minimum 50 per cent aggregate or equivalent CGPA (45 per cent aggregate for SC, ST and PWD/DA category) from a recognised university to appear in CAT 2024.
<br />*The education mode of the bachelor's degree can be regular or distance learning, but should be a 3-year programme.
<br />*Candidates who have completed a professional degree (CA/CS/ICWA/FCAI) with the required percentage can also appear for CAT.
<br />*Candidates appearing for the final year of bachelor's degree/equivalent qualification or awaiting the result are also eligible to appear for CAT 2024 exam.        </p> 
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
          Syllabus of CAT
CAT Exam Syllabus  consists of three parts. In all three parts, questions come from topics related to Quantitative Aptitude, Logical Reasoning and Data Interpretation, Verbal Ability and Reading Comprehension. The questions include multiple choice (MCQ) and long answer type, but to prepare for any exam, it is important to have a proper understanding of the syllabus, which is given here.
<b>CAT Syllabus – Sectional Division	Main Topics in CAT 2024 </b>         </p>
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
  <h2 className="section-title">How to Prepare</h2>
  <p className="section-content">
These are some previous year mock paper's to prepare.   <br />
<a href="/pdf/Cat-2023.pdf" download>Download CAT 2023 Previous Year Papers</a>
  </p>
</section>
<section id="registration-process" className="registration-process-section">
  <h2 className="section-title">How to register for CAT Exam 2024 </h2>
  <p className="section-content">
  To appear in the CAT exam, one has to register online . You can follow the steps given below to register online-

  <br />
Step 1: To register for the CAT exam, you will have to open the official website of the CAT Exam.
<br />
Step 2:  After opening the official website, you will have to click on the Register button. After clicking on the Register button, the registration form will open.
<br />
Step 3: You have to fill this registration form with full attention. All necessary documents have to be uploaded.
<br />
Step 4: After filling all the information in the form, please check it once.
<br />
Step 5: After this pay the registration fee. You can pay the registration fee through net banking/credit card/debit card/UPI etc.
<br />
Step 6: After this click on the Submit button. In this way your registration to take the CAT exam will be completed. </p>
</section>
<section id="documents-required" className="documents-required-section">
  <h2 className="section-title">Documents Required for CAT Exam 2024 </h2>
  <p className="section-content">
  Below we have provided the complete list of the documents required to fill up the CAT exam form.
  <br />
●     The applicant must have mark sheets related to 10th  and 12th
<br />

●     Graduation mark sheets and certificates
<br />
●     Applicant’s Aadhar card
<br />
●     Caste certificate if applicable
<br />
●     Certificate of Disability If the applicant is disabled
<br />
●     Applicant’s bank account details
<br />

●     Address Proof etc

So this was all about the one of the toughest exams in India Common Admission Test where millions of students appear every day to get into the top business schools in India. So if you’re preparing for CAT we hope this article might be of some help for you guys.  </p>
</section>
      </div>
    </div>
  );
};

export default CatExam;

