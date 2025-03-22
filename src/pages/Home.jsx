import React, { useState } from 'react';
import { Search, Instagram, Facebook } from 'lucide-react';
import logo from '../assets/logo.webp';
import headerleft from '../assets/headerleft.webp';
import headerRight from '../assets/headerRight.webp';
import spaceimageright from '../assets/spaceimageright.webp';
import spaceimageleft from '../assets/spaceimageleft.webp';
import ServiceList from './ServiceList'
import Abovefooter from './Abovefooter'
import { Link } from 'react-router-dom';



const BeautySalonHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="relative w-full h-screen">
      {/* Split background layout */}
      <div className="flex h-full">
        <div className="w-1/2 bg-gray-300">
        <img src={headerleft} alt = 'logo' className='w-full h-full object-cover' />
        </div>
        <div className="w-1/2 bg-pink-200">
        <img src={headerRight} alt='headerRight' className='w-full h-full object-cover' />
        </div>
      </div>
      

      <div className="absolute inset-0 flex flex-col">
        {/* Navigation bar */}
        <nav className="flex items-center justify-between px-8 py-4">

          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-yellow-500 font-script">
                  <img src={logo} alt = 'logo' className='w-full h-full object-cover' />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white font-medium">Home</a>
            <Link to="/about-us" className="text-white font-medium">About Us</Link>
            <div className="relative group">
              <a href="/Services" className="text-white font-medium flex items-center">
                Services
                <svg className="ml-1 w-1 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>

              <a href="#" className="text-white font-medium">Blog</a>
              <a href="#" className="text-white font-medium">Appointment</a>
              <a href="#" className="text-white font-medium">Contacts</a>
          
          </div>
          
          {/* Search and Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button type="button" aria-label="Search" className="text-white">
              <Search size={20} />
            </button>
            <a href="#" aria-label="Instagram" className="text-white">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="border border-white text-white px-4 py-2 hover:bg-white hover:text-pink-300 transition duration-300">
              BOOK A VISIT
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            type="button" 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 bg-opacity-90 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white font-medium">Home</a>
              <a href="#" className="text-white font-medium">About Us</a>
              <a href="#" className="text-white font-medium">Services</a>
              <a href="#" className="text-white font-medium">Blog</a>
              <a href="#" className="text-white font-medium">Appointment</a>
              <a href="#" className="text-white font-medium">Contacts</a>
              <div className="flex space-x-4 pt-4">
                <a href="#" aria-label="Instagram" className="text-white">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="Facebook" className="text-white">
                  <Facebook size={20} />
                </a>
              </div>
              <a href="#" className="border border-white text-white px-4 py-2 text-center">
                BOOK A VISIT
              </a>
            </div>
          </div>
        )}
        
        {/* Hero content */}
        <div className="flex-1 flex items-center px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-dm font-light text-black leading-tight">
            <span className="italic text-white">Bea</span>
            <span className='italic'>utiful </span>
               <span className="italic">you,</span>
              <br />
              <span className="font-script text-5xl md:text-7xl text-pink-100 pl-12">from  </span><span className='font-dm italic'>head to toe</span>
            </h1>
            <p className="mt-6 text-white text-xl max-w-xl mx-auto">
              We're excited to offer a variety of services to make your nails, hair, makeup, brows, and lashes look great!
            </p>
            
            {/* Services menu button */}
            <div className="flex justify-center items-center mt-12">
              <button className="bg-white rounded-full w-32 h-32 flex flex-col items-center justify-center text-gray-800 transform transition hover:scale-105">
                <span className="text-xs tracking-wider">OUR</span>
                <span className="text-sm tracking-wider">SERVICES</span>
                <span className="text-sm tracking-wider">MENU</span>
              </button>
            </div>
          </div>
        </div>
      </div>
        
            <div className="flex justify-center items-center text-gray-500 h-screen w-full font-dm text-center">
              <h1 className="text-4xl md:text-6xl font-light leading-snug max-w-3xl">
                We are here for you and excited to serve you as you trust us with your look. 
                Let’s collaborate on your vision to make it come alive.
              </h1>
            </div>

            <div>
            <div className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-white">
      

      <div className="md:w-1/2">
        <h4 className="text-sm tracking-wide uppercase text-gray-500">A SPACE FOR YOU</h4>
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mt-4 leading-tight">
          Personalized beauty treatments <br />
          <span className="italic text-pink-500">tailored</span> to you
        </h1>
      </div>


      <div className="md:w-1/2 flex justify-center relative">
        <img
          src={spaceimageright}
          alt="Facial Treatment"
          className="w-80 md:w-96 rounded-lg shadow-lg transform rotate-6"
        />
        <img
          src={spaceimageleft}
          alt="Salon Interior"
          className="w-100 md:w-80 rounded-lg shadow-lg absolute -left-20 -bottom-16 transform -rotate-6"
        />
      </div>


    </div>
  </div>

  <ServiceList />
  <Abovefooter />

  
    

          


    </header>



    
  );
};

export default BeautySalonHeader;