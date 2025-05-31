
const page = () => {
    return (
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-6">
            <h2 className="text-3xl md:text-4xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">
                Our Proud
            </h2>
            <p className="py-6 text-base sm:text-lg">We have successfully completed numerous projects, each a testament to our commitment to quality and innovation. Our portfolio includes residential complexes, commercial buildings, and infrastructure projects that have transformed the landscape of Bangladesh.</p>
            <div className="flex flex-col gap-4 min-[700px]:flex-row min-[700px]:flex-wrap w-full items-center justify-between">

                <div className="flex flex-col min-[530px]:flex-row min-[700px]:flex-col gap-2 items-start bg-[#F3692A]/10 p-4 rounded-lg shadow-sm shadow-gray-400 w-full min-[700px]:w-[300px] lg:w-2/5">
                    <label htmlFor="category" className="w-[150px] text-lg sm:text-xl font-bold">Category</label>
                    <select name="category" id="category" className="max-[699px]:w-[280px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#F3692A]">
                        <option value="" className="text-center">--Please choose a category--</option>
                        <option value="rajuk-plan">Rajuk Plan Approval</option>
                        <option value="civil-works">Civil Works Construction</option>
                        <option value="mep">MEP Drawing and Design</option>
                        <option value="consultancy">Consultancy</option>
                        <option value="arch-drawing">Architectural Drawing</option>
                        <option value="interior">Interior Decoration</option>
                    </select>
                </div>

                <div className="flex flex-col min-[530px]:flex-row min-[700px]:flex-col gap-2 items-start bg-[#F3692A]/10 p-4 rounded-lg shadow-sm shadow-gray-400 w-full min-[700px]:w-[300px] lg:w-2/5">
                    <label htmlFor="stage" className="w-[150px] text-lg sm:text-xl font-bold">Stage of Work</label>
                    <select name="stage" id="stage" className="max-[699px]:w-[280px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#F3692A]">
                        <option value="" className="text-center">--Please choose a stage of work--</option>
                        <option value="completed">Completed</option>
                        <option value="on-going">On Going</option>
                        <option value="up-coming">Up Coming</option>
                    </select>
                </div>
                <div className="flex flex-col min-[530px]:flex-row min-[700px]:flex-col gap-2 items-start bg-[#F3692A]/10 p-4 rounded-lg shadow-sm shadow-gray-400 w-full min-[700px]:w-[300px] lg:w-2/5">
                    <label htmlFor="location" className="w-[150px] text-lg sm:text-xl font-bold">Location</label>
                    <select name="location" id="location" className="max-[699px]:w-[280px] border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#F3692A]">
                        <option value="" className="text-center">--Please choose a location--</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="Pabna">Pabna</option>
                        <option value="Kustia">Kustia</option>
                    </select>
                </div>
                <button className="bg-[#F3692A] px-4 py-2 w-[150px] rounded-full text-white ring-1 ring-green-500 drop-shadow-lg drop-shadow-amber-600 focus:ring-0">Search</button>
            </div>

            {/* filter results here */}
            <div className="w-full py-6">
                <h2 className="text-2xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">Projects</h2>
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 mt-6">
                    {/* Example Project Card */}
                    <div className="relative h-[400px] w-[300px] bg-gray-300/50 rounded-lg shadow-lg shadow-gray-400">
                        <div className="absolute w-full h-[400px] pointer-events-none z-20 rounded-b-lg" style={{ background: `linear-gradient(to top, rgba(17, 17, 17, 0.8) 0%, rgba(17, 17, 17, 0.5) 15%, rgba(17, 17, 17, 0) 20%)` }}>
                            <div className="absolute bottom-2 left-0 right-0">
                                <p className=" text-white font-semibold text-center">Project Name</p>
                                <p className="text-white text-xs text-center">Location</p>
                            </div>
                        </div>
                    </div>
                    {/* Repeat for more projects */}
                </div>
            </div>
        </div>
    );
};

export default page;