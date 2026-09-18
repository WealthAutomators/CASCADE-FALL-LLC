"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 border border-border bg-card px-6 py-12 md:grid-cols-2 md:px-12 md:py-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-moss">Newsletter</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">{newsletter.title}</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{newsletter.description}</p>
          </div>
          <div>
            {submitted ? (
              <p className="text-sm font-medium text-forest">Thank you. We will be in touch.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-none bg-ivory"
                  aria-label="Email address"
                />
                <Button type="submit" size="lg" className="shrink-0">
                  {newsletter.buttonText}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
