import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp } from '../../../redux/features/authSlice';
import Loader from '../../../components/common/loader/Loader';
import { useNavigate } from 'react-router-dom';

const OtpValidationForm = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, phoneNumber, verificationError, verificationLoading, verifyOtpStatus } = useSelector((state) => state.auth);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input field
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('text').split('');
    if (pasteData.length === otp.length) {
      setOtp(pasteData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    dispatch(verifyOtp({ number: phoneNumber, otp: otpCode }));
  };

  // Check for successful verification and redirect
  if (verifyOtpStatus === 'Phone number verified successfully') {
    navigate('/'); // Replace '/homepage' with your actual homepage route
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      {loading && <Loader />}
      <p className="my-3 font-semibold ml-7 text-center">Enter the OTP sent to your registered Mobile number.</p>
      <div className="flex space-x-2">
        {otp.map((data, index) => (
          <input
            className="w-10 h-10 text-center text-xl border border-gray-300 rounded focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="otp"
            maxLength="1"
            key={index}
            value={data}
            onChange={e => handleChange(e.target, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={el => inputRefs.current[index] = el}
          />
        ))}
      </div>
      <p className="text-center text-sm text-gray-600">OTP Entered: {otp.join('')}</p>
      {verificationError && <p className="text-center text-red-500">{verificationError}</p>}
      <button
        type="submit"
        className={`bg-[#235950] w-[200px] font-dosis hover:bg-[#063930] text-white font-bold py-2 px-4 rounded ${verificationLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={verificationLoading}
      >
        {verificationLoading ? 'Verifying...' : 'Submit'}
      </button>
    </form>
  );
};

export default OtpValidationForm;
