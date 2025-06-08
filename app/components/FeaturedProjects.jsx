'use client';
import { useRef, useState, useEffect } from 'react'; // Import useState and useEffect
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import FeatureCard from './FeatureCard';
// ... (your image imports)
import featureProject1 from '../images/featureProjects/Royal Pacific  Tower 3D View -01 Chandrima Housing .jpeg'
import featureProject2 from '../images/featureProjects/River Heaven 3D-02.jpg'
import featureProject3 from '../images/featureProjects/FINAL RENDER-1.jpg'
import featureProject4 from '../images/featureProjects/3d-4.jpg'
import featureProject5 from '../images/featureProjects/Baki Bhai Zatrabari-2.jpg'
import featureProject6 from '../images/featureProjects/Planet Housing Back Side View Kawla .jpg'

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Link from 'next/link';


const FeaturedProjects = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sectionRef = useRef(null); // Ref for the main section
    const [isVisible, setIsVisible] = useState(false); // State for section visibility

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(sectionRef.current); // Stop observing once visible
                }
            },
            {
                root: null, // relative to the viewport
                rootMargin: '0px',
                threshold: 0.2, // Trigger when 20% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef} // Attach ref to the main div
            className={`relative px-4 sm:px-8 md:px-12 lg:px-20 py-6
                       transition-all duration-1000 ease-out transform
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        >
            <h2
                className={`text-3xl font-medium underline decoration-[#F3692A] decoration-4 underline-offset-8
                           transition-all duration-700 ease-out transform delay-200
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                Featured Projects
            </h2>

            {/* Custom Navigation Buttons with Hover Effects */}
            <button
                ref={prevRef}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-10 text-2xl font-bold text-[#F3692A]
                           transform transition-transform duration-200 ease-in-out hover:scale-125"
            >
                <FaArrowAltCircleLeft />
            </button>
            <button
                ref={nextRef}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-10 text-2xl font-bold text-[#F3692A]
                           transform transition-transform duration-200 ease-in-out hover:scale-125"
            >
                <FaArrowAltCircleRight />
            </button>

            <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
                className="w-2/3 md:w-2/3 lg:w-[800px] h-[350px] my-16"
            >
                <SwiperSlide className='.swiper-slide'><FeatureCard cardImage={featureProject1} projectName="Royal Pacific Tower" location="Mohammadpur, Dhaka" /></SwiperSlide>
                <SwiperSlide className='.swiper-slide'><FeatureCard cardImage={featureProject2} projectName="Royal River Heaven" location="Dhaka" /></SwiperSlide>
                <SwiperSlide className='.swiper-slide'><FeatureCard cardImage={featureProject3} projectName="Abason" location="Aftab Nagor, Dhaka" /></SwiperSlide>
                <SwiperSlide className='.swiper-slide'><FeatureCard cardImage={featureProject4} projectName="Mannat Palace" location="Dhaka" /></SwiperSlide>
                <SwiperSlide className='.swiper-slide'><FeatureCard cardImage={featureProject5} projectName="Baki Palace" location="Jatrabari, Dhaka" /></SwiperSlide>
                <SwiperSlide className='.swiper-slide'><FeatureCard cardImage={featureProject6} projectName="Planet Housing" location="Kawla, Dhaka" /></SwiperSlide>
            </Swiper>
            <div className="text-center">
                <Link href="/projects" className="text-[#FF7420] font-medium text-md underline cursor-pointer">
                    Show all projects
                </Link>
            </div>
        </div>
    );
};

export default FeaturedProjects;