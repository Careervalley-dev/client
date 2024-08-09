import React from 'react'
import TeamMemberCard from '../components/AboutPage/TeamMemberCard';
import Heading from '../components/common/Heading';

const Team = () => {
    const teamMembers = [
        {
          name: "John Doe",
          designation: "CEO",
          image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
        },
        {
          name: "Jane Smith",
          designation: "CTO",
          image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
        },
        {
          name: "Jane Smith",
          designation: "Full Stack Developer",
          image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
        },
        {
          name: "Jane Smith",
          designation: "Marketing Head",
          image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
        },
        {
          name: "Jane Smith",
          designation: "BDE",
          image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
        },
        {
          name: "Jane Smith",
          designation: "HR Lead",
          image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
        },
        // Add more team members here
      ];
  return (
    <div className='container mx-auto px-4 py-[180px] lg:py-36'>
        <div className="bg-white flex flex-col items-center lg:justify-none ">
          <Heading normalText="Our" highlightText="Team"/>
          {/* <h2 className="text-left font-dosis text-4xl font-bold mb-4 bg-white pb-0 p-4">
            Our Team
          </h2> */}
          <div className="flex flex-col justify-center bg-white items-center py-12 lg:justify-none">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-y-8 lg:gap-x-20 lg:pl-16">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.designation} {...member} />
              ))}
            </section>
          </div>
        </div>
    </div>
  )
}

export default Team