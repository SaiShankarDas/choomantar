"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-sand text-pine overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-10 leading-tight tracking-tighter">
              The Vibe
            </h2>
            <div className="w-20 h-1 bg-clay mb-10"></div>
            <p className="text-xl md:text-2xl text-pine/80 mb-8 leading-relaxed font-light">
              Welcome to Choomantar, a sanctuary designed for those seeking an off-the-beaten-path experience. Hosted by Anmol, this retreat is perfect for remote workers, artists, and nature lovers who want to escape the city hustle.
            </p>
            <p className="text-xl md:text-2xl text-pine/80 leading-relaxed font-light">
              Built using traditional Himachali architecture, the thick earth walls naturally regulate the temperature—keeping you cool in the summer and warm during snowy winters. Unwind, create, and breathe in the pure mountain air.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-[600px] md:h-[800px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1587" 
              alt="Cozy Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
