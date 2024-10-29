import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.webp'; // Adjust the path as necessary
import './navbar.css';

function Navbar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomepage = location.pathname === '/'; // Check if it's the homepage

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav id='navbar' className={` ${isHomepage ? 'bg-white' : 'bg-white'} w-full z-10 p-2`}>
      <div className="max-w-screen-xl container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" onClick={closeMenu}>
          <img alt="logo" src={logo} id="brand" className="text-black" />
        </NavLink>

        <div className="hidden md:flex space-x-8 ml-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active-link' : ''} ${isHomepage ? 'text-black' : 'text-black'}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active-link' : ''} ${isHomepage ? 'text-black' : 'text-black'}`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <div className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <NavLink to="/products" className={`nav-link ${isHomepage ? 'text-black' : 'text-black'}`}>
              Products
            </NavLink>
            {isDropdownOpen && (
              <div className="absolute left-0 w-48 pt-2 bg-white shadow-lg rounded-md">
                <NavLink
                  to="/products/beef"
                  className={({ isActive }) => `block px-4 py-2 text-black ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  Beef
                </NavLink>
                <NavLink
                  to="/products/chicken"
                  className={({ isActive }) => `block px-4 py-2 text-black ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  Chicken
                </NavLink>
                <NavLink
                  to="/products/goat"
                  className={({ isActive }) => `block px-4 py-2 text-black ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  Goat
                </NavLink>
                <NavLink
                  to="/products/lamb"
                  className={({ isActive }) => `block px-4 py-2 text-black ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  Lamb
                </NavLink>
                <NavLink
                  to="/products/fish"
                  className={({ isActive }) => `block px-4 py-2 text-black ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  Fish
                </NavLink>
                <NavLink
                  to="/products/fruits"
                  className={({ isActive }) => `block px-4 py-2 text-black ${isActive ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  Fruits
                </NavLink>
              </div>
            )}
          </div>
         
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active-link' : ''} ${isHomepage ? 'text-black' : 'text-black'}`
            }
            onClick={closeMenu}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className={`w-8 h-8 ${isHomepage ? 'text-black' : 'text-black'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6">
          <button
            className="self-end mb-4 text-black focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="mt-24">
            <NavLink
              to="/"
              className={({ isActive }) => `nav-link block px-4 py-4 text-2xl text-black ${isActive ? 'active-link' : ''}`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link block px-4 py-4 text-2xl text-black ${isActive ? 'active-link' : ''}`}
              onClick={closeMenu}
            >
              About
            </NavLink>
            <div className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
    <NavLink to="/products" className={`nav-link block px-4 py-4 text-2xl ${isHomepage ? 'text-black' : 'text-black'}`}>
        Products
    </NavLink>
    {isDropdownOpen && (
        <div className="dropdown">
            <NavLink to="/products/beef" className="dropdown-link" onClick={closeMenu}>
                Beef
            </NavLink>
            <NavLink to="/products/chicken" className="dropdown-link" onClick={closeMenu}>
                Chicken
            </NavLink>
            <NavLink to="/products/goat" className="dropdown-link" onClick={closeMenu}>
                Goat
            </NavLink>
            <NavLink to="/products/lamb" className="dropdown-link" onClick={closeMenu}>
                Lamb
            </NavLink>
            <NavLink to="/products/fish" className="dropdown-link" onClick={closeMenu}>
                Fish
            </NavLink>
            <NavLink to="/products/fruits" className="dropdown-link" onClick={closeMenu}>
                Fruits
            </NavLink>
        </div>
    )}
</div>
            <NavLink
              to="/contact"
              className="nav-link block px-4 py-4 text-2xl text-black hover:bg-gray-100"
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
