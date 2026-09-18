import Image from "next/image";
import Link from "next/link";
import { homepageHomeSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

export function HomeLivingFeature() {
  const products = getProductsBySlugs(homepageHomeSlugs);

  return (
    <section className="bg-cream/70 py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-moss">Home & living</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Rooms that hold weather in.</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Throws, ceramics, and light — pieces for interiors that sit at the edge of forest and city.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/categories/home">Shop Home</Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-7">
            <Image
              src="/banners/home-living.jpg"
              alt="Contemporary living interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
