"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbarmenu from "./navbarmenu";
import { useState } from "react";

const links = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },
  {
    id: "2",
    name: "About Us",
    path: "/aboutus",
  },
  {
    id: "3",
    name: "Tour Packages",
    path: "/",
  },
  {
    id: "4",
    name: "Contact Us",
    path: "/",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [active, setactive] = useState(false)
  return (
    <>
      <nav className="flex justify-between items-center px-4 lg:px-18 h-41 fixed top-0 w-full z-50 bg-[#ffffff43]">
        <Image
          src="/logo.png"
          width={133}
          height={130}
          alt="logo of the page"
        />
        <div className="hidden lg:flex w-52 justify-between">
          <Navbarmenu links={links} />
        </div>
        <button className="block lg:hidden" onClick={() =>setactive(prev=>!prev)}>
          <Image
            src="/bars-solid.svg"
            width={20}
            height={20}
            alt="Mobile nav"
          />
        </button>
      </nav>
      <div className={`block NavMenu lg:hidden px-5  ${(active)? "translate-x-0" : "-translate-x-full"} duration-75 transition-all fixed  top-41 w-full z-50`}>
        <Navbarmenu links={links} />
      </div>
    </>
  );
};

export default Navbar;
