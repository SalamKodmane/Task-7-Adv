import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Section2 from "@/components/section2/section2";
import Section3 from "@/components/section3/section3";
import Section4 from "@/components/section4/section4";
import Section5 from "@/components/section5/section5";
import Section8 from "@/components/section8/section8";

export default function Home() {
  return (
   <>
     <Navbar />
     <Hero />
     <Section2 />
     <Section3 />
     <Section4 />
     <Section5 />
     <Section8 />
     <Footer />
  </>
  );
}
