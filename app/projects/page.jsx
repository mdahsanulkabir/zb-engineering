import { projects } from "@/app/data/projects";
import Image from "next/image";
import FilterContainer from "./FilterContainer";

const page = () => {
    return (
        <div className="project w-full px-4 sm:px-8 md:px-12 lg:px-20 py-6">
            <h2 className="text-3xl md:text-4xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">
                Our Proud
            </h2>
            <p className="py-6 text-base sm:text-lg">We have successfully completed numerous projects, each a testament to our commitment to quality and innovation. Our portfolio includes residential complexes, commercial buildings, and infrastructure projects that have transformed the landscape of Bangladesh.</p>

            <FilterContainer />

            {/* filter results here */}
            <div className="w-full py-6">
                <h2 className="text-2xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">Projects</h2>
                <div className=" project-cards-container">
                    {/* Project Cards */}
                    {
                        projects?.map((project) => (
                            <div key={project.id} className="relative w-[300px] bg-gray-300/50 rounded-lg shadow-lg shadow-gray-400
                            transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#F3692A] hover:ring-offset-2 hover:ring-offset-gray-200
                            ">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    height={400}
                                    width={300}
                                    className="object-fit rounded-lg h-[400px]!"
                                />
                                <div 
                                    className="absolute top-0 w-full h-[400px] pointer-events-none z-20 rounded-b-lg" 
                                    style={{ background: `linear-gradient(to top, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.5) 15%, rgba(17, 17, 17, 0) 20%)` }}
                                >
                                    <div className="absolute bottom-2 left-0 right-0">
                                        <p className="text-white font-semibold text-center">{project.name}</p>
                                        <p className="text-white text-xs text-center">{project.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default page;