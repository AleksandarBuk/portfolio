import { useState } from "react";
import { close, signalBlueLight, menu } from "../assets";
import { navLinks } from "../constants";
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleNavClick = (title) => {
    if (title === "Contact") {
      setShowContact(true);
    } else {
      setActive(title);
    }
  };

  return (
    <>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        {/* <img src={signalBlueLight} alt="signalBlue" className="w-[100px] h-[100px] mt-2 rounded-sm" /> */}

        <ul className={`list-none sm:flex hidden justify-end items-center flex-1 ${toggle ? "hidden" : ""}`}>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => handleNavClick(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => handleNavClick(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Contact Information</h3>
              <div className="mt-2 px-7 py-3">
                <a href="mailto:aleksandar.buk@gmail.com" className="flex items-center justify-center text-blue-500">
                  <FaEnvelope className="mr-2" /> aleksandar.buk@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/aleksandar-buk/" className="flex items-center justify-center text-blue-500 mt-2">
                  <FaLinkedin className="mr-2" /> LinkedIn Profile
                </a>
              </div>
              <div className="mt-4">
                <button
                  className="inline-block bg-blue-500 text-white rounded-full px-5 py-2 text-sm"
                  onClick={() => setShowContact(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
