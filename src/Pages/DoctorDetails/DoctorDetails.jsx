import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addAppointment } from '../../Utils';

const DoctorDetails = () => {
    const data=useLoaderData()
    const {id}=useParams()
    const singleDetails=data.find(details=>details.id===parseInt(id))
    const {
    image,name,education,speciality,registrationNumber,workingPlace,visitFee
    }=singleDetails

    const handleAppointment=()=>{
      addAppointment(singleDetails)
    }
    return (
        <div>
            <div className="space-y-6 p-6">
      {/* Top Section */}
      <div className="rounded-2xl shadow-md bg-white p-6">
        <h2 className="text-3xl font-bold text-center mb-2">Doctor,s Profile Details</h2>
        <p className="text-gray-600 text-center">
        Explore detailed profiles of our highly qualified and experienced medical professionals. Learn about their education, specialties, years of experience, consultation schedules, and affiliated hospitals to help you choose the right healthcare provider with confidence.
        </p>
      </div>

      {/* Doctor Card */}
      <div className="rounded-2xl shadow-md bg-white p-6 flex flex-col md:flex-row gap-6">
        <img
          src={image}
          alt="Doctor"
          className="w-48 h-auto rounded-xl object-cover"
        />
        <div className="flex-1 space-y-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{education}</p>
          <p className="text-sm text-gray-600">{speciality}</p>
          <p className="text-sm mt-2">Working at</p>
          <p className="font-bold font-2xl">
            {workingPlace}
          </p>
          <p className="text-sm text-gray-600 mt-2 border-t-2 pt-3 border-dashed border-b-2 border-gray-200 pb-3">
            Reg No: {registrationNumber}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
          <div className="flex flex-wrap gap-2 mt-4">
            <h4 className='text-l font-bold'>Availability</h4>
  {[0, 1, 2].map((i) => (
    singleDetails.availableDays[i] ? (
      <span key={i} className="bg-green-100 text-green-600 border border-green-400 px-3 py-1 rounded-full text-sm">
        {singleDetails.availableDays[i]}
      </span>
    ) : null 
  ))}
</div>
          </div>
          <p className="mt-2 text-sm">
            Consultation Fee:<span className="text-blue-600 font-semibold">Taka : {visitFee}</span> (incl. Vat) <a href="#" className="text-sm text-blue-600 underline">Per consultation</a>
          </p>
        </div>
      </div>

      {/* Booking Section */}
      <div className="rounded-2xl shadow-md bg-white p-6 space-y-4">
        <h3 className="text-xl text-center font-bold border-b-2 border-dashed border-gray-200 pb-4">Book an Appointment</h3>
        <div className="flex justify-between items-center border-b-2 pb-4.5 border-dashed border-gray-200">
            <h3 className='text-l font-bold'>Availability</h3>
            <h3 className='text-green-600 text-sm bg-green-100 px-2.5 py-1.5 border border-green-400 rounded-2xl font-medium'>Doctor Available Today</h3>
        </div>
        <div className=" text-red-500 bg-orange-100 text-sm p-3 rounded-lg">❗
          Due to high patient volume, we are currently accepting appointments for today only.
          We appreciate your understanding and cooperation.
        </div>
        <button onClick={handleAppointment} className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 cursor-pointer rounded-md">
          Book Appointment Now
        </button>
      </div>
    </div>
        </div>
    );
};

export default DoctorDetails;