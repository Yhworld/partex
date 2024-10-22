import React from "react";
import Cta from "../CTA/Cta";
import './About.css';

function AboutPage() {
  return (
    <>
      <div id="about" className="max-w-screen-xl container mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-8 text-center">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Your Trusted Driving School in Manchester
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600">
              At <strong>Makeit Driving School</strong>, we are dedicated to helping you master the skills needed to be a confident and safe driver. Based in the heart of <strong>Manchester</strong>, our expert driving instructors provide tailored lessons designed for every learner's needs, from beginners to experienced drivers looking to refresh their skills.
            </p>
          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Approach to Driving Lessons
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600">
              We believe in creating a supportive and relaxed learning environment at <strong>Makeit Driving School</strong>. Our instructors understand that every learner is different, so we focus on building your confidence at a pace that suits you. From your first driving lesson to your final test, we're here to ensure you have all the skills needed to drive safely and confidently for life.
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-8 justify-center text-center mt-24">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Mission at MakeitDriving School
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600">
              Our mission is simple: to empower every learner with the skills and knowledge needed to become a safe, confident driver. As a certified driving school in <strong>Manchester</strong>, we take pride in offering the most comprehensive driving training, designed to help you navigate the roads with ease.
            </p>
          </div>
        </div>
        <Cta />
      </div>
    </>
  );
}

export default AboutPage;
