import React from "react";
import CountUp from "react-countup";
import './About.css'

export default function Counter({ number, title }) {
  return (
    <div className="flex flex-col justify-center space-y-2">
      <CountUp id="tally" duration={10} className="text-6xl text-gray-400 text-center" end={number} />
      <span id="title" className="text-2xl text-center">{title}</span>
    </div>
  );
}
