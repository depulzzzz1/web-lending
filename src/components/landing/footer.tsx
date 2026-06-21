
"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, Slack } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center font-headline text-white font-bold text-xl">
                D
              </div>
              <span className="font-headline text-2xl font-bold tracking-tight">DEPMQ</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8">
              Automate Everything. Manage Anything. The workflow orchestration platform for the next generation of software teams.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors">
                <Slack className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 font-headline uppercase text-xs tracking-widest text-primary">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 font-headline uppercase text-xs tracking-widest text-primary">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Guides</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 font-headline uppercase text-xs tracking-widest text-primary">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© 2024 DEPMQ Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Status</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Security</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
