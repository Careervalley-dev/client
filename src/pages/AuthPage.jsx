import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Auth/forms/LoginForm";
import ResetPasswordForm from "./Auth/forms/ResetPasswordForm";
import SignupForm from "./Auth/forms/SignupForm";
import ForgotPasswordForm from "./Auth/forms/ForgotPasswordForm";
import  OtpValidationForm  from "./Auth/forms/OtpValidationForm";

const AuthPage = () => {
  // #88cbc7cc
  return (
    // https://i.postimg.cc/q7rJxK1X/kenny-eliason-1-a-A2-Fadydc-unsplash.jpg
    <div className="flex flex-col md:flex-row p-24 h-screen justify-center items-center md:justify-end bg-[url('https://i.postimg.cc/wjgxNshC/Whats-App-Image-2024-07-06-at-19-30-09-0069ee4d.jpg')] bg-cover bg-center">
      <div className="p-8 lg:p-12 rounded-md w-[80vw] lg:w-[40vw] bg-[white]/80">
        <div className="modal-header flex flex-col justify-start">
          <div>
            <img
              src="https://thecareervalley.com/wp-content/uploads/2023/07/Career-Vallet-Logo.png"
              className="w-44"
            />
          </div>
        </div>
        <div className="modal-body">
          <Routes>
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="forgot-password" element={<ForgotPasswordForm />} />
            <Route path="reset-password" element={<ResetPasswordForm />} />
            <Route path="validate-otp" element={<OtpValidationForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;



// {formType === "register" ? (
//   <form className="flex flex-col space-y-4">
//     {/* Registration form fields */}
//     <label className="flex text-white items-center space-x-2">
//       <FiUser className="text-[26px]"/>
//       <input
//         type="text"
//         name="name"
//         placeholder="Full Name."
//         className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
//       />
//     </label>
//     <label className="flex text-white items-center space-x-2">
//       <FiPhone className="text-[26px]"/>
//       <input
//         type="number"
//         name="number"
//         placeholder="Mobile Number."
//         className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
//       />
//     </label>
//     <label className="flex text-white items-center space-x-2">
//       <FiMail className="text-[26px]"/>
//       <input
//         type="email"
//         name="email"
//         placeholder="Email Address."
//         className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
//       />
//     </label>
//     <label className="flex text-white items-center space-x-2">
//       <FiKey className="text-[26px]"/>
//       <input
//         type="password"
//         name="password"
//         placeholder="Enter Your Password."
//         className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
//       />
//     </label>
//     <label className="flex text-white items-center space-x-2">
//       <FiMapPin className="text-[26px]"/>
//       <input
//         type="text"
//         name="city"
//         placeholder="City You Live In."
//         className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
//       />
//     </label>
//     <label className="flex text-white items-center space-x-2">
//       <FiBookOpen className="text-[26px]"/>
//       <input
//         type="text"
//         name="course"
//         placeholder="Course Interested In."
//         className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
//       />
//     </label>
//     <button
//       type="submit"
//       className="bg-[#235950] font-dosis hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//     >
//       Register
//     </button>
//   </form>
// ) : (
//   <form className="flex flex-col space-y-4">
//     {/* Login form fields */}
//     <label className="flex text-white items-center space-x-2">
//       <FiMail className="text-[26px]"/>
//       <input
//         type="email"
//         name="email"
//         placeholder="Email Address."
//         className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
//       />
//     </label>
//     <label className="flex text-white items-center space-x-2">
//       <FiKey className="text-[26px]"/>
//       <input
//         type="password"
//         name="password"
//         placeholder="Enter Your Password."  
//         className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
//       />
//     </label>
//     <button
//       type="submit"
//       className="bg-[#235950] font-dosis hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//     >
//       Login
//     </button>
//   </form>
// )}
// <div className="text-center mt-4">
//   {formType === "register" ? (
//     <p className="text-white">
//       Already a user?{" "}
//       <span
//         onClick={toggleFormType}
//         className="cursor-pointer text-[#235950] hover:text-[#93e3d6] font-dosis"
//       >
//         Login
//       </span>
//       !
//     </p>
//   ) : (
//     <p className="text-white">
//       New here?{" "}
//       <span
//         onClick={toggleFormType}
//         className="cursor-pointer text-[#235950] hover:text-[#93e3d6] font-dosis"
//       >
//         Register
//       </span>
//       !
//     </p>
//   )}
// </div>
