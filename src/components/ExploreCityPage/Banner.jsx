import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Banner = ({cityName}) => {
 const carouselImages = [
    'https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/1432fedb88c0d1cc56f4c496a80f251c.jpg',
    'https://assetmonk.com/wp-content/uploads/shutterstock_441579379-min-2048x1152.webp',
 ];

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
