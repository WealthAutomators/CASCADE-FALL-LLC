import { HeroBanner } from "@/components/homepage/hero-banner";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { EditorialShowcase } from "@/components/homepage/editorial-showcase";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { OutdoorFeature } from "@/components/homepage/outdoor-feature";
import { HomeLivingFeature } from "@/components/homepage/home-living-feature";
import { BestSellers } from "@/components/homepage/best-sellers";
import { AboutSection } from "@/components/homepage/about-section";
import { DealsOfTheDay } from "@/components/homepage/deals-of-the-day";
import { PromoStrip } from "@/components/homepage/promo-strip";
import { PhilosophySection } from "@/components/homepage/philosophy-section";
import { Newsletter } from "@/components/homepage/newsletter";
import { FeaturesRow } from "@/components/homepage/features-row";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturesRow />
      <CategoryCarousel />
      <FeaturedCollection />
      <EditorialShowcase />
      <NewArrivals />
      <OutdoorFeature />
      <HomeLivingFeature />
      <BestSellers />
      <AboutSection />
      <DealsOfTheDay />
      <PromoStrip />
      <PhilosophySection />
      <Newsletter />
    </>
  );
}
