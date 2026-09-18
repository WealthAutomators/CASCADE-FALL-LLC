import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <Image
        src="/banners/about.jpg"
        alt="Cabin architecture at the forest edge"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/40" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-[1400px] items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-xl text-ivory">
          <p className="text-[11px] uppercase tracking-[0.28em] text-stone">Place</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Architecture at the edge of the trees.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-mist md:text-base">
            CASCADE FALL LLC is shaped by Pacific Northwest light — mist, timber, and rooms that open toward weather.
            The catalog is built for that life: useful, calm, and contemporary.
          </p>
          <Button asChild size="lg" className="mt-8 bg-ivory text-ink hover:bg-cream">
            <Link href="/about">The brand story</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
