"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { PageHero } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact"
        description="Questions about an order or a product — write to us."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Container className="pb-20">
        <div className="grid gap-12 py-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl">CASCADE FALL LLC</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Include your order number for anything related to a purchase. We reply by email.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-cream">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Email</p>
                  <a href={`mailto:${company.email}`} className="text-sm hover:text-accent">
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-cream">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Address</p>
                  <p className="text-sm leading-relaxed">
                    {company.address.street}
                    <br />
                    {company.address.city}, {company.address.state} {company.address.zip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-2xl">Send a message</h2>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center py-8 text-center">
                <CheckCircle className="h-10 w-10 text-forest" />
                <p className="mt-4 text-lg font-medium">Message sent</p>
                <p className="mt-2 text-sm text-muted-foreground">Thank you. We will reply by email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required className="mt-1.5 rounded-none" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required className="mt-1.5 rounded-none" placeholder="you@email.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required className="mt-1.5 rounded-none" placeholder="How can we help?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required className="mt-1.5 rounded-none" placeholder="Tell us more..." rows={5} />
                </div>
                <Button type="submit" size="lg">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
