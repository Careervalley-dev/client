import React, { useState } from 'react';
import ConsultationModal from '../ConsultationModal';

const Banner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <div className="relative h-[90vh] pt-40 bg-cover bg-center text-black py-12 px-6" style={{ backgroundImage: "url('https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232499.webp?mode=stretch')" }}>
      <div className="absolute inset-0 bg-gradient-to-bl lg:bg-gradient-to-r lg:from-white lg:via-white/90 lg:to-transparent"></div>
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* LEFT SECTION */}
        <div className="relative lg:w-3/5 lg:ml-16 mx-auto lg:mt-20 px-6 py-8 max-w-screen-lg">
          <h1 className="text-xl md:text-4xl font-bold drop-shadow-lg animate-fade-in text-center md:text-left">
            A PLAN FOR <span className="text-[#2A675C]">EVERY DREAM!</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md animate-fade-in text-center md:text-left">
            The Most Comprehensive & Personalised Study Abroad Plan, suited for your Dreams.<br />
            Obsessed with Student Success.
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:space-x-4 items-center justify-center md:justify-start animate-bounce">
            <button className="bg-[#2A675C] text-white px-6 py-3 mb-4 md:mb-0 rounded-md shadow-lg hover:bg-[#24594e] transition duration-300 ease-in-out">
              Get Your Personalised Plan for Free
            </button>
            <button className="bg-transparent text-[#2A675C] border-2 border-[#2A675C] px-6 py-3 rounded-md shadow-lg hover:bg-[#2A675C] hover:text-white transition duration-300 ease-in-out" onClick={openModal}>
              Talk to an Expert
            </button>
          </div>
          <p className="mt-6 text-lg drop-shadow-md animate-fade-in text-center md:text-left">95% of our students get an admit in less than 4 weeks</p>
          <p className="mt-2 text-lg drop-shadow-md animate-fade-in text-center md:text-left">Our students finished University to work at global offices of</p>
          <div className="mt-4 w-[350px] lg:w-[480px] mx-auto md:mx-0 overflow-hidden">
            <div className="flex space-x-4 animate-marquee w-[calc(100% * 2)]">
              <img src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fleverageeduhome.gumlet.io%2FFrame3430.png&w=640&q=75" alt="Google" className="h-10 drop-shadow-md" />
              <img src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fleverageeduhome.gumlet.io%2FFrame3430.png&w=640&q=75" alt="Barclays" className="h-10 drop-shadow-md" />
              <img src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fleverageeduhome.gumlet.io%2FFrame3430.png&w=640&q=75" alt="EY" className="h-10 drop-shadow-md" />
              <img src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fleverageeduhome.gumlet.io%2FFrame3430.png&w=640&q=75" alt="Amazon" className="h-10 drop-shadow-md" />
              <img src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fleverageeduhome.gumlet.io%2FFrame3430.png&w=640&q=75" alt="Accenture" className="h-10 drop-shadow-md" />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className='lg:w-2/5'></div>
      </div>
      <ConsultationModal isOpen={modalIsOpen} onClose={closeModal}/>
    </div>
  );
};

export default Banner;
