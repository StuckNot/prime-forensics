import type { Metadata } from "next";
import Image from "next/image";
import {
  Smartphone,
  FileSignature,
  Map,
  ShieldCheck,
  Users,
  Building2,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Award,
  Puzzle,
} from "lucide-react";
import Button from "@/src/components/ui/Button";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title:
    "Professional Training & Development | Integrity Forensic Science Institute | Prime Forensics",
  description:
    "Advanced forensic training programs for law enforcement officers, legal professionals, and corporate security heads. Bridging the gap between laboratory science and investigative field-work.",
};

const programs = [
  {
    title: "Cyber Forensics Workshops",
    description:
      "Hands-on training in digital data recovery, mobile device analysis, and network intrusion investigations using industry-standard tools.",
    icon: Smartphone,
  },
  {
    title: "QDE Training",
    description:
      "Scientific examination of questioned documents — handwriting verification, signature analysis, and ink age determination.",
    icon: FileSignature,
  },
  {
    title: "Crime Scene Investigation",
    description:
      "Advanced protocols for evidence collection, scene reconstruction, and chain-of-custody management at physical crime scenes.",
    icon: Map,
  },
  {
    title: "Digital Evidence Handling",
    description:
      "Best practices for seizing, imaging, and presenting digital evidence to meet strict court admissibility standards under Section 65B.",
    icon: ShieldCheck,
  },
  {
    title: "Law Enforcement Programs",
    description:
      "Tailored curricula for police, CBI, and government agencies focusing on modern scientific investigative methodologies.",
    icon: Users,
  },
  {
    title: "Corporate Cybersecurity",
    description:
      "Awareness and technical training for corporate security teams to detect, mitigate, and investigate internal and external digital threats.",
    icon: Building2,
  },
];

const keyFeatures = [
  "Practical & Hands-On",
  "Industry-Relevant Curriculum",
  "Expert-Led Instruction",
  "Professional Certification",
  "Customized Modules",
];

const beneficiaries = [
  "Students & Researchers",
  "Law Enforcement Officers",
  "Legal Professionals",
  "Corporate Security Entities",
];

export default function TrainingPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* ──────────────────────────────────────────────────────── */}
      {/* Hero Section                                             */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-primary pt-24 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Integrity Forensic Science Institute
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Forensic Excellence Through
            <br />
            Professional Development
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between laboratory science and investigative
            field-work. Industry-oriented training programs designed to build
            practical skills in forensic science, cyber investigation, and
            evidence handling.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* Accreditation Banner                                     */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="bg-secondary/10 border-b border-secondary/20 py-5 px-6 text-center">
        <p className="text-xs md:text-sm font-bold uppercase text-typography/80 tracking-widest flex items-center justify-center gap-3">
           LABORATORY STANDARD COMPLIANT TRAINING FACILITY
        </p>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* Section 1: Program Grid + Key Features Side Panel        */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 py-24 flex flex-col gap-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
          {/* Left: Bento Program Grid */}
          <div>
            <div className="flex justify-between items-start mb-10">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white">
                Our Programs
              </h2>
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 ml-4">
                <BookOpen size={24} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, idx) => {
                const Icon = program.icon;
                return (
                  <a
                    key={idx}
                    href="#enrollment"
                    className="group rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300 flex flex-col justify-between h-[300px] relative overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-accent/0 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-accent/5" />

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-primary dark:text-white mb-3 group-hover:text-accent transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-typography/70 text-sm leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-2 text-accent text-[10px] font-bold tracking-widest uppercase mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Enroll Now</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Key Features Side Panel */}
          <aside className="lg:sticky lg:top-32">
            <div className="rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-10 shadow-sm">
              <h3 className="text-xl font-serif font-bold text-primary dark:text-white mb-8 uppercase tracking-wide">
                Key Features
              </h3>

              <ul className="space-y-6">
                {keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2
                      className="text-accent shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="text-typography font-medium text-sm leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-secondary/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-typography/50 uppercase">
                    Recognised By
                  </div>
                  <div className="font-serif font-bold text-primary dark:text-white text-sm">
                    Accredited Training Facility
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ──────────────────────────────────────────────────────── */}
        {/* Section 2: Who Can Benefit + Training Image             */}
        {/* ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left: Who Can Benefit Panel */}
          <div className="bg-primary rounded-2xl p-10 lg:p-14 text-white shadow-xl flex flex-col justify-between h-full border border-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-accent/10" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-accent flex items-center justify-center mb-10">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
                Who Can
                <br />
                Benefit
              </h3>
              <p className="text-white/70 leading-relaxed text-lg max-w-md mb-10">
                Our programs are designed for professionals at every level of
                the forensic and investigative ecosystem — from entry-level
                researchers to senior governmental decision-makers.
              </p>

              <ul className="space-y-5">
                {beneficiaries.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-white/90"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-20 pt-6 border-t border-white/10 flex justify-between items-center text-xs font-bold tracking-widest text-accent uppercase">
              <span>Program Access</span>
              <span>Open Enrollment</span>
            </div>
          </div>

          {/* Right: Training Environment Image */}
          <div className="relative w-full min-h-[400px] h-full bg-primary rounded-2xl overflow-hidden shadow-xl border border-secondary/20 flex items-end">
            <Image
              src="/images/training_main_1775626517396.png"
              alt="Professional Forensic Training Workshop in Progress"
              fill
              className="object-cover opacity-80 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

            {/* Floating stat chips over the image */}
            <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white text-xs font-bold tracking-wider uppercase">
                500+ Officers Trained
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white text-xs font-bold tracking-wider uppercase">
                Pan-India Coverage
              </div>
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────── */}
        {/* Section 3: Methodology & Faculty + Training Banner      */}
        {/* ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side: Training Methodology */}
          <div className="flex flex-col justify-center rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full order-2 lg:order-1 shadow-sm relative overflow-hidden">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white mb-8 relative z-10">
              Training Methodology
            </h2>
            <p className="text-typography/80 text-lg leading-relaxed mb-12 max-w-lg relative z-10">
              Every program combines rigorous theoretical foundations with
              intensive practical workshops. Participants work with the same
              equipment used in active forensic investigations.
            </p>

            <div className="space-y-10 relative z-10">
              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Lecture-Lab Hybrid Model
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Structured classroom sessions followed by supervised
                    laboratory exercises with real forensic equipment and sample
                    evidence.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <Puzzle size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Case-Study Simulations
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Participants solve realistic forensic scenarios drawn from
                    actual case precedents, building critical analytical thinking
                    and courtroom readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Training Banner Image */}
          <div className="relative w-full min-h-[400px] h-full bg-primary rounded-2xl overflow-hidden order-1 lg:order-2 shadow-xl border border-secondary/20 flex items-end">
            <Image
              src="/images/training_banner_1775626534264.png"
              alt="Forensic Training Lecture Hall"
              fill
              className="object-cover opacity-80 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* Enrollment CTA with Geometric DNA Pattern                */}
      {/* ──────────────────────────────────────────────────────── */}
      <section
        id="enrollment"
        className="bg-background dark:bg-[#0A101D] border-t border-secondary/20 py-24 px-6 relative overflow-hidden"
      >
        {/* Sharp geometric SVG DNA double-helix pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dna-helix"
                x="0"
                y="0"
                width="60"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                {/* Left helix strand */}
                <path
                  d="M10 0 Q30 15, 50 30 Q30 45, 10 60 Q30 75, 50 90 Q30 105, 10 120"
                  fill="none"
                  stroke="#C5A059"
                  strokeWidth="2"
                />
                {/* Right helix strand */}
                <path
                  d="M50 0 Q30 15, 10 30 Q30 45, 50 60 Q30 75, 10 90 Q30 105, 50 120"
                  fill="none"
                  stroke="#C5A059"
                  strokeWidth="2"
                />
                {/* Connecting rungs */}
                <line
                  x1="18"
                  y1="15"
                  x2="42"
                  y2="15"
                  stroke="#C5A059"
                  strokeWidth="1"
                />
                <line
                  x1="10"
                  y1="30"
                  x2="50"
                  y2="30"
                  stroke="#C5A059"
                  strokeWidth="1"
                />
                <line
                  x1="18"
                  y1="45"
                  x2="42"
                  y2="45"
                  stroke="#C5A059"
                  strokeWidth="1"
                />
                <line
                  x1="10"
                  y1="60"
                  x2="50"
                  y2="60"
                  stroke="#C5A059"
                  strokeWidth="1"
                />
                <line
                  x1="18"
                  y1="75"
                  x2="42"
                  y2="75"
                  stroke="#C5A059"
                  strokeWidth="1"
                />
                <line
                  x1="10"
                  y1="90"
                  x2="50"
                  y2="90"
                  stroke="#C5A059"
                  strokeWidth="1"
                />
                <line
                  x1="18"
                  y1="105"
                  x2="42"
                  y2="105"
                  stroke="#C5A059"
                  strokeWidth="1"
                />
                {/* Node dots at intersections */}
                <circle cx="10" cy="0" r="2.5" fill="#C5A059" />
                <circle cx="50" cy="0" r="2.5" fill="#C5A059" />
                <circle cx="50" cy="30" r="2.5" fill="#C5A059" />
                <circle cx="10" cy="30" r="2.5" fill="#C5A059" />
                <circle cx="10" cy="60" r="2.5" fill="#C5A059" />
                <circle cx="50" cy="60" r="2.5" fill="#C5A059" />
                <circle cx="50" cy="90" r="2.5" fill="#C5A059" />
                <circle cx="10" cy="90" r="2.5" fill="#C5A059" />
                <circle cx="10" cy="120" r="2.5" fill="#C5A059" />
                <circle cx="50" cy="120" r="2.5" fill="#C5A059" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dna-helix)" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl z-0 pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6">
            Looking to enhance your forensic skills?
          </h2>
          <p className="text-typography/80 text-lg leading-relaxed mb-12">
            Join the next cohort of investigative experts. Our professional
            development tracks are designed by practicing forensic scientists for
            immediate field application.
          </p>

          <Button
            href="/contact?service=training"
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="px-10 py-4 shadow-xl text-sm tracking-wider uppercase font-bold"
          >
            Enroll in Our Training Programs
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
