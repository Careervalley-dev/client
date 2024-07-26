import React from 'react';

const Gallery = ({ images, onImageClick }) => {
  return (
    <div className="" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {images.map((image, index) => (
        <div key={index} style={{ width: '30%', }} className='m-4' onClick={() => onImageClick(image)}>
          <img src={image} alt={`Gallery Image ${index}`} style={{ width: '100%', height: 'auto' }} className='rounded-md'/>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
