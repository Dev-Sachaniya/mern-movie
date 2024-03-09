import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import useLogout from "../hooks/useLogout";
import { useUserContext } from "../context/userContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { loading, logout } = useLogout();
  const { setUser } = useUserContext();
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const disconnect = async () => {
    await logout();
  };
  // Array containing navigation items

  return (
    <div className="flex justify-between w-full items-center h-14 bg-white mx-auto px-4 text-black border-b-2">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Popcorn Palette
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        <li className="p-4 hover:bg-[#00df9a] text-black rounded-xl m-2 cursor-pointer duration-300 ">
          <Link to={"/"}>Home</Link>
        </li>
        <li
          onClick={disconnect}
          className="p-4 hover:bg-[#00df9a] text-black rounded-xl m-2 cursor-pointer duration-300 "
        >
          Logout
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={30} className="text-black" />
        ) : (
          <AiOutlineMenu size={30} className="text-black" />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#85e685] ease-in-out duration-500 z-20"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 z-20">
          Popcorn Palette
        </h1>

        {/* Mobile Navigation Items */}
        <li className="p-4 hover:bg-[#00df9a] text-white rounded-xl m-2 cursor-pointer duration-300 ">
          <Link to={"/"}>Home</Link>
        </li>
        <li
          onClick={disconnect}
          className="p-4 hover:bg-[#00df9a] text-white rounded-xl m-2 cursor-pointer duration-300 "
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
