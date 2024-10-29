import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data';
import Cta from '../CTA/Cta';

function IndividualProductPage() {
  const { productName } = useParams();
  const product = data.find((item) => item.name.toLowerCase() === productName.toLowerCase());

  if (!product) {
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start md:space-x-24">
        {/* Image Section with Limited Height */}
        <div className="w-full max-h-[300px] md:w-3/5 md:max-h-[500px] overflow-hidden mb-6 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details Section */}
        
        <div className="md:w-3/5 mt-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{product.name}</h1>
          <div className="mt-6 mb-8">
            <a
              href="/get-quotation" // replace this with the appropriate link for your quotation form
              className="inline-block px-8 py-3 bg-white text-red-600 font-semibold border-red-400 border hover:bg-red-600 hover:text-white transition-colors"
            >
              Get Quotation
            </a>
          </div>
          <hr className="border border-gray-300 mt-4 mb-4"/>
          <h3 className=''>Description</h3>
          <p className="text-lg text-gray-700 mb-6 mt-4">{product.description}</p>
          <hr className="border border-gray-300 mt-4 mb-4"/>
          {/* Additional details about the product */}
          <div className="space-y-4">
            <p className="text-gray-700">Quality: Premium export quality, Halal certified.</p>
            <hr className="border border-gray-300 mt-4 mb-4"/>
            <p className="text-gray-700">Packaging: Available in various sizes and cuts, chilled or frozen.</p>
            <hr className="border border-gray-300 mt-4 mb-4"/>
          </div>

          {/* Get Quotation Button */}
        </div>
      </div>
      <Cta />
    </div>
  );
}

export default IndividualProductPage;
