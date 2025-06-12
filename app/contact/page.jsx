import { FaPhoneAlt, FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";

const page = () => {
    return (
        <div className="contact min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
            <h2 className="text-3xl md:text-4xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">
                Contact Us
            </h2>

            <div className="flex flex-wrap justify-center items-start gap-4 sm:gap-10 my-6">
                <div className="flex flex-col gap-4">
                    <h4 className="text-base md:text-xl font-bold underline decoration-[#F3692A] underline-offset-3 place-self-start">Office</h4>
                    <address className="not-italic leading-relaxed place-self-start">
                        Islam Mansion<br />
                        House - 38, Road - 03, Block - E<br />
                        Banasree, Rampura<br />
                        Dhaka - 1219
                    </address>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-base md:text-xl font-bold underline decoration-[#F3692A] underline-offset-3 place-self-start">Find us on social media</h4>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-2 place-self-start">
                            <FaFacebook size={24} /><span>facebook.com/zbengineeering</span>
                        </div>
                        <div className="flex items-start gap-2 place-self-start">
                            <FaLinkedin size={24} /><span>linkedin.com/zbengineeering</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col place-self-center gap-4">
                    {/* <div className="flex flex-col gap-4"> */}
                    {/* <h4 className="text-base md:text-xl font-bold underline decoration-[#F3692A] underline-offset-3 place-self-start">Email</h4> */}
                    <div className="flex items-center gap-4 ">
                        <FaEnvelope size={24} /><span>info@zbengineeering.com</span>
                    </div>
                    {/* </div> */}
                    {/* <div className="flex flex-col gap-4"> */}
                    {/* <h4 className="text-base md:text-xl font-bold underline decoration-[#F3692A] underline-offset-3 place-self-start">Phone</h4> */}
                    <div className="flex items-center gap-4 ">
                        <FaPhoneAlt size={24} /><span>+880 171 309 2052</span>
                    </div>
                    {/* </div> */}
                </div>
            </div>

            <div 
                className="flex flex-col gap-10 items-center justify-center w-full mx-auto bg-white p-6 rounded-lg shadow-lg mt-8
                xl:flex-row xl:justify-between xl:items-start xl:max-w-6xl">
                <div className="w-full">
                    <h2 className="text-3xl w-full text-center font-bold text-amber-600 mb-6">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">We would love to hear from you! Whether you have a question about our services, need assistance, or just want to say hello, feel free to reach out. One of our expert sales manager will get back to you as soon as possible.</p>
                    <ContactForm />
                </div>

                <div className="w-full max-w-4xl mx-auto mt-8 xl:mt-0">
                    <h2 className="text-3xl w-full text-center font-bold text-amber-600 mb-6">Our Office Location</h2>
                    <div className="w-full mx-auto h-[500px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            title="ZBET Office Map"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            style={{ border: 0 }}
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps?q=ZB+Engineering+&+Technology,+Dhaka&output=embed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;