import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const DarkLightButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center space-x-2">
      <div
        onClick={() => setDarkMode(!darkMode)}
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
        <div className="z-10 flex items-center justify-center w-8 h-8 text-white duration-300 transform -translate-x-[.5rem] rounded-full bg-secondary-main  dark:translate-x-[2.4rem] transition-transform"></div>
      </div>
    </div>
  );
};

export default DarkLightButton;
