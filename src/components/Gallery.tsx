"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1542314831-c6a4d14272ce?q=80&w=2070",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1587",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070",
    "https://images.unsplash.com/photo-1598928506311-c95d43c27d7e?q=80&w=2070",
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069",
  ];

  return (
    <section className="py-32 bg-pine text-sand overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tighter"
        >
          Visual Story
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-sand/70 max-w-2xl mx-auto font-light"
        >
          A glimpse into the raw beauty and peaceful isolation of our sanctuary.
        </motion.p>
      </div>

      <div className="relative w-full flex pb-12">
        {/* We use width: max-content so the container fits all children in a row, allowing -50% translation to perfectly align with the duplicated set */}
        <motion.div
          className="flex gap-4 md:gap-8 w-max pl-4 md:pl-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 
          }}
        >
          {[...images, ...images].map((src, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-3xl w-[280px] md:w-[450px] shrink-0 aspect-[4/5]"
            >
              <img 
                src={src} 
                alt="Gallery" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-pine/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
