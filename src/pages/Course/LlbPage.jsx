import React from 'react';
import { Link } from 'react-router-dom';


const examData = [
    { exam: "JEE Main", siteUrl: "https://jeemain.nta.ac.in/", examDates: [{ session: "Session 1", dates: "24 Jan '24 - 1 Feb '24" }, { session: "Session 2", dates: "4 Apr '24 - 15 Apr '24" }] },
    { exam: "JEE Advanced", siteUrl: "https://jeeadv.ac.in/", examDates: [{ session: "", dates: "26 May '24" }] },
    { exam: "MHT CET", siteUrl: "https://cetcell.mahacet.org/", examDates: [{ session: "", dates: "16 Apr '24 - 30 Apr '24" }] },
    { exam: "CUET", siteUrl: "https://exams.nta.ac.in/CUET-UG/", examDates: [{ session: "", dates: "15 May '24 - 31 May '24" }] },
    { exam: "TS EAMCET", siteUrl: "https://eapcet.tsche.ac.in/", examDates: [{ session: "", dates: "09 May '24 - 13 May '24" }] },
    { exam: "BITSAT", siteUrl: "https://www.bitsadmission.com/", examDates: [{ session: "Session I", dates: "19 May '24 - 24 May '24" }, { session: "Session II", dates: "22 Jun '24 - 26 Jun '24" }] },
    { exam: "COMEDK UGET", siteUrl: "https://www.comedk.org/", examDates: [{ session: "", dates: "12 May '24" }] },
    { exam: "KCET", siteUrl: "https://cetonline.karnataka.gov.in/kea/", examDates: [{ session: "", dates: "18 Apr '24 - 19 Apr '24" }] },
    { exam: "KEAM", siteUrl: "https://cee.kerala.gov.in/cee/", examDates: [{ session: "", dates: "May '24 (Tentative)" }] },
    { exam: "WBJEE", siteUrl: "https://wbjeeb.nic.in/", examDates: [{ session: "", dates: "28 Apr '24" }] },
    { exam: "VITEEE", siteUrl: "https://viteee.vit.ac.in/", examDates: [{ session: "", dates: "19 Apr '24 - 30 Apr '24" }] },
    { exam: "GATE", siteUrl: "https://gate2024.iisc.ac.in/", examDates: [{ session: "", dates: "3 Feb '24 - 11 Feb '24" }] }
  ];
  
  const government = [
    { name: "Indian Institute of Technology Bombay (IIT Bombay)", location: "Mumbai, Maharashtra", rank: 1, siteUrl: "https://www.iitb.ac.in/" },
    { name: "Indian Institute of Technology Delhi (IIT Delhi)", location: "New Delhi, Delhi", rank: 2, siteUrl: "https://home.iitd.ac.in/" },
    { name: "Indian Institute of Technology Kanpur (IIT Kanpur)", location: "Kanpur, Uttar Pradesh", rank: 3, siteUrl: "https://www.iitk.ac.in/" },
    { name: "Indian Institute of Technology Madras (IIT Madras)", location: "Chennai, Tamil Nadu", rank: 4, siteUrl: "https://www.iitm.ac.in/" },
    { name: "Indian Institute of Technology Kharagpur (IIT Kharagpur)", location: "Kharagpur, West Bengal", rank: 5, siteUrl: "https://www.iitkgp.ac.in/" }
  ];
  
  const privateCollege = [
    { name: "Birla Institute of Technology and Science (BITS Pilani)", location: "Pilani, Rajasthan", rank: 1, siteUrl: "https://www.bits-pilani.ac.in/" },
    { name: "Vellore Institute of Technology (VIT Vellore)", location: "Vellore, Tamil Nadu", rank: 2, siteUrl: "https://vit.ac.in/" },
    { name: "Manipal Institute of Technology (MIT Manipal)", location: "Manipal, Karnataka", rank: 3, siteUrl: "https://www.manipal.edu/mit.html" },
    { name: "SRM Institute of Science and Technology (SRMIST)", location: "Chennai, Tamil Nadu", rank: 4, siteUrl: "https://www.srmist.edu.in/" },
    { name: "Birla Institute of Technology (BIT Mesra)", location: "Ranchi, Jharkhand", rank: 5, siteUrl: "https://www.bitmesra.ac.in/1" }
  ];
  
  const featuredCollege = [
    { name: "Indian Institute of Science (IISc)", location: "Bangalore, Karnataka", rank: 1, siteUrl: "https://iisc.ac.in/" },
    { name: "Indian Institute of Technology Hyderabad (IIT Hyderabad)", location: "Hyderabad, Telangana", rank: 2, siteUrl: "https://www.iith.ac.in/" },
    { name: "Indian Institute of Technology Guwahati (IIT Guwahati)", location: "Guwahati, Assam", rank: 3, siteUrl: "https://www.iitg.ac.in/" }
  ];

const LlbPage = () => {
    return (
        <div className="btech-page-container">
          <main className="container mx-auto pb-12 pt-[180px] lg:pt-36 px-6">
            <header className="mb-12 text-center">
              <h1 className="text-5xl font-bold text-[#235950]">Bachelor of Legislative Law (L.L.B)</h1>
            </header>
    
            <section id="course-details" className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#235950]">Course Details</h2>
              <ul className="list-disc list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
                <li>B.Tech (Bachelor of Technology) is a four-year undergraduate program.</li>
                <li>Focuses on practical aspects of engineering and technology.</li>
                <li>Provides a strong foundation in engineering principles, mathematics, and science.</li>
                <li>Covers various disciplines such as computer science, electrical engineering, mechanical engineering, civil engineering, and electronics and communication engineering.</li>
              </ul>
            </section>
    
            <section id="eligibility-criteria" className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#235950]">Eligibility Criteria</h2>
              <ul className="list-disc list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
                <li>Eligibility criteria vary depending on the college and specific program.</li>
                <li>Most colleges require candidates to have completed their 10+2 or equivalent examination with a minimum of 50% marks in Physics, Chemistry, and Mathematics.</li>
                <li>Some colleges may also require candidates to have a valid score in an entrance exam such as JEE Main or JEE Advanced.</li>
              </ul>
            </section>
    
            <section id="top-exams" className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#235950]">Top Exams</h2>
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
              <h2 className="text-3xl font-bold mb-4 text-[#235950]">Placement Details</h2>
              <ul className="list-disc list-inside bg-gray-100 p-6 rounded-lg shadow-sm text-lg leading-relaxed">
                <li>Eligibility criteria must be met before applying to any B.Tech placement, on- or off-campus.</li>
                <li>Some companies evaluate applicants based on basic skills and academic performance.</li>
                <li>Top recruiters have specific eligibility criteria for applicants.</li>
              </ul>
            </section>
    
            <section id="top-colleges" className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#235950]">Top Colleges</h2>
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
        </div>
      );
}

export default LlbPage