import { Compass, RotateCcw, Shield, Truck } from "lucide-react";
import { features } from "@/data/homepage";
import { Container } from "@/components/ui/container";

const iconMap = {
  truck: Truck,
  shield: Shield,
  rotate: RotateCcw,
  headphones: Compass,
  star: Compass,
};

export function FeaturesRow() {
  return (
    <section className="border-b border-border bg-card py-8 md:py-10">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Truck;
            return (
              <div key={feature.id} className="flex items-start gap-4">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <h3 className="text-[12px] font-medium uppercase tracking-[0.16em]">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
