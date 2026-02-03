"use client";

import { motion } from "framer-motion";
import { Check, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    name: "Starter",
    price: "₹3,999",
    description: "Perfect for smaller spaces or those just starting their décor journey.",
    features: [
      "3-4 curated items per month",
      "Standard collection access",
      "Free monthly delivery",
      "Easy 1-click swaps",
      "Cancel anytime"
    ],
    cta: "Start with Starter",
    popular: false
  },
  {
    name: "Standard",
    price: "₹6,999",
    description: "Our most popular plan, designed for a full-room refresh every month.",
    features: [
      "5-7 curated items per month",
      "Premium collection access",
      "Free priority delivery",
      "Priority customer support",
      "Styling consultation (15m)",
      "Swap 2x per month"
    ],
    cta: "Go Standard",
    popular: true
  },
  {
    name: "Premium",
    price: "₹11,999",
    description: "The ultimate décor experience for large spaces and design enthusiasts.",
    features: [
      "8-10 curated items per month",
      "Exclusive artisan collection",
      "White-glove delivery & setup",
      "Personal design concierge",
      "Unlimited monthly swaps",
      "Early access to new drops"
    ],
    cta: "Get Premium",
    popular: false
  }
];

const faqs = [
  {
    question: "Can I keep an item I really love?",
    answer: "Yes! If you fall in love with a piece, you can keep it as long as you maintain your subscription. If you want to own it permanently, we offer exclusive member pricing to purchase items outright."
  },
  {
    question: "What happens if an item gets damaged?",
    answer: "We know life happens. Standard wear and tear is covered. For significant damage, we have a simple protection plan included in your subscription that covers up to 90% of the replacement cost."
  },
  {
    question: "Is there a long-term commitment?",
    answer: "No. All our plans are month-to-month. You can pause or cancel your subscription at any time with just a few clicks."
  },
  {
    question: "How do swaps work?",
    answer: "At the end of your billing cycle, you'll receive a notification to select your new items. Once you've chosen, we'll deliver the new box and pick up the old one at the same time."
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-widest uppercase"
          >
            Endless Style
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
          >
            Simple, transparent pricing.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the plan that fits your space. No hidden fees. Cancel anytime.
          </motion.p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl border-2 transition-all ${
                tier.popular 
                  ? "border-accent bg-white shadow-2xl scale-105 z-10" 
                  : "border-border bg-brand-offwhite/50 hover:border-accent/30"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-accent text-white px-4 py-1 border-none text-sm uppercase font-bold tracking-wider">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-primary">{tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow mb-10">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                        <Check size={12} />
                      </div>
                      <span className="text-primary/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                size="lg" 
                variant={tier.popular ? "default" : "outline"}
                className={`w-full rounded-full h-14 font-bold ${
                  tier.popular ? "bg-accent hover:bg-accent/90" : "border-primary/20 hover:bg-primary/5 text-primary"
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What's included in every plan</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Free Swaps", desc: "Easily swap your items every month with no extra fees." },
              { title: "Insurance", desc: "Basic protection plan included for peace of mind." },
              { title: "Curated Style", desc: "Access to professional interior designer picks." },
              { title: "Flexible billing", desc: "Pause or cancel anytime with no penalties." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-border">
                <Info size={24} className="text-accent mb-4" />
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Frequently asked questions</h2>
            <p className="text-muted-foreground">Everything you need to know about DekorSwap.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60 py-2">
                <AccordionTrigger className="text-lg font-bold text-left hover:text-accent hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-20 text-center p-12 bg-accent/5 rounded-[2rem] border border-accent/10">
            <h3 className="text-2xl font-bold text-primary mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-8">We're here to help you create your dream home.</p>
            <Button variant="link" className="text-accent font-bold text-lg group">
              Contact our support team <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
