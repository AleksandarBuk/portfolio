import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
// import {leetcode} from '../assets'

const Footer = () => {
  // Function to handle scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll
    });
  };

  return (
    <footer className="bg-gray-900 text-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center justify-between flex-wrap">
        <div className="flex title-font font-medium items-center text-white">
          <FaEnvelope className="mr-2" />
          <a href="mailto:aleksandar.buk@gmail.com" className="text-white" rel="noopener noreferrer" target="_blank">aleksandar.buk@gmail.com</a>
        </div>
        <p className="text-sm text-white text-center sm:w-1/3 w-full my-4 sm:my-0">© {new Date().getFullYear()} Aleksandar Bukvic</p>
        <div className="inline-flex sm:w-1/3 justify-end w-full">
          <a href="https://twitter.com/Aleksandar_Bu" className="text-white">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/aleksandar-buk/" className="ml-4 text-white">
            <FaLinkedin />
          </a>
          <a href="https://github.com/AleksandarBuk" className="ml-4 text-white">
            <FaGithub />
          </a>
          {/* <a href="https://leetcode.com/Kir1q/" className="text-white ml-4">
            <img src={leetcode} alt="LeetCode" className="h-6 w-6" />
          </a> */}
        </div>
      </div>
      <div className="container mx-auto text-center py-4">
        <button 
          onClick={scrollToTop} 
          className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
