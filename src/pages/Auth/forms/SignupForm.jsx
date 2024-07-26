import React from "react";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiBookOpen,
  FiKey,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const SignupForm = () => (
  <div>
    <h1 className="text-center mb-3 text-2xl font-bold text-[#1e584e]">Sign Up</h1>
    <form className="flex flex-col justify-center space-y-4">
      <label className="flex text-white items-center space-x-2">
        <FiUser className="text-[26px] text-[#1e584e]" />
        <input
          type="text"
          name="name"
          placeholder="Full Name."
          className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
        />
      </label>
      <label className="flex text-white items-center space-x-2">
        <FiPhone className="text-[26px] text-[#1e584e]" />
        <input
          type="number"
          name="number"
          placeholder="Mobile Number."
          className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
        />
      </label>
      <label className="flex text-white items-center space-x-2">
        <FiMail className="text-[26px] text-[#1e584e]" />
        <input
          type="email"
          name="email"
          placeholder="Email Address."
          className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
        />
      </label>
      <label className="flex text-white items-center space-x-2">
        <FiKey className="text-[26px] text-[#1e584e]" />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password."
          className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
        />
      </label>
      <label className="flex text-white items-center space-x-2">
        <FiMapPin className="text-[26px] text-[#1e584e]" />
        <input
          type="text"
          name="city"
          placeholder="City You Live In."
          className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
        />
      </label>
      <label className="flex text-white items-center space-x-2">
        <FiBookOpen className="text-[26px] text-[#1e584e]" />
        <input
          type="text"
          name="course"
          placeholder="Course Interested In."
          className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
        />
      </label>
      <div className="flex justify-center items-center">
      <button
        type="submit"
        className="bg-[#235950] w-[200px] font-dosis hover:bg-[#063930] text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>
      </div>
      
    </form>

    <div className="mt-4 text-center">
        <p>Already a user? <span className="text-[#1e584e] hover:underline cursor-pointer"><Link to={"/auth/login"}>Login</Link></span></p>
    </div>
  </div>
);

export default SignupForm;
