

const FilterContainer = () => {
    return (
        <div className="project-filter-container">

            {/* category filter */}
            <div className="project-filter">
                <label htmlFor="category" className="">Category</label>
                <select name="category" id="category">
                    <option value="" className="text-center">--Select category--</option>
                    <option value="rajuk-plan">Rajuk Plan Approval</option>
                    <option value="civil-works">Civil Works Construction</option>
                    <option value="mep">MEP Drawing and Design</option>
                    <option value="consultancy">Consultancy</option>
                    <option value="arch-drawing">Architectural Drawing</option>
                    <option value="interior">Interior Decoration</option>
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
                    <option value="Barishal">Kustia</option>
                </select>
            </div>
            <div className="project-filter-search-container">
                <button >Search</button>
            </div>
        </div>
    );
};

export default FilterContainer;