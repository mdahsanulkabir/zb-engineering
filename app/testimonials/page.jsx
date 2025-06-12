

const page = () => {
    return (
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-6">
            <h2 className="text-3xl md:text-4xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8">
                Testimonials
            </h2>
            <p className="py-6 text-base sm:text-lg">
                We take pride in the positive feedback we receive from our clients. Here are some testimonials that reflect our commitment to excellence and customer satisfaction.
            </p>
            <article className="my-8">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold">"ZB Engineering exceeded our expectations with their professionalism and attention to detail. The project was completed on time and within budget."</p>
                <p className="mt-2 text-base sm:text-lg">- John Doe, CEO of ABC Corp</p>
            </article>
            <article className="my-8">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold">"Their team was responsive and knowledgeable, making the entire process smooth and efficient. Highly recommend!"</p>
                <p className="mt-2 text-base sm:text-lg">- Jane Smith, Project Manager at XYZ Ltd.</p>
            </article>
            <article className="my-8">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold">"ZB Engineering's expertise in civil works construction is unmatched. They delivered a high-quality project that we are proud of."</p>
                <p className="mt-2 text-base sm:text-lg">- Mark Johnson, Owner of LMN Enterprises</p>
            </article>
            
        </div>
    );
};

export default page;