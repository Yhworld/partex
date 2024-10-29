// Loader.js
import React from 'react';
import './loader.css'

const Loader = () => {
  return (
    <div className="flex justify-center mb-4">
      {/* Simple meat-themed loading spinner */}
      <div className="loader" style={{
        border: '5px solid #d62929',
        borderTop: '5px solid transparent',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        animation: 'spin 1s linear infinite'
      }} />
    </div>
  );
};

export default Loader;
