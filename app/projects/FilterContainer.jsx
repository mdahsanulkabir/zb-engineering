'use client'

import { useRef } from "react";

const FilterContainer = ({ projects, setAllProjects, setShowNotFound }) => {
    const serviceRef = useRef();
    const stageRef = useRef();
    const districtRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault();

        // Reset the not found state
        setShowNotFound(false);


        const selectedService = serviceRef.current.value;
        const selectedStage = stageRef.current.value;
        const selectedDistrict = districtRef.current.value;

        console.log({selectedDistrict, selectedService, selectedStage});

        // Filter projects based on selected criteria

        let filtered = projects;

        if (selectedService) {
            filtered = filtered.filter(
                project => project.serviceType.includes(Number(selectedService))
            );
        }

        if (selectedStage) {
            filtered = filtered.filter(
                project => project.stage === selectedStage
            );
        }

        if (selectedDistrict) {
            filtered = filtered.filter(
                project => project.district === selectedDistrict
            );
        }

        // If no projects match the criteria, set not found state
        filtered.length === 0 && setShowNotFound(true);
        
        // Update the state with the filtered projects
        setAllProjects(filtered);
    };
    return (
        <form onSubmit={handleSearch} className="project-filter-container">

            {/* category filter */}
            <div className="project-filter">
                <label htmlFor="service" className="">Services</label>
                <select ref={serviceRef} name="service" id="service">
                    <option value="" className="text-center">--Select category--</option>
                    <option value="1">Rajuk Plan Approval</option>
                    <option value="2">Structural Design</option>
                    <option value="3">Architectural Design</option>
                    <option value="4">MEP Drawing and Design</option>
                    <option value="5">Consultancy</option>
                    <option value="6">Civil Works Construction</option>
                    <option value="7">PFSS Construction</option>
                    <option value="8">Interior Decoration</option>
                </select>
            </div>
            {/* stage filter */}
            <div className="project-filter">
                <label htmlFor="stage">Stage of Work</label>
                <select ref={stageRef} name="stage" id="stage">
                    <option value="" className="text-center">--Select stage--</option>
                    <option value="completed">Completed</option>
                    <option value="on-going">On Going</option>
                    <option value="up-coming">Up Coming</option>
                </select>
            </div>
            {/* location filter */}
            <div className="project-filter">
                <label htmlFor="location">Location</label>
                <select ref={districtRef} name="location" id="location">
                    <option value="" className="text-center">--Select location--</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Pabna">Pabna</option>
                    <option value="Kushtia">Kushtia</option>
                    <option value="Barishal">Barishal</option>
                </select>
            </div>
            <div className="project-filter-search-container">
                <button type='submit'>Search</button>
            </div>
        </form>
    );
};

export default FilterContainer;