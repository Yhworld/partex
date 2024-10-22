import React, { memo } from "react";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoCalendarOutline, IoCarSportOutline } from "react-icons/io5";
import { TbManualGearbox } from "react-icons/tb";
import { Link } from "react-router-dom";
const whyImg = require('../../assets/images/aboutimg/about11_batcheditor_fotor (3).webp');

const About = memo(() => {
  return (
    <section className="overflow-hidden p-4 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="max-w-screen-xl container relative mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4">
                <div className="py-3 sm:py-4">
                  <img
                    src={whyImg}
                    alt="Why Choose Us"
                    loading="lazy" // Lazy-load image for better performance
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pl-8 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg text-red-600 font-semibold text-primary">
                Why Choose Us
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Transforming Satisfaction into Smiles
              </h2>
              <div className="mb-8 mt-8 flex flex-col md:flex-row md:justify-between text-base text-body-color dark:text-dark-6">
                <div className="space-y-6">
                  <InfoItem icon={<LiaCertificateSolid className="text-4xl" />} text="Experienced instructors" />
                  <InfoItem icon={<FaRegAddressCard className="text-4xl" />} text="High Pass rates" />
                  <InfoItem icon={<IoCalendarOutline className="text-4xl" />} text="Flexible Scheduling" />
                </div>
                <div className="space-y-6 mt-6 md:mt-0">
                  <InfoItem icon={<TbManualGearbox className="text-4xl" />} text="Manual & Automatic" />
                  <InfoItem icon={<IoCarSportOutline className="text-4xl" />} text="Modern Cars" />
                </div>
              </div>
              <div className="mt-16">
                <Link
                  to="/booking"
                  className="px-4 py-2 text-base font-medium text-center text-white bg-red-600 border border-transparent rounded-md hover:bg-opacity-90"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

// Memoized reusable component for InfoItems
const InfoItem = memo(({ icon, text }) => (
  <div className="flex items-center space-x-4">
    {icon}
    <p>{text}</p>
  </div>
));

export default About;
