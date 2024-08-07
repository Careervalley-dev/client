import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { IoIosHome, IoMdInformationCircle } from "react-icons/io";
import { MdOutlineMiscellaneousServices, MdEventNote } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { AiOutlineDownCircle } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/features/authSlice';





const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCollegesOpen, setIsCollegesOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 550);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (dropdown === "about") {
      setIsAboutOpen(!isAboutOpen);
      setIsCollegesOpen(false);
      setIsEventsOpen(false);
      setIsProfileOpen(false);
      setIsCourseOpen(false);
    } else if (dropdown === "colleges") {
      setIsCollegesOpen(!isCollegesOpen);
      setIsAboutOpen(false);
      setIsEventsOpen(false);
      setIsProfileOpen(false);
      setIsCourseOpen(false);
    } else if (dropdown === "events") {
      setIsEventsOpen(!isEventsOpen);
      setIsAboutOpen(false);
      setIsCollegesOpen(false);
      setIsProfileOpen(false);
      setIsCourseOpen(false);
    } else if (dropdown === "profile") {
      setIsProfileOpen(!isProfileOpen);
      setIsAboutOpen(false);
      setIsCollegesOpen(false);
      setIsEventsOpen(false);
      setIsCourseOpen(false);
    } else if (dropdown === "courses") {
      setIsCourseOpen(!isCourseOpen);
      setIsProfileOpen(false);
      setIsAboutOpen(false);
      setIsCollegesOpen(false);
      setIsEventsOpen(false);
    }
  };

  const closeAllDropdowns = () => {
    setIsAboutOpen(false);
    setIsCollegesOpen(false);
    setIsEventsOpen(false);
    setIsCourseOpen(false);
    setIsProfileOpen(false);
  };

  const handleOptionSelect = () => {
    closeAllDropdowns();
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`w-full fixed z-50 backdrop-blur-sm shadow-md transition-colors duration-300 ${isScrolled ? "bg-white/80" : "bg-[white]/80"
        } ${isScrolled ? "text-white" : "text-black"} border-b-2 border-[#2A675C]`}
    >
      <div className="bg-[#2A675C] flex flex-col lg:flex-row py-2 text-white lg:h-[45px] justify-center items-center">
        <p>Our Events are live now 🎉</p>
        <button className="bg-[#2A675C] mt-2 lg:mt-0 ring-white ring-1 text-white px-6 py-1 rounded-md shadow-lg hover:bg-[#24594e] transition duration-300 ease-in-out lg:ml-4"><Link to="/events">Register</Link></button>
      </div>


      <div className="container py-4 px-2 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col w-3/5 transition-transform duration-300 ease-in-out">
          <div className="glow-container">
            <Link to="/" onClick={toggleMenu}>
              <img
                src="https://res.cloudinary.com/du3i8e0se/image/upload/v1722532332/CV_logo_yfndbw.png"
                alt="Company Logo"
                className="h-[60px] w-auto glow-effect"
              />
            </Link>
          </div>
          {/* <div className="mt-5">
            <DropdownMenu />
          </div> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <nav className="flex space-x-6">

            {/* HOME */}
            <Link
              to="/"
              className={`flex items-center gap-x-2 font-dosis font-bold text-[20px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                } ${isActive("/") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              onClick={handleOptionSelect}
            >
              Home
            </Link>

            {/* ABOUT */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("about")}
                className={`flex items-center gap-x-2 font-dosis font-bold text-[20px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                  } ${isActive("/about") || isActive("/team") || isActive("/experts") || isActive("/gallery") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              >
                About
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${isAboutOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {isAboutOpen && (
                <div className="absolute mt-6 w-[200px] text-black bg-white border rounded shadow-lg z-20">
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">About</span>
                  </Link>
                  <Link
                    to="/team"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">Team</span>
                  </Link>
                  <Link
                    to="/experts"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">Experts</span>
                  </Link>
                  <Link
                    to="/gallery"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">Gallery</span>
                  </Link>
                </div>
              )}
            </div>

            {/* COLLEGES */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("colleges")}
                className={`flex items-center gap-x-2 font-bold font-dosis text-[20px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                  } ${isActive("/colleges/ug") || isActive("/colleges/pg") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              >
                Colleges
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${isCollegesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {isCollegesOpen && (
                <div className="absolute mt-6 w-[200px] text-black bg-white border rounded shadow-lg z-20">
                  <Link
                    to="/colleges/ug"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">Under Graduate</span>
                  </Link>
                  <Link
                    to="/colleges/pg"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">Post Graduate</span>
                  </Link>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <Link
              to="/services"
              className={`flex items-center gap-x-2 font-bold font-dosis text-[20px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                } ${isActive("/services") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              onClick={handleOptionSelect}
            >
              Services
            </Link>

            {/* EVENTS */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("events")}
                className={`flex items-center gap-x-2 font-bold font-dosis text-[20px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                  } ${isActive("/events") || isActive("/events") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              >
                Events
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${isEventsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {isEventsOpen && (
                <div className="absolute mt-6 w-[160px] text-black bg-white border rounded shadow-lg z-20">
                  <Link
                    to="/events?tab=upcoming"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">Upcoming</span>
                  </Link>
                  <Link
                    to="/events?tab=recent"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">Recent</span>
                  </Link>
                </div>
              )}
            </div>

            {/* ALL COURSES */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("courses")}
                className={`flex items-center gap-x-2 font-dosis font-bold text-[20px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                  } ${isActive("/courses/btech") || isActive("/courses/ba") || isActive("/courses/bca") || isActive("/courses/bba") || isActive("/courses/bcom") || isActive("/courses/bsc") || isActive("/courses/mba") || isActive("/courses/mtech") || isActive("/courses/llb") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              >
                All Courses
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${isCourseOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {isCourseOpen && (
                <div className="absolute mt-6 w-[160px] text-black bg-white border rounded shadow-lg z-20">
                  <Link
                    to="/courses/btech"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">B.Tech</span>
                  </Link>
                  <Link
                    to="/courses/bsc"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">B.Sc</span>
                  </Link>
                  <Link
                    to="/courses/bcom"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">B.Com</span>
                  </Link>
                  <Link
                    to="/courses/bba"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">BBA</span>
                  </Link>
                  <Link
                    to="/courses/bca"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">BCA</span>
                  </Link>
                  <Link
                    to="/courses/ba"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">BA</span>
                  </Link>
                  <Link
                    to="/courses/mba"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">MBA</span>
                  </Link>
                  <Link
                    to="/courses/mtech"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">M.Tech</span>
                  </Link>
                  <Link
                    to="/courses/llb"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[16px] text-[#2A675C]">LLB</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="relative">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("profile")}
                  className={`flex items-center gap-x-2 font-bold font-dosis text-[22px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                    } ${isActive("/profile") ? "text-[#2A675C] underline-[#2A675C]" : ""} transition duration-300`}
                >
                  <FiUser className="text-[26px]" />
                  <AiOutlineDownCircle
                    className={`ml-1 transition-transform duration-300 text-[18px] ease-in-out ${isProfileOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {isProfileOpen && (
                  <div className="absolute mt-6 ml-[-200px] h-[400px] w-[1000px] text-black bg-white border rounded shadow-lg z-20 flex flex-col">
                    <div className="px-4 py-2">
                      <div className="text-[14px] px-2 py-1">
                        <span className="font-bold text-[#2A675C]">User Name: {" "}</span>{user.name}
                      </div>
                      <div className="text-[14px] px-2 py-1">
                        <span className="font-bold text-[#2A675C]">Email: {" "}</span> {user.email}
                      </div>
                      <div className="text-[14px] px-2 py-1">
                        <span className="font-bold text-[#2A675C]">Mobile No: {" "}</span> {user.number}
                      </div>
                      <div className="text-[14px] px-2 py-1">
                        <span className="font-bold text-[#2A675C]">Course: {" "}</span> {user.course}
                      </div>
                      <div className="text-[14px] px-2 py-1">
                        <span className="font-bold text-[#2A675C]">City: {" "}</span> {user.city}
                      </div>
                      <div className="text-[14px] px-2 py-1">
                        <span className="font-bold text-[#2A675C]">state: {" "}</span> {user.state}
                      </div>
                    </div>
                    <div className="mt-auto border-t-2 border-[#2A675C]">
                      <Link
                        to="/auth/forgot-password"
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={handleOptionSelect}
                      >
                        <span className="text-[16px] text-[#2A675C]">Reset Password</span>
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                        onClick={handleLogout}
                      >
                        <span className="text-[16px] text-[#2A675C]">Logout</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/auth/login"
                className={`flex items-center gap-x-2 font-dosis font-bold text-[20px] ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
                  } ${isActive("/auth/login") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              >
                <FiUser className="text-[26px]" /> <p className="text-[20px] text-[#2A675C]">Login</p>
              </Link>
            )}
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden ${isScrolled ? "text-[#2A675C]" : "text-[#2A675C]"
            } focus:outline-none`}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`lg:hidden h-[100vh] absolute top-[174px] backdrop-blur-sm shadow-md z-10 transform transition-transform duration-300 right-0 w-full ${isScrolled ? "bg-[#2A675C]/85" : "bg-[#2A675C]/85"
          } ${isScrolled ? "text-white" : "text-white"} ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className="flex items-center text-[18px] gap-x-2 hover:underline text-[white]"
              onClick={handleOptionSelect}
            >
              <IoIosHome />
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center text-[18px] gap-x-2 text-[white]"
              >
                <IoMdInformationCircle />
                About
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${isAboutOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {isAboutOpen && (
                <div className="flex flex-col pl-6 space-y-2">
                  <Link to="/about" className="hover:underline text-[white]" onClick={handleOptionSelect}>About</Link>
                  <Link to="/team" className="hover:underline text-[white]" onClick={handleOptionSelect}>Team</Link>
                  <Link to="/experts" className="hover:underline text-[white]" onClick={handleOptionSelect}>Experts</Link>
                  <Link to="/gallery" className="hover:underline text-[white]" onClick={handleOptionSelect}>Gallery</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("colleges")}
                className="flex items-center text-[18px] gap-x-2  text-[white]"
              >
                <FaBuildingColumns />
                Colleges
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${isCollegesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {isCollegesOpen && (
                <div className="flex flex-col pl-6 space-y-2">
                  <Link to="/colleges/ug" className="hover:underline text-[white]" onClick={handleOptionSelect}>UG</Link>
                  <Link to="/colleges/pg" className="hover:underline text-[white]" onClick={handleOptionSelect}>PG</Link>
                </div>
              )}
            </div>

            <Link to="/services" className="flex text-[18px] items-center gap-x-2 hover:underline text-[white]" onClick={handleOptionSelect}>
              <MdOutlineMiscellaneousServices />
              Services
            </Link>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("events")}
                className="flex items-center gap-x-2 text-[18px] text-[white]"
              >
                <MdEventNote />
                Events
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${isEventsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {isEventsOpen && (
                <div className="flex flex-col pl-6 space-y-2">
                  <Link to="/events?tab=upcoming" className="hover:underline text-[white]" onClick={handleOptionSelect}>Upcoming</Link>
                  <Link to="/events?tab=recent" className="hover:underline text-[white]" onClick={handleOptionSelect}>Recent</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("courses")}
                className="flex items-center gap-x-2 text-[18px] text-[white]"
              >
                <FaBookReader />
                All Courses
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${isCourseOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {isCourseOpen && (
                <div className="flex flex-col pl-6 space-y-2">
                  <Link to="/courses/btech" className="hover:underline text-[white]" onClick={handleOptionSelect}>B.Tech</Link>
                  <Link to="/courses/bsc" className="hover:underline text-[white]" onClick={handleOptionSelect}>B.Sc</Link>
                  <Link to="/courses/bcom" className="hover:underline text-[white]" onClick={handleOptionSelect}>B.Com</Link>
                  <Link to="/courses/bba" className="hover:underline text-[white]" onClick={handleOptionSelect}>BBA</Link>
                  <Link to="/courses/bca" className="hover:underline text-[white]" onClick={handleOptionSelect}>BCA</Link>
                  <Link to="/courses/ba" className="hover:underline text-[white]" onClick={handleOptionSelect}>BA</Link>
                  <Link to="/courses/mba" className="hover:underline text-[white]" onClick={handleOptionSelect}>MBA</Link>
                  <Link to="/courses/mtech" className="hover:underline text-[white]" onClick={handleOptionSelect}>M.Tech</Link>
                  <Link to="/courses/llb" className="hover:underline text-[white]" onClick={handleOptionSelect}>LLB</Link>
                </div>
              )}
            </div>


            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("profile")}
                  className="flex text-[18px] items-center gap-x-2 text-[white]"
                >
                  <FiUser />
                  Profile
                  <AiOutlineDownCircle
                    className={`ml-1 transition-transform duration-300 ease-in-out ${isProfileOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {isProfileOpen && (
                  <div className="flex flex-col pl-6 space-y-2">
                    <div className="text-[14px]">
                      <span className="font-bold">
                        Name:
                      </span>{" "}
                      {user.name}
                    </div>
                    <div className="text-[14px]">
                      <span className="font-bold">Email:</span>{" "}
                      {user.email}
                    </div>
                    <div className="text-[14px]">
                      <span className="font-bold">
                        Mobile No:
                      </span>{" "}
                      {user.number}
                    </div>
                    <div className="text-[14px]">
                      <span className="font-bold">Course: {" "}</span> {user.course}
                    </div>
                    <div className="text-[14px]">
                      <span className="font-bold">City: {" "}</span> {user.city}
                    </div>
                    <div className="text-[14px]">
                      <span className="font-bold">state: {" "}</span> {user.state}
                    </div>
                    <Link to="/auth/forgot-password" className="hover:underline text-[white]" onClick={handleOptionSelect}>Reset Password</Link>
                    <Link to="/" className="hover:underline text-[white]" onClick={handleLogout}>Logout</Link>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/auth/login" className="flex text-[18px] items-center gap-x-2 text-[white]">
                <FiUser />
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
