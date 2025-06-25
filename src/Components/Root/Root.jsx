import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='bg-[#EFEFEF]'>
        <Navbar></Navbar>
        <div className="px-4 md:px-6 lg:px-12 xl:px-16 max-w-screen-xl mx-auto">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
       
        </div>
    );
};

export default Root;