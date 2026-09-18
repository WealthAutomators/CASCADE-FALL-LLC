"use client";

import { homepageDealsSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function DealsOfTheDay() {
  const deals = getProductsBySlugs(homepageDealsSlugs);

  return (
    <section className="border-y border-border bg-card py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Secondary edit"
          title="The current edit"
          subtitle="A smaller set of pieces marked down or newly highlighted."
          viewMoreLink="/shop?sale=true"
          viewMoreText="Shop the edit"
        />
        <Carousel slidesToShow={4} className="px-8">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
