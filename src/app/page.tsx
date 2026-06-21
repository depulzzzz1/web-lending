"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { WorkflowBuilder } from "@/components/landing/workflow-builder";
import { Integrations } from "@/components/landing/integrations";
import { Analytics } from "@/components/landing/analytics";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <Features />
      <WorkflowBuilder />
      <Integrations />
      <Analytics />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Global Background Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
      </div>
    </main>
  );
}
