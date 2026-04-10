import type { Metadata } from "next";
import Image from "next/image";
import { Cpu, MonitorDot, Smartphone, Mail, ShieldCheck, Database } from "lucide-react";
import Button from "@/src/components/ui/Button";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "Digital & Cyber Forensics | Prime Forensics",
  description: "Advanced data recovery, mobile device extraction, and email tracing for legal investigation.",
};

export default function DigitalForensicsPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-primary pt-24 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Advanced Data Recovery & Tracking
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Digital & Cyber<br />Forensics
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Uncovering deleted communications, retrieving hardware-level artifacts, and preserving digital integrity for critical cyber-crime investigations.
          </p>
        </div>
      </section>

      {/* Admissibility Banner */}
      <div className="bg-secondary/10 border-b border-secondary/20 py-5 px-6 text-center">
        <p className="text-xs md:text-sm font-bold uppercase text-typography/80 tracking-widest flex items-center justify-center gap-3">
          FULL ADMISSIBILITY UNDER SECTION 65B OF THE INDIAN EVIDENCE ACT
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 py-24 flex flex-col gap-32">
        
        {/* Section 1: Extraction & Interpretation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Extraction System */}
          <div className="flex flex-col justify-between rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white">
                  Digital Extraction
                </h2>
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 ml-4">
                  <Cpu size={24} />
                </div>
              </div>
              
              <p className="text-typography/80 text-lg leading-relaxed mb-10 max-w-lg">
                Our strict chain-of-custody protocol guarantees that digital evidence is safely isolated, cloned, and analyzed without modifying the original host device.
              </p>

              <ul className="grid grid-cols-2 gap-y-6 gap-x-4 font-bold text-xs tracking-widest text-typography uppercase mb-12">
                <li className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-accent" />
                  Mobile Devices
                </li>
                <li className="flex items-center gap-3">
                  <Database className="w-4 h-4 text-accent" />
                  Hard Drives
                </li>
                <li className="flex items-center gap-3">
                  <MonitorDot className="w-4 h-4 text-accent" />
                  Cloud Data
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  Email Tracing
                </li>
              </ul>
            </div>

            {/* Banner Image */}
            <div className="relative w-full h-48 md:h-64 bg-primary rounded-xl overflow-hidden shadow-inner border border-secondary/20">
              <Image 
                src="/images/df-banner.png" 
                alt="Digital Forensics Binary Overlay" 
                fill 
                className="object-cover object-center opacity-90 mix-blend-screen"
              />
            </div>
          </div>

          {/* Right Side: Scientific Interpretation Card */}
          <div className="bg-primary rounded-2xl p-10 lg:p-14 text-white shadow-xl flex flex-col justify-between h-full border border-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-accent/10" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-accent flex items-center justify-center mb-10">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
                Certified<br/>Cyber Reports
              </h3>
              <p className="text-white/70 leading-relaxed text-lg max-w-md">
                Translating complex hexadecimal data dumps into clear, authoritative legal context. Our cyber reports highlight exact timestamps, IP logs, and user activity.
              </p>
            </div>
            
            <div className="relative z-10 mt-20 pt-6 border-t border-white/10 flex justify-between items-center text-xs font-bold tracking-widest text-accent uppercase">
              <span>Evidentiary Weight</span>
              <span>Court Ready</span>
            </div>
          </div>
          
        </div>

        {/* Section 2: Technological Arsenal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Arsenal Info */}
          <div className="flex flex-col justify-center rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full order-2 lg:order-1 shadow-sm relative overflow-hidden">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white mb-8 relative z-10">
              High-Tech Arsenal
            </h2>
            <p className="text-typography/80 text-lg leading-relaxed mb-12 max-w-lg relative z-10">
              We leverage the same elite data recovery software and hardware blocking devices utilized by government intelligence agencies worldwide.
            </p>
            
            <div className="space-y-10 relative z-10">
              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <Smartphone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Cellebrite UFED
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Universal Forensic Extraction Device for bypassing locks and accessing deep encrypted memory.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <Database size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Hardware Write Blockers
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Physical interfaces ensuring original seized storage drives are never modified during cloning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Laboratory Environment Image */}
          <div className="relative w-full min-h-[400px] h-full bg-primary rounded-2xl overflow-hidden order-1 lg:order-2 shadow-xl border border-secondary/20 flex items-end">
            <Image 
              src="/images/df-lab.png" 
              alt="Cyber Forensics Data Server Lab" 
              fill 
              className="object-cover opacity-80 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          </div>

        </div>
      </div>

      {/* Bottom Call To Action */}
      <section className="bg-background dark:bg-[#0A101D] border-t border-secondary/20 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6">
            Recover Critical Data
          </h2>
          <p className="text-typography/80 text-lg leading-relaxed mb-12">
            Time is essential in cyber forensics. Securely deliver your devices to our lab for immediate write-blocked isolation and data extraction.
          </p>
          
          <Button 
            href="/contact?service=digital"
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="px-10 py-4 shadow-xl text-sm tracking-wider uppercase font-bold"
          >
            Initiate Cyber Analysis
          </Button>
          
          <div className="mt-10">
            <p className="text-[10px] md:text-xs tracking-widest text-typography/50 uppercase font-bold">
              Confidentiality Guaranteed • Response Within 24 Hours
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
