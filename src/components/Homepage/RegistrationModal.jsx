import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FiX, FiUser, FiPhone, FiMail, FiMapPin, FiBookOpen, FiKey, FiMap } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../../redux/features/authSlice';
import Loader from '../common/loader/Loader';


Modal.setAppElement('#root');

const RegistrationModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formType, setFormType] = useState('register'); // State to track the form type
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    password: '',
    gender: '',
    city: '',
    state: '',
    course: '',
    role: "user",
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalIsOpen(true);
    }, 9000); // 9 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const toggleFormType = () => {
    setFormType(formType === 'register' ? 'login' : 'register');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email: formData.email, password: formData.password }));
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Registration Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2 className='font-dosis font-bold text-[24px] text-[#235950]'>{formType === 'register' ? 'Register Now!' : 'Login'}</h2>
        <button onClick={() => setModalIsOpen(false)} className='text-[#235950] hover:text-[white] rounded-md p-2 hover:bg-[#235950]'>
          <FiX className='text-[22px]' />
        </button>
      </div>
      <div className="modal-body">
        {loading && <Loader />}
        {formType === 'register' ? (
          <form onSubmit={handleRegister} className='flex flex-col space-y-4'>
            {/* Registration form fields */}
            <label className="flex items-center space-x-2">
              <FiUser className='text-[#235950] text-[22px]' />
              <input type="text" name="name" placeholder='Full Name.' value={formData.name} onChange={handleChange} className="border-b-2 border-[#235950] p-2 w-full placeholder:text-[#235950] placeholder:font-anta" />
            </label>

            <label className="flex items-center space-x-2">
              <FiPhone className='text-[#235950] text-[22px]' />
              <input type="number" name="number" placeholder='Mobile Number.' value={formData.number} onChange={handleChange} className="border-b-2 border-[#235950] p-2 w-full placeholder:text-[#235950] placeholder:font-anta" />
            </label> 

            <label className="flex items-center space-x-2">
              <FiMail className='text-[#235950] text-[22px]' />
              <input type="email" name="email" placeholder='Email Address.' value={formData.email} onChange={handleChange} className="border-b-2 border-[#235950] p-2 w-full placeholder:text-[#235950] placeholder:font-anta" />
            </label>

            <label className="flex items-center space-x-2">
              <FiKey className='text-[#235950] text-[22px]' />
              <input type="password" name="password" placeholder='Enter Your Password.' value={formData.password} onChange={handleChange} className="border-b-2 border-[#235950] p-2 placeholder:text-[#235950] w-full placeholder:font-anta" />
            </label>

            <label className="flex items-center space-x-2">
              <FiBookOpen className="text-[#235950] text-[22px]" />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border-b-2 border-[#235950] text-[#235950] p-2 w-full font-anta"
              >
                <option value="" disabled defaultValue className='text-[#235950]'>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="flex items-center space-x-2">
              <FiMapPin className='text-[#235950] text-[22px]' />
              <input type="text" name="city" placeholder='City You Live In.' value={formData.city} onChange={handleChange} className="border-b-2 border-[#235950] p-2 w-full placeholder:text-[#235950] placeholder:font-anta" />
            </label>

            <label className="flex items-center space-x-2">
              <FiMap className='text-[#235950] text-[22px]' />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="border-b-2 border-[#235950] p-2 w-full text-[#235950] font-anta"
              >
                <option value="" disabled className="text-gray-400" defaultValue>Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </label>

            <label className="flex items-center space-x-2">
              <FiBookOpen className="text-[#235950] text-[22px]" />
              <select name="course" value={formData.course} onChange={handleChange} className="border-b-2 text-[#235950] border-[#235950] p-2 w-full font-anta">
                <option value="" disabled defaultValue className='text-gray-400'>
                  Select Course
                </option>
                <option value="B.Tech">B.Tech</option>
                <option value="B.Sc">B.Sc</option>
                <option value="B.Com">B.Com</option>
                <option value="BBA">BBA</option>
                <option value="BCA">BCA</option>
                <option value="BA">BA</option>
                <option value="MBA">MBA</option>
                <option value="M.Tech">M.Tech</option>
                <option value="LLB">LLB</option>
              </select>
            </label>
            <button type="submit" className="bg-[#235950] hover:bg-[#2f776b] text-white font-bold py-2 px-4 rounded">
              Register
            </button>
            {error && <p className="text-red-500 text-center mt-7">{error}</p>}
          </form>
        ) : (
          <form onSubmit={handleLogin} className='flex flex-col space-y-4'>
            {/* Login form fields */}
            <label className="flex items-center space-x-2">
              <FiMail className='text-[#235950] text-[22px]' />
              <input type="email" name="email" placeholder='Email Address.' value={formData.email} onChange={handleChange} className="border-b-2 border-[#235950] text-[#235950] p-2 w-full placeholder:text-[#235950] placeholder:font-anta" />
            </label>
            <label className="flex items-center space-x-2">
              <FiKey className='text-[#235950] text-[22px]' />
              <input type="password" name="password" placeholder='Enter Your Password.' value={formData.password} onChange={handleChange} className="border-b-2 text-[#235950] border-[#235950] placeholder:text-[#235950] rounded-md p-2 w-full placeholder:font-anta" />
            </label>
            <button type="submit" className="bg-[#235950] hover:bg-[#2f776b] text-white font-bold py-2 px-4 rounded">
              Login
            </button>
            {error && <p className="text-red-500 text-center mt-7">{error}</p>}
          </form>
        )}
        <div className="mt-4">
          <button onClick={toggleFormType} className="text-[#235950] rounded-md p-2">
            {formType === 'register' ? (
              <p>Already a user? <span onClick={toggleFormType} className="cursor-pointer hover:underline text-[#235950] font-dosis font-semibold">Login</span>!</p>
            ) : (
              <p>New here? <span onClick={toggleFormType} className="cursor-pointer text-[#235950] hover:underline font-dosis font-semibold">Register</span>!</p>
            )}          
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RegistrationModal;
