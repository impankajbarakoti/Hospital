import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-3">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1: Description */}
        <div>
          <a href="/">
            <img
              src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/Logo-For-Website-Copy.png"
              alt="Life Care Hospital Logo"
              className="w-52 mb-4"
            />
          </a>
          <p className="text-gray-400 text-sm">
            Life Care Hospital is established by a team of specialized doctors
            whose aim is to render their services to the patients. We believe in
            providing the best to the people who admit to our hospital and for
            us, our patients are of top priority. We do not believe in making
            money but our motto is to help in making a healthy and better
            society.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-[#ac0d18]">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-[#ac0d18]">
                About Us
              </a>
            </li>
            <li>
              <a href="/blogs" className="text-gray-400 hover:text-[#ac0d18]">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-[#ac0d18]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-4">
            Contact Info
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-400">
              Near Kailash Ashram, Model Town, Rohtak
            </li>
            <li className="text-gray-400">+91 92543 92542</li>
            <li className="text-gray-400">lchrohtak123@gmail.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-[#ac0d18]">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ac0d18]">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ac0d18]">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ac0d18]">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ac0d18]">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-sm mt-12">
        <p>
          &copy; {new Date().getFullYear()} Life Care Hospital. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
