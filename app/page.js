import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stat from "./components/Stat";
import Footer from "./components/Footer";
import Whowe from "./components/Whowe";
import WhatWeDo from "./components/WhatWeDo";
import FeaturedProjects from "./components/FeaturedProjects";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Stat />
      <Whowe />
      <WhatWeDo />
      <FeaturedProjects />
      <CTA/>
      <Testimonial />
      {/* <Footer /> */}
    </div>
  );
}
