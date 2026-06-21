
"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Uptime SLA", value: "99.99%" },
  { label: "Tasks Processed", value: "10M+" },
  { label: "Automations Created", value: "500K+" },
  { label: "Global Users", value: "100K+" },
];

export function Analytics() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-headline font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 p-8 glass-card rounded-[2rem] border-white/5 overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-xl font-bold font-headline">Live Network Throughput</h4>
              <p className="text-sm text-muted-foreground">Real-time task execution across 12 global regions</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-green-500">Live Status</span>
            </div>
          </div>
          
          <div className="h-48 flex items-end gap-1 px-2">
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: "20%" }}
                animate={{ height: [`${20 + Math.random() * 60}%`, `${30 + Math.random() * 70}%`, `${20 + Math.random() * 60}%`] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
                className="flex-1 bg-gradient-to-t from-primary/10 to-primary/40 rounded-t-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
