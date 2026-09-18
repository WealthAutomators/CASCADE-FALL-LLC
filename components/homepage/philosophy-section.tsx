import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PhilosophySection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid overflow-hidden lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[520px]">
            <Image
              src={aboutSection.image}
              alt={aboutSection.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-charcoal px-8 py-12 text-ivory md:px-14 md:py-16">
            <p className="text-[11px] uppercase tracking-[0.28em] text-stone">Brand</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">{aboutSection.title}</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-mist">{aboutSection.description}</p>
            <ul className="mt-8 space-y-3 text-sm text-mist">
              {aboutSection.checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-px w-6 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-10 w-fit bg-ivory text-ink hover:bg-cream">
              <Link href={aboutSection.buttonLink}>{aboutSection.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
