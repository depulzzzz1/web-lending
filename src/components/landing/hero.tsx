
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden aurora-bg">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />
      
      {/* Animated Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: ["-10%", "110%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10 
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 rounded-full">
            New: AI-Powered Workflow Optimization
          </span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
            Run Workflows,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">Not Complexity.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 font-body">
            DEPMQ helps teams automate workflows, manage operations, monitor systems, 
            and build powerful automations faster than ever before.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white font-semibold rounded-full group">
              Start Free Today
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold rounded-full border-white/10 hover:bg-white/5 backdrop-blur-sm">
              <Play className="mr-2 w-4 h-4 fill-current" />
              Live Demo
            </Button>
          </div>
        </motion.div>

        {/* Dashboard Preview Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative max-w-6xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black rounded-[1.5rem] border border-white/10 overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-4 flex-1 h-5 bg-white/5 rounded-md flex items-center px-2">
                  <span className="text-[10px] text-muted-foreground font-code">app.depmq.com/dashboard</span>
                </div>
              </div>
              <div className="pt-10">
                <img 
                  src="https://picsum.photos/seed/depmq-dash/1200/800" 
                  alt="DEPMQ Dashboard Preview" 
                  className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="saas dashboard"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
