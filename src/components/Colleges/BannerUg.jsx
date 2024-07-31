import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const BannerUg = () => {
 const carouselImages = [
    'https://i.postimg.cc/Fs2hx2GY/IMG-1271.jpg',
    'https://i.postimg.cc/RVQzcN3D/IMG-1270.jpg',
    'https://i.postimg.cc/fRLgJLYX/IMG-1037.jpg',
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
                    'Find a wide range of Colleges',
                    1000,
                    'Find various courses',
                    1000,
                    'Find over 100+ communities',
                    1000,
                 ]}
                 speed={50}
                 repeat={Infinity}
                 className='inline-block text-5xl font-bold drop-shadow-lg'
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
 );
};

export default BannerUg;
