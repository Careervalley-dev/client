import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { IoIosHome, IoMdInformationCircle } from "react-icons/io";
import { MdOutlineMiscellaneousServices, MdEventNote } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { AiOutlineDownCircle } from "react-icons/ai";
import DropdownMenu from "../Homepage/DropDown";
import { FaBookReader } from "react-icons/fa";




const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCollegesOpen, setIsCollegesOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`w-full fixed z-50 backdrop-blur-sm shadow-md transition-colors duration-300 ${
        isScrolled ? "bg-white/80" : "bg-[white]/80"
      } ${isScrolled ? "text-white" : "text-black"} border-b-2 border-[#2A675C]`}
    >
      <div className="bg-[#2A675C] flex flex-col lg:flex-row py-2 text-white lg:h-[45px] justify-center items-center">
        <p>Our Events are live now 🎉</p>
        <button className="bg-[#2A675C] mt-2 lg:mt-0 ring-white ring-1 text-white px-6 py-1 rounded-md shadow-lg hover:bg-[#24594e] transition duration-300 ease-in-out lg:ml-4">Register</button>
      </div>


      <div className="container py-4 px-2 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col w-3/5 transition-transform duration-300 ease-in-out">
          <div className="glow-container">
            <Link to="/" onClick={toggleMenu}>
              <img
                src="https://i.postimg.cc/BZKFqRkV/CV-logo.png"
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
              className={`flex items-center gap-x-2 font-dosis font-bold text-[18px] ${
                isScrolled ? "text-black" : "text-black"
              } ${isActive("/") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              onClick={handleOptionSelect}
            >
              Home
            </Link>

            {/* ABOUT */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("about")}
                className={`flex items-center gap-x-2 font-dosis font-bold text-[18px] ${
                  isScrolled ? "text-black" : "text-black"
                } ${isActive("/about") || isActive("/team") || isActive("/experts") || isActive("/gallery") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              >
                About
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isAboutOpen && (
                <div className="absolute mt-6 w-[130px] text-black bg-white border rounded shadow-lg z-20">
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">About</span>
                  </Link>
                  <Link
                    to="/team"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">Team</span>
                  </Link>
                  <Link
                    to="/experts"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">Experts</span>
                  </Link>
                  <Link
                    to="/gallery"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">Gallery</span>
                  </Link>
                </div>
              )}
            </div>

            {/* COLLEGES */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("colleges")}
                className={`flex items-center gap-x-2 font-bold font-dosis text-[18px] ${
                  isScrolled ? "text-black" : "text-black"
                } ${isActive("/colleges/ug") || isActive("/colleges/pg") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              >
                Colleges
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isCollegesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCollegesOpen && (
                <div className="absolute mt-6 w-[130px] text-black bg-white border rounded shadow-lg z-20">
                  <Link
                    to="/colleges/ug"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">UG</span>
                  </Link>
                  <Link
                    to="/colleges/pg"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">PG</span>
                  </Link>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <Link
              to="/services"
              className={`flex items-center gap-x-2 font-bold font-dosis text-[18px] ${
                isScrolled ? "text-black" : "text-black"
              } ${isActive("/services") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              onClick={handleOptionSelect}
            >
              Services
            </Link>

            {/* EVENTS */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("events")}
                className={`flex items-center gap-x-2 font-bold font-dosis text-[18px] ${
                  isScrolled ? "text-black" : "text-black"
                } ${isActive("/events") || isActive("/events") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              >
                Events
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isEventsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isEventsOpen && (
                <div className="absolute mt-6 w-[150px] text-black bg-white border rounded shadow-lg z-20">
                  <Link
                    to="/events?tab=upcoming"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">Upcoming</span>
                  </Link>
                  <Link
                    to="/events?tab=recent"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">Recent</span>
                  </Link>
                </div>
              )}
            </div>

            {/* ALL COURSES */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("courses")}
                className={`flex items-center gap-x-2 font-dosis font-bold text-[18px] ${
                  isScrolled ? "text-black" : "text-black"
                } ${isActive("/about") || isActive("/team") || isActive("/experts") || isActive("/gallery") || isActive("/course") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              >
                All Courses
                <AiOutlineDownCircle
                  className={`ml-1 transition-transform duration-300 ease-in-out ${
                    isCourseOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCourseOpen && (
                <div className="absolute mt-6 w-[130px] text-black bg-white border rounded shadow-lg z-20">
                  <Link
                    to="/courses/btech"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">B.Tech</span>
                  </Link>
                  <Link
                    to="/courses/bsc"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">B.Sc</span>
                  </Link>
                  <Link
                    to="/courses/bcom"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">B.Com</span>
                  </Link>
                  <Link
                    to="/courses/bba"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">BBA</span>
                  </Link>
                  <Link
                    to="/courses/bca"
                    className="block px-4 py-2 hover:bg-gray-200"  
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">BCA</span>
                  </Link>
                  <Link
                    to="/courses/ba"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">BA</span>
                  </Link>
                  <Link
                    to="/courses/mba"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">MBA</span>
                  </Link>
                  <Link
                    to="/courses/mtech"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">M.Tech</span>
                  </Link>
                  <Link
                    to="/courses/llb"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleOptionSelect}
                  >
                    <span className="text-[14px]">LLB</span>
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
                  className={`flex items-center gap-x-2 font-bold font-dosis text-[22px] ${
                    isScrolled ? "text-black" : "text-black"
                  } ${isActive("/profile") ? "text-[#2A675C] underline" : ""} transition duration-300`}
                >
                  <FiUser />
                  <AiOutlineDownCircle
                    className={`ml-1 transition-transform duration-300 text-[18px] ease-in-out ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isProfileOpen && (
                  <div className="absolute mt-6 ml-[-100px] w-[300px] text-black bg-white border rounded shadow-lg z-20">
                    <div className="px-4 py-2 border-b">
                      <div className="text-[14px] px-2 py-1">
                        <span className="font-bold text-[#2A675C]">
                          User Name:
                        </span>{" "}
                        Aditya Kumar Sahu
                      </div>
                      <div className="text-[14px] px-2 py-1">
                        <span className="font-bold text-[#2A675C]">Email:</span>{" "}
                        aditya@example.com
                      </div>
                      <div className="text-[14px] px-2 py-1">
                        <span className="font-bold text-[#2A675C]">
                          Mobile No:
                        </span>{" "}
                        1234567890
                      </div>
                    </div>
                    {/* <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      <span className="text-[14px]">Profile</span>
                    </Link> */}
                    <Link
                      to="/auth/forgot-password"
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={handleOptionSelect}
                    >
                      <span className="text-[14px]">Reset Password</span>
                    </Link>
                    <Link
                      to="/logout"
                      className="block px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                      onClick={handleOptionSelect}
                    >
                      <span className="text-[14px]">Logout</span>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className={`font-dosis text-[18px] ${
                  isScrolled ? "text-black" : "text-black"
                } ${isActive("/login") ? "text-[#2A675C] underline" : ""} transition duration-300`}
              >
                <FiUser />
              </Link>
            )}
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden ${
            isScrolled ? "text-black" : "text-black"
          } focus:outline-none`}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
          <div className={`lg:hidden h-[100vh] absolute top-[174px] backdrop-blur-sm shadow-md z-10 transform transition-transform duration-300 right-0 w-full ${
            isScrolled ? "bg-[#2A675C]/85" : "bg-[#2A675C]/85"
          } ${isScrolled ? "text-white" : "text-white"} ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
            <nav className="flex flex-col space-y-4 p-4">
              <Link 
                to="/" 
                className="flex items-center gap-x-2 hover:underline"
                onClick={handleOptionSelect}  
              >
                <IoIosHome />
                Home
              </Link>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className="flex items-center gap-x-2"
                >
                  <IoMdInformationCircle />
                  About
                  <AiOutlineDownCircle
                    className={`ml-1 transition-transform duration-300 ease-in-out ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isAboutOpen && (
                  <div className="flex flex-col pl-6 space-y-2">
                    <Link to="/about" className="hover:underline" onClick={handleOptionSelect}>About</Link>
                    <Link to="/team" className="hover:underline" onClick={handleOptionSelect}>Team</Link>
                    <Link to="/experts" className="hover:underline" onClick={handleOptionSelect}>Experts</Link>
                    <Link to="/gallery" className="hover:underline" onClick={handleOptionSelect}>Gallery</Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("colleges")}
                  className="flex items-center gap-x-2"
                >
                  <FaBuildingColumns />
                  Colleges
                  <AiOutlineDownCircle
                    className={`ml-1 transition-transform duration-300 ease-in-out ${
                      isCollegesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isCollegesOpen && (
                  <div className="flex flex-col pl-6 space-y-2">
                    <Link to="/colleges/ug" className="hover:underline" onClick={handleOptionSelect}>UG</Link>
                    <Link to="/colleges/pg" className="hover:underline" onClick={handleOptionSelect}>PG</Link>
                  </div>
                )}
              </div>

              <Link to="/services" className="flex items-center gap-x-2 hover:underline" onClick={handleOptionSelect}>
                <MdOutlineMiscellaneousServices />
                Services
              </Link>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("events")}
                  className="flex items-center gap-x-2"
                >
                  <MdEventNote />
                  Events
                  <AiOutlineDownCircle
                    className={`ml-1 transition-transform duration-300 ease-in-out ${
                      isEventsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isEventsOpen && (
                  <div className="flex flex-col pl-6 space-y-2">
                    <Link to="/events?tab=upcoming" className="hover:underline" onClick={handleOptionSelect}>Upcoming</Link>
                    <Link to="/events?tab=recent" className="hover:underline" onClick={handleOptionSelect}>Recent</Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("courses")}
                  className="flex items-center gap-x-2"
                >
                  <FaBookReader />
                  All Courses
                  <AiOutlineDownCircle
                    className={`ml-1 transition-transform duration-300 ease-in-out ${
                      isCourseOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isCourseOpen && (
                  <div className="flex flex-col pl-6 space-y-2">
                    <Link to="/courses/btech" className="hover:underline" onClick={handleOptionSelect}>B.Tech</Link>
                    <Link to="/courses/bsc" className="hover:underline" onClick={handleOptionSelect}>B.Sc</Link>
                    <Link to="/courses/bcom" className="hover:underline" onClick={handleOptionSelect}>B.Com</Link>
                    <Link to="/courses/bba" className="hover:underline" onClick={handleOptionSelect}>BBA</Link>
                    <Link to="/courses/bca" className="hover:underline" onClick={handleOptionSelect}>BCA</Link>
                    <Link to="/courses/ba" className="hover:underline" onClick={handleOptionSelect}>BA</Link>
                    <Link to="/courses/mba" className="hover:underline" onClick={handleOptionSelect}>MBA</Link>
                    <Link to="/courses/mtech" className="hover:underline" onClick={handleOptionSelect}>M.Tech</Link>
                    <Link to="/courses/llb" className="hover:underline" onClick={handleOptionSelect}>LLB</Link>
                  </div>
                )}
              </div>


              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("profile")}
                    className="flex items-center gap-x-2"
                  >
                    <FiUser />
                    Profile
                    <AiOutlineDownCircle
                      className={`ml-1 transition-transform duration-300 ease-in-out ${
                        isProfileOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isProfileOpen && (
                    <div className="flex flex-col pl-6 space-y-2">
                      <div className="text-[14px]">
                        <span className="font-bold">
                          Name:
                        </span>{" "}
                        Aditya Kumar Sahu
                      </div>
                      <div className="text-[14px]">
                        <span className="font-bold">Email:</span>{" "}
                        aditya@example.com
                      </div>
                      <div className="text-[14px]">
                        <span className="font-bold">
                          Mobile No:
                        </span>{" "}
                        1234567890
                      </div>
                      {/* <Link to="/profile" className="hover:underline">Profile</Link> */}
                      <Link to="/resetpassword" className="hover:underline" onClick={handleOptionSelect}>Reset Password</Link>
                      <Link to="/logout" className="hover:underline" onClick={handleOptionSelect}>Logout</Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="flex items-center gap-x-2">
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
