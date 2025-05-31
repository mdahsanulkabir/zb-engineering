"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../images/logo.svg";
import { FaFacebook, FaLinkedin, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen((prev) => !prev);
    const closeSidebar = () => setSidebarOpen(false);
    return (
        <>
            <div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-4 bg-gray-800 text-white z-99 rounded-b-lg shadow-xl">
                <div className="flex items-center space-x-5">
                    <Image
                        src={logo}
                        alt="ZB Engineering Logo"
                        width={48}
                        height={48}
                    />
                    <p className="font-bold text-xl">ZB Engineering <br className="hidden min-[860px]:block min-[1065px]:hidden"/>& Technology</p>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden min-[860px]:flex items-center gap-6 font-semibold text-lg text-white">
                    {["/", "/about", "/projects", "/services", "/contact"].map((href) => (
                        <Link
                            key={href}
                            href={href}
                            className={`hover:text-gray-400 cursor-pointer ${pathname === href ? "text-[#F3692A]" : ""
                                }`}
                        >
                            {href === "/" ? "Home" : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                        </Link>
                    ))}
                    <li className="text-gray-400">|</li>
                    <a
                        href="https://www.facebook.com/profile.php?id=61561311471666"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <Link href="#" className="hover:text-gray-400">
                        <FaLinkedin size={24} />
                    </Link>
                </ul>

                {/* mobile sidebar */}
                {
                    sidebarOpen && (
                        <div className="fixed top-4 right-0 w-[250px] h-7/8 backdrop-blur-md shadow-[-10px_0px_10px_rgb(0,0,0)]/50 bg-white/10 shadow-gray-400 z-50 md:static md:block rounded-lg">
                            <div className="flex justify-end p-4">
                                <AiOutlineClose onClick={closeSidebar} className="cursor-pointer" size={24} />
                            </div>
                            <ul onClick={closeSidebar} className="flex flex-col items-center justify-center gap-6 font-semibold text-lg text-black">
                                <Link href="/" className={`hover:text-gray-400 cursor-pointer ${pathname === "/" ? "text-[#F3692A]" : ""}`}>Home</Link>
                                <Link href="/about" className={`hover:text-gray-400 cursor-pointer ${pathname === "/about" ? "text-[#F3692A]" : ""}`}>About</Link>
                                <Link href="/projects" className={`hover:text-gray-400 cursor-pointer ${pathname === "/projects" ? "text-[#F3692A]" : ""}`}>Projects</Link>
                                <Link href="/services" className={`hover:text-gray-400 cursor-pointer ${pathname === "/services" ? "text-[#F3692A]" : ""}`}>Services</Link>
                                <Link href="/contact" className={`hover:text-gray-400 cursor-pointer ${pathname === "/contact" ? "text-[#F3692A]" : ""}`}>Contact</Link>
                                {/* <li className="hover:text-gray-400 cursor-pointer">|</li> */}
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
                    )
                }
                <button onClick={() => toggleSidebar()} className="block min-[860px]:hidden"><FaBars size={20} /></button>
            </div>

            {/* Space for fixed navbar */}
            <div className="w-full h-[80px]"></div>
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