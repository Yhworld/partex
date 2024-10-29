import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="mb-36 flex flex-col items-center justify-center px-4">
      {/* Responsive Image */}
     
      <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600 ">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-gray-700">Something's missing.</p>
            <p class="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Link
        to="/"
        className="px-6 py-3 bg-red-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
      >
        Go Back Home
      </Link>
        </div>   
    </div>
</section>
    </div>
  );
}

export default NotFound;
