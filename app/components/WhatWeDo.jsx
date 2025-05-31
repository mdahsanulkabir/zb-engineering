import Image from "next/image";
import stockPhoto1 from "../images/stock photo 1.jpg";
import stockPhoto2 from "../images/stock photo 2.jpg";
import { FaCheckCircle } from "react-icons/fa";


const WhatWeDo = () => {
    return (
        <div className="relative w-full px-8 py-6 bg-[#135120]/8">
            <h2 className="text-3xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">What we do</h2>
            <div className="flex justify-center pt-6">
                <ul className="w-1/2 text-sm">
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Rajuk Plan Approval</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Civil Works Construction</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>MEP Drawing, Design and Installation</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Engineering Consultancy</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Architectrual Drawing</li>
                    <li className="flex items-baseline gap-2"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={12}/></span>Interior and Exterior Decoration Works</li>
                </ul>
                <div className="relative w-1/2">
                    <Image
                        src={stockPhoto2}
                        width={200}
                        alt="Photo by Roberto Nickson on Unsplash"
                        className="absolute top-[20px] left-8 z-[-3]"
                    />
                    <Image
                        src={stockPhoto1}
                        width={500}
                        alt="construction"
                        className="absolute top-[-10px] left-2 z-[-1]"
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