import Image from "next/image";
import stockPhoto1 from "../images/stock photo 1.jpg";
import stockPhoto2 from "../images/stock photo 2.jpg";


const WhatWeDo = () => {
    return (
        <div className="relative w-full px-20 py-16 bg-[#135120]/8">
            <h2 className="text-5xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">What we do</h2>
            <div className="flex justify-center items-center pt-12">
                <ul className="w-1/2 text-xl">
                    <li>Design</li>
                    <li>Draft</li>
                    <li>Rajuk Approval Processing</li>
                    <li>Consultancy</li>
                    <li>Construction</li>
                    <li>Interior Decoration</li>
                </ul>
                <div className="relative w-1/2">
                    <Image
                        src={stockPhoto2}
                        width={200}
                        alt="Photo by Roberto Nickson on Unsplash"
                        className="absolute top-[-200px] left-50"
                    />
                    <Image
                        src={stockPhoto1}
                        width={500}
                        alt="construction"
                        className="absolute top-[-100px] left-[-250px] z-[-1]"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;