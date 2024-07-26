import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    // #8caeac

    <footer className="bg-[#e8e8e8] font-dosis py-10 text-[#2A675C]">
      <div className="containerf"></div>
      <div className="container mx-auto px-4">
        {/* Top Section */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="rounded-md text-center">
            <h3 className="text-xl font-bold mb-4">Top Courses</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li className="cursor-pointer hover:text-black"><a href="/btech">B.Tech</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/bsc">B.Sc</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/bcom">B.Com</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/bba">BBA</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/bca">BCA</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/ba">BA</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/mba">M.B.A</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/mtech">M.Tech</a></li>
            </ul>
          </div>
          <div className="rounded-md text-center">
            <h3 className="text-xl font-bold mb-4">Top Streams</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li className="cursor-pointer hover:text-black">Engineering</li>
              <li className="cursor-pointer hover:text-black">Management</li>
              <li className="cursor-pointer hover:text-black">Commerce</li>
              <li className="cursor-pointer hover:text-black">Science</li>
              <li className="cursor-pointer hover:text-black">Arts</li>
            </ul>
          </div>
          <div className="rounded-md text-center">
            <h3 className="text-xl font-bold mb-4">Top Exams</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li className="cursor-pointer hover:text-black"><a href="/cat">CAT</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/gate">GATE</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/jee">JEE-Main</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/neet">NEET</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/xat">XAT</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/clat">CLAT</a></li>
              <li className="cursor-pointer hover:text-black"><a href="/mat">MAT</a></li>
            </ul>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 gap-10">
          <div className="flex flex-col items-start">
            <img
              src="https://thecareervalley.com/wp-content/uploads/2023/07/Career-Vallet-Logo.png"
              alt="Company Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="w-[350px]">
              We are one of the top education consulting company since 2013 and
              serving many bright minds in pursuing their dream careers.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 gap-8 lg:gap-x-16">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <ul className="text-center space-y-2">
                <li className="cursor-pointer hover:text-black">Our Mission</li>
                <li className="cursor-pointer hover:text-black">Our Team</li>
                <li className="cursor-pointer hover:text-black">Our Story</li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="text-center space-y-2">
                <li className="cursor-pointer hover:text-black">
                  Terms of Service
                </li>
                <li className="cursor-pointer hover:text-black">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-black">
                  Cookie Policy
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">Careers</h3>
              <ul className="text-center space-y-2">
                <li className="cursor-pointer hover:text-black">
                  Current Openings
                </li>
                <li className="cursor-pointer hover:text-black">
                  Work Culture
                </li>
                <li className="cursor-pointer hover:text-black">Join Us</li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="text-center space-y-2 mb-4">
                <li>Email: info@example.com</li>
                <li>Phone: +123 456 7890</li>
                <li>Address: 123 Street, City, Country</li>
              </ul>
              <div className="flex space-x-4">
                <a href="#" className="text-[#2A675C] hover:text-black">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-[#2A675C] hover:text-black">
                  <FaTwitter />
                </a>
                <a href="#" className="text-[#2A675C] hover:text-black">
                  <FaInstagram />
                </a>
                <a href="#" className="text-[#2A675C] hover:text-black">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
