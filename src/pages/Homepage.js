import React, { useEffect, Suspense } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/hero/Hero';
import About from '../components/About/About';
import Brands from '../components/Brands/Brands';
import Contact from '../components/Contact/Contact';

// Lazy load the Services component and other heavy sections
const Services = React.lazy(() => import('../components/Services/Services'));
const Maps = React.lazy(() => import('../components/maps/Maps'));

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 200,
    });

    window.addEventListener("load", () => AOS.refreshHard());

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="">
      <Hero />

      <div data-aos="fade-up" data-aos-delay="100">
        <About />
      </div>

      {/* Lazy load Services to reduce initial load */}
      <Suspense fallback={<div>Loading...</div>}>
        <div data-aos="fade-up" data-aos-delay="200">
          <Services />
        </div>
      </Suspense>

      <div data-aos="fade-up" data-aos-delay="300">
        <Brands />
      </div>

      <Suspense fallback={<div>Loading Maps...</div>}>
        <div data-aos="fade-up" data-aos-delay="500">
          <Maps />
        </div>
      </Suspense>

      <div data-aos="fade-up" data-aos-delay="600">
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
