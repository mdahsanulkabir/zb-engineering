'use client'
import { useState, useEffect, useRef } from 'react';

const Whowe = () => {
    // State to control when the animations trigger
    const [isVisible, setIsVisible] = useState(false);
    // Ref to attach to the main container div for IntersectionObserver
    const whoweRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the element is intersecting (in view), set isVisible to true
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stop observing once it's visible to run animation only once
                    observer.unobserve(whoweRef.current);
                }
            },
            {
                root: null, // relative to the viewport
                rootMargin: '0px', // no margin
                threshold: 0.3, // Trigger when 30% of the element is visible
            }
        );

        // Start observing the whoweRef
        if (whoweRef.current) {
            observer.observe(whoweRef.current);
        }

        // Cleanup: disconnect the observer when the component unmounts
        return () => {
            if (whoweRef.current) {
                observer.unobserve(whoweRef.current);
            }
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div
            ref={whoweRef} // Attach the ref here
            className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-6 overflow-x-clip"
        >
            <h2
                className={`text-3xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8
                           transition-all duration-700 ease-out transform
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                Who we are
            </h2>
            <p
                className={`pt-6 text-base sm:text-lg text-justify
                           transition-all duration-700 ease-out transform delay-200
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                ZB Engineering & Technology is a powerhouse of innovation and expertise, setting new benchmarks in the engineering industry since 2010. As a multi-discipline consulting firm, we thrive on tackling complex challenges and delivering tailored solutions that drive progress and success.
    <br /><br />
    Our comprehensive services span engineering, planning, design, documentation, contract management, and project supervision. With a relentless commitment to quality and excellence, we empower our clients to realize their vision and build a better tomorrow.
            </p>

            {/* Background blobs with animation */}
            <div
                className={`absolute top-[-50px] left-[-150px] w-[324px] h-[324px] bg-[#B9D9BA] rounded-full blur-sm opacity-70 shadow-lg z-[-1]
                           transition-all duration-1000 ease-out
                           ${isVisible ? 'translate-x-0 translate-y-0' : '-translate-x-full -translate-y-full'}`}
            ></div>
            <div
                className={`absolute bottom-[-30px] right-[-100px] w-[240px] h-[240px] bg-[#F6C26D] rounded-full blur-sm opacity-60 shadow-2xl z-[-1]
                           transition-all duration-1000 ease-out delay-100
                           ${isVisible ? 'translate-x-0 translate-y-0' : 'translate-x-full translate-y-full'}`}
            ></div>
        </div>
    );
};

export default Whowe;