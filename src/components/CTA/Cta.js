import React from "react";
import { Link } from "react-router-dom";
import './cta.css';
import VectorImage from '../../assets/images/blobs/Grey_and_Brown_Farm_Animals_Modern_Logo__11_-removebg-preview.png'; // Adjust the path to your vector image

function Cta() {
  return (
    <section className="max-w-screen-xl relative flex flex-col items-center justify-center container rounded-lg mx-auto mt-16 mb-12 md:mt-32 bg-red-600 p-8 md:p-16 lg:p-32">
      <div className="w-full md:w-3/4 flex flex-col items-center text-center">
        <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-white">
        Quality Halal Meat Delivered from Kenya
        </h2>
        <Link
          to="/contact"
          className="mt-4 md:mt-8 text-black bg-white hover:bg-black border hover:border-white hover:text-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm md:text-base lg:text-lg px-6 md:px-8 py-2.5 focus:outline-none"
        >
          Contact Us
        </Link>
      </div>
      <div className="absolute top-4 right-4 hidden md:block">
        <img src={VectorImage} alt="Decorative Vector" className="w-48 max-w-full" />
      </div>
    </section>
  );
}

export default Cta;
