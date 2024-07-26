
import React from 'react';

const examDates = [
    {
      "Dates": "Aug '23 - Nov '23",
      "Upcoming Exam Dates": "XAT 2024 registration",
      "Status": "--"
    },
    {
      "Dates": "Dec '23",
      "Upcoming Exam Dates": "XAT 2024 admit card download",
      "Status": "--"
    },
    {
      "Dates": "Jan 5, 2024",
      "Upcoming Exam Dates": "XAT 2024 exam date",
      "Status": "--"
    },
    {
      "Dates": "Jan '24",
      "Upcoming Exam Dates": "XAT 2024 result announcement",
      "Status": "--"
    }
  ];
  
  const syllabusData = [
    {
      section: "Verbal and Logical Ability",
      topics: ["Reading Comprehension", "Verbal Reasoning", "Logical Ability"]
    },
    {
      section: "Quantitative Ability and Data Interpretation",
      topics: ["Arithmetic", "Geometry", "Data Sufficiency"]
    },
    {
      section: "Decision Making",
      topics: ["Analytical Reasoning", "Situational Judgment"]
    },
    {
      section: "General Knowledge",
      topics: ["Current Affairs", "Static GK"]
    }
  ];
  
  const examPatternData = [
    {
      section: "Verbal and Logical Ability",
      MCQs: 26,
      "maximum marks": 104
    },
    {
      section: "Quantitative Ability and Data Interpretation",
      MCQs: 28,
      "maximum marks": 112
    },
    {
      section: "Decision Making",
      MCQs: 21,
      "maximum marks": 84
    },
    {
      section: "General Knowledge",
      MCQs: 25,
      "maximum marks": 100
    },
    {
      section: "Total",
      MCQs: 100,
      "maximum marks": 400
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
      "name": "XLRI - Xavier School of Management",
      "location": "Jamshedpur, Jharkhand",
      "fees": "Approx. ₹25,00,000 per annum",
      "nirfRanking": 11
    },
    {
      "name": "SP Jain Institute of Management and Research (SPJIMR)",
      "location": "Mumbai, Maharashtra",
      "fees": "Approx. ₹17,50,000 per annum",
      "nirfRanking": 18
    },
    {
      "name": "Management Development Institute (MDI)",
      "location": "Gurgaon, Haryana",
      "fees": "Approx. ₹21,00,000 per annum",
      "nirfRanking": 10
    },
    {
      "name": "Narsee Monjee Institute of Management Studies (NMIMS)",
      "location": "Mumbai, Maharashtra",
      "fees": "Approx. ₹19,00,000 per annum",
      "nirfRanking": 24
    },
    {
      "name": "Symbiosis Institute of Business Management (SIBM)",
      "location": "Pune, Maharashtra",
      "fees": "Approx. ₹20,00,000 per annum",
      "nirfRanking": 20
    }
  ];
  
  
  

const XatExam = () => {
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
          <h2 className="section-title">XAT Exam 2024 Details</h2>
          <p className="section-content">
            The Xavier Aptitude Test (XAT) is a national-level management entrance exam conducted by Xavier School of Management (XLRI) on behalf of XAMI. It is a gateway for admission to MBA/PGDM programs at over 150 institutes across India. XAT 2024 aims to test candidates' aptitude in various areas such as quantitative ability, verbal and logical ability, decision making, and general knowledge. The exam is known for its rigorous and challenging nature, making it a prestigious and sought-after exam among MBA aspirants.

            XAT 2024 will be conducted in an online computer-based format, consisting of multiple-choice questions and a descriptive section. The exam duration is three hours, and it is divided into four main sections: Verbal and Logical Ability, Decision Making, Quantitative Ability and Data Interpretation, and General Knowledge. Additionally, there is an essay writing section that evaluates the candidate's writing skills and ability to articulate thoughts coherently.

            The importance of the XAT exam lies in its comprehensive evaluation of a candidate's analytical, reasoning, and decision-making abilities. It is designed to assess the overall aptitude required for management education and to ensure that the candidates possess the necessary skills to excel in a dynamic business environment. XLRI, being one of the top B-schools in India, sets a high standard for the exam, making it competitive and challenging.

            XAT scores are accepted by a wide range of management institutes, including XLRI, XIMB, SPJIMR, IMT, and many others. The exam is typically held in the first week of January, and the registration process begins in August. Aspiring candidates must keep an eye on the official XAT website for updates and important dates. Preparing for XAT requires a strategic approach, focusing on conceptual clarity, practice, and time management. Given its difficulty level, consistent preparation and a well-planned strategy are crucial for success in XAT 2024.
          </p>
        </section>

        <section id="eligibility" className="eligibility-section">
          <h2 className="section-title">Eligibility Criteria</h2>
          <p className="section-content">
            The eligibility criteria for XAT 2024 are designed to ensure that candidates possess the minimum qualifications required to undertake the exam and pursue management studies. The following points outline the eligibility criteria for XAT 2024:

            1. Educational Qualification: Candidates must have a bachelor's degree in any discipline from a recognized university or institute. The degree should be of a minimum duration of three years. Final year students who are awaiting their results or are in the process of completing their degree are also eligible to apply, provided they complete their graduation by the stipulated time as specified by the participating institutes.

            2. Age Limit: There is no specific age limit to apply for the XAT exam. Candidates of any age who meet the educational qualification criteria are eligible to apply.

            3. Nationality: XAT is open to Indian citizens as well as foreign nationals. However, foreign nationals and NRIs (Non-Resident Indians) can apply through GMAT scores. They need to check the specific requirements of the institutes they are applying to, as some may have additional criteria for international candidates.

            4. Work Experience: While work experience is not a mandatory requirement for XAT, having relevant work experience can be an added advantage during the selection process of various management institutes. Some institutes may give preference to candidates with work experience during the interview and selection process.

            Candidates must ensure they meet the eligibility criteria before applying for the exam. Failing to meet the eligibility criteria can result in the disqualification of the candidate at any stage of the admission process. It is essential to thoroughly check the eligibility requirements of the specific institutes to which they are applying, as some institutes may have additional or slightly different criteria.

            Overall, the XAT eligibility criteria are quite flexible, allowing a broad range of candidates to apply. However, candidates must focus on fulfilling the academic qualifications and preparing diligently for the exam to secure admission to their desired management program.
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
          <h2 className="section-title">How to Prepare for XAT Exam 2024</h2>
          <p className="section-content">
            Preparing for the XAT exam requires a strategic and well-planned approach. Given the rigorous nature of the exam, candidates must focus on understanding the exam pattern, syllabus, and key areas to enhance their preparation. Here are some essential tips and strategies to prepare effectively for XAT 2024:

            1. Understand the Exam Pattern: The first step in preparing for XAT is to understand its structure and pattern. The exam consists of four sections: Verbal and Logical Ability, Decision Making, Quantitative Ability and Data Interpretation, and General Knowledge, along with an essay writing section. Familiarizing yourself with the exam pattern helps in planning your preparation accordingly.

            2. Study the Syllabus: The XAT syllabus covers a wide range of topics. For Verbal and Logical Ability, focus on reading comprehension, grammar, vocabulary, and logical reasoning. Decision Making requires analytical skills to solve complex scenarios. Quantitative Ability and Data Interpretation cover topics like arithmetic, algebra, geometry, and data interpretation. General Knowledge includes current affairs, static GK, and business-related news. Thoroughly understanding the syllabus will help in targeting your preparation effectively.

            3. Create a Study Plan: A well-structured study plan is crucial for effective preparation. Divide your study time among the different sections based on your strengths and weaknesses. Allocate time for daily practice, revision, and taking mock tests. A balanced study plan ensures that you cover all the topics systematically without feeling overwhelmed.

            4. Practice Mock Tests: Practicing mock tests is an integral part of XAT preparation. Mock tests simulate the actual exam environment and help in assessing your performance. They provide insights into your strengths and weaknesses, allowing you to focus on areas that need improvement. Regularly taking mock tests enhances your speed, accuracy, and time management skills.

            5. Focus on Decision Making: The Decision Making section is unique to XAT and requires special attention. Practice different types of decision-making questions to develop a logical and analytical approach. Analyze previous year questions to understand the type of scenarios presented and practice accordingly.

            6. Enhance Reading Skills: For the Verbal and Logical Ability section, improving reading skills is essential. Regularly read newspapers, magazines, and books to enhance your reading comprehension, vocabulary, and grammar. This will also help in the General Knowledge section.

            7. Strengthen Quantitative Skills: Focus on building strong conceptual clarity in quantitative topics. Practice a variety of questions from each topic and solve previous year papers to get an idea of the type of questions asked. Regular practice will improve your problem-solving speed and accuracy.

            8. Stay Updated with Current Affairs: For the General Knowledge section, staying updated with current affairs is crucial. Follow daily news updates, read business magazines, and stay informed about national and international events.

            9. Work on Essay Writing: The essay writing section evaluates your ability to articulate thoughts clearly and coherently. Practice writing essays on diverse topics and seek feedback to improve your writing skills.

            By following these preparation tips and maintaining a consistent study routine, candidates can enhance their chances of performing well in XAT 2024 and securing admission to their desired management program.
          </p>
        </section>

        <section id="registration-process" className="registration-process-section">
          <h2 className="section-title">Registration Process for XAT Exam 2024</h2>
          <p className="section-content">
            The registration process for XAT 2024 is straightforward but requires careful attention to detail. Here are the steps to register for the exam:

            1. Visit the Official XAT Website: Candidates need to visit the official XAT website (xatonline.in) to start the registration process. Ensure you have a stable internet connection and a device to complete the registration smoothly.

            2. Create an Account: On the homepage, click on the "Register" button to create a new account. You will need to provide basic details such as your name, email address, mobile number, and password. An OTP (One-Time Password) will be sent to your registered mobile number and email for verification.

            3. Fill in Personal Details: After verifying your email and mobile number, log in to your account and fill in your personal details such as name, date of birth, gender, nationality, and category (if applicable). Ensure that the information provided is accurate and matches the details on your official documents.

            4. Upload Documents: Upload scanned copies of your recent passport-sized photograph, signature, and other required documents such as caste certificate (if applicable). The documents should be in the prescribed format and size as mentioned on the website.

            5. Fill in Academic and Work Experience Details: Provide details of your educational qualifications, including the name of the institution, degree, year of passing, and percentage/CGPA. If you have any work experience, provide relevant details such as the name of the organization, designation, and duration of employment.

            6. Select XAT Exam City: Choose your preferred city for taking the XAT exam from the list of available test cities. Select the city carefully as it cannot be changed after submission.

            7. Select Programs and Institutes: You can select the management programs and institutes you wish to apply to through XAT. Carefully choose the programs that align with your career goals.

            8. Pay the Application Fee: The final step is to pay the application fee. The fee can be paid online using a credit card, debit card, or net banking. Ensure you complete the payment process and note down the transaction details for future reference.

            9. Submit the Application: After completing all the steps and verifying the information provided, submit the application form. Take a printout of the confirmation page and the application form for future reference.

            It is essential to carefully follow the instructions provided on the official XAT website during the registration process. Any discrepancies or errors in the application form can lead to rejection, so ensure all details are accurate and complete. Keep track of important dates related to the registration process, such as the start and end dates for application submission, fee payment deadlines, and admit card release dates.

            By following these steps, candidates can successfully complete the registration process for XAT 2024 and focus on their preparation for the exam.
          </p>
        </section>

        <section id="documents-required" className="documents-required-section">
          <h2 className="section-title">Documents Required for XAT Exam 2024</h2>
          <p className="section-content">
            To complete the registration process for XAT 2024, candidates need to upload and provide various documents. These documents are essential to verify the candidate's identity, educational qualifications, and eligibility for the exam. Here is a list of documents required for XAT 2024 registration:

            1. Passport-sized Photograph: Candidates need to upload a recent passport-sized photograph in the prescribed format and size. The photograph should be clear, with a white or light-colored background, and should not be older than six months. Ensure that the photograph is in JPEG or JPG format and within the specified size limits.

            2. Signature: A scanned copy of the candidate's signature is required. The signature should be done on a white paper with a black or blue pen. The scanned copy should be in JPEG or JPG format and should meet the specified size requirements.

            3. Valid Photo Identity Proof: Candidates need to provide a valid photo identity proof such as an Aadhar card, passport, voter ID, PAN card, or driving license. The document should be valid and not expired. Ensure that the details on the ID proof match the information provided in the application form.

            4. Educational Certificates: Candidates need to upload scanned copies of their educational certificates, including the mark sheets of class 10th, 12th, and graduation. If the candidate is in the final year of graduation, they need to provide a provisional certificate or a letter from the institution confirming their current status.

            5. Category Certificate (if applicable): Candidates belonging to reserved categories such as SC/ST/OBC need to provide a valid category certificate issued by the competent authority. The certificate should be in the prescribed format and should clearly state the candidate's category and other relevant details.

            6. Work Experience Certificate (if applicable): If the candidate has work experience, they need to provide relevant work experience certificates from their previous employers. The certificate should mention the duration of employment, designation, and roles and responsibilities.

            7. GMAT Score Card (for NRI/Foreign Candidates): NRI and foreign candidates applying through GMAT scores need to provide a valid GMAT scorecard. The scorecard should be within the validity period and should meet the requirements of the institutes they are applying to.

            8. Other Relevant Documents: Any other documents specified by the participating institutes or required as per the candidate's application details should be provided. This may include certificates of extracurricular activities, achievements, or additional qualifications.

            Candidates must ensure that all the documents uploaded are clear, legible, and in the prescribed format and size. Any discrepancy or mismatch in the documents can lead to the rejection of the application. It is advisable to keep multiple copies of all the documents for future reference and verification during the admission process.

            By carefully preparing and uploading the required documents, candidates can ensure a smooth and hassle-free registration process for XAT 2024 and focus on their exam preparation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default XatExam;