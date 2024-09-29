import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, HomeIcon, BookOpenIcon, ChartBarIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold flex items-center space-x-2">
          <a href="#">NovaNotes</a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="/" className="hover:text-blue-400 transition duration-200 flex items-center">
            <HomeIcon className="h-5 w-5 mr-1" />
            Home
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-200 flex items-center">
            <BookOpenIcon className="h-5 w-5 mr-1" />
            Syllabus
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-200 flex items-center">
            <ChartBarIcon className="h-5 w-5 mr-1" />
            Flowcharts
          </a>
          <a href="https://github.com/igennova/Notes" className="hover:text-blue-400 transition duration-200 flex items-center">
            <CodeBracketIcon className="h-5 w-5 mr-1" />
            Contribute
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <a href="/" className="hover:text-blue-400 transition duration-200 flex items-center">
              <HomeIcon className="h-5 w-5 mr-1" />
              Home
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-200 flex items-center">
              <BookOpenIcon className="h-5 w-5 mr-1" />
              Syllabus
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-200 flex items-center">
              <ChartBarIcon className="h-5 w-5 mr-1" />
              Flowcharts
            </a>
            <a href="https://github.com/igennova/Notes" className="hover:text-blue-400 transition duration-200 flex items-center">
              <CodeBracketIcon className="h-5 w-5 mr-1" />
              Contribute
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
