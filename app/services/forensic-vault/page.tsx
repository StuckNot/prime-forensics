import type { Metadata } from "next";
import Image from "next/image";
import { Lock, ThermometerSnowflake, FileCheck, Eye, Video, ShieldCheck } from "lucide-react";
import Button from "@/src/components/ui/Button";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "The Forensic Vault | Prime Forensics",
  description: "Impenetrable, climate-controlled physical evidence storage facility.",
};

export default function ForensicVaultPage() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-primary pt-24 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Impenetrable Physical Storage
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The Forensic<br />Vault
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Secure, climate-controlled storage for sensitive physical and digital assets. Our vault ensures uncompromised chain-of-custody integrity for litigating parties.
          </p>
        </div>
      </section>

      {/* Admissibility Banner */}
      <div className="bg-secondary/10 border-b border-secondary/20 py-5 px-6 text-center">
        <p className="text-xs md:text-sm font-bold uppercase text-typography/80 tracking-widest flex items-center justify-center gap-3">
          FULL COMPLIANCE WITH STRICTEST CHAIN OF CUSTODY PROTOCOLS
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 py-24 flex flex-col gap-32">
        
        {/* Section 1: Extraction & Interpretation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Custody System */}
          <div className="flex flex-col justify-between rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white">
                  Custody System
                </h2>
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 ml-4">
                  <Lock size={24} />
                </div>
              </div>
              
              <p className="text-typography/80 text-lg leading-relaxed mb-10 max-w-lg">
                The vulnerability of any evidence lies in its transportation and storage. Our localized custody architecture eliminates tampering risks entirely.
              </p>

              <ul className="grid grid-cols-2 gap-y-6 gap-x-4 font-bold text-xs tracking-widest text-typography uppercase mb-12">
                <li className="flex items-center gap-3">
                  <ThermometerSnowflake className="w-4 h-4 text-accent" />
                  Climate Control
                </li>
                <li className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-accent" />
                  Vault Security
                </li>
                <li className="flex items-center gap-3">
                  <FileCheck className="w-4 h-4 text-accent" />
                  Audit Logging
                </li>
                <li className="flex items-center gap-3">
                  <Eye className="w-4 h-4 text-accent" />
                  Biometric Access
                </li>
              </ul>
            </div>

            {/* Banner Image */}
            <div className="relative w-full h-48 md:h-64 bg-primary rounded-xl overflow-hidden shadow-inner border border-secondary/20">
              <Image 
                src="/images/vault-banner.png" 
                alt="Forensic Vault Evidence Storage" 
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
                Absolute<br/>Integrity
              </h3>
              <p className="text-white/70 leading-relaxed text-lg max-w-md">
                Opposing counsel cannot challenge evidence that is maintained in an auditable, highly secure isolation environment. Every log entry is permanently preserved.
              </p>
            </div>
            
            <div className="relative z-10 mt-20 pt-6 border-t border-white/10 flex justify-between items-center text-xs font-bold tracking-widest text-accent uppercase">
              <span>Security Rating</span>
              <span>Maximum Grade</span>
            </div>
          </div>
          
        </div>

        {/* Section 2: Technological Arsenal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Arsenal Info */}
          <div className="flex flex-col justify-center rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full order-2 lg:order-1 shadow-sm relative overflow-hidden">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white mb-8 relative z-10">
              Security Infrastructure
            </h2>
            <p className="text-typography/80 text-lg leading-relaxed mb-12 max-w-lg relative z-10">
              Built beyond standard commercial safety protocols. It operates entirely off the grid and remains impermeable to both natural and human threats.
            </p>
            
            <div className="space-y-10 relative z-10">
              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <ThermometerSnowflake size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Atmospheric Regulators
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Humidity and temperature controls to prevent the degradation of blood evidence, biological DNA samples, and fragile paper.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <Video size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    24/7 Surveillance Array
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Closed-loop camera feeds, motion detectors, and retinal scanning restrict access to only the certified primary examiner.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Laboratory Environment Image */}
          <div className="relative w-full min-h-[400px] h-full bg-primary rounded-2xl overflow-hidden order-1 lg:order-2 shadow-xl border border-secondary/20 flex items-end">
            <Image 
              src="/images/vault-lab.png" 
              alt="Heavy Steel Forensic Bank Vault" 
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
            Secure Your Assets
          </h2>
          <p className="text-typography/80 text-lg leading-relaxed mb-12">
            Do not leave high-stakes case files in standard briefcases or digital lockers. Rent encrypted spatial storage at Prime Forensics.
          </p>
          
          <Button 
            href="/contact" 
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="px-10 py-4 shadow-xl text-sm tracking-wider uppercase font-bold"
          >
            Access Protocols
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
