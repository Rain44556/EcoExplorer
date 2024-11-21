
import { Link, useNavigate } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="relative h-[500px]">
      <div className="carousel w-full h-full">
        
        <div id="slide1" className="carousel-item w-full">
          <img src="https://i.ibb.co.com/mCSZq0M/Most-Adventurous-things-to-do-in-your-lifetime-update-timur-garifov-sis-ZWCDkmw-A-unsplash.webp" alt="Eco Adventure 1" className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-1000 ease-in-out transform hover:scale-105" />
        </div>
  
        <div id="slide2" className="carousel-item w-full">
          <img src="https://i.ibb.co.com/cTLYvkQ/Garhwal-Trek-n-Raft-15.jpg" alt="Eco Adventure 2" className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-1000 ease-in-out transform hover:scale-105" />
        </div>

        <div id="slide3" className="carousel-item w-full">
          <img src="https://i.ibb.co.com/VJdnSrC/adventurous-couple-jump-into-lake-product-5e09f02fd5b32-1600.jpg" alt="Eco Adventure 3" className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-1000 ease-in-out transform hover:scale-105" />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <a href="#slide1" className="btn btn-circle bg-white text-gray-800 hover:bg-green-500 hover:text-white transition-all duration-300">•</a>
        <a href="#slide2" className="btn btn-circle bg-white text-gray-800 hover:bg-green-500 hover:text-white transition-all duration-300">•</a>
        <a href="#slide3" className="btn btn-circle bg-white text-gray-800 hover:bg-green-500 hover:text-white transition-all duration-300">•</a>
      </div>
    </section>
  );
};

export default Banner;

