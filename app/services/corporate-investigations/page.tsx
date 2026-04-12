import type { Metadata } from "next";
import Image from "next/image";
import {
  UserSearch,
  Building,
  UserX,
  BadgeDollarSign,
  SearchCheck,
  FileCheck,
  ShieldCheck,
  Lock,
  Layers,
  Clock,
  Scale,
  Briefcase,
  Users,
  Gavel,
  Landmark,
  User,
} from "lucide-react";
import Button from "@/src/components/ui/Button";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "Corporate & Private Investigations | Prime Forensics",
  description:
    "Confidential, professional, and result-driven investigative solutions for corporates, institutions, and individuals. Background verification, internal investigations, and due diligence.",
};

const services = [
  {
    title: "Background Verification",
    description:
      "Comprehensive verification of personal, professional, and financial backgrounds for employment, tenancy, or partnership decisions.",
    icon: UserSearch,
  },
  {
    title: "Corporate Internal Investigations",
    description:
      "In-depth investigation of internal issues such as policy violations, fraud, data leaks, and unethical practices within organizations.",
    icon: Building,
  },
  {
    title: "Employee Misconduct Investigation",
    description:
      "Handling sensitive workplace matters including harassment, conflict of interest, and code-of-conduct violations.",
    icon: UserX,
  },
  {
    title: "Financial Fraud Investigation",
    description:
      "Detection and analysis of financial irregularities, fraudulent transactions, and document manipulation.",
    icon: BadgeDollarSign,
  },
  {
    title: "Due Diligence & Risk Assessment",
    description:
      "Pre-investment and partnership investigations to identify risks, credibility, and compliance issues.",
    icon: SearchCheck,
  },
  {
    title: "Document Verification",
    description:
      "Authentication and verification of documents to detect forgery, falsification, or misrepresentation.",
    icon: FileCheck,
  },
];

const approach = [
  { label: "Confidential & Discreet Handling", icon: Lock },
  { label: "Legally Compliant Procedures", icon: Scale },
  { label: "Evidence-Based Investigation", icon: Layers },
  { label: "Timely & Accurate Reporting", icon: Clock },
  { label: "Ethical & Professional Standards", icon: ShieldCheck },
];

export default function CorporateInvestigationsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* ──────────────────────────────────────────────────────── */}
      {/* Hero Section                                             */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="bg-primary pt-24 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Professional Investigation Services You Can Trust
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Corporate & Private
            <br />
            Investigative Solutions
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Delivering confidential, accurate, and legally compliant
            investigative solutions for corporates, institutions, and
            individuals.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* Compliance Banner                                        */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="bg-secondary/10 border-b border-secondary/20 py-5 px-6 text-center">
        <p className="text-xs md:text-sm font-bold uppercase text-typography/80 tracking-widest flex items-center justify-center gap-3">
          CONFIDENTIAL • LEGALLY COMPLIANT • EVIDENCE-BASED METHODOLOGY
        </p>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* Section 1: Investigative Services + Our Approach         */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 py-24 flex flex-col gap-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side: Investigative Services */}
          <div className="flex flex-col justify-between rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white">
                  Investigative Services
                </h2>
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 ml-4">
                  <SearchCheck size={24} />
                </div>
              </div>

              <p className="text-typography/80 text-lg leading-relaxed mb-10 max-w-lg">
                We provide a wide range of investigative services, combining
                field intelligence with forensic expertise to deliver
                actionable, court-ready findings.
              </p>

              <div className="space-y-6 mb-12">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary dark:text-white text-sm uppercase tracking-wide mb-1.5">
                          {service.title}
                        </h4>
                        <p className="text-typography/70 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Banner Image */}
            <div className="relative w-full h-48 md:h-64 bg-primary rounded-xl overflow-hidden shadow-inner border border-secondary/20">
              <Image
                src="/images/corp_invest_banner_1775626451245.png"
                alt="Corporate Investigation Field Operations"
                fill
                className="object-cover object-center opacity-90 mix-blend-screen"
              />
            </div>
          </div>

          {/* Right Side: Our Approach Card */}
          <div className="bg-primary rounded-2xl p-10 lg:p-14 text-white shadow-xl flex flex-col justify-between h-full border border-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-accent/10" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-accent flex items-center justify-center mb-10">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
                Our
                <br />
                Approach
              </h3>
              <p className="text-white/70 leading-relaxed text-lg max-w-md mb-10">
                Every engagement is governed by strict confidentiality
                protocols. Our investigators operate with discretion, ensuring
                that subjects and stakeholders are unaware of ongoing enquiries
                until findings are formally presented.
              </p>

              <ul className="space-y-6">
                {approach.map((item, i) => {
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
              <span>Confidentiality</span>
              <span>Guaranteed</span>
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────── */}
        {/* Section 2: Industries We Serve + Image                  */}
        {/* ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side: Industries We Serve */}
          <div className="flex flex-col justify-center rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full order-2 lg:order-1 shadow-sm relative overflow-hidden">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white mb-8 relative z-10">
              Industries We Serve
            </h2>
            <p className="text-typography/80 text-lg leading-relaxed mb-12 max-w-lg relative z-10">
              Our corporate and private investigation services are trusted
              across sectors that demand absolute discretion and evidentiary
              rigour.
            </p>

            <div className="space-y-10 relative z-10">
              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Corporate & Businesses
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Internal fraud detection, employee vetting, and compliance
                    investigations for enterprises of all scales.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <Users size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Insurance Companies
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Pre-settlement claim verification and field investigation
                    support for motor, health, and property insurers.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <Gavel size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Legal Professionals & Law Firms
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Evidence gathering and witness intelligence for civil and
                    criminal litigation requiring discreet field operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <Landmark size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Financial Institutions
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    KYC enhancement, due diligence investigations, and fraud
                    risk assessments for banks and NBFCs.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="p-3 w-12 h-12 flex justify-center items-center rounded-lg bg-accent/10 shrink-0 border border-accent/20 text-accent">
                  <User size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary dark:text-white mb-2 uppercase tracking-wide text-sm">
                    Individuals & Private Clients
                  </h4>
                  <p className="text-typography/70 leading-relaxed text-sm">
                    Confidential personal investigations including matrimonial
                    verification, background checks, and asset tracing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Investigation Environment Image */}
          <div className="relative w-full min-h-[400px] h-full bg-primary rounded-2xl overflow-hidden order-1 lg:order-2 shadow-xl border border-secondary/20 flex items-end">
            <Image
              src="/images/corp_invest_main_1775626431002.png"
              alt="Corporate Investigation Briefing Room"
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
            Need a Confidential Investigation?
          </h2>
          <p className="text-typography/80 text-lg leading-relaxed mb-12">
            Engage our investigators for discreet, evidence-based enquiries.
            Every case is handled with the highest standards of confidentiality
            and professional integrity.
          </p>

          <Button
            href="/contact?service=corporate#contact"
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="px-10 py-4 shadow-xl text-sm tracking-wider uppercase font-bold"
          >
            Request a Consultation
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
