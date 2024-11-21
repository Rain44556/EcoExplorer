import { Link } from "react-router-dom";
import gitLogo from '../assets/github-logo.png'


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">© 2024 Eco Explore. All rights reserved.</p>
        <Link
          to={"https://github.com/Rain44556"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-green-400 hover:text-green-500 transition duration-300 "
        >
           <img className="bg-white mx-auto" src={gitLogo} alt="" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
