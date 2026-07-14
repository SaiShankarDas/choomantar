"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="py-24 bg-sand text-pine">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl font-bold mb-4">Good to Know</h2>
          <p className="text-lg text-pine/80">
            Frequently asked questions about your stay at Choomantar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion className="w-full">
            <AccordionItem value="item-1" className="border-pine/20">
              <AccordionTrigger className="text-left font-serif text-xl hover:text-clay">
                What are the check-in and check-out timings?
              </AccordionTrigger>
              <AccordionContent className="text-pine/80 text-base leading-relaxed">
                Our standard check-in time is 10:00 AM, and check-out is at 11:00 AM. If you need special arrangements, please let us know in advance!
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-pine/20">
              <AccordionTrigger className="text-left font-serif text-xl hover:text-clay">
                How far is Choomantar from Manali?
              </AccordionTrigger>
              <AccordionContent className="text-pine/80 text-base leading-relaxed">
                We are located in the peaceful village of Sharan in Naggar, exactly 24.4 km away from the crowded Manali city center. It's the perfect distance to escape the noise while remaining accessible.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-pine/20">
              <AccordionTrigger className="text-left font-serif text-xl hover:text-clay">
                Do you have parking and power backup?
              </AccordionTrigger>
              <AccordionContent className="text-pine/80 text-base leading-relaxed">
                Yes! We provide free parking for our guests, a reliable power backup system, and fast Wi-Fi to ensure your stay (or workation) goes completely uninterrupted.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
