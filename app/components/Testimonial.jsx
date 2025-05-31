import Image from "next/image";
import testimonial1 from "../images/testimonial/testimonial-1.webp";
import testimonial2 from "../images/testimonial/testimonial-2.webp";


const Testimonial = () => {
    return (
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-6 bg-[#135120]/8">
            <h2 className="text-3xl md:text-4xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">
                Testimonial
            </h2>

            {/* Testimonial 1 */}
            <div className="flex flex-col md:flex-row items-center my-10 gap-6">
                <div className="w-full md:w-1/2">
                    <Image
                        src={testimonial1}
                        alt="Testimonial 1"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <p className="text-xl font-semibold">MR JAMAN AND HIS FAMILY</p>
                    <p className="text-sm text-[#6c6c6c] mb-4">Flat owner of Kaderia Palace, Lalbag, Dhaka</p>
                    <p className="text-base text-justify">
                        We had a fantastic experience with ZB Engineering and Technology.
                        From start to end, the whole process was very efficient and professional.
                        Their construction quality is very good and they always adhere to their commitment.
                        They helped us find the home we always desired for.
                    </p>
                </div>
            </div>

            <hr className="border-gray-300 my-6" />

            {/* Testimonial 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center my-10 gap-6">
                <div className="w-full md:w-1/2">
                    <Image
                        src={testimonial2}
                        alt="Testimonial 2"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <p className="text-xl font-semibold">MR RAFIQUE AND HIS FAMILY</p>
                    <p className="text-sm text-[#6c6c6c] mb-4">Flat owner of Planet Housing, Kawla, Dhaka</p>
                    <p className="text-base text-justify">
                        We couldn't find a better product than of ZB Engineering and Technology,
                        and the total home ownership procedure was very simple. We are satisfied with the service
                        and the flat is serving our purpose very well. And we believe ZB Engineering will emerge
                        as an elite developer company in the country.
                    </p>
                </div>
            </div>

            <div className="text-center">
                <p className="text-[#FF7420] font-medium text-md underline cursor-pointer">
                    More Testimonials...
                </p>
            </div>
        </div>
    );
};

export default Testimonial;