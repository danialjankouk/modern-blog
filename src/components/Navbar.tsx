import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div>
      <ul className="bg-gray-900 border-b-2 border-gray-300 p-4 text-white flex justify-between">
        <li>
          <NavLink
            href="/login"
            className="cursor-pointer"
            activeClassName="font-semibold"
          >
            Login
          </NavLink>
        </li>
        <div className="flex space-x-4">
          <li>
            <NavLink href="/blog" className="cursor-pointer">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink href="/" className="cursor-pointer" exact>
              Home
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
