
import React from 'react';

const examDates = [
  {
    "Dates": "Dec '23 - Jan '24",
    "Upcoming Exam Dates": "NEET 2024 registration",
    "Status": "--"
  },
  {
    "Dates": "Apr '24",
    "Upcoming Exam Dates": "NEET 2024 admit card download",
    "Status": "--"
  },
  {
    "Dates": "May 1, 2024",
    "Upcoming Exam Dates": "NEET 2024 exam date",
    "Status": "--"
  },
  {
    "Dates": "Jun '24",
    "Upcoming Exam Dates": "NEET 2024 result announcement",
    "Status": "UPCOMING"
  }
];

const syllabusData = [
  {
    section: "Physics",
    topics: ["Physical-world and measurement", "Kinematics", "Laws of Motion", "Work, Energy, and Power"]
  },
  {
    section: "Chemistry",
    topics: ["Some basic concepts of Chemistry", "Structure of Atom", "Classification of Elements and Periodicity in Properties"]
  },
  {
    section: "Biology",
    topics: ["Diversity in Living World", "Structural Organisation in Animals and Plants", "Cell Structure and Function"]
  }
];

const examPatternData = [
  {
    section: "Physics",
    MCQs: 45,
    "maximum marks": 180
  },
  {
    section: "Chemistry",
    MCQs: 45,
    "maximum marks": 180
  },
  {
    section: "Biology",
    MCQs: 90,
    "maximum marks": 360
  },
  {
    section: "Total",
    MCQs: 180,
    "maximum marks": 720
  }
];

const government = [
  {
    "name": "All India Institute of Medical Sciences, New Delhi",
    "nirfRanking": 1,
    "location": "New Delhi, Delhi",
    "fees": "Approx. ₹6,000 per annum"
  },
  {
    "name": "Post Graduate Institute of Medical Education and Research, Chandigarh",
    "nirfRanking": 2,
    "location": "Chandigarh",
    "fees": "Approx. ₹7,000 per annum"
  },
  {
    "name": "Christian Medical College, Vellore",
    "nirfRanking": 3,
    "location": "Vellore, Tamil Nadu",
    "fees": "Approx. ₹1,40,000 per annum"
  },
  {
    "name": "Sanjay Gandhi Postgraduate Institute of Medical Sciences, Lucknow",
    "nirfRanking": 4,
    "location": "Lucknow, Uttar Pradesh",
    "fees": "Approx. ₹50,000 per annum"
  },
  {
    "name": "Amrita Institute of Medical Sciences & Research, Kochi",
    "nirfRanking": 5,
    "location": "Kochi, Kerala",
    "fees": "Approx. ₹20,00,000 per annum"
  }
];

const privatecollege = [
  {
    "name": "Kasturba Medical College, Manipal",
    "location": "Manipal, Karnataka",
    "fees": "Approx. ₹12,50,000 per annum",
    "nirfRanking": 8
  },
  {
    "name": "Christian Medical College, Ludhiana",
    "location": "Ludhiana, Punjab",
    "fees": "Approx. ₹80,000 per annum",
    "nirfRanking": 15
  },
  {
    "name": "SRM Medical College Hospital and Research Centre, Chennai",
    "location": "Chennai, Tamil Nadu",
    "fees": "Approx. ₹22,50,000 per annum",
    "nirfRanking": 25
  }
];

  
  

const NeetExam = () => {
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
          <h2 className="section-title">NEET Exam 2024 Details</h2>
          <p className="section-content">
            The National Eligibility cum Entrance Test (NEET) is conducted by the National Testing Agency (NTA) for admission to undergraduate medical courses (MBBS/BDS) in India. NEET 2024 will be a single entrance exam for admissions to medical and dental colleges across the country.
          </p>
          <p className="section-content">
            NEET 2024 will have multiple-choice questions covering subjects such as Physics, Chemistry, and Biology (Botany & Zoology). The exam duration is 3 hours.
          </p>
        </section>

        <section id="eligibility" className="eligibility-section">
          <h2 className="section-title">Eligibility Criteria</h2>
          <p className="section-content">
            The eligibility criteria for NEET 2024 are as follows:
            <ul>
              <li>Candidates must have completed 17 years of age at the time of admission or will complete that age on or before 31st December of the year of admission.</li>
              <li>They should have passed Class 12 or equivalent with Physics, Chemistry, Biology/Biotechnology, and English as core subjects.</li>
              <li>The minimum aggregate marks in the qualifying examination (Class 12 or equivalent) for general category candidates are 50%, while for SC/ST/OBC candidates, it is 40%.</li>
            </ul>
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
          <h2 className="section-title">How to Prepare for NEET Exam 2024</h2>
          <p className="section-content">
            Preparation for NEET requires a strategic approach and thorough understanding of concepts. Here are some tips:
            <ul>
              <li>Start early and create a study schedule.</li>
              <li>Focus on NCERT books for foundational concepts.</li>
              <li>Practice previous years' question papers and mock tests.</li>
              <li>Revise regularly and solve sample papers to improve speed and accuracy.</li>
              <li>Join a coaching institute or online platform for additional support.</li>
            </ul>
            <a href="/pdf/NEET-Previous-Year-Papers.pdf" download>Download NEET Previous Year Papers</a>
          </p>
        </section>

        <section id="registration-process" className="registration-process-section">
          <h2 className="section-title">Registration Process for NEET Exam 2024</h2>
          <p className="section-content">
            To register for NEET 2024, follow these steps:
            <ol>
              <li>Visit the official NEET website.</li>
              <li>Fill out the registration form with personal details including name, date of birth, and contact information.</li>
              <li>Upload scanned images of photograph, signature, and thumb impression in prescribed format.</li>
              <li>Pay the application fee through online mode using net banking, credit/debit card, or UPI.</li>
              <li>Download and print the confirmation page after successful submission of the application form.</li>
            </ol>
          </p>
        </section>

        <section id="documents-required" className="documents-required-section">
          <h2 className="section-title">Documents Required for NEET Exam 2024</h2>
          <p className="section-content">
            Documents needed for NEET 2024 registration include:
            <ul>
              <li>Passport-sized photograph in JPG format.</li>
              <li>Signature and thumb impression in JPG format.</li>
              <li>Class 10 and 12 certificates.</li>
              <li>Category certificate (if applicable).</li>
              <li>Valid ID proof such as Aadhar card, passport, or voter ID.</li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};

export default NeetExam;