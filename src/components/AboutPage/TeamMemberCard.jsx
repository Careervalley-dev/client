import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamMemberCard = ({ name, designation, image, linkedinUrl, facebookUrl, instagramUrl, email }) => {
  return (
    <div className="card shadow-lg hover:text-white">
      <div className="image">
        <img src={image} alt={`${name}'s profile`} />
      </div>
      <div className="card-info font-dosis">
        <span className="hover:text-white">{name}</span>
        <p>{designation}</p>
        {/* <div className="social-icons mb-4 gap-x-4 flex text-[18px] mt-2">
          <span>
            <a href={linkedinUrl}>
              <FaLinkedin className="hover:text-[#2d49ff]" />
            </a>
          </span>
          <span>
            <a href={facebookUrl}>
              <FaFacebook className="hover:text-[#3470fb]" />
            </a>
          </span>
          <span>
            <a href={instagramUrl}>
              <FaInstagram className="hover:text-[#ea3773]" />
            </a>
          </span>
          <span>
            <a href={`mailto:${email}`}>
              <FaEnvelope className="hover:text-red-600" />
            </a>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default TeamMemberCard;
