import React, { useEffect, useState } from 'react';
import { getAppointment } from '../../Utils';
import toast from 'react-hot-toast';
import Emptyimage from '../../assets/emty-appointment.jpg'
import { NavLink } from 'react-router';
import ChartComponent from '../Charts/Chart';

const Bokings = () => {
  const [displayAppointment, setDisplayAppointment] = useState([]);
  
  useEffect(() => {
    const savedAppointments = getAppointment();
    setDisplayAppointment(savedAppointments);
  }, []);
 
  const handleCancel = (id) => {
    const updated = displayAppointment.filter((item) => item.id !== id);
    setDisplayAppointment(updated);
    localStorage.setItem('appointment', JSON.stringify(updated));
    toast.error("Appointment cancelled.")
  };
  const chartData = displayAppointment.reduce((acc, item) => {
    const found = acc.find(d => d.name === item.name);
    if (found) found.count++;
    else acc.push({ name: item.name, count: 1 });
    return acc;
  }, []);
  
  

  return (
    <div className="p-6 space-y-6 min-h-screen">
    <h2 className="text-2xl font-bold text-center mt-5">Your Booked Appointments</h2>
    {displayAppointment.length > 0 && (
  <ChartComponent
    data={chartData}
    xKey="name"
    yKey="count"
    title="Appointments by Doctor"
  />
)}

    {displayAppointment.length === 0 ? (
     <div className="text-center bg-white rounded-2xl p-6 mt-32 lg:mt-0 shadow ">
     <img
       src={Emptyimage}
       alt="No appointments"
       className="mx-auto w-60 h-60 object-contain"
     />
     <p className=" text-l font-bold pb-5">
       You haven't booked any appointment yet.
     </p>
     <NavLink to="/"><button className="btn rounded-3xl text-white px-6 bg-[#176AE5]">Browse Appoinments</button></NavLink>
   </div>
    ) : (
      displayAppointment.map((doctor) => (
        <div
          key={doctor.id}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 max-w-xl mx-auto"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{doctor.name}</h2>
              <p className="text-sm text-gray-600">{doctor.speciality}</p>
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Appointment Fee : {doctor.visitFee} Taka + Vat
            </div>
          </div>

          <hr className="my-4 border-dashed border-gray-300" />

          <button
            onClick={() => handleCancel(doctor.id)}
            className="w-full text-red-600 font-medium border border-red-400 cursor-pointer rounded-full py-2 hover:bg-red-50 transition"
          >
            Cancel Appointment
          </button>
        </div>
      ))
    )}
  </div>
  );
};

export default Bokings;
