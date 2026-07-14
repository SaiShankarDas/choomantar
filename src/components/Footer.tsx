"use client";

import { Phone, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-pine text-sand pt-32 relative overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center flex-grow flex flex-col justify-center w-full z-10 mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl font-bold mb-12 text-white leading-tight tracking-tighter"
        >
          Ready for your <br className="hidden md:block"/> mountain escape?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a 
            href="https://wa.me/918810662026?text=Hi%20Choomantar,%20I%20would%20like%20to%20book%20a%20stay." 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "bg-clay text-sand hover:bg-clay/90 hover:-translate-y-1 transition-all duration-300 text-xl px-12 py-8 rounded-full mb-20 shadow-2xl")}
          >
            Book Your Stay
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 w-full">
          <div className="font-serif text-2xl font-bold mb-6 md:mb-0 text-white tracking-widest">
            CHOOMANTAR
          </div>
          
          <div className="flex gap-8 mb-6 md:mb-0">
            <a href="https://www.instagram.com/choomantar.naggar/" target="_blank" rel="noopener noreferrer" className="text-sand/70 hover:text-clay transition-colors hover:-translate-y-1 transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="tel:+918810662026" className="text-sand/70 hover:text-clay transition-colors hover:-translate-y-1 transform duration-300">
              <Phone className="w-6 h-6" />
            </a>
            <a href="mailto:hello@choomantar.com" className="text-sand/70 hover:text-clay transition-colors hover:-translate-y-1 transform duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-sand/40 text-sm font-light">
            &copy; 2026 Choomantar. All rights reserved.
          </div>
        </div>
      </div>

      {/* Massive Typography Reveal at the absolute bottom */}
      <motion.div 
        initial={{ y: "100%" }}
        whileInView={{ y: "15%" }}
        viewport={{ once: false, margin: "100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full text-center overflow-hidden pointer-events-none mt-auto"
      >
        <h1 className="text-[12vw] font-serif font-black text-sand/10 leading-none tracking-tighter m-0 p-0 select-none">
          CHOOMANTAR
        </h1>
      </motion.div>
    </footer>
  );
}
