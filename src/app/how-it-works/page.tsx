"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShoppingBag, Truck, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Choose your style",
    description: "Take our brief style quiz or browse through our seasonal collections. Whether you love Japandi, Mid-Century Modern, or Minimalist Scandinavian, we have the perfect pieces for your vibe.",
    icon: <ShoppingBag className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800",
    color: "bg-blue-50"
  },
  {
    number: "02",
    title: "Receive curated décor",
    description: "Every month, we deliver a beautifully packaged box of high-quality items—vases, lamps, planters, and art—directly to your doorstep. Each item is hand-picked by our interior designers.",
    icon: <Truck className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800",
    color: "bg-orange-50"
  },
  {
    number: "03",
    title: "Swap & refresh",
    description: "Enjoy your items for 30 days. When the month is up, simply pack them back in the box and swap them for a fresh selection. Or keep what you love for another month—it's entirely up to you.",
    icon: <RefreshCw className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    color: "bg-green-50"
  }
];

export default function HowItWorks() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
          >
            Design, delivered.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We've simplified home décor. No more expensive purchases that gather dust. No more clutter. Just endless style, delivered.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black text-accent/20 tracking-tighter">{step.number}</span>
                  <div className="h-[1px] flex-grow bg-accent/20" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{step.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {step.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {i === 0 && [
                    "Quick 2-minute style quiz to understand your aesthetic",
                    "Browse curated collections: Japandi, Mid-Century, Scandinavian & more",
                    "Get personalized recommendations based on your space and budget"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-accent shrink-0" />
                      <span className="text-primary/80">{text}</span>
                    </li>
                  ))}
                  {i === 1 && [
                    "Hand-picked by professional interior designers",
                    "Premium quality items from trusted brands and artisans",
                    "Free delivery with eco-friendly, recycled packaging"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-accent shrink-0" />
                      <span className="text-primary/80">{text}</span>
                    </li>
                  ))}
                  {i === 2 && [
                    "Unlimited swaps on Premium plan, 2x/month on Standard",
                    "Keep items you love or refresh your entire collection",
                    "Reduce waste with our circular economy model"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-accent shrink-0" />
                      <span className="text-primary/80">{text}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="rounded-full bg-primary">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 relative"
              >
                <div className={`absolute -inset-4 ${step.color} rounded-3xl -z-10 rotate-3`} />
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/20">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <section className="mt-40 bg-brand-charcoal rounded-[3rem] p-12 md:p-24 text-white text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to transform your space?</h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
            Join the circular décor movement today. First month is 20% off with code FRESHSTART.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full px-12 h-16 text-lg bg-accent hover:bg-accent/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-12 h-16 text-lg border-white/20 hover:bg-white/10 text-black">
              View Plans
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
