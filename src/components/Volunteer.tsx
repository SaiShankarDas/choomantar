"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Volunteer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="volunteer" className="py-32 md:py-48 bg-pine text-sand relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-clay/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-white leading-tight tracking-tighter">
              Trade Skills for <br/> Experiences
            </h2>
            <div className="flex gap-4 mb-10">
              <div className="w-16 h-[2px] bg-clay"></div>
              <div className="w-4 h-[2px] bg-clay/50"></div>
            </div>
            <p className="text-xl md:text-2xl text-sand/80 mb-8 leading-relaxed font-light">
              Are you an artist, content creator, or yogi? Bring your unique superpower to Choomantar and stay with us in exchange for your craft.
            </p>
            <p className="text-xl text-sand/60 leading-relaxed font-light">
              Help us build a community of creative souls in the heart of the Himalayas. We are always looking for murals, photography, and positive energy.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 p-10 md:p-14 rounded-[2.5rem] border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden min-h-[500px] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit} 
                  className="space-y-10 w-full"
                >
                  <h3 className="text-3xl font-serif font-bold mb-8 text-white">Apply Now</h3>
                  
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:outline-none focus:border-clay transition-colors peer placeholder-transparent"
                      placeholder="Full Name"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-6 text-sm text-sand/60 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-clay">
                      Full Name
                    </label>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type="tel" 
                      id="whatsapp" 
                      required 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:outline-none focus:border-clay transition-colors peer placeholder-transparent"
                      placeholder="WhatsApp Number"
                    />
                    <label htmlFor="whatsapp" className="absolute left-0 -top-6 text-sm text-sand/60 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-clay">
                      WhatsApp Number
                    </label>
                  </div>

                  <div className="relative group">
                    <select 
                      id="superpower" 
                      required 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:outline-none focus:border-clay transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected hidden>Select your superpower</option>
                      <option value="art" className="bg-pine text-sand">Art & Murals</option>
                      <option value="content" className="bg-pine text-sand">Content Creation</option>
                      <option value="hospitality" className="bg-pine text-sand">Hospitality</option>
                      <option value="yoga" className="bg-pine text-sand">Yoga & Wellness</option>
                      <option value="other" className="bg-pine text-sand">Other</option>
                    </select>
                    <div className="absolute right-0 top-4 pointer-events-none text-sand/60">
                      ▼
                    </div>
                  </div>

                  <div className="relative group">
                    <input 
                      type="url" 
                      id="portfolio" 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:outline-none focus:border-clay transition-colors peer placeholder-transparent"
                      placeholder="Portfolio URL"
                    />
                    <label htmlFor="portfolio" className="absolute left-0 -top-6 text-sm text-sand/60 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-clay">
                      Portfolio URL (Optional)
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-clay text-sand hover:bg-clay/90 hover:-translate-y-1 transition-all duration-300 h-14 text-xl rounded-xl mt-4"
                  >
                    {isSubmitting ? "Sending..." : "Submit Application"}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="text-center w-full flex flex-col items-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle2 className="w-24 h-24 text-clay mb-6" />
                  </motion.div>
                  <h3 className="text-4xl font-serif font-bold text-white mb-4">Application Received!</h3>
                  <p className="text-xl text-sand/80 font-light">
                    Thank you for your interest. We will review your portfolio and reach out to you on WhatsApp shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
