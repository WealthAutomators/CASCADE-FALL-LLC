import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  return (
    <section className="bg-cream/50 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Notes"
          title="From the region"
          subtitle="A few words from people who live with these pieces."
          centered
        />
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.slice(0, 4).map((t) => (
            <div key={t.id} className="bg-card p-6 md:p-8">
              <StarRating rating={t.rating} showCount={false} size="sm" />
              <p className="mt-4 text-sm leading-relaxed text-foreground">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-6 text-sm font-medium">{t.name}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{t.location}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
