"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../images/logo.svg";
import { FaFacebook, FaLinkedin, FaBars } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <>
        <div className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gray-800 text-white z-99">
            <div className="flex items-center space-x-5">
                <Image
                    src={logo}
                    alt="ZB Engineering Logo"
                    width={48}
                    height={48}
                />
                <p className="font-bold text-xl">ZB Engineering & Technology</p>
            </div>
            <div className="hidden md:block">
                <ul className="flex space-x-4">
                    <Link href="/" className={`hover:text-gray-400 cursor-pointer ${pathname === "/" ? "text-[#F3692A]" : ""}`}>Home</Link>
                    <Link href="/about" className={`hover:text-gray-400 cursor-pointer ${pathname === "/about" ? "text-[#F3692A]" : ""}`}>About</Link>
                    <Link href="/projects" className={`hover:text-gray-400 cursor-pointer ${pathname === "/projects" ? "text-[#F3692A]" : ""}`}>Projects</Link>
                    <Link href="/services" className={`hover:text-gray-400 cursor-pointer ${pathname === "/services" ? "text-[#F3692A]" : ""}`}>Services</Link>
                    <Link href="/contact" className={`hover:text-gray-400 cursor-pointer ${pathname === "/contact" ? "text-[#F3692A]" : ""}`}>Contact</Link>
                    <li className="hover:text-gray-400 cursor-pointer">|</li>
                    <a
                        href="https://www.facebook.com/profile.php?id=61561311471666"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 cursor-pointer"
                    >
                        <FaFacebook size="24px" />
                    </a>
                    <Link href="#" className="hover:text-gray-400 cursor-pointer">{<FaLinkedin size='24px' />}</Link>
                </ul>
            </div>
            <div className="block md:hidden"><FaBars size={20}/></div>
        </div>
        <div className="w-full h-[88px]"></div> {/* copensate for fixed navbar height */}
        </>
    );
    // return (
    //     <div className="flex items-center justify-between px-20 py-8 bg-gray-800 text-white">
    //         <div className="flex items-center space-x-5">
    //             <Image
    //                 src={logo}
    //                 alt="ZB Engineering Logo"
    //                 width={72}
    //                 height={72}
    //             // className="logo"
    //             />
    //             <p className="font-bold text-2xl">ZB Engineering & Technology</p>
    //         </div>
    //         <div>
    //             <ul className="flex space-x-4">
    //                 <Link href="/" className={`hover:text-gray-400 cursor-pointer ${pathname === "/" ? "text-[#F3692A]" : ""}`}>Home</Link>
    //                 <Link href="/about" className={`hover:text-gray-400 cursor-pointer ${pathname === "/about" ? "text-[#F3692A]" : ""}`}>About</Link>
    //                 <Link href="/projects" className={`hover:text-gray-400 cursor-pointer ${pathname === "/projects" ? "text-[#F3692A]" : ""}`}>Projects</Link>
    //                 <Link href="/services" className={`hover:text-gray-400 cursor-pointer ${pathname === "/services" ? "text-[#F3692A]" : ""}`}>Services</Link>
    //                 <Link href="/contact" className={`hover:text-gray-400 cursor-pointer ${pathname === "/contact" ? "text-[#F3692A]" : ""}`}>Contact</Link>
    //                 <li className="hover:text-gray-400 cursor-pointer">|</li>
    //                 <a
    //                     href="https://www.facebook.com/profile.php?id=61561311471666"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                     className="hover:text-gray-400 cursor-pointer"
    //                 >
    //                     <FaFacebook size="24px" />
    //                 </a>
    //                 <Link href="#" className="hover:text-gray-400 cursor-pointer">{<FaLinkedin size='24px' />}</Link>
    //             </ul>
    //         </div>
    //     </div>
    // );
};

export default Navbar;