import React from 'react';
import { Link } from 'react-router';
const DoctorCard = ({data}) => {
    const {image,name,education,experience,registrationNumber,id}=data

    return (
        <div>
             <div className="bg-white p-4 rounded-xl shadow-md w-80">
      {/* Image */}
      <img
        src={image}
        alt="Doctor"
        className="rounded-xl w-full h-72 object-cover"
      />

      {/* Badges */}
      <div className="flex gap-2 mt-3">
        <span className="bg-green-100 text-green-600 px-3 py-1 text-sm rounded-full font-medium">
          Available
        </span>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 text-sm rounded-full font-medium">
          {experience}
        </span>
      </div>

      {/* Info */}
      <h2 className="text-lg font-bold mt-3">{name}</h2>
      <p className="text-sm text-gray-700 mt-1">
        {education}
      </p>

      {/* Reg Number */}
      <div className="text-sm text-gray-600 mt-2 flex items-center gap-1">
        <span>Ⓡ</span>
        <span>{registrationNumber}</span>
      </div>

      {/* Button */}
    <Link to={`DoctorDetails/${id}`}>
    <button className="mt-4 w-full text-blue-600 border border-blue-600 rounded-full py-2 font-medium cursor-pointer hover:bg-blue-600 hover:text-white transition">
        View Details
      </button>
    </Link>
    </div>
        </div>
    );
};

export default DoctorCard;