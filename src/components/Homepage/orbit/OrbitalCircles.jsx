// OrbitalCircle.js
import React from "react";
import { FaUserGraduate } from "react-icons/fa";
// import './OrbitalCircle.css'; // Custom CSS for animations

const courses = [
  "B.Tech", "B.Sc", "B.Com", "BBA", "BCA",
  "BA", "MBA", "M.Tech", "LLB", "MA"
];

const OrbitalCircle = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <div className="absolute z-10 text-center">
        <FaUserGraduate className="text-6xl text-blue-500" />
      </div>
      <div className="absolute w-full h-full flex items-center justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`absolute flex items-center justify-center 
              animation-${index % 2 === 0 ? 'clockwise' : 'anticlockwise'}`}
            style={{
              '--duration': 10,
              '--radius': 100 + Math.floor(index / 2) * 50,
              '--rotation-start': (index % 2) * 180, // 0 or 180 degrees
            }}
          >
            <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
              <span>{course}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrbitalCircle;
