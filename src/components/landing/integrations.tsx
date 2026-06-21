
"use client";

import { motion } from "framer-motion";

const integrations = [
  "Discord", "Telegram", "Slack", "GitHub", "GitLab", "Google", "OpenAI", "Stripe", "Notion",
  "Discord", "Telegram", "Slack", "GitHub", "GitLab", "Google", "OpenAI", "Stripe", "Notion"
];

export function Integrations() {
  return (
    <section id="integrations" className="py-32 overflow-hidden">
      <div className="container px-4 mx-auto mb-16 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Connect Your Stack</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Built-in integrations for the tools you use every day. Authenticated and secure out of the box.
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-4 animate-marquee py-10">
          {integrations.map((name, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 glass-card rounded-2xl flex flex-col items-center justify-center gap-3 border border-white/5 hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                {name[0]}
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">{name}</span>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fading */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
