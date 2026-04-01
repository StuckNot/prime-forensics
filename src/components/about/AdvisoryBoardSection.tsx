import { User } from "lucide-react";

const members = [
  { name: "Dr. Elena Volkov", role: "MOLECULAR BIOLOGY (EU)" },
  { name: "Prof. Marcus Thorne", role: "DIGITAL JURISPRUDENCE (UK)" },
  { name: "Dr. Chen Wei", role: "TOXICOLOGY LEAD (ASIA)" },
  { name: "Hon. Sarah Jenkins", role: "LEGAL COMPLIANCE (US)" },
  { name: "Dr. Rajiv Menon", role: "BALLISTICS EXPERT" },
  { name: "Dr. Isabella Rossi", role: "ETHICS & GOVERNANCE" },
];

export default function AdvisoryBoardSection() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <p className="tracking-[0.3em] text-xs text-secondary font-medium mb-4 uppercase">
          GLOBAL GOVERNANCE
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-typography mb-4">
          International Advisory Board
        </h2>
        <p className="text-typography/70 max-w-2xl mx-auto text-sm mb-16 leading-relaxed">
          Ensuring our methodologies align with global scientific standards
          and legal frameworks.
        </p>

        {/* Members */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          
          {members.map((m, i) => (
            <div key={i} className="text-center group flex flex-col items-center">
              {/* Image Placeholder */}
              <div className="w-24 h-24 mb-5 rounded-sm border border-secondary/20 bg-white flex items-center justify-center shadow-sm transition-transform group-hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center bg-background/50 text-secondary">
                  <User strokeWidth={1.5} className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-sm font-semibold text-typography mb-1.5">{m.name}</h3>
              <p className="text-[10px] sm:text-[11px] text-secondary font-medium tracking-wide uppercase">{m.role}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}