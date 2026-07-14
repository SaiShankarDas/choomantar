"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mountain, Bath, Bed, ThermometerSun, ShieldAlert, Wifi, 
  Utensils, Trees, Car, Dog, XCircle
} from "lucide-react";

export default function Amenities() {
  const [isExpanded, setIsExpanded] = useState(false);

  const highlights = [
    { icon: Mountain, title: "Mountain view" },
    { icon: Wifi, title: "Fast Wifi" },
    { icon: Utensils, title: "Kitchen" },
    { icon: Car, title: "Free parking on premises" },
    { icon: Dog, title: "Pets allowed" },
    { icon: Trees, title: "Firepit" },
  ];

  const amenityCategories = [
    {
      icon: Mountain,
      title: "Scenic views",
      items: ["Mountain view", "Valley view"]
    },
    {
      icon: Bath,
      title: "Bathroom",
      items: ["Bath", "Hairdryer", "Cleaning products", "Shampoo", "Conditioner", "Body soap", "Bidet", "Hot water", "Shower gel"]
    },
    {
      icon: Bed,
      title: "Bedroom and laundry",
      items: ["Essentials (Towels, bed sheets, soap and toilet paper)", "Bed linen", "Extra pillows and blankets", "Room-darkening blinds", "Iron", "Clothes storage"]
    },
    {
      icon: ThermometerSun,
      title: "Heating and cooling",
      items: ["Heating"]
    },
    {
      icon: ShieldAlert,
      title: "Home safety",
      items: ["Fire extinguisher", "First aid kit"]
    },
    {
      icon: Wifi,
      title: "Internet and office",
      items: ["Wifi", "Dedicated workspace"]
    },
    {
      icon: Utensils,
      title: "Kitchen and dining",
      items: ["Kitchen", "Space where guests can cook their own meals"]
    },
    {
      icon: Trees,
      title: "Outdoor",
      items: ["Firepit", "Outdoor dining area", "BBQ grill"]
    },
    {
      icon: Car,
      title: "Parking and facilities",
      items: ["Free parking on premises"]
    },
    {
      icon: Dog,
      title: "Services",
      items: ["Pets allowed (Assistance animals are always allowed)", "Smoking allowed", "Host greets you"]
    }
  ];

  const notIncluded = [
    "Exterior security cameras on property",
    "TV",
    "Washing machine",
    "Tumble dryer",
    "Air conditioning",
    "Smoke alarm (This place may not have a smoke detector. Contact the host with any questions.)",
    "Carbon monoxide alarm (This place may not have a carbon monoxide detector. Contact the host with any questions.)"
  ];

  return (
    <section id="amenities" className="py-24 bg-sand text-pine">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">What this place offers</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-10 max-w-3xl">
           {highlights.map((item, idx) => (
             <div key={idx} className="flex items-center text-lg text-pine/90 font-light">
               <item.icon className="w-8 h-8 mr-6 text-clay" />
               <span>{item.title}</span>
             </div>
           ))}
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="border-2 border-pine text-pine rounded-xl px-8 py-3.5 text-lg font-medium hover:bg-pine hover:text-sand transition-all duration-300"
        >
          {isExpanded ? "Hide amenities" : "Show all amenities"}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: "4rem" }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden border-t border-pine/10 pt-16"
            >
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 md:gap-12 mb-16">
                {amenityCategories.map((category, index) => (
                  <div key={category.title} className="flex flex-col break-inside-avoid mb-12 w-full">
                    <div className="flex items-center mb-6">
                      <category.icon className="w-8 h-8 mr-4 text-clay" />
                      <h3 className="font-serif text-2xl font-bold">{category.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-pine/80 text-lg font-light flex items-start">
                          <span className="mr-2 mt-2 w-1.5 h-1.5 bg-clay/50 rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-pine/10">
                  <div className="flex items-center mb-6">
                      <XCircle className="w-8 h-8 mr-4 text-red-500/70" />
                      <h3 className="font-serif text-2xl font-bold">Not included</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
                      {notIncluded.map((item, idx) => (
                          <li key={idx} className="text-pine/60 line-through text-lg font-light flex items-start">
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
