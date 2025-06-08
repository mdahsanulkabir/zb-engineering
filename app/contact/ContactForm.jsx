

const ContactForm = () => {
    return (
        <form className="contact-form">
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F3692A]"
                />
            </div>
            <div className="flex flex-col gap-1 my-4">
                <label htmlFor="phone" className="text-gray-700">Phone</label>
                <input
                    type="phone"
                    id="phone"
                    name="phone"
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F3692A]"
                />
            </div>
            <div className="flex flex-col gap-1 my-4">
                <label htmlFor="email" className="text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F3692A]"
                />
            </div>
            <div className="flex flex-col gap-1 my-4">
                <label htmlFor="message" className="text-gray-700">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F3692A]"
                ></textarea>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-[#F3692A] text-white font-semibold rounded-md hover:bg-[#e65c24] transition duration-200"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;