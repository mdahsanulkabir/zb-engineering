import Image from 'next/image';

const FeatureCard = ({cardImage, projectName, location}) => {
   return (
        <div className="relative w-[250px]  bg-[#6C6C6C]/10 rounded-lg shadow-xl shadow-gray-700 flex flex-col items-center justify-center
                    transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <Image
                src={cardImage}
                alt="Featured Project 1"
                className="object-cover rounded-lg h-[350px]!"
            />
            <div className="absolute w-full h-[350px] pointer-events-none z-20 rounded-b-lg" style={{ background: `linear-gradient(to top, rgba(17, 17, 17, 0.8) 10%, rgba(17, 17, 17, 0.5) 15%, rgba(17, 17, 17, 0) 20%)` }}>
                <div className="absolute bottom-2 left-0 right-0">
                    <p className="text-white font-semibold">{projectName}</p>
                    <p className="text-white text-[12px]">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;