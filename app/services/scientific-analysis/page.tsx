import type { Metadata } from "next";
import Image from "next/image";
import {
  FileSignature,
  PenTool,
  Fingerprint,
  Crosshair,
  FlaskConical,
  MapPin,
  Stethoscope,
  AudioLines,
  Scale,
  FileCheck,
  BookOpen,
  FileText,
  UserCheck,
  ShieldCheck,
  Microscope,
  Lock,
  Award,
} from "lucide-react";
import Button from "@/src/components/ui/Button";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title:
    "Scientific Forensic Analysis & Expert Consultation | Prime Forensics",
  description:
    "Independent forensic examination and court-admissible expert opinions across multiple forensic domains. Delivering scientifically validated forensic analysis to support legal proceedings, investigations, and dispute resolution.",
};

const expertiseDomains = [
  {
    title: "Questioned Documents & Handwriting Analysis",
    icon: FileSignature,
  },
  {
    title: "Signature Verification",
    icon: PenTool,
  },
  {
    title: "Fingerprint Examination",
    icon: Fingerprint,
  },
  {
    title: "Forensic Ballistics Consultation",
    icon: Crosshair,
  },
  {
    title: "Forensic Chemistry & Toxicology",
    icon: FlaskConical,
  },
  {
    title: "Crime Scene Analysis & Reconstruction",
    icon: MapPin,
  },
  {
    title: "Medico-Legal Consultation",
    icon: Stethoscope,
  },
  {
    title: "Audio-Video Authentication",
    icon: AudioLines,
  },
];

const legalSupport = [
  { label: "Case Review & Evidence Evaluation", icon: Scale },
  { label: "Interpretation of Forensic Findings", icon: Microscope },
  { label: "Preparation of Expert Reports", icon: FileCheck },
  { label: "Court-Admissible Documentation", icon: BookOpen },
  { label: "Expert Witness Testimony", icon: UserCheck },
];

const whyChooseUs = [
  "Independent & Unbiased Opinions",
  "Scientific & Methodical Approach",
  "Court-Admissible Reporting Standards",
  "Experienced Forensic Experts",
  "Strict Confidentiality",
];

export default function ScientificAnalysisPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* ──────────────────────────────────────────────────────── */}
      {/* Hero Section                                             */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-primary pt-24 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Independent Forensic Examination & Court-Admissible Expert Opinions
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Scientific Forensic
            <br />
            Analysis & Expert Consultation
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Delivering scientifically validated, court-admissible forensic
            opinions to support legal proceedings, investigations, and dispute
            resolution across multiple forensic domains.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* Admissibility Banner                                     */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="bg-secondary/10 border-b border-secondary/20 py-5 px-6 text-center">
        <p className="text-xs md:text-sm font-bold uppercase text-typography/80 tracking-widest flex items-center justify-center gap-3">
          ADMISSIBLE UNDER SECTION 39(1) — BHARTIYA SAKSHYA ADHINIYAM
        </p>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* Section 1: Our Expertise + Legal Support Services        */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 py-24 flex flex-col gap-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side: Our Expertise */}
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
                We offer specialized forensic examination and expert opinion
                across the full spectrum of forensic science disciplines,
                delivering findings that withstand the highest judicial
                scrutiny.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {expertiseDomains.map((domain, idx) => {
                  const Icon = domain.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 group p-3 rounded-xl border border-secondary/10 bg-background dark:bg-[#0D1525] hover:border-accent/30 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                        <Icon size={16} />
                      </div>
                      <span className="text-primary dark:text-white font-bold text-xs uppercase tracking-wide leading-tight">
                        {domain.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Banner Image — reusing existing QDE face image */}
            <div className="relative w-full h-48 md:h-64 bg-primary rounded-xl overflow-hidden shadow-inner border border-secondary/20">
              <Image
                src="/images/qde-face.png"
                alt="Forensic Scientific Analysis"
                fill={true}
                className="object-cover object-center filter grayscale contrast-125 opacity-90 mix-blend-screen"
              />
            </div>
          </div>

          {/* Right Side: Legal Support Services Card */}
          <div className="bg-primary rounded-2xl p-10 lg:p-14 text-white shadow-xl flex flex-col justify-between h-full border border-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-accent/10" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-accent flex items-center justify-center mb-10">
                <Scale size={28} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
                Legal Support
                <br />
                Services
              </h3>
              <p className="text-white/70 leading-relaxed text-lg max-w-md mb-10">
                We actively support legal professionals and investigative
                agencies by translating complex scientific findings into
                authoritative, court-ready deliverables.
              </p>

              <ul className="space-y-6">
                {legalSupport.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-accent flex items-center justify-center shrink-0">
                        <Icon size={18} />
                      </div>
                      <span className="text-white/90 font-medium text-base">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative z-10 mt-16 pt-6 border-t border-white/10 flex justify-between items-center text-xs font-bold tracking-widest text-accent uppercase">
              <span>Expert Reports</span>
              <span>Court Ready</span>
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────── */}
        {/* Section 2: Why Choose Us + Laboratory Image             */}
        {/* ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side: Why Choose Us */}
          <div className="flex flex-col justify-center rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full order-2 lg:order-1 shadow-sm relative overflow-hidden">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white mb-8 relative z-10">
              Why Choose Us
            </h2>
            <p className="text-typography/80 text-lg leading-relaxed mb-12 max-w-lg relative z-10">
              Our opinions are independently formed, scientifically grounded,
              and structured to meet the evidentiary standards of the highest
              courts. We serve truth — not outcomes.
            </p>

            <div className="space-y-10 relative z-10">
              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Independent & Unbiased Opinions
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Our forensic conclusions are formed solely on scientific
                    evidence, free from external influence or partisan interest.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <Microscope size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Scientific & Methodical Approach
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Every examination follows internationally recognised
                    protocols ensuring reproducibility and defensibility under
                    cross-examination.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Experienced Forensic Experts
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Led by PhD-qualified scientists with decades of active
                    casework and courtroom testimony experience across
                    jurisdictions.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <Lock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Strict Confidentiality
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    All case materials, findings, and communications are
                    governed by rigorous non-disclosure protocols from inception
                    to closure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Laboratory Environment Image — reusing QDE lab */}
          <div className="relative w-full min-h-[400px] h-full bg-primary rounded-2xl overflow-hidden order-1 lg:order-2 shadow-xl border border-secondary/20 flex items-end">
            <Image
              src="/images/qde-lab.png"
              alt="Advanced Forensic Laboratory Instrumentation"
              fill
              className="object-cover opacity-80 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* Bottom Call To Action                                    */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-background dark:bg-[#0A101D] border-t border-secondary/20 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6">
            Request an Expert Opinion
          </h2>
          <p className="text-typography/80 text-lg leading-relaxed mb-12">
            Submit your evidence for a preliminary scientific assessment.
            Our board-certified forensic experts will provide an independent
            evaluation of evidentiary strength and admissibility.
          </p>

          <Button
            href="/contact?service=scientific"
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="px-10 py-4 shadow-xl text-sm tracking-wider uppercase font-bold"
          >
            Consult Our Experts
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
