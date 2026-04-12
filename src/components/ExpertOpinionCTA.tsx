import Button from "./ui/Button";
import Image from "next/image";

export default function ExpertOpinionCTA() {
  return (
    <section className="bg-primary dark:bg-[#0A101D] pt-28 pb-24 px-6 relative overflow-hidden border-y border-secondary/20">
      {/* Cinematic Glowing Orbs & Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] z-0 pointer-events-none" />
      <Image 
         src="/images/logo-icon.png" 
         alt="Prime Forensics Brand Mark" 
         width={600} 
         height={600} 
         className="absolute right-[-5%] top-[-20%] w-[400px] h-[400px] opacity-[0.03] z-0 pointer-events-none object-contain drop-shadow-xl" 
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
          Admissible Evidence.<br />
          <span className="text-accent">Unarguable Truth.</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Our specialized laboratory reports are meticulously structured, scientifically validated, and engineered to withstand rigorous multi-tier cross-examination.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">

          <Button
            href="/contact"
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="w-full sm:w-auto font-bold text-sm tracking-widest uppercase px-10 py-4 shadow-xl hover:-translate-y-1 transition-transform flex justify-center"
          >
            Initiate Case Review
          </Button>

          {/* <Button
            href="#"
            variant="outline"
            textColor="text-white"
            hoverBg="hover:bg-white/10"
            hoverText="hover:text-white"
            className="w-full sm:w-auto border-white/30 font-bold text-sm tracking-widest uppercase px-10 py-4 backdrop-blur-sm hover:border-white transition-all flex justify-center"
          >
            Download Corporate Dossier
          </Button> */}

        </div>
      </div>
    </section>
  );
}