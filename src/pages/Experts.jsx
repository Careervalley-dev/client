import React from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import Heading from "../components/common/Heading";

const experts = [
  {
    name: "Ms. Sonali Mulay",
    photo: "https://i.postimg.cc/nVjg34sd/Sonali-Mulay-expert-1.jpg",
  },
  {
    name: "Ms. Ishita Kundu",
    photo: "https://i.postimg.cc/vBjjQBKL/Ishita-Kundu-expert-1.jpg",
  },
  {
    name: "Prof. Satya Kiran Sastry",
    photo: "https://i.postimg.cc/43fjPjtt/Prof-Satya-Kiran-Sastry-expert-1.jpg",
  },
  {
    name: "Mr. Pranab Kumar",
    photo: "https://i.postimg.cc/PrZG5WTL/Pranab-kumar-Misra-expert-1.jpg",
  },
  // Add more experts as needed
];

const Experts = () => {
  const data = [
    {
      title: "Synergy in Education",
      desc: "Career Valley and Satguru Education Join Forces for Global Academic Excellence.",
    },
    {
      title: "Holistic Student Profiling",
      desc: "Our personalized student profiling process helps match students with the best global educational institutions.",
    },
    {
      title: "Pathway to Excellence",
      desc: "We provide personalized guidance at every step of the application process, from selecting universities to acing interviews.",
    },
    {
      title: "Global Reach, Local Expertise",
      desc: "Combining global networks and local expertise, we unlock a world of opportunities for students.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-100 text-gray-900">
      <div className="container flex justify-center items-center flex-col mx-auto px-6 pt-24">
      <Heading normalText="Our" highlightText="Experts"/>
        {/* <h1 className="text-4xl text-center font-bold font-dosis mb-8">
          Our Experts
        </h1> */}
        {/* <Heading /> */}
        <div className="grid gap-8 mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <img
                src={expert.photo}
                alt={expert.name}
                className="w-full lg:h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold mt-2">{expert.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row justify-center items-center mx-auto px-4 py-12">
        <Heading normalText="Overseas" highlightText="Education"/>
          {/* <h2 className="text-4xl text-center font-bold font-dosis mb-4">
            Overseas Education
          </h2> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 p-8">
          {data.map((item, index) => (
            <div key={index} className="card2 bg-[#e8f1f0] shadow-2xl p-6 m-4 rounded-lg">
              <p className="card2-title font-dosis font-bold text-[24px] mb-2">
                {item.title}
              </p>
              <p className="small-desc font-cat text-[20px] mb-4">{item.desc}</p>
              <div className="go-corner">
                <div className="go-arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#235950] to-[#1e3c3b] py-16 px-6 text-white">
        <div className="container mx-auto">
          <h3 className="hidden lg:block text-4xl font-bold text-center mb-8">
            Book a One-on-One Consultation
          </h3>
          <h3 className="block lg:hidden text-4xl font-bold text-center mb-8">
            Book a <br />One-on-One <br />Consultation!
          </h3>
          <p className="text-lg leading-relaxed text-center mb-8">
            Schedule a personal consultation with our experts to get tailored advice and guidance.
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-9">
            <div className="flex flex-col lg:flex-row justify-center mb-8">
              <a
                href="mailto:contact@career-valley.com"
                className="bg-white flex flex-col lg:flex-row justify-center items-centers text-[#235950] py-2 px-6 rounded-lg hover:bg-gray-200 transition-all book-now-container"
              >
                <span className="book-now-text">Book Now</span>
                <FaArrowRight className="book-now-arrow hidden ml-5 lg:inline-block" />
                <FaArrowDown className="book-now-arrow inline-block lg:hidden" />
              </a>
            </div>
            <div className="text-center">
              <p className="text-lg mb-2">
                Email:{" "}
                <a href="mailto:contact@career-valley.com" className="underline">
                  info@thecareervalley.com
                </a>
              </p>
              <p className="text-lg">
                Phone:{" "}
                <a href="tel:+1234567890" className="underline">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .book-now-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .book-now-text {
          position: relative;
          padding-bottom: 2px;
        }

        .book-now-arrow {
          animation: bounce 1.5s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }

        @media (min-width: 1024px) {
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateX(0);
            }
            40% {
              transform: translateX(8px);
            }
            60% {
              transform: translateX(4px);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Experts;
