import Image from "next/image";
import logo from "../images/logo.svg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-20 py-8 bg-gray-800 text-white">
            <div className="flex items-center space-x-5">
                <Image
                    src={logo}
                    alt="ZB Engineering Logo"
                    width={72}
                    height={72}
                // className="logo"
                />
                <p className="font-bold text-2xl">ZB Engineering & Technology</p>
            </div>
            <div>
                <ul className="flex space-x-4">
                    <Link href="/" className="hover:text-gray-400 cursor-pointer">Home</Link>
                    <Link href="/about" className="hover:text-gray-400 cursor-pointer">About</Link>
                    <Link href="/services" className="hover:text-gray-400 cursor-pointer">Services</Link>
                    <Link href="/contact" className="hover:text-gray-400 cursor-pointer">Contact</Link>
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
        </div>
    );
};

export default Navbar;