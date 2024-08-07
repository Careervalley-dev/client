import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/features/authSlice'; // Adjust the import path as necessary
import { FiMail, FiKey } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../../components/common/loader/Loader';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      <h1 className="text-center mb-3 text-2xl font-bold text-[#1e584e]">Login</h1>
      {loading && <Loader />}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex text-[#1e584e] items-center space-x-2">
          <FiMail className="text-[26px] text-[#1e584e]" />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address."
            className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:text-[#235950] placeholder:font-anta"
          />
        </label>
        <label className="flex text-[#1e584e] items-center space-x-2">
          <FiKey className="text-[26px] text-[#1e584e]" />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password."
            className="border-b-2 border-[#235950] rounded-md p-2 w-full placeholder:text-[#235950] placeholder:font-anta"
          />
        </label>
        <p className="ml-7">
          <Link to={"/auth/forgot-password"} className="hover:underline">
            Forgot password?
          </Link>
        </p>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-[#235950] w-[200px] font-dosis hover:bg-[#063930] text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 text-center mt-5">{error}</p>}

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
};

export default LoginForm;
