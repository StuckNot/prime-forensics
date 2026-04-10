import Image from "next/image";
import { FileText, Shield, Award } from "lucide-react";

export default function InvestigatorsSection() {
  return (
    <section className="bg-background py-24 px-6 border-b border-secondary/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.2em] text-secondary font-bold mb-4 uppercase">
            The Scientific Core
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-typography font-bold mb-6">
            Founding Members
          </h2>
          <p className="text-typography/70 max-w-xl text-lg leading-relaxed font-light">
            Leading our technical divisions with combined decades of field experience
            and unmatched academic distinction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Card 1 */}
          <div className="bg-secondary/5 rounded-2xl overflow-hidden shadow-sm border border-secondary/20 flex flex-col sm:flex-row hover:shadow-md transition-all duration-300">
            <div className="sm:w-2/5 shrink-0 relative min-h-[350px] sm:min-h-full">
              <Image
                src="/images/jaskaran.jpeg"
                fill
                alt="Dr. Jaskaran Singh"
                className="object-cover"
              />
            </div>
            <div className="sm:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-serif font-bold text-typography mb-2">
                Dr. Jaskaran Singh
              </h3>
              <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-4 font-bold border-b border-secondary/20 pb-4 inline-block">
                PHD | Founder
              </p>
              <p className="text-sm text-typography/70 leading-relaxed mb-8 font-medium">
              A highly accomplished forensic expert with over 13 years of experience in forensic analysis, casework, and professional training. Dr. Singh has contributed extensively to law enforcement capacity building at national and international levels, combining academic excellence with practical investigative expertise.
              </p>
              <div className="flex gap-4 items-center mt-auto">
                <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1.5 rounded-full"><Award className="w-3 h-3"/> Gold Medalist</span>
                <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-500 dark:text-slate-300 bg-slate-500/10 border border-slate-500/20 px-3 py-1.5 rounded-full"><Award className="w-3 h-3"/> Inspire Fellow -DST</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-secondary/5 rounded-2xl overflow-hidden shadow-sm border border-secondary/20 flex flex-col sm:flex-row hover:shadow-md transition-all duration-300">
            <div className="sm:w-2/5 shrink-0 relative min-h-[350px] sm:min-h-full">
              <Image
                src="/images/sahil.jpeg"
                fill
                alt="Mr. Sahil Sharma"
                className="object-cover"
                style={{ objectPosition: 'top' }}
              />
            </div>
            <div className="sm:w-3/5 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-serif font-bold text-typography mb-2">
                Mr. Sahil Sharma
              </h3>
              <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-4 font-bold border-b border-secondary/20 pb-4 inline-block">
                M.Sc. | Co-Founder
              </p>
              <p className="text-sm text-typography/70 leading-relaxed mb-8 font-medium">
                Bringing analytical precision and innovation to forensic practice, Mr. Sharma specializes in integrating scientific methodologies with modern investigative technologies. With 3+ years of experience, he has contributed to multiple authored books, research publications, and published patents, reinforcing the firm’s commitment to scientific excellence and forensic innovation.              </p>
              <div className="flex flex-wrap gap-3 items-center mt-auto">
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-typography/80 border border-secondary/20 px-3 py-1.5 rounded"><FileText className="w-3 h-3 text-accent"/> UGC-NET</span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-typography/80 border border-secondary/20 px-3 py-1.5 rounded"><Shield className="w-3 h-3 text-accent"/> FACT Qualified</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}