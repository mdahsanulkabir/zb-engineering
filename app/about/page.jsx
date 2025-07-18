import Image from "next/image";
import aboutImage from "../images/about.jpg";

const page = () => {
    return (
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-6">
            <div className="flex flex-col gap-4 md:flex-row ">
                <Image
                    src={aboutImage}
                    // width={250}
                    // height={250}
                    alt="About Us Image"
                    className="w-full h-auto min-[560px]:h-[200px] md:h-full object-cover md:w-1/2 lg:w-2/5 min-[560px]:object-bottom rounded-lg shadow-2xl"
                />
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-2xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">About Us</h2>
                        <p className="pt-6 text-base sm:text-lg">The journey of ZB Engineering and Technology (ZBET) began about a decade ago with a vision to redefine the real estate landscape in Bangladesh. Founded in 2015 by our honorable Chairman, Mr. Abdul Quadir, ZBET swiftly emerged as a promising organization.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">Our Vision</h2>
                        <p className="pt-6 text-base sm:text-lg">Help people achieve their dream home at affordable price with satisfaction of quality.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">Our Mission</h2>
                        <p className="pt-6 text-base sm:text-lg">To foster peace of mind and prosperity by building subtle homes and superior commercial spaces.</p>
                    </div>
                </div>
            </div>
            <hr className="my-6 text-gray-200" />
            <h2 className="text-2xl text-center font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">Meet The Team</h2>
            <div className="w-full py-6">
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
                    <div className="relative h-[400px] w-[300px] bg-gray-300/50 rounded-lg shadow-lg shadow-gray-400">
                        <Image
                            src="/images/team/ceo.jpg" // <-- update this path to your chairman's image in /public/images/team/
                            alt="Md. Abdul Quadir"
                            fill
                            className="object-cover rounded-lg"
                            style={{ zIndex: 10 }}
                            priority
                        />
                        <div className="absolute w-full h-[400px] pointer-events-none z-20 rounded-b-lg"
                            style={{ background: `linear-gradient(to top, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.5) 15%, rgba(17, 17, 17, 0) 20%)` }}
                        >
                            <div className="absolute bottom-2 left-0 right-0">
                                <p className=" text-white font-semibold text-center">Md. Abdul Quadir</p>
                                <p className="text-white text-xs text-center">CEO</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="relative h-[400px] w-[300px] bg-gray-300/50 rounded-lg shadow-lg shadow-gray-400">
                        <div className="absolute w-full h-[400px] pointer-events-none z-20 rounded-b-lg" style={{ background: `linear-gradient(to top, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.5) 15%, rgba(17, 17, 17, 0) 20%)` }}>
                            <div className="absolute bottom-2 left-0 right-0">
                                <p className=" text-white font-semibold text-center">Md. Gias Kamal</p>
                                <p className="text-white text-xs text-center">Managing Director</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-[300px] bg-gray-300/50 rounded-lg shadow-lg shadow-gray-400">
                        <div className="absolute w-full h-[400px] pointer-events-none z-20 rounded-b-lg" style={{ background: `linear-gradient(to top, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.5) 15%, rgba(17, 17, 17, 0) 20%)` }}>
                            <div className="absolute bottom-2 left-0 right-0">
                                <p className=" text-white font-semibold text-center">Md. Kamruzzaman</p>
                                <p className="text-white text-xs text-center">Director</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default page;