// import React, { useState } from "react";
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

  // Toggle dark mode
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Apply theme class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });
      const data = await res.text();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <nav className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 dark:text-gray-100 items-center"
                >
                  <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                  <span>Moniker-Maven</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8">
                <a href="#" className="">
                  Home
                </a>
                <a href="#">Benefits</a>
                <a href="#">Our Classes</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden sm:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon
                    className={`h-6 w-6 cursor-pointer ${darkMode ? "text-yellow-500" : "text-gray-700"
                      }`}
                    onClick={handleThemeToggle}
                  />
                  <SunIcon
                    className={`h-6 w-6 cursor-pointer ${darkMode ? "text-gray-700" : "text-yellow-500"
                      }`}
                    onClick={handleThemeToggle}
                  />
                </div>
                <div>
                  <button className="button">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-100" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-gray-100 dark:bg-gray-700 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
            }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="border-l-4 border-gray-600 dark:border-gray-300">
                Features
              </a>
              <a href="#">Pricing</a>
              <a href="#">Download</a>
              <a href="#">Classic</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="p-8">
        <h1 className="text-4xl font-bold">Welcome to Moniker-Maven</h1>
        <p>This is a sample page content.</p>
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="pd-4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="button block" type="submit">Submit</button>
        </form>
        {response && (
          <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-700">
            <h2 className="text-2xl font-bold">Response:</h2>
            <pre>{response}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
