import type { Metadata } from "next";
import Image from "next/image";
import { MonitorPlay, GraduationCap, ShieldCheck, FileCheck, CheckCircle2, UserCheck, Briefcase, Building2, MapPin } from "lucide-react";
import Button from "@/src/components/ui/Button";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "Training & Capacity Building | Prime Forensics",
  description: "Industry-oriented training programs designed to build practical skills in forensic science, cyber investigation, and evidence handling.",
};

export default function TrainingPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary pt-24 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Empowering Professionals Through Forensic Excellence
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Training & Capacity<br />Building
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Industry-oriented training programs designed to build practical skills in forensic science, cyber investigation, and evidence handling.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 py-24 flex flex-col gap-32">

        {/* Section 1: Programs & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left Side: Our Programs */}
          <div className="flex flex-col justify-between rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white">
                  Our Programs
                </h2>
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 ml-4">
                  <GraduationCap size={24} />
                </div>
              </div>

              <p className="text-typography/80 text-lg leading-relaxed mb-10 max-w-lg">
                We provide comprehensive training across multiple forensic and investigative domains:
              </p>

              <div className="space-y-6 relative z-10">
                <div className="flex gap-4 items-start">
                  <MonitorPlay className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Cyber Forensics Workshops</h4>
                    <p className="text-typography/70 text-sm">Hands-on training in digital evidence acquisition, analysis, and cybercrime investigation techniques.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <FileCheck className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Questioned Document Examination</h4>
                    <p className="text-typography/70 text-sm">Practical exposure to handwriting analysis, signature verification, and document authentication methods.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Crime Scene Investigation Training</h4>
                    <p className="text-typography/70 text-sm">Training on evidence recognition, collection, preservation, and reconstruction of crime scenes.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Digital Evidence Handling</h4>
                    <p className="text-typography/70 text-sm">Best practices for handling, preserving, and presenting digital evidence in legal proceedings.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <UserCheck className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Law Enforcement Training Programs</h4>
                    <p className="text-typography/70 text-sm">Specialized modules for police and investigative agencies focusing on modern forensic techniques.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Building2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Corporate Cybersecurity Awareness</h4>
                    <p className="text-typography/70 text-sm">Programs designed to educate organizations on cyber threats, prevention strategies, and data protection.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Image */}
            <div className="relative w-full h-48 md:h-64 bg-primary rounded-xl overflow-hidden shadow-inner border border-secondary/20 mt-12">
              <Image
                src="/images/training_banner_1775626534264.png"
                alt="Forensic Training Workshop"
                fill
                className="object-cover object-center opacity-90 mix-blend-screen"
              />
            </div>
          </div>

          {/* Right Side: Key Features */}
          <div className="bg-primary rounded-2xl p-10 lg:p-14 text-white shadow-xl flex flex-col justify-start h-full border border-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-accent/10" />
            <div className="relative z-10 mb-10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-accent flex items-center justify-center mb-10">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
                Key<br />Features
              </h3>
              <ul className="space-y-6 text-white/80">
                <li className="flex items-center gap-4"><CheckCircle2 className="text-accent w-6 h-6 shrink-0" /> <span className="text-lg">Practical & Hands-On Training</span></li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-accent w-6 h-6 shrink-0" /> <span className="text-lg">Industry-Relevant Curriculum</span></li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-accent w-6 h-6 shrink-0" /> <span className="text-lg">Expert-Led Sessions</span></li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-accent w-6 h-6 shrink-0" /> <span className="text-lg">Certification Programs</span></li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-accent w-6 h-6 shrink-0" /> <span className="text-lg">Customized Training Module</span></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Section 2: Who Can Benefit */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left Side: Info */}
          <div className="flex flex-col justify-center rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full order-2 lg:order-1 shadow-sm relative overflow-hidden">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white mb-8 relative z-10">
              Who Can Benefit
            </h2>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <GraduationCap className="text-accent w-6 h-6 shrink-0" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide">Students & Researchers</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <ShieldCheck className="text-accent w-6 h-6 shrink-0" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide">Law Enforcement Agencies</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <Briefcase className="text-accent w-6 h-6 shrink-0" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide">Legal Professionals</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <Building2 className="text-accent w-6 h-6 shrink-0" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide">Corporate Organizations</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <UserCheck className="text-accent w-6 h-6 shrink-0" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide">Security & Investigation Professionals</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative w-full min-h-[400px] h-full bg-primary rounded-2xl overflow-hidden order-1 lg:order-2 shadow-xl border border-secondary/20 flex items-end">
            <Image
              src="/images/training_main_1775626517396.png"
              alt="Professional Training Environment"
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
            Looking to enhance your forensic skills?
          </h2>
          <Button
            href="/contact"
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="px-10 py-4 shadow-xl text-sm tracking-wider uppercase font-bold mt-6"
          >
            Enroll in Our Training Programs
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
