import React from 'react';
import sponsor8 from '../../assets/images/logo/kenya-bureau-of-halal-certification-seeklogo.webp';
import sponsor2 from '../../assets/images/logo/66896ce47c72f170528dcd60_277155372_334994448655936_5897768923334682852_n-removebg-preview.webp';
import sponsor7 from '../../assets/images/logo/KMC-1-removebg-preview.webp';
import sponsor9 from '../../assets/images/logo/iso2200-removebg-preview.webp';
import './brands.css';

function Brands() {
  return (
    <div className='max-w-screen-xl  container mx-auto mb-12'>
      <div id='test' className='flex pl-4 pr-4 items-center justify-between md:mt-4 space-x-8 overflow-x-auto md:overflow-x-hidden'>
        <img src={sponsor8} alt="" loading='lazy' />
        <img className='secondimg' src={sponsor2} alt="" loading='lazy' />
        <img src={sponsor7} alt="" loading='lazy' />
        <img src={sponsor9} alt="" loading='lazy' />
      </div>
    </div>
  );
}

export default Brands;
