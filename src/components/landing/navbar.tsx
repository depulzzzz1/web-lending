
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-headline text-white font-bold">
              D
            </div>
            <span className="font-headline text-xl font-bold tracking-tight">DEPMQ</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#integrations" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Integrations</Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="#docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="font-medium">Log in</Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-medium">Start Free</Button>
        </div>

        <button 
          className="md:hidden p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Features</Link>
          <Link href="#integrations" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Integrations</Link>
          <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Pricing</Link>
          <Button className="w-full bg-primary text-white">Start Free</Button>
        </div>
      )}
    </nav>
  );
}
