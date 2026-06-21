
"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for side projects and explorers.",
    features: ["1,000 tasks / mo", "3 workflows", "Standard support", "2-day retention"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for growing teams and startups.",
    features: ["50,000 tasks / mo", "Unlimited workflows", "Priority support", "30-day retention", "Custom integrations"],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Business",
    price: "$99",
    description: "For established businesses scaling fast.",
    features: ["500,000 tasks / mo", "Advanced AI actions", "Dedicated manager", "90-day retention", "SSO & SAML"],
    cta: "Contact Sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">Choose the plan that's right for your scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-[2rem] border transition-all duration-300 ${
                tier.highlight 
                  ? "bg-primary/[0.05] border-primary/50 shadow-primary/20 shadow-2xl scale-105 z-10" 
                  : "bg-white/[0.02] border-white/10 hover:border-white/20"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-headline mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full h-12 rounded-xl font-bold transition-all ${
                  tier.highlight 
                    ? "bg-primary hover:bg-primary/90 text-white" 
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
