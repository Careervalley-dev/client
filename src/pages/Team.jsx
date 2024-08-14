import React from 'react'
import TeamMemberCard from '../components/AboutPage/TeamMemberCard';
import Heading from '../components/common/Heading';
import TeamCard from '../components/AboutPage/card/TeamCard';

const Team = () => {
    const teamMembers = [
        {
          name: "John Doe",
          designation: "CEO",
          image: "https://res.cloudinary.com/du3i8e0se/image/upload/v1721847900/qkvrjqtsook5wjnzbzwb.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
          instagram: "",
          facebook: "",
          email: "",
        },
        {
          name: "Jane Smith",
          designation: "CTO",
          image: "https://res.cloudinary.com/du3i8e0se/image/upload/v1723637353/IMG-20240511-WA0022_gvpvqs.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
          instagram: "",
          facebook: "",
          email: "",
        },
        {
          name: "Jane Smith",
          designation: "Full Stack Developer",
          image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
          instagram: "",
          facebook: "",
          email: "",
        },
        {
          name: "Jane Smith",
          designation: "Marketing Head",
          image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
          instagram: "",
          facebook: "",
          email: "",
        },
        {
          name: "Jane Smith",
          designation: "BDE",
          image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
          instagram: "",
          facebook: "",
          email: "",
        },
        {
          name: "Jane Smith",
          designation: "HR Lead",
          image: "https://i.postimg.cc/9fCX4GC4/John-Smiths.jpg",
          linkedin: "https://www.linkedin.com/in/aditya--sahu89/",
          instagram: "",
          facebook: "",
          email: "",
        },
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
              {teamMembers.map((member, index) => (
                // <TeamMemberCard key={index} {...member} />
                <TeamCard key={index} {...member}/>
              ))}
            </section>
          </div>
        </div>
    </div>
  )
}

export default Team