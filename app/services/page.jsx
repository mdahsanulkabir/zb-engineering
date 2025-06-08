import { FaCheckCircle } from "react-icons/fa";

const page = () => {
    return (
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-6">
            <h2 className="text-3xl md:text-4xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">
                Our Services
            </h2>
            <p className="py-6 text-base sm:text-lg">We have successfully completed numerous projects, each a testament to our commitment to quality and innovation. Customer satisfaction is the heart of our services. Below are the services we offer for you.</p>
            <article className="my-8">
                <p className="flex items-center text-lg sm:text-xl md:text-2xl gap-2">
                    <span className="text-[#FF7420] mt-1"><FaCheckCircle size={24} /></span>
                    Rajuk Plan Approval
                </p>
                <p className="ml-8 text-base sm:text-lg">We provide expert guidance and comprehensive support for obtaining RAJUK plan approvals quickly and efficiently. Our team ensures all documentation, compliance, and submissions are handled with precision, saving you time and reducing unnecessary costs or delays.</p>
            </article>
            <article className="my-8">
                <p className="flex items-center text-lg sm:text-xl md:text-2xl gap-2">
                    <span className="text-[#FF7420] mt-1"><FaCheckCircle size={24} /></span>
                    Civil Works Construction
                </p>
                <p className="ml-8 text-base sm:text-lg">From foundation to finishing, we deliver high-quality civil construction services using durable materials and skilled professionals. We strictly follow timelines and budgets, ensuring cost-effective execution and lasting results for residential, commercial, or industrial projects.</p>
            </article>
            <article className="my-8">
                <p className="flex items-center text-lg sm:text-xl md:text-2xl gap-2">
                    <span className="text-[#FF7420] mt-1"><FaCheckCircle size={24} /></span>
                    MEP Drawing, Design and Installation
                </p>
                <p className="ml-8 text-base sm:text-lg">Our Mechanical, Electrical, and Plumbing (MEP) solutions are designed for optimal performance and energy efficiency. We handle everything from design to installation with accuracy, ensuring seamless integration with your building infrastructure—delivered on time and within budget.</p>
            </article>
            <article className="my-8">
                <p className="flex items-center text-lg sm:text-xl md:text-2xl gap-2">
                    <span className="text-[#FF7420] mt-1"><FaCheckCircle size={24} /></span>
                    Engineering Consultancy
                </p>
                <p className="ml-8 text-base sm:text-lg">Our consultancy services offer strategic advice and engineering insights for project planning, design optimization, and execution. Whether it’s cost-saving alternatives or ensuring structural integrity, we provide timely, professional guidance every step of the way.</p>
            </article>
            <article className="my-8">
                <p className="flex items-center text-lg sm:text-xl md:text-2xl gap-2">
                    <span className="text-[#FF7420] mt-1"><FaCheckCircle size={24} /></span>
                    Architectrual Drawing
                </p>
                <p className="ml-8 text-base sm:text-lg">We create functional, aesthetically appealing architectural designs that match your vision and comply with local codes. Our experienced architects focus on timely delivery of detailed drawings that streamline your construction process and avoid expensive revisions.</p>
            </article>
            <article className="my-8">
                <p className="flex items-center text-lg sm:text-xl md:text-2xl gap-2">
                    <span className="text-[#FF7420] mt-1"><FaCheckCircle size={24} /></span>
                    Interior and Exterior Decoration Works
                </p>
                <p className="ml-8 text-base sm:text-lg">We transform spaces with creative and functional interior and exterior designs tailored to your preferences. From concept to completion, our team works efficiently to deliver stylish, practical solutions—within your schedule and budget.</p>
            </article>
        </div>
    );
};

export default page;