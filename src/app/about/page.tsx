"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Heart, Globe, Users, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              Reimagining home <br />
              <span className="text-accent">without the burden</span> of ownership.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded in 2024, DekorSwap was born from a simple observation: our lives are dynamic, but our homes are often static. We buy furniture and décor that we eventually grow tired of, leading to clutter and waste.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're here to change that. By treating home décor as a service rather than a product, we're helping thousands of people keep their spaces fresh, flexible, and sustainable.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1000" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
          </motion.div>
        </div>

        {/* Mission & Values */}
        <section className="py-24 border-y border-border/50 mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide every box we ship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-accent" />,
                title: "Sustainable Living",
                desc: "We promote a circular economy by keeping high-quality items in use longer, significantly reducing furniture waste."
              },
              {
                icon: <Heart className="w-10 h-10 text-accent" />,
                title: "Design for All",
                desc: "Premium interior design shouldn't be a luxury. We make curated aesthetics accessible and affordable."
              },
              {
                icon: <Recycle className="w-10 h-10 text-accent" />,
                title: "Circular Mindset",
                desc: "Everything we do is designed to be reused, refurbished, or recycled. We take responsibility for the full lifecycle."
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-border/40 hover:shadow-xl transition-all"
              >
                <div className="mb-6 p-4 bg-accent/5 rounded-2xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sustainability Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
              alt="Sustainability" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold mb-6">
              <Globe size={16} />
              <span>Planet First</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Better for your home, <br />
              better for the planet.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The furniture industry is one of the largest contributors to landfill waste. By swapping instead of buying, we're extending the life of beautiful décor and reducing the demand for new resource extraction.
            </p>
            <div className="space-y-6">
              {[
                "We use 100% recycled packaging for all deliveries.",
                "Our logistics are optimized to minimize carbon footprint.",
                "Items that reach the end of their life are responsibly recycled.",
                "We partner with local artisans to reduce shipping distances."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Recycle size={14} />
                  </div>
                  <span className="text-primary/80 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>


        {/* Team Preview */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Driven by design enthusiasts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative">
                  <img 
                    src={`https://i.pravatar.cc/400?img=${i + 20}`} 
                    alt="Team Member" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-lg text-primary">Team Member {i}</h3>
                <p className="text-muted-foreground text-sm">Role Title</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
