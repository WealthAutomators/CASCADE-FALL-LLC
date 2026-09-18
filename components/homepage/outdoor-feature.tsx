import Image from "next/image";
import Link from "next/link";
import { homepageOutdoorSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

export function OutdoorFeature() {
  const products = getProductsBySlugs(homepageOutdoorSlugs);

  return (
    <section className="py-16 md:py-24">
      <div className="relative min-h-[420px] overflow-hidden lg:min-h-[520px]">
        <Image
          src="/banners/outdoor.jpg"
          alt="Forest canopy in filtered light"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <Container className="relative flex min-h-[420px] items-end py-12 lg:min-h-[520px] lg:py-16">
          <div className="max-w-xl text-ivory">
            <p className="text-[11px] uppercase tracking-[0.28em] text-stone">Everyday adventure</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Outside, without the costume.</h2>
            <p className="mt-4 text-sm leading-relaxed text-mist md:text-base">
              Tools for walks, ridgelines, and weather — designed to live beside your home pieces, not apart from them.
            </p>
            <Button asChild size="lg" className="mt-8 bg-ivory text-ink hover:bg-cream">
              <Link href="/categories/outdoor">Shop Outdoor</Link>
            </Button>
          </div>
        </Container>
      </div>
      <Container className="pt-10 md:pt-14">
        <SectionHeading title="For the trail and the porch" viewMoreLink="/categories/outdoor" className="mb-8" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
