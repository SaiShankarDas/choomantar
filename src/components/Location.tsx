"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="py-32 bg-sand text-pine relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-10 tracking-tighter text-pine">
              Find Your <br/> Escape
            </h2>
            <div className="bg-white/50 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/50 mb-8 transform transition-transform hover:-translate-y-2">
              <div className="flex items-start mb-6">
                <div className="bg-clay/10 p-4 rounded-full mr-6">
                  <MapPin className="text-clay w-8 h-8 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold mb-3">Choomantar</h3>
                  <p className="text-pine/80 text-lg leading-relaxed">
                    54, Choomantar, Sharan Village, Naggar,<br />
                    Manali 175130, Himachal Pradesh
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-clay/5 rounded-2xl border border-clay/10">
                <p className="text-pine text-lg font-light leading-relaxed">
                  Situated in peaceful Naggar, exactly <strong className="text-clay font-semibold">24.4 km away</strong> from the crowded Manali city center. The perfect balance of accessibility and isolation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.a
            href="https://maps.app.goo.gl/pHFxzNnMmGfg6Cwu5"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="block h-[500px] lg:h-[700px] w-full bg-pine/5 rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-white/20 group cursor-pointer"
          >
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=Choomantar,%20Sharan%20Village,%20Naggar,%20Himachal%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 grayscale contrast-125 opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 pointer-events-none"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-pine/20 backdrop-blur-[1px]">
              <div className="bg-white/90 text-pine px-6 py-3 rounded-full font-semibold shadow-2xl flex items-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <MapPin className="w-5 h-5 mr-2 text-clay" />
                Open in Google Maps
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
