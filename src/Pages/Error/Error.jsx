import React from 'react';
import ErrorImage from '../../assets/error-image.jpg'
import { Link } from 'react-router';
const Error = () => {
    return (
       <div className="div mt-20 lg:mt-0 min-h-[calc(100vh-380px)]">
         <div className='flex justify-center items-center p-8'>
            <img className='w-2xl' src={ErrorImage} alt="" />
        </div>
    <div className='text-center mb-4'>
        <Link to="/">
        <button className="btn rounded-3xl text-white px-6 bg-[#176AE5]">Back to Home</button>
        </Link>
    </div>
       </div>
    );
};

export default Error;