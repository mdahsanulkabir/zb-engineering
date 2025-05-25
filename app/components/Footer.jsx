import Image from "next/image";
import logo from "../images/logo.svg";
import { FaPhoneAlt, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="py-8 px-8 bg-gray-800 text-white">
            <div className="flex justify-start items-center space-x-5">
                <Image
                    src={logo}
                    alt="ZB Engineering Logo"
                    width={32}
                    height={32}
                />
                <p className="text-md font-bold">ZB Engineering & Technology</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start mt-5">
                <div className="w-full md:w-1/3 pb-6">
                    <p className="text-lg font-bold py-2 text-justify">About</p>
                    <p>We have the confidence to provide the best service for you, with the support of Professional and Certified HR that we currently have and the high-quality materials we use and structured work techniques, we will be able to realize timely completion of work.</p>
                </div>
                <div className="w-full md:w-1/3 pb-6">
                    <p className="text-lg font-bold py-2">Office</p>
                    <address>
                    Islam Mansion <br />
                    House - 38, Road - 03, Block - E<br />
                    Banasree, Rampura<br />
                    Dhaka - 1219
                    </address>
                </div>
                <div className="w-full md:w-1/3">
                    <p className="text-lg font-bold py-2">Contact</p>
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <p>+123 456 7890</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaFacebook />
                            <p>www.facebook.com/zbet</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaLinkedin />
                            <p>www.linkedin.com/zbet</p>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope />
                            <p>info@zbengineeering.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-sm text-center mt-10">© 2025 ZB Engineering & Technology. All rights reserved.</p>
        </div>
    );
    // return (
    //     <div className="py-20 px-20 bg-gray-800 text-white">
    //         <div className="flex justify-start items-center space-x-2">
    //             <Image
    //                 src={logo}
    //                 alt="ZB Engineering Logo"
    //                 width={48}
    //                 height={48}
    //             // className="logo"
    //             />
    //             <p className="text-xl font-bold">ZB Engineering & Technology</p>
    //         </div>
    //         <div className="flex justify-between items-start mt-10">
    //             <div className="w-1/3">
    //                 <p className="text-lg font-bold py-4 text-justify">About</p>
    //                 <p>We have the confidence to provide the best service for you, with the support <br />of Professional and Certified HR that we currently have and the high-quality materials we use and structured work techniques, we will be able to realize <br /> timely completion of work.</p>
    //             </div>
    //             <div className="">
    //                 <p className="text-lg font-bold py-4">Office</p>
    //                 <address>
    //                 Islam Mansion <br />
    //                 House - 38, Road - 03, Block - E<br />
    //                 Banasree, Rampura<br />
    //                 Dhaka - 1219
    //                 </address>
    //             </div>
    //             <div className="">
    //                 <p className="text-lg font-bold py-4">Contact</p>
    //                 <ul className="flex flex-col gap-2">
    //                     <li className="flex items-center gap-2">
    //                         <FaPhoneAlt />
    //                         <p>+123 456 7890</p>
    //                     </li>
    //                     <li className="flex items-center gap-2">
    //                         <FaFacebook />
    //                         <p>www.facebook.com/zbet</p>
    //                     </li>
    //                     <li className="flex items-center gap-2">
    //                         <FaLinkedin />
    //                         <p>www.linkedin.com/zbet</p>
    //                     </li>
    //                     <li className="flex items-center gap-2">
    //                         <FaEnvelope />
    //                         <p>info@zbengineeering.com</p>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //         <p className="text-sm text-center mt-10">© 2025 ZB Engineering & Technology. All rights reserved.</p>
    //     </div>
    // );
};

export default Footer;