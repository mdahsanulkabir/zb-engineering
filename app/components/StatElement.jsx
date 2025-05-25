
const StatElement = ({data, description}) => {
    return (
        <div className="flex items-center justify-center gap-4 w-full">
            <h2 className="text-[#F3692A] text-right text-4xl pb-2 w-1/3">{data}</h2>
            <p className="text-xl text-left w-2/3">{description}</p>
        </div>
    );
    // return (
    //     <div className="flex items-center justify-center gap-2">
    //         <h2 className="text-[#F3692A] text-6xl pb-2">{data}</h2>
    //         <p className="text-xl text-left">{description}</p>
    //     </div>
    // );
};

export default StatElement;