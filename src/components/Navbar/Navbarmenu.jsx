"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbarmenu = ({links}) => {
  return (
    <>
    <ul className="flex gap-10 flex-col lg:flex-row">
     {links.map((link, index)=>{
         return (
          <li className={`${link.path === usePathname && "border-b-2 border-primary-color"} hover:border-b-2 hover: border-primary-color hover:text-primary-color h-16 text-white`}><Link href={link.path} key={index}>{link.name}</Link></li>
         )})}
     </ul>
     <ul className="flex gap-3 flex-row justify-center text-white lg:gap-2.5">
        <li><button>En</button></li>
        <li><Link href="/login"><button>Login</button></Link></li>
        <li ><Link href="/signup"><button className="w-32 h-8 bg-primary-color text-white rounded-full text-center">Sign Up</button></Link></li>
     </ul>
    </>
  )
}

export default Navbarmenu
