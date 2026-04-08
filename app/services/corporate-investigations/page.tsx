import type { Metadata } from "next";
import Image from "next/image";
import { Search, Briefcase, Users, FileText, CheckCircle2, ShieldCheck, Activity, Target, Database } from "lucide-react";
import Button from "@/src/components/ui/Button";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "Corporate & Private Investigations | Prime Forensics",
  description: "Delivering confidential, accurate, and legally compliant investigative solutions for corporates, institutions, and individuals.",
};

export default function CorporateInvestigationsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary pt-24 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Professional Investigation Services You Can Trust
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Corporate & Private<br />Investigations
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Delivering confidential, accurate, and legally compliant investigative solutions for corporates, institutions, and individuals.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 py-24 flex flex-col gap-32">

        {/* Section 1: Extraction & Interpretation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left Side: Services */}
          <div className="flex flex-col justify-between rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white">
                  Investigative Services
                </h2>
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0 ml-4">
                  <Target size={24} />
                </div>
              </div>

              <p className="text-typography/80 text-lg leading-relaxed mb-10 max-w-lg">
                We provide a wide range of investigative services tailored to business and personal needs.
              </p>

              <ul className="grid grid-cols-1 gap-y-4 font-bold text-xs tracking-widest text-typography uppercase mb-12">
                <li className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-accent shrink-0" />
                  Background Verification
                </li>
                <li className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-accent shrink-0" />
                  Corporate Internal Investigations
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-accent shrink-0" />
                  Employee Misconduct Investigation
                </li>
                <li className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-accent shrink-0" />
                  Financial Fraud Investigation
                </li>
                <li className="flex items-center gap-3">
                  <Search className="w-4 h-4 text-accent shrink-0" />
                  Due Diligence & Risk Assessment
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  Document Verification
                </li>
              </ul>
            </div>

            {/* Banner Image */}
            <div className="relative w-full h-48 md:h-64 bg-primary rounded-xl overflow-hidden shadow-inner border border-secondary/20">
              <Image
                src="/images/corp_invest_banner_1775626451245.png"
                alt="Corporate Investigations"
                fill
                className="object-cover object-center opacity-90 mix-blend-screen"
              />
            </div>
          </div>

          {/* Right Side: Our Approach */}
          <div className="bg-primary rounded-2xl p-10 lg:p-14 text-white shadow-xl flex flex-col justify-between h-full border border-secondary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-accent/10" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-accent flex items-center justify-center mb-10">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
                Our<br />Approach
              </h3>
              <ul className="space-y-4 mb-8 text-white/80">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent w-5 h-5" /> Confidential & Discreet Handling</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent w-5 h-5" /> Legally Compliant Procedures</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent w-5 h-5" /> Evidence-Based Investigation</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent w-5 h-5" /> Timely & Accurate Reporting</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-accent w-5 h-5" /> Ethical & Professional Standards</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Section 2: Industries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Left Side: Info */}
          <div className="flex flex-col justify-center rounded-2xl border border-secondary/20 bg-background dark:bg-[#0A101D] p-8 lg:p-12 h-full order-2 lg:order-1 shadow-sm relative overflow-hidden">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-white mb-8 relative z-10">
              Industries We Serve
            </h2>
            
            <div className="space-y-6 relative z-10 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <Briefcase className="text-accent w-6 h-6" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm">Corporate & Businesses</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <Activity className="text-accent w-6 h-6" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm">Insurance Companies</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <FileText className="text-accent w-6 h-6" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm">Legal Professionals & Law Firms</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <Database className="text-accent w-6 h-6" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm">Financial Institutions</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <Users className="text-accent w-6 h-6" />
                <span className="font-bold text-primary dark:text-white uppercase tracking-wide text-sm">Individuals & Private Clients</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative w-full min-h-[400px] h-full bg-primary rounded-2xl overflow-hidden order-1 lg:order-2 shadow-xl border border-secondary/20 flex items-end">
            <Image
              src="/images/corp_invest_main_1775626431002.png"
              alt="Corporate and Private Investigations Workspace"
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
            Need a Confidential Investigation?
          </h2>
          <Button
            href="/contact"
            bgColor="bg-accent"
            textColor="text-primary"
            hoverBg="hover:brightness-110"
            className="px-10 py-4 shadow-xl text-sm tracking-wider uppercase font-bold mt-6"
          >
            Request Investigation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
