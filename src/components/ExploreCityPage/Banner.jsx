import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Banner = ({cityName}) => {
  const cityImages = {
    Delhi: [
      'https://res.cloudinary.com/du3i8e0se/image/upload/v1723618263/pexels-vishalcreation-14094276_cnsbli.jpg',
      'https://res.cloudinary.com/du3i8e0se/image/upload/v1723618256/pexels-ranjeet-chauhan-485922-19927019_yxmavw.jpg',
    ],
    Bangalore: [
      'https://res.cloudinary.com/du3i8e0se/image/upload/v1723618589/1432fedb88c0d1cc56f4c496a80f251c_hbzvpu.webp',
      'https://res.cloudinary.com/du3i8e0se/image/upload/v1723618589/shutterstock_441579379-min-2048x1152_i4o3bx.webp',
    ],
    Hyderabad: [
      'https://res.cloudinary.com/du3i8e0se/image/upload/v1723619426/pexels-cinesumit-9373357_jfjely.jpg',
      'https://res.cloudinary.com/du3i8e0se/image/upload/v1723619428/pexels-dropshado-1970187_ecpbwd.jpg',
    ],
    Mumbai: [
      'https://res.cloudinary.com/du3i8e0se/image/upload/v1723618820/pexels-shubam-bhasin-1091152-6522109_em4vbi.jpg',
      'https://res.cloudinary.com/du3i8e0se/image/upload/v1723618812/pexels-ashishpx-8990788_skpebo.jpg',
    ],
    Kolkata: [
      'https://res.cloudinary.com/du3i8e0se/image/upload/v1723619113/pexels-samitkumarsinha-11893196_wp7gic.jpg',
      'https://res.cloudinary.com/du3i8e0se/image/upload/v1723619140/pexels-kolkatarchobiwala-16653812_vwzasf.jpg',
    ],
    Chennai: [
      'https://res.cloudinary.com/du3i8e0se/image/upload/v1723619694/chennai-railway-station-9pgf80lrc5w26s3p_rkeqxd.webp',
      'https://lh5.googleusercontent.com/proxy/EiVJG2gdyJBb2WJquLIf3gwltNLXdllN-Orr10h_JMOn9dZHny9BNN9DgbhbIT7G7-QIYlEtsgqNWg0Ndd--kN0xdszS_UClDWeZSniZLOOgHA4RueawA7aP3Zfj6gXkEgivrbcz0IfSCOXR6X0Ypkq5D84XuRA=w675-h390-n-k-no',
    ],
  };

  const carouselImages = cityImages[cityName];

 return (
    <div className="relative banner-wrapper">
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop  interval={2500}>
        {carouselImages.map((image, index) => (
          <div key={index} className="h-[70vh] top-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <TypeAnimation
                 sequence={[
                    `${cityName}`,
                    1500,
                    'The Garden City',
                    1500,
                    'Find over 100+ colleges here!',
                    1500,
                 ]}
                 speed={50}
                 style={{ fontSize: '2em' }}
                 repeat={Infinity}
                 className='font-anta'
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
 );
};

export default Banner;
