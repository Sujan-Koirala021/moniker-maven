import React, { useState, useEffect } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="flex gap-1 font-bold text-gray-700 dark:text-gray-100 items-center"
            >
              <PaperAirplaneIcon className="h-6 w-6 text-primary" />
              <span>Moniker-Maven</span>
            </a>
            <div className="hidden lg:flex ml-10 space-x-4">
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Benefits</a>
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Our Classes</a>
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">Contact Us</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="items-center hidden sm:flex space-x-4">
              <MoonIcon
                className={`h-6 w-6 cursor-pointer ${darkMode ? "text-yellow-500" : "text-gray-700"}`}
                onClick={handleThemeToggle}
              />
              <SunIcon
                className={`h-6 w-6 cursor-pointer ${darkMode ? "text-gray-700" : "text-yellow-500"}`}
                onClick={handleThemeToggle}
              />
              <button className="button">Free Trial</button>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-100" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden ${toggleMenu ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300">Benefits</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300">Our Classes</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
