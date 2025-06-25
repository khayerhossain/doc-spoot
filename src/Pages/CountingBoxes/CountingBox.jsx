import React from 'react';
import CountUp from 'react-countup';
import doctorImage from '../../assets/doctors-count.jpeg'
import Ratings from '../../assets/ratings.jpeg'
import patients from '../../assets/patients (2).jpeg'
import stuffs from '../../assets/stuffs.jpeg'

const CountingBox = () => {
    return (
        <div className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          We Provide Best Medical Services
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
        See what other patients are saying! Read honest reviews, check doctor ratings, and explore real experiences to help you find the right fit. With clear details on specialties, experience, and availability, making confident healthcare choices has never been easier.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center space-y-3">
            <img className='w-16 h-16' src={doctorImage} alt="" />
            <h3 className="text-2xl font-bold">
              <CountUp end={199} duration={10} />+
            </h3>
            <p className="text-gray-600">Total Doctors</p>
          </div>
  
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center space-y-3">
            <img className='w-16 h-16 rounded-2xl' src={Ratings} alt="" />
            <h3 className="text-2xl font-bold">
              <CountUp end={467} duration={8} />+
            </h3>
            <p className="text-gray-600">Total Reviews</p>
          </div>
  
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center space-y-3">
          <img className='w-16 h-16 rounded-2xl' src={patients} alt="" />          
            <h3 className="text-2xl font-bold">
              <CountUp end={1900} duration={7} />+
            </h3>
            <p className="text-gray-600">Patients</p>
          </div>
  
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center space-y-3">
          <img className='w-16 h-14 rounded-2xl' src={stuffs} alt="" />  
            <h3 className="text-2xl font-bold">
              <CountUp end={300} duration={7} />+
            </h3>
            <p className="text-gray-600">Total Staffs</p>
          </div>
        </div>
      </div>
    );
};

export default CountingBox;