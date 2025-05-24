import StatElement from "./StatElement";


const Stat = () => {
    return (
        <div className="bg-[#6C6C6C]/10 w-full py-16 text-center px-20">
            <div className="flex items-center justify-evenly flex-wrap mx-auto">
                <StatElement data="20+" description={<>Years of<br />Experience</>} />
                <StatElement data="40+" description={<>Projects<br />Completed</>} />
                <StatElement data="2M+" description={<>Square Feet Area<br />Were Built</>} />
                <StatElement data="200K+" description={<>Square Feet Area<br />On Going</>} />
            </div>
        </div>
    );
};

export default Stat;