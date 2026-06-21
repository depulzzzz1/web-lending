
"use client";

import { motion } from "framer-motion";
import { Zap, Bell, BarChart3, Bot, Cloud, Shield } from "lucide-react";

const features = [
  {
    title: "Fast Automation",
    description: "Build and deploy workflows in seconds with our ultra-fast low-latency engine.",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    title: "Smart Notifications",
    description: "Intelligent routing ensures the right person gets the right alert at the right time.",
    icon: Bell,
    color: "text-primary",
  },
  {
    title: "Real-time Analytics",
    description: "Monitor every execution, error, and latency point with granular precision.",
    icon: BarChart3,
    color: "text-accent",
  },
  {
    title: "AI Powered Actions",
    description: "Leverage built-in LLMs to perform complex tasks and decision making automatically.",
    icon: Bot,
    color: "text-purple-400",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scale from zero to millions of tasks per day without touching a server.",
    icon: Cloud,
    color: "text-blue-400",
  },
  {
    title: "Enterprise Security",
    description: "SOC2 Type II, HIPAA compliant, and end-to-end encryption for your data.",
    icon: Shield,
    color: "text-green-400",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Engineered for Reliability</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to orchestrate complex operations across your entire stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-headline">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
