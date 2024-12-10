import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

      <div>
        <h2 className="text-2xl font-bold mb-4">Eco Explorer</h2>
        <p className="text-sm leading-relaxed">
          Your guide to sustainable adventures and eco-friendly products. Join us in exploring the beauty of nature while protecting our planet.
        </p>
      </div>
  
   
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <ul className="text-sm space-y-2">
          <li>123 Greenway, Chittagong City</li>
          <li>+1 (555) 123-4567</li>
          <li>support@ecoexplorer.com</li>
        </ul>
      </div>
  

      <div>
        <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
        <p className="text-sm mb-4">
          Subscribe to our newsletter for tips, updates, and eco-friendly inspiration.
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded text-black mb-2"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 py-2 rounded font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  
    <div className="border-t border-green-700 mt-8 pt-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between text-sm px-6">
        <p>&copy; 2024 Eco Explorer. All Rights Reserved.</p>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-green-400">Terms of Service</a></li>
        </ul>
        <div className="flex space-x-4 items-center text-2xl pr-5">
          <a href="#" aria-label="Facebook" className="hover:text-green-400"><FaFacebook /></a>
          <a href="#" aria-label="Twitter" className="hover:text-green-400"><FaXTwitter /></a>
          <a href="#" aria-label="Instagram" className="hover:text-green-400"><FaInstagramSquare /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-green-400"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
