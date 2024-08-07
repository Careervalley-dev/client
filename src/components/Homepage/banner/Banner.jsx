import React, { useState } from 'react';
import ConsultationModal from '../ConsultationModal';

const Banner = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="relative h-[90vh] pt-52 lg:pt-40 bg-cover bg-center text-black py-12 px-6" style={{ backgroundImage: "url('https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232499.webp?mode=stretch')" }}>
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white lg:via-white/90 to-transparent"></div>
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* LEFT SECTION */}
        <div className="relative lg:w-3/5 lg:ml-16 mx-auto lg:mt-20 px-6 py-8 max-w-screen-lg">
          <h1 className="text-xl md:text-4xl font-bold drop-shadow-lg animate-fade-in text-center md:text-left">
            DISCOVER YOUR <span className="text-[#2A675C]">DREAM CAREER!</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md animate-fade-in text-center md:text-left">
            Expert Guidance to Choose the Perfect Career Path for Undergraduate & Postgraduate Courses. 
            Committed to Your Success and Growth.
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:space-x-4 items-center justify-center md:justify-start animate-bounce">
            <button className="bg-[#2A675C] text-white px-6 py-3 mb-4 md:mb-0 rounded-md shadow-lg hover:bg-[white] hover:border-2 hover:border-[#2A675C] hover:text-[#2A675C] transition duration-300 ease-in-out" onClick={openModal}>
              Talk to Our Career Advisors
            </button>
          </div>
          <p className="mt-6 text-lg drop-shadow-md animate-fade-in text-center md:text-left">Over 90% of our students successfully find their ideal career path.</p>
          <p className="mt-2 text-lg drop-shadow-md animate-fade-in text-center md:text-left">Our students have gone on to study at the following universities:</p>


          <div className="relative flex overflow-hidden mt-4 mx-auto md:mx-0">
            <div className="flex animate-marquee space-x-4 w-full">
              <img src="https://www.isbr.in/assets/images/ISBRlogo.png" alt="ISBR" className="h-10 drop-shadow-md" />
              <img src="https://liet.in/images/lloyd_eng/website/img/logo/liet_engineering_1.png" alt="Lloyd" className="h-10 drop-shadow-md bg-[gray] rounded-md" />
              <img src="https://i.postimg.cc/Gt874RDP/accurate-logo-removebg-preview.png" alt="Accurate" className="h-10 drop-shadow-md" />
              <img src="https://www.nicmar.ac.in/uploads/NICMAR-Hyderabad-Logo-01.png" alt="NICMAR" className="h-10 drop-shadow-md bg-[gray] rounded-md p-1" />
              <img src="https://www.vishwavishwani.ac.in/assets/img/vvism1.png" alt="Vishwavishwani" className="h-10 drop-shadow-md" />
              <img src="https://soim.edu.in/wp-content/uploads/2022/12/logo-white.png" alt="SOIM" className="h-10 drop-shadow-md bg-[gray] rounded-md p-1" />
              <img src="https://i.postimg.cc/HkBRSX5j/gitam-new-logo-removebg-preview.png" alt="GITAM" className="h-10 drop-shadow-md" />
              <img src="https://inurture.co.in/wp-content/uploads/2019/08/INurture-logo-white.png" alt="INurture" className="h-10 drop-shadow-md bg-[gray] rounded-md p-1" />
              <img src="https://dl.geu.ac.in/uploads/image/KWqx6liP-geu-logo.webp" alt="GEU" className="h-10 drop-shadow-md bg-[gray] rounded-md p-1" />
              {/* Duplicate the images for seamless animation */}
              <img src="https://www.isbr.in/assets/images/ISBRlogo.png" alt="ISBR" className="h-10 drop-shadow-md" />
              <img src="https://liet.in/images/lloyd_eng/website/img/logo/liet_engineering_1.png" alt="Lloyd" className="h-10 drop-shadow-md bg-[gray] rounded-md" />
              <img src="https://i.postimg.cc/Gt874RDP/accurate-logo-removebg-preview.png" alt="Accurate" className="h-10 drop-shadow-md" />
              <img src="https://www.nicmar.ac.in/uploads/NICMAR-Hyderabad-Logo-01.png" alt="NICMAR" className="h-10 drop-shadow-md bg-[gray] rounded-md p-1" />
              <img src="https://www.vishwavishwani.ac.in/assets/img/vvism1.png" alt="Vishwavishwani" className="h-10 drop-shadow-md" />
              <img src="https://soim.edu.in/wp-content/uploads/2022/12/logo-white.png" alt="SOIM" className="h-10 drop-shadow-md bg-[gray] rounded-md p-1" />
              <img src="https://i.postimg.cc/HkBRSX5j/gitam-new-logo-removebg-preview.png" alt="GITAM" className="h-10 drop-shadow-md" />
              <img src="https://inurture.co.in/wp-content/uploads/2019/08/INurture-logo-white.png" alt="INurture" className="h-10 drop-shadow-md bg-[gray] rounded-md p-1" />
              <img src="https://dl.geu.ac.in/uploads/image/KWqx6liP-geu-logo.webp" alt="GEU" className="h-10 drop-shadow-md bg-[gray] rounded-md p-1" />
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
