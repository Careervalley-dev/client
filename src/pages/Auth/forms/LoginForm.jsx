import React from "react";
import { FiMail, FiKey } from "react-icons/fi";
import { Link } from "react-router-dom";

const LoginForm = () => (
  <div>
    <h1 className="text-center mb-3 text-2xl font-bold text-[#1e584e]">
      Login
    </h1>
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
      <label className="flex text-white items-center space-x-2">
        <FiKey className="text-[26px] text-[#1e584e]" />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password."
          className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:font-anta"
        />
      </label>
      <p className="ml-7">
        <Link to={"/auth/forgot-password"} className="hover:underline">
          forgot password?
        </Link>
      </p>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-[#235950] w-[200px] font-dosis hover:bg-[#063930] text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </form>

    <div className="mt-4 text-center">
      <p>
        New here?{" "}
        <span className="text-[#1e584e] hover:underline cursor-pointer">
          <Link to={"/auth/signup"}>Signup</Link>
        </span>
      </p>
    </div>
  </div>
);

export default LoginForm;
