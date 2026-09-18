import { Category } from "@/types";
import { products } from "./products";

function count(slug: string) {
  return products.filter((p) => p.categorySlug === slug).length;
}

export const categories: Category[] = [
  {
    id: "1",
    slug: "outdoor",
    name: "Outdoor",
    image: "/categories/outdoor.jpg",
    description: "Trail-ready tools and quiet gear for days outside.",
    productCount: count("outdoor"),
  },
  {
    id: "2",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Textiles, objects, and pieces that settle a room.",
    productCount: count("home"),
  },
  {
    id: "3",
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    image: "/categories/kitchen-dining.jpg",
    description: "Daily tableware and tools for unhurried meals.",
    productCount: count("kitchen-dining"),
  },
  {
    id: "4",
    slug: "travel",
    name: "Travel",
    image: "/categories/travel.jpg",
    description: "Bags and small goods for short trips and longer roads.",
    productCount: count("travel"),
  },
  {
    id: "5",
    slug: "workspace",
    name: "Workspace",
    image: "/categories/workspace.jpg",
    description: "Desk tools for focused work at home or on the move.",
    productCount: count("workspace"),
  },
  {
    id: "6",
    slug: "apparel",
    name: "Apparel",
    image: "/categories/apparel.jpg",
    description: "Layers for rain, cool mornings, and everyday wear.",
    productCount: count("apparel"),
  },
  {
    id: "7",
    slug: "accessories",
    name: "Accessories",
    image: "/categories/accessories.jpg",
    description: "Small essentials that finish a day outdoors or in town.",
    productCount: count("accessories"),
  },
  {
    id: "8",
    slug: "fitness-wellness",
    name: "Fitness & Wellness",
    image: "/categories/fitness-wellness.jpg",
    description: "Simple movement tools for recovery and routine.",
    productCount: count("fitness-wellness"),
  },
  {
    id: "9",
    slug: "lighting",
    name: "Lighting",
    image: "/categories/lighting.jpg",
    description: "Lamps and holders that warm a room without noise.",
    productCount: count("lighting"),
  },
  {
    id: "10",
    slug: "outdoor-living",
    name: "Outdoor Living",
    image: "/categories/outdoor-living.jpg",
    description: "Pieces for porches, gardens, and slow outdoor hours.",
    productCount: count("outdoor-living"),
  },
  {
    id: "11",
    slug: "personal-essentials",
    name: "Personal Essentials",
    image: "/categories/personal-essentials.jpg",
    description: "Grooming, scent, and daily care with a quiet finish.",
    productCount: count("personal-essentials"),
  },
  {
    id: "12",
    slug: "gifts",
    name: "Gifts",
    image: "/categories/gifts.jpg",
    description: "Considered objects for birthdays, hosts, and thank-yous.",
    productCount: count("gifts"),
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
