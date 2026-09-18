import Link from "next/link";
import { promotionalBanner } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="border-y border-border bg-forest text-ivory">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">{promotionalBanner.title}</h2>
          <p className="mt-2 max-w-xl text-sm text-mist">{promotionalBanner.description}</p>
        </div>
        <Button asChild size="lg" className="bg-ivory text-ink hover:bg-cream">
          <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}
