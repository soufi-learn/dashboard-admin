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
        <div className="relative inline-block p-3 transition-all rounded-md bg-light-darker dark:bg-dark-darker text-dark-main dark:text-light-main">
          <IoSettingsOutline size="1.3rem" />
          <span className="text-sm bg-[#EC5B59] absolute rounded-full flex items-center justify-center text-white min-w-6 h-6 -top-3 -right-3">
            24
          </span>
        </div>
        <div className="relative inline-block p-3 transition-all rounded-md bg-light-darker dark:bg-dark-darker text-dark-main dark:text-light-main">
          <TfiGift size="1.3rem" />
          <span className="text-sm bg-[#0057C8] absolute rounded-full flex items-center justify-center text-white min-w-6 h-6 -top-3 -right-3">
            85
          </span>
        </div>
        <div className="relative inline-block p-3 transition-all rounded-md bg-light-darker dark:bg-dark-darker text-dark-main dark:text-light-main">
          <RiMessage3Line size="1.3rem" />
          <span className="text-sm bg-[#827DD3] absolute rounded-full flex items-center justify-center text-white min-w-6 h-6 -top-3 -right-3">
            4
          </span>
        </div>
        <div className="relative inline-block p-3 transition-all rounded-md bg-light-darker dark:bg-dark-darker text-dark-main dark:text-light-main">
          <TbBellRinging size="1.3rem" />
          <span className="text-sm bg-[#3cce99] absolute rounded-full flex items-center justify-center text-white min-w-6 h-6 -top-3 -right-3">
            12
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <div
            onClick={toggleDarkMode}
            className="flex items-center w-[5.5rem] h-10 p-1 rounded-full cursor-pointer dark:bg-dark-lighter bg-light-darker transition-all"
          >
            <span
              className={`z-20 text-xl transition-all transform -translate-x-2 ${
                darkMode ? "text-white" : "dark:text-light-main"
              }`}
            >
              <FaRegMoon />
            </span>
            <span
              className={`z-20 text-xl transition-all transform -translate-x-[2.13rem] ${
                !darkMode ? "text-white" : "dark:text-light-main"
              }`}
            >
              <FiSun />
            </span>
            <div className="z-10 flex items-center justify-center w-8 h-8 text-white duration-300 transform -translate-x-[.5rem] rounded-full bg-secondary  dark:translate-x-[2.4rem] transition-transform"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
