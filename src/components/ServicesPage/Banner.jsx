import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Banner = () => {
 const carouselImages = [
    'https://i.postimg.cc/Fs2hx2GY/IMG-1271.jpg',
    'https://i.postimg.cc/RVQzcN3D/IMG-1270.jpg',
    'https://i.postimg.cc/fRLgJLYX/IMG-1037.jpg',
 ];

 return (
    <div className="relative banner-wrapper">
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop  interval={3500}>
        {carouselImages.map((image, index) => (
          <div key={index} className="h-[70vh] top-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <TypeAnimation
                 sequence={[
                    'Classroom Sessions & Open Houses/Seminars',
                    2000,
                    'Campus Visits & Educational Fairs',
                    2000,
                    '1-1 Counseling & Admission Support',
                    1000,
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
