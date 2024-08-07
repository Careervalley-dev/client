import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiMail } from "react-icons/fi";
import { forgotPassword } from "../../../redux/features/authSlice";
import Loader from "../../../components/common/loader/Loader";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false); // State to track success
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email))
      .unwrap()
      .then(() => {
        setSuccess(true); // Set success to true on successful request
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      {success ? (
        <p className="text-center text-xl font-semibold text-[#1e584e]">
          Check your email inbox for the password reset link.
        </p>
      ) : (
        <>
          <h1 className="text-center mb-3 text-2xl font-bold text-[#1e584e]">
            Forgot password?
          </h1>
          <p className="my-3 font-semibold ml-7 text-center text-[#1e584e]">
            Enter your registered email address below and we'll send you a mail with the password reset link.
          </p>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <label className="flex text-[#1e584e] items-center space-x-2">
              <FiMail className="text-[26px] text-[#1e584e]" />
              <input
                type="email"
                name="email"
                placeholder="Email Address."
                className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:text-[#235950] font-anta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            {loading ? (
              <Loader />
            ) : (
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-[#235950] w-[200px] font-dosis hover:bg-[#063930] text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            )}
          </form>
          {error && <p className="text-red-500 text-center mt-5">{error}</p>}
        </>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
