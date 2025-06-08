'use client'
import Image from "next/image";
import hero from "../images/hero.jpeg";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


const Hero = () => {
    const [contentVisible, setContentVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Trigger animation after a short delay on mount
        const timer = setTimeout(() => {
            setContentVisible(true);
        }, 100); // Adjust delay as needed

        return () => clearTimeout(timer); // Cleanup
    }, []);

    const handleNavigate = (path) => {
        router.push(path);
    };


    return (
        // <div className="relative w-full h-[640px] sm:h-[720px] md:h-[800px] lg:h-[880px] xl:h-[960px]">
        //     <Image
        //         src={hero}
        //         alt="Hero Image"
        //         className="object-cover object-bottom w-full h-full"
        //         priority
        //     />

        //     <div
        //         className="absolute inset-0 pointer-events-none"
        //         style={{
        //             background: `linear-gradient(to right, rgba(17, 17, 17, 0.8) 10%, rgba(17, 17, 17, 0.8) 50%, rgba(17, 17, 17, 0) 88%)`,
        //         }}
        //     >
        //         <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-20 mt-20 sm:mt-28 md:mt-32 lg:mt-40">
        //             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F7F7F7] font-bold pb-6">
        //                 We Prepare
        //                 <br />
        //                 <span className="text-[#F3692A] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        //                     Your Future
        //                 </span>
        //             </h1>

        //             <p className="text-base sm:text-lg md:text-xl text-[#F7F7F7] pb-2 w-1/2">
        //                 Lorem Ipsum is simply dummy text of the printing and type setting industry.
        //             </p>

        //             <p className="text-base sm:text-lg md:text-xl text-[#F7F7F7] w-1/2">
        //                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        //                 when an unknown printer took a galley of type and scrambled.
        //             </p>

        //             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
        //                 <button className="bg-[#F3692A] text-white px-6 py-3 rounded-full hover:bg-[#AA644A] drop-shadow-lg drop-shadow-amber-400 transition duration-300">
        //                     Our Services
        //                 </button>
        //                 <button className="bg-white px-6 py-3 rounded-full hover:bg-[#AA644A] drop-shadow-lg drop-shadow-gray-400 transition duration-300">
        //                     View Projects
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="relative w-full h-[640px] sm:h-[640px] md:h-[650px] lg:h-[750px] xl:h-[780px]">
            <Image
                src={hero}
                alt="Hero Image"
                className="object-cover object-bottom w-full h-full"
                priority
            />

            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(to right, rgba(17, 17, 17, 0.8) 10%, rgba(17, 17, 17, 0.8) 50%, rgba(17, 17, 17, 0) 88%)`,
                }}
            >
                <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-20 mt-30 md:mt-32 lg:mt-40">
                    <h1
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F7F7F7] font-bold pb-6
                                   transition-all duration-300 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        We Prepare
                        <br />
                        <span className="text-[#F3692A] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                            Your Future
                        </span>
                    </h1>

                    <p
                        className={`text-base sm:text-lg md:text-xl text-[#F7F7F7] pb-2 w-1/2
                                   transition-all duration-300 ease-out delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        Empowering your vision with innovative engineering solutions, we turn ideas into reality through expertise and dedication. Our team is committed to delivering excellence at every stage, from concept to completion.
                    </p>

                    <p
                        className={`text-base sm:text-lg md:text-xl text-[#F7F7F7] w-1/2
                                   transition-all duration-300 ease-out delay-400 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        Partner with us to experience quality, reliability, and a passion for building the future. Together, we create lasting value and set new standards in engineering and construction.
                    </p>

                    <div className="flex  items-start sm:items-center gap-4 mt-10">
                        <button
                            onClick={() => handleNavigate('/services')}
                            className={`bg-[#F3692A] text-white px-6 py-3 rounded-full hover:bg-orange-800 hover:text-white drop-shadow-lg drop-shadow-orange-900 hover:drop-shadow-gray-400
                                       transition-all duration-300 ease-out delay-100 cursor-pointer ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            Our Services
                        </button>
                        <button
                            onClick={() => handleNavigate('/projects')}
                            className={`bg-white px-6 py-3 rounded-full hover:bg-gray-400 hover:text-white drop-shadow-lg drop-shadow-gray-400 hover:drop-shadow-gray-800
                                       transition-all duration-300 ease-out delay-100 cursor-pointer ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        >
                            View Projects
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;