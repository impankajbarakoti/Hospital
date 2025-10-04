import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="https://lifecarehospitalrohtak.com/wp-content/uploads/2024/07/Logo.png"
              alt="Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-sm md:text-base font-medium text-black">
          <li className="hover:text-[#ac0d18]">
            <a href="/">HOME</a>
          </li>
          <li className="hover:text-[#ac0d18]">
            <a href="/about"> ABOUT</a>
          </li>
          <li className="hover:text-[#ac0d18]">
            <a href="/contact"> CONTACT</a>
          </li>
          <li className="hover:text-[#ac0d18]">
            <a href="/blogs"> BLOG</a>
          </li>
        </ul>

        {/* Right (desktop only) */}
        <div className="hidden md:flex items-center space-x-6 text-black">
          <Link
            to="/get-started"
            className="bg-[#ac0d18] text-white px-4 py-2 rounded-md font-medium "
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-4 text-black text-base font-medium">
            <li>
              <a className="hover:bg-[#ac0d18]" href="/">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a href="/about"> About</a>
            </li>
            <li>
              <a href="/contact"> Contact</a>
            </li>
            <li>
              <a href="/blogs"> Blogs</a>
            </li>
            <li>
              <Link
                to="/get-started"
                className="block bg-[#ac0d18] text-white text-center py-2 rounded"
                onClick={toggleMenu}
              >
                GET STARTED
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
