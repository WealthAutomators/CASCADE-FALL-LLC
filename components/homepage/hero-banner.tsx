"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative min-h-[calc(100dvh-8.5rem)] w-full overflow-hidden bg-ink lg:min-h-[calc(100dvh-9rem)]">
      <Image
        src={slide.image}
        alt={slide.headline}
        fill
        className="object-cover object-[center_62%]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/15" />
      <div className="relative mx-auto flex min-h-[calc(100dvh-8.5rem)] max-w-[1400px] items-end px-4 pb-16 pt-24 sm:px-6 lg:min-h-[calc(100dvh-9rem)] lg:px-8 lg:pb-16">
        <motion.div
          className="max-w-2xl text-ivory"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[11px] uppercase tracking-[0.32em] text-stone">CASCADE FALL LLC</p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-7xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-mist sm:text-lg">{slide.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ivory/50 text-ivory hover:bg-ivory hover:text-ink"
              >
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
