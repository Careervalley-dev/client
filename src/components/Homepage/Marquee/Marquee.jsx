import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const colleges = [
  {
    name: "Amity University",
    location: "Noida, New Delhi",
    siteUrl: "https://www.amity.edu/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454674/Amity_hh271q.png",
  },
  {
    name: "Alliance University",
    location: "Bengaluru, Karnataka",
    siteUrl: "https://www.alliance.edu.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454672/alliance_izfxmg.png",
  },
  {
    name: "GNIOT Group of Institutes",
    location: "Greater Noida, UP",
    siteUrl: "https://www.gniotgroup.edu.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454671/gniot_wr09bu.png",
  },
  {
    name: "Flame University",
    location: "Pune, Maharashtra",
    siteUrl: "https://www.flame.edu.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454674/FLAME_p0kd4v.png",
  },
  {
    name: "S.P MANDALI's WE SCHOOL (Welingkar)",
    location: "Bangalore, Karnataka",
    siteUrl: "https://www.welingkar.org/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454674/welinkars_lx0yab.png",
  },
  {
    name: "ITM University",
    location: "Vadodara, Gujarat",
    siteUrl: "https://www.itm.edu/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454671/ITM_xao0qo.png",
  },
  {
    name: "SRM UNIVERSITY",
    location: "Sonepat, Haryana",
    siteUrl: "https://srmuniversity.ac.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722503491/srm_sonepat_iwsydt.png",
  },
  {
    name: "Vishwa Vishwani School of Business",
    location: "Hyderabad, Telangana",
    siteUrl: "https://www.vishwavishwani.ac.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454673/vvism1_ma10xj.png",
  },
  {
    name: "SSIM",
    location: "Hyderabad, Telangana",
    siteUrl: "https://ssim.ac.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454673/SSIM_wu8lrx.png",
  },
  {
    name: "INurture Education Solutions",
    location: "Bengaluru, Karnataka",
    siteUrl: "https://inurture.co.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454673/INurture_ss0okn.png",
  },
  {
    name: "Accurate Group of Institutions",
    location: "Greater Noida, Uttar Pradesh",
    siteUrl: "https://www.accurate.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722512700/accurate__2_-removebg-preview_kvqszs.png",
  },
  {
    name: "R V University",
    location: "Bengaluru, Karnataka",
    siteUrl: "https://rvu.edu.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454671/RV_University_xtife9.png",
  },
  {
    name: "Poddar Group of Institutions",
    location: "Jaipur, Rajasthan",
    siteUrl: "https://www.poddarinstitute.org/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454673/poddar_peth3b.png",
  },
  {
    name: "Mody University",
    location: "Sikar, Rajasthan",
    siteUrl: "https://www.modyuniversity.ac.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454673/mody_gxp1mk.webp",
  },
  {
    name: "Graphic Era University",
    location: "Dehradun, Uttarakhand",
    siteUrl: "https://geu.ac.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454671/Graphic_Era_cigox1.png",
  },
  {
    name: "ISBR",
    location: "Bengaluru, Karnataka",
    siteUrl: "https://www.isbr.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454672/ISBRlogo_aihi7o.png",
  },
  {
    name: "Mangalmay Group of Institutions",
    location: "Greater Noida, UP",
    siteUrl: "https://www.mangalmay.org/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454672/mangalmay_icfaz2.png",
  },
  {
    name: "Lyod Business School(Noida)",
    location: "Greater Noida, UP",
    siteUrl: "https://www.lloydbusinessschool.edu.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454672/lloyd_tfolnk.png",
  },
  {
    name: "Nicmar",
    location: "Hyderabad, Telengana",
    siteUrl: "https://www.nicmar.ac.in/hyderabad/campus",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454672/NICMAR_nfdssc.png",
  },
  {
    name: "SOIM",
    location: "Hyderabad, Telengana",
    siteUrl: "https://soim.edu.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454673/soim_irj7vt.png",
  },
  {
    name: "Gitam",
    location: "Hyderabad, telengana",
    siteUrl: "https://www.gitam.edu/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454674/gitam_i4ogwv.png",
  },
  {
    name: "Badruka School of Management",
    location: "Hyderabad, Telengana",
    siteUrl: "https://www.badrukaschoolofmanagement.edu.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454672/badruka_eamxew.png",
  },
  {
    name: "Sparsh (Noida)",
    location: "Greater Noida, UP",
    siteUrl: "https://www.sparshgbs.in/",
    imgUrl: "https://res.cloudinary.com/du3i8e0se/image/upload/v1722454672/sparsh-logo_hg4zex.png",
  },
];

const Marquee = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    arrows: false,
  };

  return (
    <div className="marquee-container bg-gradient-to-b lg:bg-gradient-to-br from-[#426e66] via-[#093029] to-[#0f312c] mt-8 py-28">
      <Slider {...settings}>
        {colleges.map((college, index) => (
          <div key={index} className="p-2">
            <a href={college.siteUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={college.imgUrl}
                alt={college.name}
                className="w-32 h-24 object-contain mx-auto px-4 py-2 bg-white/60 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Marquee;
