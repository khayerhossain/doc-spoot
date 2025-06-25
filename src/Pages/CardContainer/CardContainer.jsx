import React, { useState } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';

const CardContainer = ({ doctorsData }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedDoctors = showAll ? doctorsData : doctorsData.slice(0, 6);

  return (
    <div className='py-12 mt-0 lg:mt-8'>
      <h1 className='text-3xl font-bold text-center'>Our Best Doctors</h1>
      <p className='mt-5 text-center'>
      Get access to trusted, experienced doctors from multiple specialties — anytime, anywhere. From regular health checkups to urgent medical advice, easily book appointments and receive the care you deserve, right when you need it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-4 lg:mt-16 gap-4">
  {
    displayedDoctors.map(data => <DoctorCard key={data.id} data={data} />)
  }
    </div>


      <div className="flex justify-center mt-10">
        <button
          onClick={() => {
            setShowAll(prev => !prev);
            if (showAll) window.scrollTo(0, 400); // Scroll only when hiding
          }}
          className="btn rounded-3xl text-white px-6 bg-[#176AE5]"
        >
          {showAll ? 'Show Less' : 'View All Doctors'}
        </button>
      </div>
    </div>
  );
};

export default CardContainer;
