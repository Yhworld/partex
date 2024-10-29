// ProductsPage.js
import React from "react";
import { Link } from "react-router-dom";
import data from "./data";
import "./products.css";
import Cta from "../CTA/Cta";

function ProductsPage() {
  return (
    <>
      <section
        id="products-page"
        className="flex flex-col items-center justify-center px-6 space-y-0 md:space-y-0 mb-8"
        loading="lazy"
      >
        <div
          id="hero-text"
          className="flex flex-col mb-32 space-y-12 md:w-1/2 mt-36"
        >
          <h1 className="font-bold text-4xl text-white text-center md:text-6xl ">
            Products
          </h1>
          {/* <p className=" text-center text-slate-200">
        Start your driving journey with Manchester's trusted school. Our beginner driving course will help you build confidence on the road. Book your first lesson today!
        </p> */}
          {/* <div className="flex justify-center">
          <Link
            to="/booking"
            className="flex items-center justify-center px-16 py-4 text-base font-medium leading-6 text-black whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none"
          >
            Get in Touch
          </Link>
        </div> */}
        </div>
      </section>
      <div class=" p-8 max-w-screen-xl mx-auto container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((product) => {
            return (
              <div class="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
                <Link to={`/products/${product.name.toLowerCase()}`}>
                <div class="w-full aspect-w-16 aspect-h-8 lg:h-96">
                  <img
                    src={product.image}
                    alt="Product 1"
                    class="h-full w-full object-none"
                  />
                </div>

                <div class="p-4">
                  <h3 class="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <div class="mt-4 flex items-center flex-wrap gap-2">
                    {/* <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div> */}
                  </div>
                </div>
              </Link></div>
            );
          })}
        </div>
      </div>
      <Cta />
    </>
  );
}

export default ProductsPage;
