"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const lifestyleSlugs = ["outdoor", "home", "kitchen-dining", "travel", "apparel", "outdoor-living"];

export function CategoryCarousel() {
  const tiles = categories.filter((c) => lifestyleSlugs.includes(c.slug));

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Collections"
          title="Shop by lifestyle"
          subtitle="Outdoor days, settled rooms, and the travel in between."
          viewMoreLink="/categories"
          viewMoreText="All collections"
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {tiles.map((category, index) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className={`group relative overflow-hidden bg-cream ${
                index === 0 || index === 5 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 || index === 5 ? "aspect-[4/3] lg:aspect-[5/4]" : "aspect-[3/4]"}`}>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-stone">{category.productCount} pieces</p>
                  <h3 className="mt-1 font-display text-xl text-ivory md:text-2xl">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
