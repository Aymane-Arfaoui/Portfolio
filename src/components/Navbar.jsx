import React from 'react';
import logo from "../assets/AymaneArLogo.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return ( 
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      <span className="mx-2 text-white text-2xl font-bold">Aymane Arfaoui</span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
      </div>
    </nav>
  );
}

export default Navbar;
