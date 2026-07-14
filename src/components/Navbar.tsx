"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Volunteer", href: "#volunteer" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-sand/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className={`font-serif text-2xl font-bold ${isScrolled ? "text-pine" : "text-sand"}`}>
          Choomantar
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-clay ${
                isScrolled ? "text-pine" : "text-sand/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a 
            href="https://wa.me/911234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }), "bg-clay text-sand hover:bg-clay/90 hover:-translate-y-1 transition-transform")}
          >
            Book via WhatsApp
          </a>
        </div>

        <button 
          className="md:hidden p-2 text-current"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className={isScrolled ? "text-pine" : "text-sand"} /> : <Menu className={isScrolled ? "text-pine" : "text-sand"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-sand border-t border-pine/10 p-4 flex flex-col gap-4 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-pine font-medium p-2"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/911234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }), "bg-clay text-sand w-full")}
          >
            Book via WhatsApp
          </a>
        </div>
      )}
    </motion.nav>
  );
}
