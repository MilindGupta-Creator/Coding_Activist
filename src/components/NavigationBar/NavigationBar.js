import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import JobsPage from '../../pages/JobSection/JobsPage';

const NavigationBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("Menu is open");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    console.log("Menu closed");
  };


  return (
    <nav className={`flex justify-between items-center bg-[#181818] text-white py-4 px-8 shadow-md ${isMenuOpen ? 'open' : ''} font-sans`}>
      <div className="flex items-center gap-2">
        <img className="h-16 w-16 rounded-full bg-white" src={logo} alt="CodingActivist" />
        <Link to="/" className="lg:text-5xl font-semibold font-abc text-4xl"  onClick={closeMenu}>Coding Activist</Link>
      </div>
      <div className={`lg:flex items-center lg:gap-8 ${isMenuOpen ? 'flex flex-col absolute top-[4.5rem] left-0 right-0 bg-gray-800 py-4 px-8' : 'hidden lg:flex'}`}>
        {/* <Link to="/projects" className="nav-link font-semibold " st yle={{ fontFamily: '"Poppins", sans-serif' }} onClick={closeMenu}>Projects</Link>
         */}
        <Link
          to="/jobs"
          className="font-semibold  hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          onClick={closeMenu}
          style={{ fontFamily: '"Poppins", sans-serif' , backgroundColor:"#4caf50" }} // Apply Poppins font
        >
          Jobs
        </Link>
                          
                          {/* UPLOAD JOBS */}

        {/* <Link to="/jobsfilling"><JobsPage /></Link> */}
        
        {/* <Link to="/date" className="nav-link font-semibold " style={{ fontFamily: '"Poppins", sans-serif',color:"pink" }} onClick={closeMenu}>Date</Link> */}
      </div>
      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default NavigationBar;
