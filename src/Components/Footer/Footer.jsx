import React from 'react';
import NavLogo from '/logo.png'
import { NavLink } from 'react-router';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import pinterset from '../../assets/pinterset.png';
const Footer = () => {
    return (
        <div>
             <footer className="text-center py-8 bg-white">
      {/* Logo & Brand */}
      <div className="flex items-center justify-center mb-4"> <img className='w-5 h-5 mt-0.5' src={NavLogo} alt="" />
                  <h4 className='text-black font-bold text-xl '>DocSpot</h4>
               </div>

      {/* Nav Links */}
      <div className="">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/Bokings">Bokings</NavLink></li>
            <li><NavLink className={({isActive})=>(isActive ? 'font-semibold underline text-[#176AE5]':'')} to="/Blogs">Blogs</NavLink></li>
            <li><NavLink>Contact Us</NavLink></li>
         
          </ul>
        </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 w-3/4 mx-auto my-4" />

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mt-4 text-xl">
        <a href="https://www.facebook.com/share/1ZufGTMPBL/?mibextid=wwXIfr" className="text-blue-600"><img className='w-8 h-8' src={facebook} alt="" /></a>
        <a href="https://www.instagram.com/thekhayerhossain?igsh=NXNrOGY3dWwyYzlo&utm_source=qr" className="text-blue-600"><img className='w-8 h-8' src={instagram} alt="" /></a>
        <a href="https://www.instagram.com/thekhayerhossain?igsh=NXNrOGY3dWwyYzlo&utm_source=qr" className="text-blue-600"><img className='w-8 h-8' src={twitter} alt="" /></a>
        <a href="https://www.facebook.com/share/1ZufGTMPBL/?mibextid=wwXIfr" className="text-blue-600"><img className='w-8 h-8' src={linkedin} alt="" /></a>
        <a href="https://www.facebook.com/share/1ZufGTMPBL/?mibextid=wwXIfr" className="text-blue-600"><img className='w-8 h-8' src={pinterset} alt="" /></a>
      
      </div>
    </footer>
        </div>
        // 
        
    );
};

export default Footer;