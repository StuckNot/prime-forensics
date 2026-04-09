import { Award, ShieldCheck, BadgeCheck, Scale } from "lucide-react";

export default function OverviewSection() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div className="text-base md:text-lg leading-relaxed text-typography/80 max-w-xl">
            <h3 className="text-3xl font-serif font-bold text-typography mb-8">The Prime Forensics Ethos</h3>
            <p className="mb-6 ">
              Prime Forensic and Investigative Services (PFIS) is a multidisciplinary
              forensic consultancy and investigative organization committed to delivering 
              scientifically sound, legally admissible, and ethically driven solutions.
            </p>

            <p className="text-typography font-medium">
              We specialize in providing expert forensic opinions, digital forensic solutions, 
              investigative support, insurance fraud investigations, legal assistance, and 
              professional training services. Our team comprises highly qualified forensic experts, 
              legal consultants, and cyber specialists dedicated to assisting courts, law 
              enforcement agencies, corporate entities, financial institutions, and private clients.

            </p>
          </div>

          {/* Right Grid (The ISO/MSME cards) */}
          <div className="grid grid-cols-2 gap-6">
            {/* <div className="bg-secondary/5 relative overflow-hidden group p-8 rounded-xl shadow-sm border border-secondary/20 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300">
              <Award className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
              <p className="text-[11px] font-bold tracking-widest text-typography uppercase">ISO 9001:2015</p>
            </div> */}

            <div className="bg-secondary/5 relative overflow-hidden group p-8 rounded-xl shadow-sm border border-secondary/20 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300">
              <BadgeCheck className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
              <p className="text-[11px] font-bold tracking-widest text-typography uppercase">MSME Certified</p>
            </div>

            <div className="bg-secondary/5 relative overflow-hidden group p-8 rounded-xl shadow-sm border border-secondary/20 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300">
              <ShieldCheck className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
              <p className="text-[11px] font-bold tracking-widest text-typography uppercase">Verified Lab</p>
            </div>

            <div className="bg-secondary/5 relative overflow-hidden group p-8 rounded-xl shadow-sm border border-secondary/20 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform duration-300">
              <Scale className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
              <p className="text-[11px] font-bold tracking-widest text-typography uppercase">Legal Adherent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}