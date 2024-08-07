import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordPut, clearResetPasswordStatus } from '../../../redux/features/authSlice';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../../../components/common/loader/Loader';
import { FiKey } from "react-icons/fi";

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password match
  const { id, token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to programmatically navigate
  const { loading, error, resetPasswordStatus } = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    dispatch(resetPasswordPut({ id, token, password: newPassword }))
      .then(() => {
        if (!error) {
          // Show success message and redirect after 5 seconds
          setTimeout(() => {
            navigate('/'); // Redirect to homepage
          }, 5000);
        }
      });
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (newPassword && e.target.value !== newPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <h1 className="text-center mb-3 text-2xl font-bold text-[#1e584e]">
        Reset Password
      </h1>
      {resetPasswordStatus && <p className="text-green-500 text-center">{resetPasswordStatus}</p>}
      {!passwordsMatch && <p className="text-red-500 text-center">Passwords do not match!</p>}
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <label className="flex text-[#1e584e] items-center space-x-2">
          <FiKey className="text-[26px] text-[#1e584e]" />
          <input
            type="password"
            name="newPassword"
            placeholder="Enter New Password."
            className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:text-[#235950] font-anta"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </label>
        <label className="flex text-[#1e584e] items-center space-x-2">
          <FiKey className="text-[26px] text-[#1e584e]" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password."
            className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:text-[#235950] font-anta"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </label>
        <button
          type="submit"
          className="bg-[#235950] font-dosis hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          Reset Password
        </button>
      </form>
      {error && <p className="text-red-500 text-center">{error}</p>}

    </div>
  );
};

export default ResetPasswordForm;
