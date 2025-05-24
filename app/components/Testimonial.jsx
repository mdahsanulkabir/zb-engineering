import Image from "next/image";
import testimonial1 from "../images/testimonial/testimonial-1.webp";
import testimonial2 from "../images/testimonial/testimonial-2.webp";


const Testimonial = () => {
    return (
        <div className="w-full px-20 py-16 bg-[#135120]/8">
            <h2 className="text-5xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">Testimonial</h2>

            <div className="flex justify-center items-center my-8 gap-4">
                <div className="w-1/2 mr-2">
                    <Image
                        src={testimonial1}
                        alt="Testimonial 1"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-1/2 ml-2">
                    <p className="text-2xl">MR JAMAN AND HIS FAMILY</p>
                    <p className="text-xl text-[#6c6c6c]">Flat owner of Kaderia Palace, Lalbag, Dhaka</p>
                    <p className="text-xl pt-12 text-justify">We had a fantastic experience with ZB Engineering and Technology. From start to end, the whole process was very efficient and professional. Their construction quality is very good and they always adhere to their commitment. They helped us find the home we always desired for.</p>
                </div>
            </div>
            <div className="flex justify-center items-center my-8 gap-4">
                <div className="w-1/2 mr-2">
                    <p className="text-2xl">MR RAFIQUE AND HIS FAMILY</p>
                    <p className="text-xl text-[#6c6c6c]">Flat owner of Planet Housing, Kawla, Dhaka</p>
                    <p className="text-xl pt-12 text-justify">We couldn't find a better product than of ZB Engineering and Technology, and the total home ownership procedure was very simple. We are satisfied with the service and the flat is serving our purpose very well. And we believe Anwar Landmark will emerge as an elite developer company in the country.</p>
                </div>
                <div className="w-1/2 ml-2">
                    <Image
                        src={testimonial2}
                        alt="Testimonial 2"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <p className="text-[#FF7420] font-medium text-md underline">More Testimonials...</p>
        </div>
    );
};

export default Testimonial;