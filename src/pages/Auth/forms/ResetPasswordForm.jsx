import React from "react";
import { FiKey } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";

const ResetPasswordForm = () => (
  <div>
    <h1 className="text-center mb-3 text-2xl font-bold text-[#1e584e]">
      Reset Password
    </h1>
    <form className="flex flex-col space-y-4">
      <label className="flex text-white items-center space-x-2">
        <FiKey className="text-[26px] text-[#1e584e]" />
        <input
          type="password"
          name="newPassword"
          placeholder="Enter New Password."
          className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
        />
      </label>
      <label className="flex text-white items-center space-x-2">
        <AiOutlineLock className="text-[26px] text-[#1e584e]" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password."
          className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
        />
      </label>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-[#235950] w-[200px] font-dosis hover:bg-[#063930] text-white font-bold py-2 px-4 rounded"
        >
          Reset Password
        </button>
      </div>
    </form>
  </div>
);

export default ResetPasswordForm;
