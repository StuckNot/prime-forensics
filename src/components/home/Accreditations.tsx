import Image from "next/image";

export default function Accreditations() {
  const accreditations = [
    {
      title: "ISO",
      subtitle: "9001:2015 Certified",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 opacity-80">
          <path d="M12 2L3 7l9 5 9-5-9-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "MSME",
      subtitle: "Registered Enterprise",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 opacity-80">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 9h18M9 21V9" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "COURT",
      subtitle: "Admissible Reports",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 opacity-80">
          <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "FORENSIC",
      subtitle: "Lab Standards",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 opacity-80">
          <path d="M9 3H15M10 9H14M3 21H21M5 21V10C5 6 9 3 9 3H15C15 3 19 6 19 10V21" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-base border-y border-secondary/10 py-12">
      <div className="container mx-auto px-6">
        <h4 className="text-center text-[10px] font-bold tracking-[0.2em] text-typography/40 uppercase mb-8">
          ACCREDITED & RECOGNIZED BY
        </h4>
        
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 max-w-5xl mx-auto">
          {accreditations.map((item, index) => (
            <div key={index} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 dark:opacity-40 dark:hover:opacity-100 transition-all duration-300">
              <div className="text-primary dark:text-accent">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-primary dark:text-white text-sm tracking-wide">
                  {item.title}
                </span>
                <span className="text-[10px] text-typography/60 uppercase tracking-wider">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
