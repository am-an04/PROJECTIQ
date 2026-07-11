import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import Statistics from "../../components/landing/Statistics";
import HowProjectIQWorks from "../../components/landing/HowProjectIQWorks";
import WhyProjectIQ from "../../components/landing/WhyProjectIQ";
import CTA from "../../components/landing/CTA";
import Footer from "../../components/landing/Footer"

export default function LandingPage() {

  return (

    <main className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      <Hero />

      <Features />

      <Statistics />
      
      <HowProjectIQWorks /> 
      
      <WhyProjectIQ />

      <CTA />

      <Footer />

    </main>

  );

}