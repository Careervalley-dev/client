import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiUser, FiPhone, FiMail, FiMapPin, FiBookOpen, FiKey, FiMap } from "react-icons/fi";
import { PiGenderIntersexBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../redux/features/authSlice";
import Loader from "../../../components/common/loader/Loader";


const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    city: "",
    state: "",
    course: "",
    role: "user",
    gender: "",
  });

  console.log(formData)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div>
      {loading && <Loader />}
      <h1 className="text-center mb-3 text-2xl font-bold text-[#1e584e]">
        Sign Up
      </h1>
      <form
        className="flex flex-col justify-center space-y-4"
        onSubmit={handleSubmit}
      >
        {/* username */}
        <label className="flex text-[#235950] items-center space-x-2">
          <FiUser className="text-[26px] text-[#1e584e]" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name."
            className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:text-[#235950] placeholder:font-anta"
          />
        </label>

        {/* number */}
        <label className="flex text-[#235950] items-center space-x-2">
          <FiPhone className="text-[26px] text-[#1e584e]" />
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Mobile Number."
            className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:text-[#235950] placeholder:font-anta"
          />
        </label>

        {/* email */}
        <label className="flex text-[#235950] items-center space-x-2">
          <FiMail className="text-[26px] text-[#1e584e]" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address."
            className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:text-[#235950] placeholder:font-anta"
          />
        </label>

        {/* password */}
        <label className="flex text-[#235950] items-center space-x-2">
          <FiKey className="text-[26px] text-[#1e584e]" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Your Password."
            className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:text-[#235950] placeholder:font-anta"
          />
        </label>

        {/* gender */}
        <label className="flex text-[#235950] items-center space-x-2">
          <PiGenderIntersexBold className="text-[26px] text-[#1e584e]" />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border-b-2 border-[#235950] rounded-md p-2 w-full text-[#235950] font-anta"
          >
            <option value="" className="font-anta text-gray-400" disabled>Select Gender</option>
            <option value="male" className="font-anta">Male</option>
            <option value="female" className="font-anta">Female</option>
            <option value="other" className="font-anta">Other</option>
          </select>
        </label>

        {/* city */}
        <label className="flex text-[#235950] items-center space-x-2">
          <FiMapPin className="text-[26px] text-[#1e584e]" />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City You Live In."
            className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:text-[#235950] placeholder:font-anta"
          />
        </label>

        {/* state */}
        <label className="flex items-center space-x-2">
          <FiMap className='text-[#235950] text-[22px]' />
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="border-b-2 border-[#235950] rounded-md p-2 w-full text-[#235950] font-anta"
          >
            <option value="" disabled className="text-[#235950]" defaultValue>Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </label>

        {/* course */}
        <label className="flex text-[#235950] items-center space-x-2">
          <FiBookOpen className="text-[26px] text-[#1e584e]" />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="border-b-2 border-[#235950] rounded-md p-2 w-full text-[#235950] font-anta"
          >
            <option value="" className="font-anta text-[#235950]" defaultValue disabled>Select Course</option>
            <option value="B.Tech" className="font-anta">B.Tech</option>
            <option value="B.Sc" className="font-anta">B.Sc</option>
            <option value="B.Com" className="font-anta">B.Com</option>
            <option value="BBA" className="font-anta">BBA</option>
            <option value="BCA" className="font-anta">BCA</option>
            <option value="BA" className="font-anta">BA</option>
            <option value="MBA" className="font-anta">MBA</option>
            <option value="M.Tech" className="font-anta">M.Tech</option>
            <option value="LLB" className="font-anta">LLB</option>
          </select>
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
      {error && <p className="text-red-500 text-center mt-7">{error}</p>}

      <div className="mt-4 text-center">
        <p>
          Already a user?{" "}
          <span className="text-[#1e584e] hover:underline cursor-pointer">
            <Link to="/auth/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
