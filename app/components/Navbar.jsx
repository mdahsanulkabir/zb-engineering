"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../images/logo.svg";
import { FaFacebook, FaLinkedin, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen((prev) => !prev);
    const closeSidebar = () => setSidebarOpen(false);
    return (
        <>
            <div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-4 bg-gray-800 text-white z-49 rounded-b-lg shadow-xl">
                <div className="flex items-center space-x-5 cursor-pointer" onClick={() => router.push('/')} >
                    <Image
                        src={logo}
                        alt="ZB Engineering Logo"
                        width={48}
                        height={48}
                    />
                    <p className="font-bold text-base min-[470px]:text-xl">ZB Engineering <br className="hidden min-[860px]:block min-[1065px]:hidden" />& Technology</p>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden min-[860px]:flex items-center gap-6 font-semibold text-lg text-white">
                    {["/", "/about", "/projects", "/services", "/contact"].map((href) => (
                        <Link
                            key={href}
                            href={href}
                            className={`hover:text-gray-400 cursor-pointer transition-colors duration-300 ${pathname === href ? "text-[#F3692A]" : ""
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
                        className=" cursor-pointer transition-colors duration-300 hover:scale-[1.1]"
                    >
                        <FaFacebook size={24} className="hover:text-[#0866FF] hover:bg-white  rounded-full hover:scale-[1.1] hover:ring hover:ring-[#F3692A]"/>
                    </a>
                    <Link href="#" className="hover:text-gray-400 cursor-pointer transition-colors duration-300 hover:scale-[1.1] ">
                        <FaLinkedin size={24} className="hover:text-[#0A66C2] hover:bg-white hover:scale-[1.1] hover:ring hover:ring-[#F3692A] hover:rounded-[2px]"/>
                    </Link>
                </ul>

                {/* mobile sidebar */}
                {
                    sidebarOpen && (
                        <div 
                            className={`fixed top-4 right-0 w-[250px] h-7/8 backdrop-blur-md shadow-[-10px_0px_10px_rgb(0,0,0)]/50 bg-white/10 shadow-gray-400 z-49 rounded-lg transform transition-transform duration-300 ease-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} block min-[860px]:hidden`}>
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
            {
                pathname !== "/" && (<div className="w-full h-[80px]"></div>)
            }
        </>
    );
};

export default Navbar;