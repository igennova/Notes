import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <a href="#">MyWebsite</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-400 transition duration-200">Home</a>
          <a href="#" className="hover:text-blue-400 transition duration-200">About</a>
          <a href="#" className="hover:text-blue-400 transition duration-200">Services</a>
          <a href="#" className="hover:text-blue-400 transition duration-200">Contact</a>
        </div>
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
            <a href="#" className="hover:text-blue-400 transition duration-200">Home</a>
            <a href="#" className="hover:text-blue-400 transition duration-200">About</a>
            <a href="#" className="hover:text-blue-400 transition duration-200">Services</a>
            <a href="#" className="hover:text-blue-400 transition duration-200">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
