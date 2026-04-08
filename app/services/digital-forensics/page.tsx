import type { Metadata } from "next";
import Image from "next/image";
import { Smartphone, MonitorDot, Mail, Globe, Database, FileText, BadgeDollarSign, Building2, CheckCircle2 } from "lucide-react";
import Button from "@/src/components/ui/Button";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "Digital & Cyber Forensics | Prime Forensics",
  description: "Advanced cyber forensic solutions for investigation, evidence recovery, and legal proceedings.",
};

export default function DigitalForensicsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary pt-24 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Uncovering Digital Evidence with Precision
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Digital & Cyber<br />Forensics
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Advanced cyber forensic solutions for investigation, evidence recovery, and legal proceedings.
          </p>
        </div>
      </section>

      {/* Admissibility Banner */}
      <div className="bg-secondary/10 border-b border-secondary/20 py-5 px-6 text-center">
        <p className="text-xs md:text-sm font-bold uppercase text-typography/80 tracking-widest flex items-center justify-center gap-3">
          <span className="text-lg">⚖</span> ADMISSIBLE UNDER SECTION 63 OF THE BHARATIYA SAKSHYA ADHINIYAM, 2023
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
                  Our Digital Forensic Services
                </h2>
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 ml-4">
                  <MonitorDot size={24} />
                </div>
              </div>

              <p className="text-typography/80 text-lg leading-relaxed mb-10 max-w-lg">
                We provide comprehensive cyber forensic solutions across multiple digital platforms:
              </p>

              <div className="space-y-6 relative z-10">
                <div className="flex gap-4 items-start">
                  <Smartphone className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Mobile Phone Forensics</h4>
                    <p className="text-typography/70 text-sm">Extraction and analysis of data from smartphones including deleted data, chats, call logs, media files, and app activity.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <MonitorDot className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Computer & Laptop Forensics</h4>
                    <p className="text-typography/70 text-sm">In-depth examination of desktops and laptops to recover, analyze, and preserve digital evidence.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Email Investigation</h4>
                    <p className="text-typography/70 text-sm">Tracing email origins, header analysis, phishing detection, and recovery of deleted communications.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Globe className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Social Media Investigation</h4>
                    <p className="text-typography/70 text-sm">Analysis of social media activities for cybercrime, impersonation, harassment, and digital fraud cases.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Database className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Data Recovery & Analysis</h4>
                    <p className="text-typography/70 text-sm">Recovery of deleted, hidden, or corrupted data from digital storage devices.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <FileText className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Metadata Examination</h4>
                    <p className="text-typography/70 text-sm">Detailed analysis of file metadata to establish timelines, authorship, and authenticity.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <BadgeDollarSign className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Cyber Fraud Investigation</h4>
                    <p className="text-typography/70 text-sm">Investigation of online frauds, financial scams, identity theft, and digital payment crimes.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Building2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm mb-1">Corporate Data Breach Investigation</h4>
                    <p className="text-typography/70 text-sm">Detection and analysis of data breaches, insider threats, and unauthorized access incidents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Our Approach */}
          <div className="bg-primary rounded-2xl p-10 lg:p-14 text-white shadow-xl flex flex-col justify-between h-full border border-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-accent/10" />
            <div className="relative z-10 mb-10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-accent flex items-center justify-center mb-10">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                Our<br />Approach
              </h3>
              <p className="text-white/80 mb-8">We follow a structured and legally compliant forensic process:</p>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent w-5 h-5 shrink-0" /> Identification of Digital Evidence</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent w-5 h-5 shrink-0" /> Secure Preservation & Imaging</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent w-5 h-5 shrink-0" /> Forensic Analysis using Certified Tools</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent w-5 h-5 shrink-0" /> Documentation & Reporting</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent w-5 h-5 shrink-0" /> Court-Admissible Evidence Presentation</li>
              </ul>
            </div>
            
            {/* Banner Image */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-inner border border-secondary/20 mt-8">
              <Image
                src="/images/digital_cyber_banner_1775626567759.png"
                alt="Digital Forensics Analysis"
                fill
                className="object-cover object-center opacity-80"
              />
            </div>
          </div>

        </div>

        {/* Section 2: Laboratory Image */}
        <div className="relative w-full min-h-[500px] bg-primary rounded-2xl overflow-hidden shadow-xl border border-secondary/20 flex items-end">
          <Image
            src="/images/digital_cyber_main_1775626551762.png"
            alt="Cyber Forensics Data Lab"
            fill
            className="object-cover opacity-80 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>

      </div>

      {/* Bottom Call To Action */}
      <section className="bg-background dark:bg-[#0A101D] border-t border-secondary/20 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl z-0 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6">
            Cyber Threat or Data Loss?
          </h2>
          <Button
            href="/contact"
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="px-10 py-4 shadow-xl text-sm tracking-wider uppercase font-bold mt-6"
          >
            Start Investigation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
