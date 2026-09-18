"use client";

import Image from "next/image";
import Link from "next/link";
import { homepageEditorialSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function EditorialShowcase() {
  const products = getProductsBySlugs(homepageEditorialSlugs);
  const [lead, ...rest] = products;
  if (!lead) return null;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Edit"
          title="Objects with a slower pace"
          subtitle="A sweater, a lamp, a bag — pieces that hold up to weather and rooms alike."
        />
        <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
          <Link href={`/product/${lead.slug}`} className="group relative overflow-hidden bg-cream lg:col-span-7">
            <div className="relative aspect-[4/5] md:aspect-[5/4] lg:aspect-auto lg:min-h-[560px]">
              <Image
                src={lead.images[0]}
                alt={lead.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-stone">{lead.category}</p>
                <h3 className="mt-2 font-display text-3xl text-ivory md:text-4xl">{lead.name}</h3>
                <p className="mt-2 text-sm text-mist">{formatPrice(lead.salePrice ?? lead.price)}</p>
              </div>
            </div>
          </Link>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="group relative overflow-hidden bg-cream">
                <div className="relative aspect-[16/10] lg:min-h-[268px]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 50vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-stone">{product.category}</p>
                    <h3 className="mt-1 font-display text-2xl text-ivory">{product.name}</h3>
                    <p className="mt-1 text-sm text-mist">{formatPrice(product.salePrice ?? product.price)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
