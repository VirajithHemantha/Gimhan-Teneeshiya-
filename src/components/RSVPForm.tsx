import React from 'react';

export const RSVPForm: React.FC = () => {
  return (
    <div id="rsvp" className="midnight-luxe-rsvp">
      <style dangerouslySetInnerHTML={{__html: `
        .midnight-luxe-rsvp button {
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.2s cubic-bezier(0.22,1,0.36,1);
        }
        .midnight-luxe-rsvp button:first-of-type:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 0 3px rgba(232,197,71,0.28), 0 8px 24px -4px rgba(212,175,55,0.35);
        }
        .midnight-luxe-rsvp button:last-of-type:hover {
          transform: translateY(-1px);
        }
        .midnight-luxe-rsvp button:focus-visible {
          outline: 2px solid #D4AF37;
          outline-offset: 3px;
          border-radius: 9999px;
        }
      `}} />
      <section className="py-20 sm:py-28 px-6 bg-[#080808] text-[#E8C547]">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.6em] mb-3 text-white/35 font-sans">
            Kindly respond
          </p>
          <div className="my-4">
            <div className="flex items-center justify-center" aria-hidden="true">
              <svg className="w-full max-w-[220px] sm:max-w-sm md:max-w-md" viewBox="0 0 220 24" preserveAspectRatio="xMidYMid meet" fill="none">
                <line x1="0" y1="12" x2="86" y2="12" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.55" />
                <polygon points="89,12 92.5,8.5 96,12 92.5,15.5" fill="#D4AF37" fillOpacity="0.65" />
                <ellipse cx="110" cy="12" rx="2.5" ry="8.5" fill="#D4AF37" fillOpacity="0.3" />
                <ellipse cx="110" cy="12" rx="8.5" ry="2.5" fill="#D4AF37" fillOpacity="0.3" />
                <circle cx="110" cy="12" r="3" fill="#D4AF37" fillOpacity="0.9" />
                <circle cx="110" cy="12" r="6" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.45" />
                <polygon points="124,12 127.5,8.5 131,12 127.5,15.5" fill="#D4AF37" fillOpacity="0.65" />
                <line x1="134" y1="12" x2="220" y2="12" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.55" />
              </svg>
            </div>
          </div>
          <h2 className="font-serif leading-[1.05]" style={{ fontSize: "clamp(4.5rem, 18vw, 8rem)", color: "rgb(232, 197, 71)" }}>
            RSVP
          </h2>
          <div className="my-6 sm:my-8">
            <div className="h-px w-16 mx-auto bg-[#D4AF37] opacity-35" />
          </div>
          <p className="font-sans text-sm font-light leading-relaxed mb-10 sm:mb-12 mx-auto max-w-xs text-white/50">
            We would love to celebrate with you. Please let us know if you can join us.
          </p>
          <div>
            <div className="flex flex-col gap-6 items-center w-full max-w-xs mx-auto">
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full bg-transparent border-b border-[#D4AF37]/40 text-center text-white pb-3 font-sans focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/30"
              />
              <div className="flex flex-col items-center gap-4 w-full">
                <button type="button" className="px-10 py-4 font-sans text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:opacity-75 active:scale-[0.98] cursor-pointer rounded-full w-full max-w-xs font-semibold" style={{ background: "linear-gradient(135deg, #E8C547 0%, #D4AF37 100%)", color: "#080808", border: "1px solid #E8C547" }}>
                  Joyfully Accepts
                </button>
                <button type="button" className="px-10 py-4 font-sans text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:opacity-75 active:scale-[0.98] cursor-pointer rounded-full w-full max-w-xs font-medium" style={{ background: "transparent", color: "rgba(255,255,255,0.72)", border: "1px solid rgba(212,175,55,0.38)" }}>
                  Regretfully Declines
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
