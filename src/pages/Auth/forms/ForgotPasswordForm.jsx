import React from "react";
import { FiMail } from "react-icons/fi";

const ForgotPasswordForm = () => (
  <div>
    <h1 className="text-center mb-3 text-2xl font-bold text-[#1e584e]">
      Forgot password?
    </h1>
    <p className="my-3 font-semibold ml-7 text-center">Enter your registered email address below and we'll send you a mail with the password reset link.</p>
    <form className="flex flex-col space-y-4">
      <label className="flex text-white items-center space-x-2">
        <FiMail className="text-[26px] text-[#1e584e]" />
        <input
          type="email"
          name="email"
          placeholder="Email Address."
          className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
        />
      </label>
      
      <div className="flex justify-center items-center">
      <button
        type="submit"
        className="bg-[#235950] w-[200px] font-dosis hover:bg-[#063930] text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      </div>
    </form>
  </div>
);

export default ForgotPasswordForm;
