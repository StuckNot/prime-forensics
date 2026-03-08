import Navbar from "@/src/components/navbar/navbar";
import dynamic from "next/dynamic";

const ExpertOpinionCTA = dynamic(() => import("@/src/components/ExpertOpinionCTA"));
const Footer = dynamic(() => import("@/src/components/footer/footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <ExpertOpinionCTA />
      <Footer />
    </>
  )
}
