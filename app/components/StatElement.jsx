
const StatElement = ({data, description}) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <h2 className="text-[#F3692A] text-6xl pb-2">{data}</h2>
            <p className="text-xl text-left">{description}</p>
        </div>
    );
};

export default StatElement;