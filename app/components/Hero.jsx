import Image from "next/image";
import hero from "../images/hero.jpeg";  


const Hero = () => {
    return (
        <div className="relative w-full h-[640px]">
            <Image
                src={hero}
                alt="Hero Image"
                className="object-cover object-bottom w-full h-full"
            />
            <div className="absolute inset-0 pointer-events-none" style={{background: `linear-gradient(to right, rgba(17, 17, 17, 0.8) 10%, rgba(17, 17, 17, 0.8) 50%, rgba(17, 17, 17, 0) 88%)`}}>
                <div className="ml-8 mt-20">
                    <h1 className="text-4xl text-[#F7F7F7] font-bold pb-8">We Prepare <span className="text-5xl text-[#F3692A]"><br />Your Future</span></h1>
                    <p className="text-lg text-[#F7F7F7] pb-2 w-1/2">Lorem Ipsum is simply dummy text of the printing and type setting industry. </p>
                    <p className="text-lg text-[#F7F7F7] w-1/2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                    <div className="flex items-center gap-4 mt-8">
                        <button className="bg-[#F3692A] text-white px-4 py-2  rounded-4xl hover:bg-[#AA644A] transition duration-300">Our Services</button>
                        <button className="bg-white px-4 py-2  rounded-4xl hover:bg-[#AA644A] transition duration-300">View Projects</button>
                    </div>
                </div>
            </div>
        </div>
    );
    // return (
    //     <div className="relative w-full h-[640px]">
    //         <Image
    //             src={hero}
    //             alt="Hero Image"
    //             className="object-cover object-bottom w-full h-full"
    //         />
    //         <div className="absolute inset-0 pointer-events-none" style={{background: `linear-gradient(to right, rgba(17, 17, 17, 0.8) 10%, rgba(17, 17, 17, 0.8) 50%, rgba(17, 17, 17, 0) 88%)`}}>
    //             <div className="ml-20 mt-20">
    //                 <h1 className="text-7xl text-[#F7F7F7] font-bold pb-8">We Prepare <span className="text-8xl text-[#F3692A]"><br />Your Future</span></h1>
    //                 <p className="text-xl text-[#F7F7F7] pb-2 w-1/2">Lorem Ipsum is simply dummy text of the printing and type setting industry. </p>
    //                 <p className="text-xl text-[#F7F7F7] w-1/2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
    //                 <div className="flex items-center gap-4 mt-8">
    //                     <button className="bg-[#F3692A] text-white px-4 py-2  rounded-4xl hover:bg-[#AA644A] transition duration-300">Our Services</button>
    //                     <button className="bg-white px-4 py-2  rounded-4xl hover:bg-[#AA644A] transition duration-300">View Projects</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Hero;