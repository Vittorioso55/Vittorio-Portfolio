"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { SolidIconName } from '@heroicons/react/24/solid';
import { OutlineIconName } from '@heroicons/react/24/outline';


const navLinks = [
  {
    title: "Projects",
    path: "#projects",
    
  },
  {
    title: "About",
    path: "#about",
  },

];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-black top-0 left-0 right-0 z-10 bg-black bg-opacity-100">
    <div className="flex items-center justify-between container lg:py-4 mx-auto px-1 py-2">
      
      <div className="flex items-left">
        <Link
          href={"/"}
          className=" py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
          Vittorio Gennuso
        </Link>
       
      </div>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
     


      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
    
  );
};

export default Navbar;
