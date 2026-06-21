
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto glass-card rounded-[3rem] overflow-hidden flex flex-col md:flex-row">
          <div className="flex-1 p-10 md:p-16 bg-gradient-to-br from-primary to-accent text-white">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Let's build the future of automation.</h2>
            <p className="text-white/80 text-lg mb-10">
              Need a custom solution or enterprise support? Our team of automation experts is here to help you scale.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold">Consultation</h4>
                  <p className="text-sm text-white/60">Expert architecture review</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold">Pilot Program</h4>
                  <p className="text-sm text-white/60">Guided implementation</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold">Global Scale</h4>
                  <p className="text-sm text-white/60">Enterprise-wide rollout</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-[1.2] p-10 md:p-16 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                  <Input required placeholder="Jane Doe" className="bg-white/5 border-white/10 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                  <Input required type="email" placeholder="jane@company.com" className="bg-white/5 border-white/10 h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Company</label>
                <Input placeholder="Acme Inc." className="bg-white/5 border-white/10 h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">How can we help?</label>
                <Textarea required placeholder="Tell us about your project..." className="bg-white/5 border-white/10 min-h-[120px]" />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-14 bg-primary text-white font-bold text-lg rounded-xl">
                {loading ? "Sending..." : "Get Started Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
