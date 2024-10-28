import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundImg = require('../assets/images/hero/notfound.webp');

function NotFound() {
  return (
    <div className="mb-36 flex flex-col items-center justify-center px-4">
      {/* Responsive Image */}
      <img
        src={NotFoundImg}
        alt="Page Not Found"
        className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto mb-8"
      />

      {/* Responsive Text */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 text-center mb-4">
        Oops! Page Not Found
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-500 text-center mb-6">
        It looks like the page you're trying to access doesn't exist.
      </p>

      {/* Responsive Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
