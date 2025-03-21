import logo from '../assets/logo.svg'; 
import hero from '../assets/hero.jpg';
import heroimg from '../assets/heroimg.jpg';
import Footer from './Footer';
import ServicesCarousel from '../ServiceList';

export default function Header() {
    return (
        <>
        <div className="w-full h-16 bg-white-300 flex items-center font-serif 
                        justify-between px-6 shadow-md relative">
            <div className="flex items-center gap-x-3 ml-6">
                <img src={logo} alt="Logo" className="h-10 w-10" />
                <p className="text-text-gray-500 text-lg font-bold cursor-pointer">Lush and Luxe</p>
            </div>


            <div className="flex items-center gap-x-6 mr-5">
                <p className="text-gray-500 text-lg font-serif  cursor-pointer hover:font-black ">Home</p>
                <p className="text-gray-500 text-lg font-serif  cursor-pointer  hover:font-black">Services</p>
                <p className="text-gray-500 text-lg font-serif cursor-pointer  hover:font-black">Contact</p>
            </div>
        </div>


        <div className="fixed bottom-8 right-8 z-50">
            <button className="bg-side-skin text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg 
            hover:bg-pink-500 transition-all duration-1000 animate-bounce">
            Book a Visit
            </button>
        </div>

        <div>
        <div className="relative w-full h-[50vh]">
            <img
                src={hero} 
                alt="Beauty Hero"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center  text-white px-6">
                <h1 className="text-5xl font-extrabold font-dm ">Welcome to Lush and Luxe</h1>
                <p className="mt-2 text-4xl font-dm">Indulge in beauty, elegance, and self-care</p>
            </div>
        </div>
        </div>

        <div>
        <div className="w-full bg-white flex flex-col md:flex-row items-center px-8 md:px-16 py-12">

      <div className="md:w-1/2 w-full text-left">
        <h4 className="text-blue-600 uppercase text-sm font-semibold tracking-wider">What Includes?</h4>
        <h2 className="text-4xl font-bold text-gray-900 font-dm mt-2">About the service</h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable 
          content of a page when looking at its layout. The point of using Lorem Ipsum 
          is that it has a more-or-less normal content here, making it look like readable English.
        </p>


        <h3 className="text-xl font-bold text-gray-900 mt-6 font-dm">Our Methodology :</h3>
        <div className="mt-4 space-y-4">
          {[
            "The Assessment Stage",
            "The Initialization Stage",
            "The Treatment Stage",
          ].map((stage, index) => (
            <div key={index} className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">✔️</span>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{stage}</h4>
                <p className="text-gray-600 text-sm">The point of using Lorem Ipsum is that it has a more-or-less normal letters.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
         
      <div className="md:w-1/2 w-full mt-8 md:mt-0">
        <img
          src={heroimg} 
          alt="Beauty Treatment"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
        </div>

        <div>
            <ServicesCarousel />
        </div>

        <div>
        <div className="w-full bg-gray-100 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center">

      <div className="md:w-1/2 w-full text-left">
        <h4 className="text-blue-600 uppercase text-sm font-semibold tracking-wider">
          Schedule Your Presence
        </h4>
        <h2 className="text-4xl font-bold text-gray-900 mt-2 font-dm">
          Let's get you the DREAM Look
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable 
          content of a page when looking at its layout. The point of using Lorem Ipsum 
          is that it has a more-or-less normal content here, making it look like readable English.
        </p>
      </div>

      <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <form className="space-y-4">
            {/* Input Fields */}
            {[
              { placeholder: "Name", icon: "👤" },
              { placeholder: "Email", icon: "📧" },
              { placeholder: "Phone", icon: "📞" },
              { placeholder: "Service You Need", icon: "📖" },
              { placeholder: "Any Note For Us", icon: "✍️" },
            ].map((field, index) => (
              <div key={index} className="relative">
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full border border-gray-300 py-2 pl-10 pr-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span className="absolute left-3 top-2.5 text-gray-500">{field.icon}</span>
              </div>
            ))}


            <button className="w-full text-white py-2 rounded-md bg-main-skin hover:bg-gray-700 transition">
              GET AN APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    );
}