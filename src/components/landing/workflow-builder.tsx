
"use client";

import { motion } from "framer-motion";
import { Play, Database, Cpu, CheckCircle2, ArrowDown } from "lucide-react";

export function WorkflowBuilder() {
  const steps = [
    { id: "trigger", icon: Play, label: "GitHub Webhook", type: "Trigger", desc: "Push to main branch" },
    { id: "action", icon: Cpu, label: "AI Analysis", type: "Action", desc: "Scan code for vulnerabilities" },
    { id: "condition", icon: Database, label: "Severity > 5", type: "Condition", desc: "Decision branch" },
    { id: "result", icon: CheckCircle2, label: "Slack Notification", type: "Result", desc: "Alert engineering team" },
  ];

  return (
    <section className="py-32 bg-white/[0.02]">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Visual Logic, Real Results</h2>
          <p className="text-muted-foreground text-lg">
            Compose complex flows with a few clicks. No boilerplate, no deployment scripts.
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          {steps.map((step, i) => (
            <div key={step.id} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="w-full glass-card p-5 rounded-xl border border-white/10 flex items-center gap-4 relative z-10 hover:border-primary/50 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-primary">{step.type}</span>
                  </div>
                  <h4 className="font-bold">{step.label}</h4>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
              
              {i < steps.length - 1 && (
                <div className="h-12 w-0.5 bg-gradient-to-b from-primary/50 to-transparent relative">
                  <motion.div 
                    animate={{ y: [0, 48], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-[-3px] w-2 h-2 rounded-full bg-primary"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
