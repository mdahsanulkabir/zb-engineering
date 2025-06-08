'use client'
import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup'; // Import CountUp

const StatElement = ({ data, description }) => { // Removed isVisible prop from here
    // State to track if the individual StatElement is in view
    const [isVisible, setIsVisible] = useState(false);
    // Ref for the StatElement's root div to observe its intersection
    const statElementRef = useRef(null);

    // Extract the numerical part from the data string
    const numberMatch = data.match(/(\d+)/);
    const endNumber = numberMatch ? parseInt(numberMatch[1], 10) : 0;
    const suffix = data.replace(endNumber, ''); // Keep the '+' or 'M' etc.

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stop observing once it's visible to run animation only once
                    observer.unobserve(statElementRef.current);
                }
            },
            {
                root: null, // relative to the viewport
                rootMargin: '0px',
                threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );

        if (statElementRef.current) {
            observer.observe(statElementRef.current);
        }

        return () => {
            if (statElementRef.current) {
                observer.unobserve(statElementRef.current);
            }
        };
    }, []); // Run effect once on mount

    return (
        <div
            ref={statElementRef} // Attach ref to the StatElement's root div
            className="flex items-center justify-center gap-4 w-full sm:w-1/2"
        >
            <h2 className="text-[#F3692A] text-right text-4xl pb-2 w-1/3">
                {isVisible ? ( // Only render CountUp when this specific element is visible
                    <CountUp
                        start={0}
                        end={endNumber}
                        duration={2.5} // Animation duration in seconds
                        suffix={suffix} // Append the original suffix
                        separator="," // Optional: add comma for large numbers
                        // No need for enableScrollSpy here, as we're managing visibility with IntersectionObserver
                    />
                ) : (
                    // Show initial data (e.g., "0" or just the suffix) if not visible
                    // Or, simply the full `data` string if you prefer it not to be 0
                    // If you want it to appear from 0, you might want a default 0+ or 0M
                    `${endNumber === 0 ? '' : endNumber}${suffix}` // Display original data or default 0 if no number
                )}
            </h2>
            <p className="text-xl text-left w-2/3">{description}</p>
        </div>
    );
};

export default StatElement;