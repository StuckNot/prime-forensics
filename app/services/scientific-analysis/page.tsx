import type { Metadata } from "next";
import Image from "next/image";
import { Microscope, FileSignature, Edit3, Fingerprint, Crosshair, FlaskConical, Puzzle, HeartPulse, Video, CheckCircle2, Gavel, FileCheck, Presentation, Scale } from "lucide-react";
import Button from "@/src/components/ui/Button";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "Scientific Forensic Analysis | Prime Forensics",
  description: "Delivering scientifically validated, court-admissible forensic opinions to support legal proceedings, investigations, and dispute resolution.",
};

export default function ScientificAnalysisPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary pt-24 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Scientific Forensic Analysis & Expert Consultation
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Scientific Forensic<br />Analysis
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Delivering scientifically validated, court-admissible forensic opinions to support legal proceedings, investigations, and dispute resolution.
          </p>
        </div>
      </section>

      {/* Admissibility Banner */}
      <div className="bg-secondary/10 border-b border-secondary/20 py-5 px-6 text-center">
        <p className="text-xs md:text-sm font-bold uppercase text-typography/80 tracking-widest flex items-center justify-center gap-3">
          <span className="text-lg">⚖</span> ADMISSIBLE UNDER SECTION 39(1) - BHARATIYA SAKSHYA ADHINIYAM
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 py-24 flex flex-col gap-32">

        {/* Section 1: Services & Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left Side: Services */}
          <div className="flex flex-col justify-between rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white">
                  Our Expertise
                </h2>
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 ml-4">
                  <Microscope size={24} />
                </div>
              </div>

              <p className="text-typography/80 text-lg leading-relaxed mb-10 max-w-lg">
                We offer specialized forensic examination and expert opinion in the following domains:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                <div className="flex items-center gap-3">
                  <FileSignature className="text-accent w-5 h-5 shrink-0" />
                  <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-xs">Questioned Documents</span>
                </div>
                <div className="flex items-center gap-3">
                  <Edit3 className="text-accent w-5 h-5 shrink-0" />
                  <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-xs">Signature Verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <Fingerprint className="text-accent w-5 h-5 shrink-0" />
                  <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-xs">Fingerprint Examination</span>
                </div>
                <div className="flex items-center gap-3">
                  <Crosshair className="text-accent w-5 h-5 shrink-0" />
                  <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-xs">Forensic Ballistics</span>
                </div>
                <div className="flex items-center gap-3">
                  <FlaskConical className="text-accent w-5 h-5 shrink-0" />
                  <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-xs">Chemistry & Toxicology</span>
                </div>
                <div className="flex items-center gap-3">
                  <Puzzle className="text-accent w-5 h-5 shrink-0" />
                  <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-xs">Crime Scene Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <HeartPulse className="text-accent w-5 h-5 shrink-0" />
                  <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-xs">Medico-Legal Consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="text-accent w-5 h-5 shrink-0" />
                  <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-xs">Audio-Video Authentication</span>
                </div>
              </div>
            </div>
            
            {/* Banner Image */}
            <div className="relative w-full h-48 md:h-64 bg-primary rounded-xl overflow-hidden shadow-inner border border-secondary/20 mt-12">
              <Image
                src="/images/scientific_banner_1775626612124.png"
                alt="Scientific Forensic Equipment"
                fill
                className="object-cover object-center opacity-90 mix-blend-screen"
              />
            </div>
          </div>

          {/* Right Side: Our Approach */}
          <div className="bg-primary rounded-2xl p-10 lg:p-14 text-white shadow-xl flex flex-col justify-start h-full border border-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-accent/10" />
            <div className="relative z-10 mb-10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-accent flex items-center justify-center mb-10">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
                Why<br />Choose Us
              </h3>
              <ul className="space-y-6 text-white/80">
                <li className="flex items-center gap-4"><CheckCircle2 className="text-accent w-6 h-6 shrink-0" /> <span className="text-lg">Independent & Unbiased Opinions</span></li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-accent w-6 h-6 shrink-0" /> <span className="text-lg">Scientific & Methodical Approach</span></li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-accent w-6 h-6 shrink-0" /> <span className="text-lg">Court-Admissible Reporting Standards</span></li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-accent w-6 h-6 shrink-0" /> <span className="text-lg">Experienced Forensic Experts</span></li>
                <li className="flex items-center gap-4"><CheckCircle2 className="text-accent w-6 h-6 shrink-0" /> <span className="text-lg">Strict Confidentiality</span></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Section 2: Legal Support */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left Side: Info */}
          <div className="flex flex-col justify-center rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full order-2 lg:order-1 shadow-sm relative overflow-hidden">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white mb-8 relative z-10">
              Legal Support Services
            </h2>
            <p className="text-typography/80 text-lg leading-relaxed mb-8 max-w-lg relative z-10">
              We actively support legal professionals and investigative agencies through:
            </p>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <FileSignature className="text-accent w-6 h-6 shrink-0" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide">Case Review & Evidence Evaluation</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <Microscope className="text-accent w-6 h-6 shrink-0" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide">Interpretation of Forensic Findings</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <FileCheck className="text-accent w-6 h-6 shrink-0" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide">Preparation of Expert Reports</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <Scale className="text-accent w-6 h-6 shrink-0" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide">Court-Admissible Documentation</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <Presentation className="text-accent w-6 h-6 shrink-0" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide">Expert Witness Testimony</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative w-full min-h-[400px] h-full bg-primary rounded-2xl overflow-hidden order-1 lg:order-2 shadow-xl border border-secondary/20 flex items-end">
            <Image
              src="/images/scientific_main_1775626592719.png"
              alt="Scientific Validation Work"
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
            Require Forensic Validation?
          </h2>
          <Button
            href="/contact"
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="px-10 py-4 shadow-xl text-sm tracking-wider uppercase font-bold mt-6"
          >
            Request Expert Opinion
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
