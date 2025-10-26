import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center gap-10 px-8 py-4 
  bg-gray-800/40 backdrop-blur-md z-50 text-white font-medium border-b border-white/10 transition-all">
      <a href="#skills" className="cursor-pointer hover:text-blue-400 transition">
        Skills
      </a>
      <a href="#projects" className="cursor-pointer hover:text-blue-400 transition">
        Projects
      </a>
      <a href="#certificates" className="cursor-pointer hover:text-blue-400 transition">
        Certificates
      </a>
      <a href="#contact" className="cursor-pointer hover:text-blue-400 transition">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
