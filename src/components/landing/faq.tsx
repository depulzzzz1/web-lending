
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How secure is my automation data?",
    answer: "Extremely. We use bank-grade AES-256 encryption at rest and TLS 1.3 for all data in transit. We are SOC2 Type II compliant and offer private VPC deployments for enterprise customers."
  },
  {
    question: "Can I use DEPMQ with my custom internal tools?",
    answer: "Yes! Our HTTP request action allows you to connect to any API or internal tool. We also offer a custom SDK for building your own native integrations."
  },
  {
    question: "What happens if a workflow fails?",
    answer: "We offer built-in retry logic with exponential backoff, dead-letter queues, and granular error alerting via Slack, PagerDuty, or email."
  },
  {
    question: "Is there a limit to how many users I can invite?",
    answer: "Our Starter plan is for individuals, but Pro and above offer unlimited team members. You only pay for task execution and advanced security features."
  }
];

export function FAQ() {
  return (
    <section className="py-32 bg-white/[0.01]">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about DEPMQ.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
