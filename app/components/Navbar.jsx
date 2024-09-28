"use client";

import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { useState } from "react";

import { X, Menu } from "lucide-react";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          Logo
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-slate-2"
            >
              <Menu className="h-5 w-5 text-white fill-white" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-slate-text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-slate-2"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex items-center justify-center p-4 md:space-x-8 md:p-0 mt-0">
            {navLinks.map((link) => (
              <li key={link.path}>
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
