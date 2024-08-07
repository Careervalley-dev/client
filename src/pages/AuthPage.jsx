import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Auth/forms/LoginForm";
import ResetPasswordForm from "./Auth/forms/ResetPasswordForm";
import SignupForm from "./Auth/forms/SignupForm";
import ForgotPasswordForm from "./Auth/forms/ForgotPasswordForm";
import OtpValidationForm from "./Auth/forms/OtpValidationForm";

const AuthPage = () => {
  return (
    <div className="flex flex-col md:flex-row p-24 h-screen justify-center items-center md:justify-end bg-[url('https://res.cloudinary.com/du3i8e0se/image/upload/v1722531211/WhatsApp_Image_2024-07-06_at_19.30.09_0069ee4d_onaral.jpg')] bg-cover bg-center">
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
            <Route
              path="reset-password/:id/:token"
              element={<ResetPasswordForm />}
            />
            <Route path="validate-otp" element={<OtpValidationForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
