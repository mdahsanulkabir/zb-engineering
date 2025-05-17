import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stat from "./components/Stat";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stat />
      <Footer />
    </div>
  );
}
