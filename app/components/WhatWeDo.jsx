import Image from "next/image";
import stockPhoto1 from "../images/stock photo 1.jpg";
import stockPhoto2 from "../images/stock photo 2.jpg";
import { FaCheckCircle } from "react-icons/fa";


const WhatWeDo = () => {
    return (
        <div className="relative w-full px-4 sm:px-8 md:px-12 lg:px-20 py-6 bg-[#135120]/8">
            <h2 className="text-3xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">What we do</h2>
            <div className="flex justify-center pt-6">
                <ul className="w-1/2 text-sm min-[480px]:text-base sm:text-lg">
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Rajuk Plan Approval</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Civil Works Construction</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Soil Test and Digital Survey</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Pre-Fabricated Steel Structure Construction</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>MEP (Mechanical/Electrical/Plumbing) Drawing, Design and Installation</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Engineering Consultancy</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Architectrual Drawing</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Interior and Exterior Decoration Works</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>CCTV Camera Network Installation</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>PABX System Installation</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Lift Access Control</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Video Door Phone Installation</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Biometric Access Control Installation</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Lift and Generator Installation and Servicing</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Sub-Station Installation and Servicing</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Solar Power System Installation</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>HVAC System Installation and Service</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Fire Safety Protection</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>IT infrastructure installation</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Software Development</li>
                </ul>
                <div className="relative w-1/2">
                    <Image
                        src={stockPhoto2}
                        alt="Photo by Roberto Nickson on Unsplash"
                        className="absolute top-[20px] md:top-0 w-[200px] left-8 xl:left-[-100px] z-[-3] xl:z-[-1] object-cover object-bottom h-[200px]"
                    />
                    <Image
                        src={stockPhoto1}
                        width={500}
                        alt="construction"
                        className="absolute top-[-50px] md:top-[-50px] left-2 md:left-0 md:right-5 z-[-1] xl:z-[-3] object-cover object-bottom h-[150px]"
                    />
                </div>
            </div>
        </div>
    );
    // return (
    //     <div className="relative w-full px-20 py-16 bg-[#135120]/8">
    //         <h2 className="text-5xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">What we do</h2>
    //         <div className="flex justify-center items-center pt-12">
    //             <ul className="w-1/2 text-xl">
    //                 <li>Rajuk Plan Approval</li>
    //                 <li>Civil Works Construction</li>
    //                 <li>MEP Drawing, Design and Installation</li>
    //                 <li>Engineering Consultancy</li>
    //                 <li>Architectrual Drawing</li>
    //                 <li>Interior and Exterior Decoration Works</li>
    //             </ul>
    //             <div className="relative w-1/2">
    //                 <Image
    //                     src={stockPhoto2}
    //                     width={200}
    //                     alt="Photo by Roberto Nickson on Unsplash"
    //                     className="absolute top-[-200px] left-50"
    //                 />
    //                 <Image
    //                     src={stockPhoto1}
    //                     width={500}
    //                     alt="construction"
    //                     className="absolute top-[-100px] left-[-250px] z-[-1]"
    //                 />
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default WhatWeDo;