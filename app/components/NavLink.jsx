import Link from "next/link";
import React from "react";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      className="block py-2 pr-4 pl-3 text-[#abb7be] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={onClick} // Handle the click event to close the dropdown
    >
      {title}
    </Link>
  );
};

export default NavLink;
