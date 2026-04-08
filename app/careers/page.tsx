import type { Metadata } from "next";
import Image from "next/image";
import { ShieldAlert, Microscope, GraduationCap, ChevronRight, Mail } from "lucide-react";
import Footer from "@/src/components/footer/footer";
import Button from "@/src/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers | Prime Forensics",
  description: "Join our elite team of forensic scientists, digital analysts, and security architects.",
};

const openRoles = [
  {
    id: 1,
    title: "Claim Analyst",
    qualification: "BSc, MSc Forensics Science",
    type: "Full-Time",
    clearance: "Level 4 Clearance Required",
  },
  {
    id: 2,
    title: "Junior Forensics Expert",
    qualification: "BSc, MSc Forensics Science",
    type: "Full-Time",
    clearance: "Level 3 Clearance Required",
  },
  {
    id: 3,
    title: "Forensics Instructor",
    qualification: "BSc, MSc Forensics Science",
    type: "Full-Time",
    clearance: "Level 5 Clearance Required",
  }
];

export default function CareersPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Elite Scientific Recruitment
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Join the Pursuit of<br />Unarguable Truth
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We are actively recruiting former intelligence officers, PhD scientists, and security engineers to expand India's preeminent private forensic laboratory.
          </p>
        </div>
      </section>

      {/* Culture & Environment Grid */}
      <section className="container mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-4">
            The Prime Environment
          </h2>
          <p className="text-typography/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Operating at the intersection of law, science, and technology requires unparalleled organizational infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-background dark:bg-[#0A101D] p-10 rounded-2xl border border-secondary/20 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-secondary/10 border border-secondary/20 rounded-xl flex justify-center items-center text-primary dark:text-white mb-8 group-hover:scale-110 transition-transform">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Military-Grade Infrastructure</h3>
            <p className="text-typography/70 leading-relaxed">
              Our analysts have unrestricted access to the exact software and hardware cloning tools used by global intelligence agencies. No budgetary limits on truth.
            </p>
          </div>

          <div className="bg-primary p-10 rounded-2xl border border-secondary/20 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-10 -mt-10" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex justify-center items-center text-accent mb-8 group-hover:scale-110 transition-transform">
                <Microscope size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">High-Stakes Legal Impact</h3>
              <p className="text-white/70 leading-relaxed">
                Your findings will directly inform Supreme Court rulings, multi-million dollar corporate litigations, and international arbitration.
              </p>
            </div>
          </div>

          <div className="bg-background dark:bg-[#0A101D] p-10 rounded-2xl border border-secondary/20 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-secondary/10 border border-secondary/20 rounded-xl flex justify-center items-center text-primary dark:text-white mb-8 group-hover:scale-110 transition-transform">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Continuous Academic Research</h3>
            <p className="text-typography/70 leading-relaxed">
              We mandate 20% dedicated research time. Publish peer-reviewed papers on deep fake detection, encryption breaking, and chemical pathology techniques.
            </p>
          </div>

        </div>

        {/* Visual Lab Banner */}
        <div className="w-full h-80 bg-primary mt-16 rounded-2xl overflow-hidden shadow-xl border border-secondary/20 relative">
          <div className="absolute inset-0 bg-primary mix-blend-color z-10 opacity-40" />
          <Image 
            src="/images/careers-banner.png" 
            alt="Forensic Laboratory Scientists" 
            fill 
            className="object-cover object-center opacity-70"
          />
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-secondary/5 border-t border-secondary/20 py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-12 border-b border-secondary/20 pb-6">
            Active Clearances
          </h2>

          <div className="flex flex-col gap-4">
            {openRoles.map((role) => (
              <div key={role.id} className="bg-background dark:bg-[#0A101D] p-6 md:p-8 rounded-xl border border-secondary/20 hover:border-accent/40 shadow-sm hover:shadow-md transition-all group flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer">
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-white group-hover:text-accent transition-colors mb-2">
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-4 items-center text-xs tracking-wider uppercase font-bold">
                    <span className="text-typography/70">{role.qualification}</span>
                    <span className="hidden md:block w-1 h-1 rounded-full bg-secondary/30" />
                    <span className="text-accent">{role.type}</span>
                    {/* <span className="hidden md:block w-1 h-1 rounded-full bg-secondary/30" /> */}
                    {/* <span className="text-red-500/80">{role.clearance}</span> */}
                  </div>
                </div>
                
                <div className="mt-6 md:mt-0 w-full md:w-auto flex justify-end">
                   <div className="flex items-center gap-2 text-primary dark:text-white font-bold text-sm tracking-wider uppercase group-hover:translate-x-2 transition-transform">
                     Apply <ChevronRight size={18} className="text-accent" />
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Generic Application CTA */}
      <section className="bg-background py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8 text-primary dark:text-white">
            <Mail size={28} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-6">
            Spontaneous Applications
          </h2>
          <p className="text-typography/80 text-lg leading-relaxed mb-10">
            If your specific expertise is not currently listed, we continuously evaluate exceptional talent for unannounced expansions.
          </p>
          
          <Button 
            href="mailto:careers@primeforensics.in" 
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="px-10 py-4 shadow-xl text-sm tracking-wider uppercase font-bold"
          >
            Submit Secure Dossier
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
