import { FaCheckCircle } from "react-icons/fa";
const CTA = () => {
    return (
        <div className="w-full px-20 py-16" style={{background: `linear-gradient(to right, rgba(88, 158, 89, 1) 0%, rgba(31, 56, 32, 1) 100%`}}>
            <div className="flex items-center justify-evenly">
                <h2 className="text-5xl font-medium text-[#F7F7F7]">Leading Way In <br/>Building & Civil<br/>Construction</h2>
                <ul className="text-[#F7F7F7]">
                    <li className="flex gap-3 font-bold items-center"><span className="text-[#FF7420] mt-1"><FaCheckCircle size={28}/></span>Professional Staff</li>
                    <li className="flex gap-3 font-bold items-center"><span className="text-[#FF7420] mt-1"><FaCheckCircle  size={28}/></span>100% Satisfaction</li>
                    <li className="flex gap-3 font-bold items-center"><span className="text-[#FF7420] mt-1"><FaCheckCircle  size={28}/></span>Accurate Testing</li>
                    <li className="flex gap-3 font-bold items-center"><span className="text-[#FF7420] mt-1"><FaCheckCircle  size={28}/></span>Transparent Pricing</li>
                </ul>
                <button className="rounded-full bg-[#FF7420] hover:bg-[#FF7420]/30 w-[200px] h-[72px] p-auto font-bold text-2xl text-[#F7F7F7] hover:text-[hsl(24,87%,72%)] ring-2 ring-[#EBDBA5] shadow-2xl shadow-[#FF7420] hover:shadow-none hover:border-4">Contact us</button>
            </div>
        </div>
    );
};

export default CTA;