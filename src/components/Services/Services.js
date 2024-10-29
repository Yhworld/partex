import React from 'react';
import './services.scss';
import data from './data';

// Assuming you have imported the relevant SVG icons for meat and fruits
import FruitIcon from '../../assets/images/icons/noun-watermelon-2008615-cropped.svg';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className='service-box mb-36'>
      <section id="services" className="max-w-screen-xl container relative mx-auto p-4 mt-16">
        <div className='flex flex-col items-center'>
          <h2 className="text-center text-3xl text-red-600 font-semibold sm:text-1xl">
            What We Offer
          </h2>
          <p className='text-dark-6 mt-6 text-4xl font-bold text-center'>
            Supplying partex finnest
          </p>
        </div>

        {/* Grid layout for services */}
        <div id="about-sub" className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:mt-28">
          
          {/* Render separate Meat Supply Cards */}
          {data.map((item, index) => (
            <div key={index} className="card text-gray-300 hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-red-900 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
              <div className="px-8 py-10">
                <Link to={item.link}>
                <div className="w-16 h-16 mb-4 group-hover:-translate-y-1 group-hover:shadow-xl transition-all">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-12 h-12 object-cover" 
                  />
                </div>
                <div className="uppercase font-bold text-xl">{item.title}</div>
                <div className="text-gray-400 mt-8">
                  <p>{item.description}</p>
                </div>
              </Link></div>
              <div className="h-2 w-full bg-gradient-to-l via-red-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
              <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-red-950 group-hover:via-red-500 w-[70%] m-auto rounded transition-all" />
            </div>
          ))}

          {/* Fruit Supply Card */}
          <div className="card text-gray-300 hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-red-900 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
            <div className="px-8 py-10">
              <Link to="/products/fruits">
              <div className="w-16 h-16 mb-4 group-hover:-translate-y-1 group-hover:shadow-xl transition-all">
                <img 
                  src={FruitIcon} 
                  alt="Fruit Supply" 
                  className="w-12 h-8 sm:w-12 sm:h-12 md:w-full md:h-full object-cover" 
                />
              </div>
              <div className="uppercase font-bold text-xl">Fruit Supply</div>
              <div className="text-gray-300 uppercase tracking-widest mt-2">
                Fresh Tropical Fruits
              </div>
              <div className="text-gray-400 mt-2">
                <ul className="list-none list-inside mt-4 text-gray-300">
                  <li>Mangoes, Avocados, and Pineapples.</li>
                  <li>Strict packaging to preserve freshness.</li>
                  <li>Regular supply chain updates for tracking.</li>
                </ul>
              </div>
              {/* <div className="text-gray-400 mt-8">
                <p>Our tropical fruits are handpicked from the rich soils of Kenya, ensuring premium quality and flavor. </p>
              </div> */}
            </Link></div>
            <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
