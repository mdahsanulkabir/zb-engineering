

const FilterContainer = () => {
    return (
        <div className="project-filter-container">

            {/* category filter */}
            <div className="project-filter">
                <label htmlFor="category" className="">Category</label>
                <select name="category" id="category">
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
                <select name="stage" id="stage">
                    <option value="" className="text-center">--Select stage--</option>
                    <option value="completed">Completed</option>
                    <option value="on-going">On Going</option>
                    <option value="up-coming">Up Coming</option>
                </select>
            </div>
            {/* location filter */}
            <div className="project-filter">
                <label htmlFor="location">Location</label>
                <select name="location" id="location">
                    <option value="" className="text-center">--Select location--</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="Pabna">Pabna</option>
                    <option value="Kustia">Kustia</option>
                    <option value="Barishal">Barishal</option>
                </select>
            </div>
            <div className="project-filter-search-container">
                <button >Search</button>
            </div>
        </div>
    );
};

export default FilterContainer;