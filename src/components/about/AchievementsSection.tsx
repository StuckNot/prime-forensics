import { FileBadge, Shield, ArrowUpRight, GraduationCap } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section className="bg-primary dark:bg-[#0A101D] text-white py-24 px-6 border-y border-secondary/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-xs tracking-[0.2em] text-accent font-bold mb-4 uppercase">
            The Trophy Room
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Institutional Accolades
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Unquestioned authority is forged through rigorous peer review, national government qualifications, and decades of flawless execution.
          </p>
        </div>

        {/* Medals & Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Gold Medal Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm group hover:border-accent/40 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700] to-[#B8860B] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
               <GraduationCap className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">M.Sc. Gold Medalist</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Awarded for securing absolute rank-one university distinction in Post-Graduate Forensic Sciences.
            </p>
          </div>

          {/* Silver Medal Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm group hover:border-accent/40 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C0C0C0] to-[#808080] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(192,192,192,0.3)]">
               <GraduationCap className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">B.Sc. Silver Medalist</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Awarded for unprecedented academic rigor and excellence in Undergraduate Forensic Sciences.
            </p>
          </div>

          {/* INSPIRE Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm group hover:border-accent/40 transition-colors">
            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center mb-6 text-accent">
               <Shield strokeWidth={1.5} className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">INSPIRE Fellow</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              DST, Ministry of Science & Tech, Government of India. Endorsed for groundbreaking national scientific advancement.
            </p>
          </div>
          
          {/* UGC-NET Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm group hover:border-accent/40 transition-colors">
            <div className="flex items-center justify-between mb-6">
               <FileBadge strokeWidth={1.5} className="w-10 h-10 text-white/80 group-hover:text-accent transition-colors" />
               <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-accent transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2">UGC-NET Qualified</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Nationally certified for Assistant Professorship and Junior Research Fellowships by the University Grants Commission.
            </p>
          </div>

          {/* FACT Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm group hover:border-accent/40 transition-colors">
            <div className="flex items-center justify-between mb-6">
               <FileBadge strokeWidth={1.5} className="w-10 h-10 text-white/80 group-hover:text-accent transition-colors" />
               <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-accent transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2">FACT Qualified</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Forensic Aptitude and Caliber Test (FACT) certified by the Ministry of Home Affairs, Government of India.
            </p>
          </div>

          {/* Operations Card */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm group hover:bg-accent/20 transition-colors leading-relaxed">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-5xl font-serif font-bold text-accent mb-2">500+</h3>
                <p className="text-white/90 font-bold mb-4 text-xs tracking-widest uppercase">High-Profile Cases</p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Resource persons & Master Trainers to National and International Law Enforcement Officers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
