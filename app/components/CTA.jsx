'use client';

import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';
const CTA = () => {
    const router = useRouter();
    
    return (
        <div className="w-full px-6 sm:px-10 md:px-10 lg:px-40 py-10 md:py-16 text-center" style={{background: `linear-gradient(to right, rgba(88, 158, 89, 1) 0%, rgba(31, 56, 32, 1) 100%`}}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 2xl:w-3/4 2xl:mx-auto">
                <h2 className="text-2xl sm:text-3xl text-center font-medium text-[#F7F7F7]">
                    Leading Way In <br className="hidden md:block" />
                    Building & Civil <br className="hidden md:block" />
                    Construction
                </h2>
                {/* Features */}
                <ul className="text-[#F7F7F7] space-y-3">
                    {[
                        "Professional Staff",
                        "100% Satisfaction",
                        "Accurate Testing",
                        "Transparent Pricing",
                    ].map((item) => (
                        <li key={item} className="flex gap-3 font-bold items-center">
                            <span className="text-[#FF7420] mt-1">
                                <FaCheckCircle className="text-xl md:text-2xl" />
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <button 
                    onClick={() => router.push('/contact')} 
                    className="rounded-full bg-[#FF7420] hover:bg-[#FF7420]/30 px-6 py-2 lg:px-10 lg:py-4 font-bold text-lg lg:text-xl text-[#F7F7F7] hover:text-[hsl(24,87%,72%)] ring-2 ring-[#EBDBA5] shadow-2xl shadow-[#FF7420] hover:shadow-none hover:border-4 transition">
                    Contact us
                </button>
            </div>
        </div>
    );
};

export default CTA;