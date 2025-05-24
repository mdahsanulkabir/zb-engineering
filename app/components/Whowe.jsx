

const Whowe = () => {
    return (
        <div className="relative px-20 py-16 overflow-x-clip">
            <h2 className="text-5xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">Who we are</h2>
            <p className="pt-12 text-xl">{<>ZB Engineering & Technology established in 2010 is a multi-discipline consulting  firm. The versatile nature of  the firm&apos;s assignments <br/>coupled with skill & expertise. The  firm offers a comprehensive service in the Engineering, planning, drawing & design, documentation, <br/>contract award services, project management and supervision of construction projects.</>}</p>
            <div className="absolute top-[-50px] left-[-150px] w-[324px] h-[324px] bg-[#B9D9BA] rounded-full blur-sm opacity-70 shadow-lg z-[-1]"></div>
            <div className="absolute bottom-[-30px] right-[-100px] w-[240px] h-[240px] bg-[#F6C26D] rounded-full blur-sm opacity-60 shadow-2xl z-[-1]"></div>
        </div>
    );
};

export default Whowe;