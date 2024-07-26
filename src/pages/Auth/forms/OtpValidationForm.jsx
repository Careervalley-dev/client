import React, { useState, useRef } from 'react';

const OtpValidationForm = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

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

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-2">
        {otp.map((data, index) => {
          return (
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
          );
        })}
      </div>
      <p className="text-center text-sm text-gray-600">OTP Entered: {otp.join('')}</p>
    </div>
  );
}

export default OtpValidationForm;
