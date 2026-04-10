import type { Metadata } from "next";
import { Camera, Globe, Users, Award, ShieldCheck, PlayCircle } from "lucide-react";
import Footer from "@/src/components/footer/footer";

export const metadata: Metadata = {
  title: "Gallery | Prime Forensics",
  description: "Global operations, institutional training, and law enforcement partnerships.",
};

const stats = [
  { icon: <ShieldCheck size={28} />, value: "50+", label: "Law Enforcement Agencies Trained" },
  { icon: <Globe size={28} />, value: "12+", label: "International Jurisdictions" },
  { icon: <Users size={28} />, value: "10,000+", label: "Officers Certified" },
];

const galleryImages = [
  { id: 1, title: "International Police Seminar", subtitle: "Dubai Police Force", aspect: "col-span-2 row-span-2 h-[450px]" },
  { id: 2, title: "Digital Extraction Masterclass", subtitle: "CBI Headquarters", aspect: "col-span-1 row-span-1 h-[215px]" },
  { id: 3, title: "Forensic Keynote Address", subtitle: "Global Cyber Summit", aspect: "col-span-1 row-span-1 h-[215px]" },
  { id: 4, title: "Laboratory Practicum", subtitle: "State Crime Branch", aspect: "col-span-1 row-span-2 h-[450px]" },
  { id: 5, title: "Document Analysis Training", subtitle: "Federal Investigators", aspect: "col-span-2 row-span-1 h-[215px]" },
  { id: 6, title: "Vault Architecture Review", subtitle: "National Security Agency", aspect: "col-span-1 row-span-1 h-[215px]" },
];

export default function GalleryPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-16 px-6 relative border-t border-secondary/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent z-0 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-accent uppercase font-bold tracking-widest text-sm mb-4">
            Institutional Impact
          </p>
          <h1 className="text-accent font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Global Operations<br />Gallery
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Certifying the world's leading law enforcement agencies and international intelligence bureaus in advanced forensic methodologies.
          </p>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-secondary/10 border-y border-secondary/20 py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-secondary/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4 py-4 md:py-0">
                <div className="text-accent mb-4 bg-primary/10 p-4 rounded-full border border-secondary/10">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-serif font-bold text-primary dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-xs uppercase tracking-widest text-typography/60 font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry-Style Gallery (Placeholder Frames) */}
      <section className="container mx-auto max-w-7xl px-6 py-24">
        
        <div className="mb-12 flex items-center justify-between border-b border-secondary/20 pb-6">
          <h2 className="text-3xl font-serif text-primary dark:text-white flex items-center gap-3">
             Professional Highlights <Camera className="text-accent w-6 h-6" />
          </h2>
          <div className="hidden md:flex gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent border border-accent/30 px-3 py-1 bg-accent/5 rounded-full">All Photos</span>
            <span className="text-xs font-bold uppercase tracking-wider text-typography/40 hover:text-typography transition-colors px-3 py-1 cursor-pointer">Seminars</span>
            <span className="text-xs font-bold uppercase tracking-wider text-typography/40 hover:text-typography transition-colors px-3 py-1 cursor-pointer">Laboratory</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-rows-[auto]">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className={`relative bg-background dark:bg-primary border border-secondary/20 rounded-xl overflow-hidden group hover:border-accent/50 transition-colors shadow-sm cursor-pointer ${img.aspect} flex flex-col items-center justify-center`}
            >
              <div className="absolute inset-0 bg-secondary/5 pattern-boxes pattern-secondary/10 pattern-bg-transparent pattern-size-6 pointer-events-none" />
              
              {/* Media Icon Placeholder */}
              <div className="w-16 h-16 bg-background dark:bg-[#0A101D] border border-secondary/20 rounded-full flex items-center justify-center text-secondary/30 group-hover:text-accent group-hover:scale-110 transition-all z-10 shadow-sm mb-4">
                <PlayCircle size={32} strokeWidth={1.5} />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/90 dark:bg-primary/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center p-6 text-center">
                <Award className="text-accent mb-4 w-10 h-10" />
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{img.title}</h3>
                <p className="text-accent text-xs uppercase tracking-widest font-bold">{img.subtitle}</p>
              </div>

              {/* Static Label for the placeholder view */}
              <div className="relative z-10 text-center px-6">
                <p className="text-typography/40 text-sm font-medium">{img.title}</p>
                <p className="text-typography/30 text-[10px] uppercase tracking-widest mt-1">{img.subtitle}</p>
              </div>

            </div>
          ))}
        </div>

        <p className="text-center text-xs tracking-widest text-typography/40 uppercase mt-16 font-bold">
          Actual operational photos are pending client authorization and PII redaction.
        </p>

      </section>

      <Footer />
    </div>
  );
}
