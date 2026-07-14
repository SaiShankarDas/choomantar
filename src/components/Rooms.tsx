"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BedDouble, Bed, Sofa } from "lucide-react";

export default function Rooms() {
  const rooms = [
    {
      title: "Bedroom 1",
      description: "1 single bed",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
      features: [
        { icon: Bed, text: "1 single bed" }
      ]
    },
    {
      title: "Bedroom 2",
      description: "1 king bed, 2 sofas, 1 floor mattress",
      image: "https://images.unsplash.com/photo-1598928506311-c95d43c27d7e?q=80&w=2070",
      features: [
        { icon: BedDouble, text: "1 king bed" },
        { icon: Sofa, text: "2 sofas" },
        { icon: Bed, text: "1 floor mattress" },
      ]
    },
    {
      title: "Bedroom 3",
      description: "1 double bed, 1 floor mattress",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069",
      features: [
        { icon: BedDouble, text: "1 double bed" },
        { icon: Bed, text: "1 floor mattress" },
      ]
    },
    {
      title: "Bedroom 4",
      description: "5 bunk beds",
      image: "https://images.unsplash.com/photo-1522771731478-44fb6b4f7069?q=80&w=2070",
      features: [
        { icon: Bed, text: "5 bunk beds" },
      ]
    },
    {
      title: "Bedroom 5",
      description: "1 double bed, 1 floor mattress",
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2070",
      features: [
        { icon: BedDouble, text: "1 double bed" },
        { icon: Bed, text: "1 floor mattress" },
      ]
    }
  ];

  return (
    <section id="rooms" className="py-32 md:py-48 bg-pine text-sand relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sand/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-0 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24 px-4 md:px-0"
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter">Where you'll sleep</h2>
          <p className="text-xl md:text-2xl text-sand/70 max-w-2xl mx-auto font-light">
            Choose your perfect sanctuary. Each room is crafted with earth and wood to provide a peaceful, natural rest.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 px-4 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="w-[85vw] sm:w-[350px] lg:w-[400px] shrink-0 snap-center md:snap-start"
            >
              <Card className="bg-sand border-none overflow-hidden h-full flex flex-col group hover:shadow-2xl transition-all duration-500 rounded-3xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img 
                    src={room.image} 
                    alt={room.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-pine/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <CardHeader className="pt-8 pb-4">
                  <CardTitle className="font-serif text-3xl text-pine mb-2">{room.title}</CardTitle>
                  <CardDescription className="text-pine/70 text-lg">{room.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pb-8">
                  <ul className="space-y-4">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-pine/80 text-lg">
                        <feature.icon className="w-6 h-6 mr-4 text-clay" />
                        <span className="font-light">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-8">
                  <a 
                    href={`https://wa.me/918810662026?text=${encodeURIComponent(`Hi Choomantar, I am enquiring about ${room.title}.`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full border-clay/30 text-clay hover:bg-clay hover:text-sand transition-all duration-300 text-lg py-6 rounded-xl group-hover:border-clay")}
                  >
                    Enquire Now
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
