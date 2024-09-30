import { useState, useEffect } from "react";
import ProfileImg from "../../assets/images/profile.png";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiGift } from "react-icons/tfi";
import { RiMessage3Line } from "react-icons/ri";
import { TbBellRinging } from "react-icons/tb";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="px-10 py-4 mt-2">
      <div className="flex items-center gap-7">
        <img
          src={ProfileImg}
          alt="profile img"
          className="object-cover rounded-full w-14 h-14"
        />
        <div className="relative inline-block p-3 rounded-md bg-light-darker dark:bg-dark-darker text-dark-main dark:text-light-main">
          <IoSettingsOutline size="1.5rem" />
          <span className="text-sm bg-[#EC5B59] absolute rounded-full flex items-center justify-center text-white min-w-6 h-6 -top-3 -right-3">
            24
          </span>
        </div>
        <div className="relative inline-block p-3 rounded-md bg-light-darker dark:bg-dark-darker text-dark-main dark:text-light-main">
          <TfiGift size="1.5rem" />
          <span className="text-sm bg-[#0057C8] absolute rounded-full flex items-center justify-center text-white min-w-6 h-6 -top-3 -right-3">
            85
          </span>
        </div>
        <div className="relative inline-block p-3 rounded-md bg-light-darker dark:bg-dark-darker text-dark-main dark:text-light-main">
          <RiMessage3Line size="1.5rem" />
          <span className="text-sm bg-[#827DD3] absolute rounded-full flex items-center justify-center text-white min-w-6 h-6 -top-3 -right-3">
            4
          </span>
        </div>
        <div className="relative inline-block p-3 rounded-md bg-light-darker dark:bg-dark-darker text-dark-main dark:text-light-main">
          <TbBellRinging size="1.5rem" />
          <span className="text-sm bg-[#3cce99] absolute rounded-full flex items-center justify-center text-white min-w-6 h-6 -top-3 -right-3">
            12
          </span>
        </div>
        <button
          onClick={toggleDarkMode}
          className="text-dark-main dark:text-light-main"
        >
          Mode
        </button>

        <div className="flex items-center space-x-2">
          <div
            onClick={toggleDarkMode}
            className="flex items-center w-16 h-8 p-1 rounded-full cursor-pointer dark:bg-dark-lighter bg-light-darker"
          >
            <span className="z-20 transform translate-x-0 dark:text-light-main">
              <FaRegMoon />
            </span>
            <span className="z-20 transform -translate-x-full dark:text-light-main">
              <FiSun />
            </span>
            <div className="z-10 flex items-center justify-center w-6 h-6 text-white transition-transform duration-300 transform translate-x-0 rounded-full bg-dark-main dark:translate-x-8">
              {/* {darkMode ? <FaRegMoon /> : <FiSun />} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
