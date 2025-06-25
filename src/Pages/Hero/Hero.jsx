import React from 'react';
import HeroImage1 from '../../assets/doctor-1.jpg';
import HeroImage2 from '../../assets/doctor-2.jpg';
const Hero = () => {
    return (
      <div className='bg-gray-100 rounded-2xl p-10 pb-20  border-3 border-white'>
            <div className='text-center space-y-4 mt-5 lg:mt-12'>
<h1 className='text-4xl font-bold'>Dependable Care, Backed by Trusted
    <br /> Professionals.</h1>
<p className='text-[#0F0F0F]'>Our platform connects you with verified, experienced doctors across various specialties-all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
<div className='flex flex-col lg:flex-row justify-center items-center '>
    <input type="text" placeholder='Search any doctor...' className="border text-left border-gray-400 rounded-3xl px-16 lg:px-32 py-1.5" />
    <button className="btn lg:ml-2 rounded-3xl text-white px-6 bg-[#176AE5] mt-4 lg:mt-0">Search Now</button>
</div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:mx-20'>
          <img src={HeroImage2} alt="Doctor" className="w-full h-full max-w-md mx-auto mt-8 rounded-2xl" />
          <img src={HeroImage1} alt="Doctor" className="w-full h-full max-w-md mx-auto mt-8 rounded-2xl" />
      </div>
  </div>
    );
};

export default Hero;