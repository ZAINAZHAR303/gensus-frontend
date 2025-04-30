import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import BeginnerBenefits from "./components/BeginnerBenefits";
import Footer from "./components/Footer";
import AboutProblem from "./components/AboutProblem";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero />
    <FeaturesSection />
    <BeginnerBenefits />
    <AboutProblem/>
    <Footer />
    </>
  );
}
