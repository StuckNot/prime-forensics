
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/src/components/home/HeroSection"));
const Accreditations = dynamic(() => import("@/src/components/home/Accreditations"));
const ServicesGrid = dynamic(() => import("@/src/components/home/ServicesGrid"));
const ExpertOpinionCTA = dynamic(() => import("@/src/components/ExpertOpinionCTA"));
const Footer = dynamic(() => import("@/src/components/footer/footer"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <Accreditations />
      <ServicesGrid />
      <ExpertOpinionCTA />
      <Footer />
    </>
  )
}
