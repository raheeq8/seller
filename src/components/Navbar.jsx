import { useState } from "react";

import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export const navLinks = [
  {
    id: "/home",
    title: "Home",
  },
  {
    id: "/about",
    title: "About",
  },
  {
    id: "/contact",
    title: "Contact",
  },
  {
    id: "/register",
    title: "Seller Registeration",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full [box-shadow:rgba(0,_0,_0,_0.05)_0px_6px_24px_0px,_rgba(0,_0,_0,_0.08)_0px_0px_0px_1px] flex py-2 px-14 justify-between items-center navbar">
      {/* Logo */}
      <div className="flex flex-col">
      <h1 className="text-2xl text-blue-700 font-bold text-center mb-0 pb-0">Eliph</h1>
      <h1 className="text-2xl text-blue-700 font-bold">Seller Center</h1>
      </div>
      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden gap-6 justify-end items-center flex-1">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === 0 ? "text-blue-700" : "text-dimWhite"
          }`}
          onClick={() => setActive(0)}
        >
          <Link className=" font-semibold" to={`/`}>Home</Link>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === 1 ? "text-blue-700" : "text-dimWhite"
          }`}
          onClick={() => setActive(1)}
        >
          <Link className="font-semibold" to={`/about`}>About</Link>
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <IoClose /> : <CiMenuFries />}
        </button>

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-blue-700" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
