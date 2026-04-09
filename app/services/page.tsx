import type { Metadata } from "next";
import ServicesGrid from "@/src/components/home/ServicesGrid";
import Footer from "@/src/components/footer/footer";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Services Hub | Prime Forensics",
  description: "Comprehensive forensic analysis, digital tracking, and evidence authentication.",
};

export default function ServicesIndexPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Certified Scientific Capabilities
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Forensic Services
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Delivering court-admissible forensic insights to law firms, corporate boards, and government tribunals globally.
          </p>
        </div>
      </section>

      {/* Embedded Services Grid (Without its internal header) */}
      <div className="-mt-12 bg-transparent relative z-20">
        <ServicesGrid hideHeader={true} />
      </div>

      {/* Testimonials Section */}
      <section className="bg-secondary/5 py-24 px-6 border-t border-secondary/20 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-4">
              Trusted by Legal Authorities
            </h2>
            <p className="text-typography/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Our experts act as certified witnesses. Discover what lead advocates and directors have to say about our methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-background dark:bg-[#0A101D] p-8 rounded-2xl border border-secondary/20 shadow-sm relative group hover:shadow-md transition-shadow">
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              <div className="flex items-center gap-1 text-accent mb-6 text-xl">
                ★★★★★
              </div>
              <p className="text-primary dark:text-white/90 italic leading-relaxed mb-8">
                "Prime Forensics delivered unarguable truth when our documents were heavily contested. Their 12-point handwriting analysis was decisive in the high court."
              </p>
              <div>
                <p className="font-bold text-primary dark:text-white text-sm uppercase tracking-wide">Sameer Khanna</p>
                <p className="text-typography/50 text-[10px] md:text-xs tracking-widest uppercase">Advocate, Supreme Court</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-background dark:bg-[#0A101D] p-8 rounded-2xl border border-secondary/20 shadow-sm relative group hover:shadow-md transition-shadow">
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              <div className="flex items-center gap-1 text-accent mb-6 text-xl">
                ★★★★★
              </div>
              <p className="text-primary dark:text-white/90 italic leading-relaxed mb-8">
                "Their digital tracking team operates at military grade. We recovered three years of encrypted user logs from a seemingly destroyed mobile device."
              </p>
              <div>
                <p className="font-bold text-primary dark:text-white text-sm uppercase tracking-wide">Dr. Arvind Mehta</p>
                <p className="text-typography/50 text-[10px] md:text-xs tracking-widest uppercase">Director of Compliance, Fintech</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-background dark:bg-[#0A101D] p-8 rounded-2xl border border-secondary/20 shadow-sm relative group hover:shadow-md transition-shadow">
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              <div className="flex items-center gap-1 text-accent mb-6 text-xl">
                ★★★★★
              </div>
              <p className="text-primary dark:text-white/90 italic leading-relaxed mb-8">
                "We were facing a sophisticated corporate embezzlement schema. Prime's financial recreation was the sole reason the fraud was successfully isolated."
              </p>
              <div>
                <p className="font-bold text-primary dark:text-white text-sm uppercase tracking-wide">Priya Nambiar</p>
                <p className="text-typography/50 text-[10px] md:text-xs tracking-widest uppercase">Chief Auditor, National Bank</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
