"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const headingText = "Experience the Raw Beauty of Naggar".split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c6a4d14272ce?q=80&w=2070')",
          y: backgroundY,
          scale: 1.1 // Slightly scale up to avoid white edges during parallax
        }}
      />
      {/* Premium Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-pine/30 via-pine/40 to-pine/90 mix-blend-multiply" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-pine/90 via-transparent to-transparent" />

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-x-4 mb-6"
        >
          {headingText.map((word, idx) => (
            <motion.span 
              key={idx} 
              variants={wordVariants}
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sand via-sand to-sand/60 leading-[1.1] tracking-tighter drop-shadow-2xl"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="text-xl md:text-3xl text-sand/80 mb-12 font-light tracking-wide max-w-2xl"
        >
          A Rustic Retreat in Sharan Village.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
        >
          <Link 
            href="#rooms"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }), 
              "bg-clay text-sand hover:bg-clay/90 hover:-translate-y-1 transition-all duration-300 text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl"
            )}
          >
            Check Availability
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-sand/60"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
