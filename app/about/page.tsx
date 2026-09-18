import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.name}`}
        description={company.tagline}
        breadcrumbs={[{ label: "About" }]}
      />

      <Container className="pb-20">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="A catalog for Pacific Northwest living">
            <p>
              CASCADE FALL LLC offers contemporary products for outdoor days, settled interiors, travel, and everyday
              routines. The assortment is useful first — then considered in material, proportion, and finish.
            </p>
            <p className="mt-4">
              The tone is Pacific Northwest without the souvenir shop: weather, timber, rooms at the forest edge, and
              a preference for objects that earn their place.
            </p>
            <p className="mt-4">
              The catalog spans outdoor, home, kitchen, travel, workspace, and personal essentials, kept calm and
              direct so shopping stays useful rather than theatrical.
            </p>
          </PageSection>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Outdoor + home", desc: "Trail tools and living-room pieces in the same catalog, on purpose." },
            { title: "Everyday utility", desc: "Objects chosen because they work, not because they shout." },
            { title: "Quiet design", desc: "Restrained forms, natural tones, and materials you can live with." },
            { title: "Straightforward care", desc: "30-day returns and email support from Bothell, Washington." },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-card p-6 md:p-8">
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <PageSection title="From people who use the pieces" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.slice(0, 4).map((t) => (
              <div key={t.id} className="border border-border bg-card p-6">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Shop the collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
