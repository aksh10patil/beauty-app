import abovefooter from '../assets/abovefooter.webp';
import logo from '../assets/Logo.webp'
import Footer from './components/Footer';


export default function BeautyGlowUp() {
    return (
        <div>
      <div className="flex flex-col md:flex-row items-center justify-between h-screen">
        {/* Left - Image Section */}
        <div className="md:w-1/2 w-full h-full">
          <img
            src={abovefooter} 
            alt="Salon Welcome"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Right - Text Section */}
        <div className="md:w-1/2 w-full h-full bg-[#6D7154] text-white p-10 md:p-20 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-serif leading-tight text-white">
            Exclusive all-in-one glow up beauty <br />
            <span className="italic text-pink-300">packages</span>
          </h1>
  
          <p className="text-lg mt-6 text-gray-200">
            We created this space with you in mind, for your time with us to be calming and invigorating.
            It’s your time to rest easy in our salon home. But before you’re gone, pay our photo booth a visit
            and you’ll be so glad you did.
          </p>
  
          <ul className="mt-6 space-y-3">
            <li className="flex items-center text-lg text-gray-100">
              <span className="text-pink-300 text-xl mr-3">✔</span>
              Tailored treatments for every client;
            </li>
            <li className="flex items-center text-lg text-gray-100">
              <span className="text-pink-300 text-xl mr-3">✔</span>
              A range of high-quality beauty services;
            </li>
            <li className="flex items-center text-lg text-gray-100">
              <span className="text-pink-300 text-xl mr-3">✔</span>
              Top-rated by our clients.
            </li>
        
          </ul>
          <button className="bg-white text-gray-800 text-sm mt-4 tracking-wides px-4 py-3 border
           border-white hover:bg-gray-200 rounded-md transition">
                LEARN MORE
            </button>
        </div>
        
        
      </div>

        <div>
        <div className="bg-[#f8f5f0] text-gray-800 px-10 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Heading - Left Side */}
        <div className="text-left">
          <h2 className="text-4xl font-serif text-gray-800 leading-tight">
            Why wait? <br />
            <span className="text-[#b37c86]">Book us now</span> and enjoy <br />
            your relaxing afternoon with us
          </h2>
        </div>

        {/* Appointment Form - Right Side */}
        <div className="bg-[#b37c86] text-white p-10 rounded-lg">
          <h2 className="text-3xl font-serif mb-6">Book an appointment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="bg-transparent border-b border-white p-2 focus:outline-none">
              <option>Select Service</option>
            </select>
            <select className="bg-transparent border-b border-white p-2 focus:outline-none">
              <option>Select Stylists</option>
            </select>
            <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white p-2 focus:outline-none" />
            <input type="text" placeholder="Your Phone" className="bg-transparent border-b border-white p-2 focus:outline-none" />
            <input type="date" className="bg-transparent border-b border-white p-2 focus:outline-none" />
            <select className="bg-transparent border-b border-white p-2 focus:outline-none">
              <option>Select</option>
            </select>
            <select className="bg-transparent border-b border-white p-2 focus:outline-none">
              <option>Select</option>
            </select>
          </div>
          <button className="mt-6 bg-white text-gray-800 px-6 py-2 font-semibold tracking-wide border border-white hover:bg-gray-200">
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>
    </div>
                
                       
        </div>
             </div>



     
    );
  }
  