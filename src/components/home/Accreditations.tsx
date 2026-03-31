import Image from "next/image";

export default function Accreditations() {
  const accreditations = [
    // {
    //   title: "ISO",
    //   subtitle: "9001:2015 Certified",
    //   icon: (
    //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 opacity-80">
    //       <path d="M12 2L3 7l9 5 9-5-9-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
    //     </svg>
    //   )
    // },
    {
      title: "MSME",
      subtitle: "Registered Enterprise",
      icon: (
        
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5 " className="w-8 h-8 opacity-80">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 9h18M9 21V9" strokeLinecap="round" strokeLinejoin="round"/>
          {/* <path d="M8.5125 17.55L9.825 13.275L6.375 10.5H10.65L12 6.3L13.35 10.5H17.625L14.1375 13.275L15.45 17.55L12 14.8875L8.5125 17.55ZM3 31.5V19.9125C2.05 18.8625 1.3125 17.6625 0.7875 16.3125C0.2625 14.9625 0 13.525 0 12C0 8.65 1.1625 5.8125 3.4875 3.4875C5.8125 1.1625 8.65 0 12 0C15.35 0 18.1875 1.1625 20.5125 3.4875C22.8375 5.8125 24 8.65 24 12C24 13.525 23.7375 14.9625 23.2125 16.3125C22.6875 17.6625 21.95 18.8625 21 19.9125V31.5L12 28.5L3 31.5ZM12 21C14.5 21 16.625 20.125 18.375 18.375C20.125 16.625 21 14.5 21 12C21 9.5 20.125 7.375 18.375 5.625C16.625 3.875 14.5 3 12 3C9.5 3 7.375 3.875 5.625 5.625C3.875 7.375 3 9.5 3 12C3 14.5 3.875 16.625 5.625 18.375C7.375 20.125 9.5 21 12 21ZM6 27.0375L12 25.5L18 27.0375V22.3875C17.125 22.8875 16.1812 23.2812 15.1687 23.5688C14.1562 23.8563 13.1 24 12 24C10.9 24 9.84375 23.8563 8.83125 23.5688C7.81875 23.2812 6.875 22.8875 6 22.3875V27.0375Z" fill="#1A2538"/> */}
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
    <section className="bg-white border-y border-secondary/10 py-8">
      <div className="container mx-auto px-6">
        <h4 className="text-center text-[12px] opacity-65 font-bold traxcking-[0.2em] text-typography uppercase mb-8">
          ACCREDITED & RECOGNIZED BY
        </h4>
        
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 max-w-5xl mx-auto">
          {accreditations.map((item, index) => (
            <div key={index} className="flex items-center gap-3 opacity-85 
          "
            >
              <div className="text-primary dark:text-accent">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className=" text-[16px] font-serif font-bold text-typography dark:text-white text-sm tracking-wide">
                  {item.title}
                </span>
                <span className="text-[12px] text-typography opacity-60 uppercase tracking-wider">
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
