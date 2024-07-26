import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamMemberCard = ({ name, designation, image, linkedin }) => {
  return (
    <div class="card shadow-lg hover:text-white">
      <div class="image">
        <img src={image} />
      </div>
      <div class="card-info font-dosis">
        <span className="hover:text-[white]">{name}</span>
        <p>{designation}</p>
      </div>
      <div className="mb-4 gap-x-4 flex text-[18px] mt-2 z-10">
        <Link to="https://www.linkedin.com/in/aditya--sahu89/">
          <FaLinkedin className="hover:text-[#2d49ff]"/>
        </Link>
        <Link to="https://www.facebook.com" className="hover:text-[#3470fb] Z-10">
          <FaFacebook className="hover:text-[#3470fb]"/>
        </Link>
        <Link to="https://www.instagram.com">
          <FaInstagram className="hover:text-[#ea3773]"/>
        </Link>
        <Link to="mailto:example@gmail.com">
          <FaEnvelope className="hover:text-red-600"/>
        </Link>
      </div>
    </div>
  );
};

export default TeamMemberCard;
