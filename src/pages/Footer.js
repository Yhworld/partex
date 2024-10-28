import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../assets/images/logo/logo.webp';
import { FaInstagram, FaTiktok } from 'react-icons/fa'; // Import Instagram and TikTok icons
 // Placeholder for Pass Plus logo

function Footer() {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10">
      <div class="mx-auto max-w-screen-xl text-center">
        <div className='flex justify-center'>
          <Link to="/" className=''>
            <img className='w-48' src={logo2} alt="logo" />
          </Link>
        </div>
        {/* <p class="my-6 text-gray-500 dark:text-gray-400">Unlocking your driving potential</p> */}

        {/* Navigation Links */}
        <ul class="flex flex-wrap justify-center items-center mt-2 mb-6 text-red-500">
          <li><a href="#r" class="mr-4 hover:underline md:mr-6 ">Home</a></li>
          <li><a href="#r" class="mr-4 hover:underline md:mr-6">About</a></li>
          <li><a href="#r" class="mr-4 hover:underline md:mr-6 ">Services</a></li>
          <li><a href="#r" class="mr-4 hover:underline md:mr-6">Areas Covered</a></li>
          <li><a href="#r" class="mr-4 hover:underline md:mr-6">Book Now</a></li>
          <li><a href="#r" class="mr-4 hover:underline md:mr-6">Contact</a></li>
        </ul>

        {/* Social Media Links */}
        <div class="flex justify-center space-x-6 mb-6">
          <a href="https://www.instagram.com/makeitdrivingschool" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-gray-900 dark:text-red-600 hover:text-red800" />
          </a>
          <a href="https://www.tiktok.com/@makeitdriving" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-2xl text-gray-900 dark:text-red-600 hover:text-red-800" />
          </a>
        </div>

        {/* Certification Icons */}
        

        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#r" class="hover:underline">Partex™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer;
