import React from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Card.css";

const TeamCard = ({ name, designation, image, linkedinUrl, facebookUrl, instagramUrl, email, info }) => {
  return (
    <div className="member_card">
      <a href={`mailto:${email}`} className="mail">
        <FiMail size={24} />
      </a>
      <div className="profile-pic">
        <img src={image} alt="Profile" />
      </div>
      <div className="bottom">
        <div className="member_card_content">
          <span className="name">{name}</span>
          <span className="about-me">{designation}</span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            {/* LinkedIn Icon */}
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[15px]" />
            </a>

            {/* Facebook Icon */}
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="text-[15px]" />
            </a>

            {/* Instagram Icon */}
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[15px]" />
            </a>
          </div>
          <button className="button">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
