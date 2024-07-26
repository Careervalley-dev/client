import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className={`inline-flex justify-center items-center w-full rounded-md border shadow-sm px-4 py-2 bg-transparent text-sm font-medium font-dosis focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${isScrolled ? 'text-black border-black focus:ring-black' : 'text-black border-black focus:ring-[#8caeac]'}`}
        >
          All Courses <MdKeyboardArrowDown />
        </button>
      </div>

      {isOpen && (
        <div className={`origin-top-right absolute top-[45px] left-0 mt-2 w-56 rounded-md shadow-lg ${isScrolled ? 'text-black bg-white hover:text-white' : 'text-black bg-white hover:text-gray-900'}`}>
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="/course/btech"
              className={`block px-4 py-2 text-sm font-anta ${isScrolled ? 'text-white bg-gray-800 hover:text-white' : 'text-black hover:bg-gray-300 hover:text-gray-900'}`}
              role="menuitem"
            >
              B.Tech
            </a>
            <a
              href="/course/bsc"
              className={`block px-4 py-2 text-sm font-anta ${isScrolled ? 'text-white hover:bg-gray-800 hover:text-white' : 'text-black hover:bg-gray-300 hover:text-gray-900'}`}
              role="menuitem"
            >
              B.Sc
            </a>
            <a
              href="/course/bcom"
              className={`block px-4 py-2 text-sm font-anta ${isScrolled ? 'text-white hover:bg-gray-800 hover:text-white' : 'text-black hover:bg-gray-300 hover:text-gray-900'}`}
              role="menuitem"
            >
              B.Com
            </a>
            <a
              href="/course/bba"
              className={`block px-4 py-2 text-sm font-anta ${isScrolled ? 'text-white hover:bg-gray-800 hover:text-white' : 'text-black hover:bg-gray-300 hover:text-gray-900'}`}
              role="menuitem"
            >
              BBA
            </a>
            <a
              href="/course/bca"
              className={`block px-4 py-2 text-sm font-anta ${isScrolled ? 'text-white hover:bg-gray-800 hover:text-white' : 'text-black hover:bg-gray-300 hover:text-gray-900'}`}
              role="menuitem"
            >
              BCA
            </a>
            <a
              href="/course/ba"
              className={`block px-4 py-2 text-sm font-anta ${isScrolled ? 'text-white hover:bg-gray-800 hover:text-white' : 'text-black hover:bg-gray-300 hover:text-gray-900'}`}
              role="menuitem"
            >
              BA
            </a>
            <a
              href="/course/mba"
              className={`block px-4 py-2 text-sm font-anta ${isScrolled ? 'text-white hover:bg-gray-800 hover:text-white' : 'text-black hover:bg-gray-300 hover:text-gray-900'}`}
              role="menuitem"
            >
              MBA
            </a>
            <a
              href="/course/mtech"
              className={`block px-4 py-2 text-sm font-anta ${isScrolled ? 'text-white hover:bg-gray-800 hover:text-white' : 'text-black hover:bg-gray-300 hover:text-gray-900'}`}
              role="menuitem"
            >
              M.Tech
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
