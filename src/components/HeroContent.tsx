import React from 'react';
import { motion } from 'motion/react';

export const HeroContent: React.FC = () => {
  return (
    <section aria-label="Hero — Save the Date" className="relative min-h-[100dvh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 h-[115%] -top-[7.5%]" style={{ transform: "translateY(2.07039%)" }}>
        <img 
          src="/2026.07.16-20260612T100209Z-3-001/my/RWP00108.jpg" 
          alt="Gimhan and Teneeshiya wedding" 
          className="h-full w-full object-cover object-[center_22%]" 
          loading="eager" 
          decoding="async" 
          fetchpriority="high" 
          style={{ filter: "brightness(0.65) saturate(0.9)" }} 
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: `radial-gradient(ellipse 85% 75% at 50% 50%, rgba(8,8,8,0.18) 0%, rgba(8,8,8,0.72) 100%),
                         linear-gradient(180deg, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0.05) 25%, rgba(8,8,8,0.05) 75%, rgba(8,8,8,0.8) 100%)`
          }} 
        />
        <div 
          className="pointer-events-none absolute inset-0" 
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(212,175,55,0.07) 0%, transparent 60%)" }} 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute inset-0" 
          aria-hidden="true" 
          style={{
            background: `radial-gradient(circle 180px at 20% 70%, rgba(212,175,55,0.09) 0%, transparent 60%),
                         radial-gradient(circle 120px at 78% 30%, rgba(232,197,71,0.07) 0%, transparent 55%)`
          }} 
        />
      </div>

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-6 sm:px-10 py-24 max-w-2xl mx-auto w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <p className="font-serif text-2xl sm:text-3xl mb-2" style={{ color: "#E8C547", textShadow: "0 0 48px rgba(232,197,71,0.35)" }}>Save the Date</p>
        <p className="text-[10px] uppercase tracking-[0.55em] mb-10 sm:mb-12 font-sans" style={{ color: "rgba(255,255,255,0.38)" }}>2026</p>
        
        <h1 className="font-display font-light italic leading-[0.95] tracking-wide" style={{ fontSize: "clamp(2.4rem, 10vw, 5.5rem)", color: "#FFFFFF", textShadow: "0 2px 48px rgba(0,0,0,0.45), 0 0 80px #F5EDD01f", overflowWrap: "break-word", wordBreak: "break-word", maxWidth: "100%" }}>
          Gimhan Senanayeka
        </h1>
        <p className="font-serif leading-none select-none" style={{ fontSize: "clamp(3.5rem, 13vw, 6.5rem)", color: "#E8C547", textShadow: "0 0 72px rgba(232,197,71,0.4), 0 0 120px #F5EDD02e", margin: "0.05em 0" }}>
          &amp;
        </p>
        <h1 className="font-display font-light italic leading-[0.95] tracking-wide" style={{ fontSize: "clamp(2.4rem, 10vw, 5.5rem)", color: "#FFFFFF", textShadow: "0 2px 48px rgba(0,0,0,0.45), 0 0 80px #F5EDD01f", overflowWrap: "break-word", wordBreak: "break-word", maxWidth: "100%" }}>
          Teneeshiya Nanayakkara
        </h1>
        
        <div className="mt-9 sm:mt-11 mb-6 sm:mb-7 flex items-center gap-3 w-full max-w-[14rem]">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #D4AF37bb)" }} />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <polygon points="4,0 8,4 4,8 0,4" fill="#D4AF37" fillOpacity="0.9" />
          </svg>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(270deg, transparent, #D4AF37bb)" }} />
        </div>
        
        <p className="text-sm sm:text-base font-light leading-snug font-sans" style={{ color: "rgba(255,255,255,0.82)" }}>Wednesday, 22nd of July 2026</p>
        <p className="mt-2 text-xs sm:text-sm font-light font-sans" style={{ color: "rgba(232,197,71,0.72)" }}>Kingsbury Hotel Colombo (Victoria Hall)</p>
      </motion.div>

      <motion.div 
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5" 
        aria-hidden="true"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-px h-7" style={{ background: "linear-gradient(180deg, transparent, #D4AF3790)" }} />
        <div>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M1 1L7 7L13 1" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.75" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
