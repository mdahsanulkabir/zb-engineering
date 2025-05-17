import Image from "next/image";
import logo from "../images/logo.svg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-20 py-4 bg-gray-800 text-white">
            <div className="flex items-center space-x-2">
                <Image
                    src={logo}
                    alt="ZB Engineering Logo"
                    width={48}
                    height={48}
                    // className="logo"
                />
                <p>ZB Engineering & Technology</p>
            </div>
            <div>
                <ul className="flex space-x-4">
                    <li className="hover:text-gray-400 cursor-pointer">Home</li>
                    <li className="hover:text-gray-400 cursor-pointer">About</li>
                    <li className="hover:text-gray-400 cursor-pointer">Services</li>
                    <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                    <li className="hover:text-gray-400 cursor-pointer">|</li>
                    <li className="hover:text-gray-400 cursor-pointer">{<FaFacebook size='24px'/>}</li>
                    <li className="hover:text-gray-400 cursor-pointer">{<FaLinkedin size='24px'/>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;