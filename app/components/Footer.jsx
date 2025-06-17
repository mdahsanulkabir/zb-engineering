import Image from "next/image";
import logo from "../images/logo.svg";
import { FaPhoneAlt, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 px-4 sm:px-8 md:px-12 lg:px-20">
            {/* Logo and Company Name */}
            <div className="flex flex-row items-center gap-2 sm:gap-5">
                <Image src={logo} alt="ZB Engineering Logo" width={32} height={32} />
                <p className="text-lg font-bold">ZB Engineering & Technology</p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
                {/* About Section */}
                <div className="w-full md:w-1/3 justify-items-start">
                    <div>
                        <p className="text-base font-bold mb-2">About</p>
                        <p className="text-sm text-justify">
                            We have the confidence to provide the best service for you. With the support of
                            professional and certified HR, high-quality materials, and structured work techniques,
                            we ensure timely completion of work.
                        </p>
                    </div>
                </div>

                {/* Office Address */}
                <div className="w-full md:w-1/3 md:justify-items-end">
                    <div>
                        <p className="text-base font-bold mb-2">Office</p>
                        <address className="not-italic text-sm leading-relaxed">
                            Fozia Mansion<br />
                            House - 38, Road - 03, Block - E<br />
                            Banasree, Rampura<br />
                            Dhaka - 1219
                        </address>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="w-full md:w-1/3 md:justify-items-end">
                    <div>
                        <p className="text-base font-bold mb-2">Contact</p>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt /> <span>+880 171 309 2052</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaFacebook /> <span>facebook.com/zbet</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaLinkedin /> <span>linkedin.com/zbet</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope /> <span>info@zbengineeering.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row gap-1 md:gap-2 justify-center items-center mt-6 text-sm text-center">
                <p>© 2025 ZB Engineering & Technology.</p>
                <p>All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;