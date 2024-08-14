import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import './team.css';

const TeamMemberCard = ({ name, designation, image, linkedinUrl, facebookUrl, instagramUrl, email, info }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="relative card-container">
      <div className="card shadow-lg hover:text-white">
        <div className="image">
          <img src={image} alt={`${name}'s profile`} />
        </div>
        <div className="card-info font-dosis">
          <span className="hover:text-white">{name}</span>
          <p>{designation}</p>
        </div>
        <FaInfoCircle className="info-icon" onClick={toggleOverlay} />
      </div>
      
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <p>{info}</p>
            <button onClick={toggleOverlay} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
