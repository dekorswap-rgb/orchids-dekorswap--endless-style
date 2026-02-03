"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              Let's chat about <br />
              <span className="text-accent">your space.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Have questions about our plans? Need styling advice? Or just want to say hi? We'd love to hear from you.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-primary mb-1 text-lg">Email us</p>
                  <a href="mailto:dekorswap@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                    dekorswap@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-primary mb-1 text-lg">Call us</p>
                  <p className="text-muted-foreground">+91 9996234649</p>
                  <p className="text-muted-foreground">+91 9131437446</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-primary mb-1 text-lg">Visit our studio</p>
                  <p className="text-muted-foreground">Raipur, C.G, India</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Follow our journey</p>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={20} />, label: "Instagram" },
                  { icon: <Facebook size={20} />, label: "Facebook" },
                  { icon: <Twitter size={20} />, label: "Twitter" }
                ].map((social, i) => (
                  <button 
                    key={i} 
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white hover:border-accent transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[5rem] -z-10" />
            
            <h2 className="text-2xl font-bold text-primary mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                  <Input placeholder="John Doe" className="rounded-xl border-border focus:ring-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="rounded-xl border-border focus:ring-accent" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Subject</label>
                <Input placeholder="Inquiry about Standard Plan" className="rounded-xl border-border focus:ring-accent" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-primary ml-1">Message</label>
                <Textarea placeholder="Tell us about your space and what you're looking for..." className="min-h-[150px] rounded-xl border-border focus:ring-accent" />
              </div>

              <Button size="lg" className="w-full rounded-full h-14 bg-primary text-lg font-bold group">
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <section className="mt-32">
          <div className="w-full h-[400px] bg-brand-offwhite rounded-[2.5rem] border border-border flex items-center justify-center overflow-hidden grayscale contrast-75 hover:grayscale-0 transition-all duration-700">
            <div className="text-center p-8">
              <MapPin size={48} className="text-accent mx-auto mb-4 animate-bounce" />
              <p className="text-xl font-bold text-primary">Find us in Raipur</p>
              <p className="text-muted-foreground">Studio Address Placeholder, Raipur, Chhattisgarh, India</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
