import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          Logo
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul>
            <li>
              <NavLink href={"/about"} title={"About"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
