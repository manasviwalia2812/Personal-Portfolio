import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


const Navbar = () => {
  return (
    <nav className="mb-40 flex items-center justify-between fixed top-0 left-0 w-full">
      <div className="flex flex-shrink-0 items-center">
        <p><button onClick={scrollToTop} className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold italic py-2 px-4 rounded-full text-1xl shadow-lg transform transition-transform hover:scale-110 ml-4">MW</button></p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/manasvi-walia-9516442a8/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/manasviwalia2812" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div> 
    </nav>
  )
};

export default Navbar
