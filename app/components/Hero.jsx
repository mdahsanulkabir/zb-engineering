import Image from "next/image";
import hero from "../images/hero.jpeg";


const Hero = () => {

    return (
        <div className="relative w-full h-[640px] sm:h-[720px] md:h-[800px] lg:h-[880px] xl:h-[960px]">
            <Image
                src={hero}
                alt="Hero Image"
                className="object-cover object-bottom w-full h-full"
                priority
            />

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `linear-gradient(to right, rgba(17, 17, 17, 0.8) 10%, rgba(17, 17, 17, 0.8) 50%, rgba(17, 17, 17, 0) 88%)`,
                }}
            >
                <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-20 mt-20 sm:mt-28 md:mt-32 lg:mt-40">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F7F7F7] font-bold pb-6">
                        We Prepare
                        <br />
                        <span className="text-[#F3692A] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                            Your Future
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-[#F7F7F7] pb-2 w-1/2">
                        Lorem Ipsum is simply dummy text of the printing and type setting industry.
                    </p>

                    <p className="text-base sm:text-lg md:text-xl text-[#F7F7F7] w-1/2">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
                        <button className="bg-[#F3692A] text-white px-6 py-3 rounded-full hover:bg-[#AA644A] transition duration-300">
                            Our Services
                        </button>
                        <button className="bg-white px-6 py-3 rounded-full hover:bg-[#AA644A] transition duration-300">
                            View Projects
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;