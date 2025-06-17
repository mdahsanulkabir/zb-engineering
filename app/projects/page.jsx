'use client';
import { useEffect, useState } from "react";
import { projects } from "@/app/data/projects";
import Image from "next/image";
import FilterContainer from "./FilterContainer";

const page = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const [allProjects, setAllProjects] = useState(null);

    useEffect(() => {
        setAllProjects(projects);
    }, []);

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleClose = () => {
        setSelectedProject(null);
    };

    const firstLetterToUpperCase = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const services = {
        1: "Rajuk Plan Approval",
        2: "Structural Design",
        3: "Architectural Design",
        4: "MEP Drawing and Design",
        5: "Consultancy",
        6: "Civil Works Construction",
        7: "PFSS Construction",
        8: "Interior Decoration",
    };

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { month: 'long', year: 'numeric' };
        return date.toLocaleString('en-US', options);
    }

    return (
        <div className="project w-full px-4 sm:px-8 md:px-12 lg:px-20 py-6 relative">
            <h2 className="text-3xl md:text-4xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">
                Our Proud
            </h2>
            <p className="py-6 text-base sm:text-lg">
                We have successfully completed numerous projects, each a testament to our commitment to quality and innovation. Our portfolio includes residential complexes, commercial buildings, and infrastructure projects that have transformed the landscape of Bangladesh.
            </p>

            <FilterContainer />

            {/* filter results here */}
            <div className="w-full py-6">
                <h2 className="text-2xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">Projects</h2>
                <div className="project-cards-container flex flex-wrap gap-6">
                    {/* Project Cards */}
                    {
                        allProjects?.map((project) => (
                            <div
                                key={project.id}
                                className="relative w-[200px] bg-gray-300/50 rounded-lg shadow-lg shadow-gray-400 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#F3692A] hover:ring-offset-2 hover:ring-offset-gray-200 cursor-pointer"
                                onClick={() => handleCardClick(project)}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    height={400}
                                    width={300}
                                    className="object-cover rounded-lg h-[266px]!"
                                />
                                <div
                                    className="absolute top-0 w-full h-[266px] pointer-events-none z-20 rounded-b-lg"
                                    style={{
                                        background: `linear-gradient(to top, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.5) 15%, rgba(17, 17, 17, 0) 20%)`,
                                    }}
                                >
                                    <div className="absolute bottom-2 left-0 right-0">
                                        <p className="text-white font-semibold text-center">{project.name}</p>
                                        <p className="text-white text-xs text-center">{`${project.location[project.location.length - 1]}, ${project.district}`}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Modal/Dialog */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{
                        fontFamily: "'Roboto', Arial, sans-serif",
                        background: "rgba(17,17,17,0.6)",
                        backdropFilter: "blur(2px)",
                    }}
                >
                    {/* Modal content with 40px margin */}
                    <div
                        className="relative bg-white rounded-lg shadow-2xl overflow-auto"
                        style={{
                            width: "calc(100vw - 40px)",
                            height: "calc(100vh - 80px)",
                            margin: "40px 20px 40px 20px",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-[#F3692A] z-10"
                        >
                            Close &times;
                        </button>
                        {/* Project Details */}
                        <div className="p-4 mt-8 flex flex-col items-center">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                width={200}
                                height={266}
                                className="rounded-lg mb-6 object-cover shadow-lg shadow-gray-400"
                            />
                            <h3 className="text-2xl font-semibold mb-2 ">{selectedProject.name}</h3>
                            <p className="text-gray-600 mb-2">{`${selectedProject.location[selectedProject.location.length - 1]}, ${selectedProject.district}`}</p>

                            <div className="border border-gray-300 w-full">
                                <div className="p-4">
                                    <h4 className="text-lg flex justify-center font-semibold mb-2 underline decoration-[#F3692A] decoration-2 underline-offset-2">Project Details</h4>
                                    {/* <p className="text-gray-700 mb-2">{selectedProject.description}</p> */}
                                    <p className="text-gray-700 mb-2"><strong>Category:</strong>{firstLetterToUpperCase(selectedProject.category)}</p>
                                    <p className="text-gray-700 mb-2"><strong>Floors:</strong>{(selectedProject.noOfFloors)}</p>
                                    <p className="text-gray-700 mb-2"><strong>Service Provided:</strong>{selectedProject.serviceType.map(service => services[service]).join(', ')}</p>
                                    <p className="text-gray-700 mb-2"><strong>Stage:</strong>{firstLetterToUpperCase(selectedProject.stage)}</p>
                                    <p className="text-gray-700 mb-2"><strong>{selectedProject.stage === 'completed' ? "Completed On:" : "Expected Completion On:"}</strong>{formatDate(selectedProject.stageDate)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default page;