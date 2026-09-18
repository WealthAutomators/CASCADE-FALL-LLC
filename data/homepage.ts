import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Live closer to the weather.",
    description:
      "A considered collection for home, trail, and travel — useful objects with a Pacific Northwest calm.",
    ctaText: "Shop the collection",
    ctaLink: "/shop",
    secondaryCtaText: "Explore outdoor",
    secondaryCtaLink: "/categories/outdoor",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Thoughtful shipping",
    description: "Complimentary standard shipping on orders over $75.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure checkout",
    description: "Encrypted payment details on every demo order.",
  },
  {
    id: "3",
    icon: "rotate",
    title: "30-day returns",
    description: "Send back unused items in original condition.",
  },
  {
    id: "4",
    icon: "headphones",
    title: "Direct support",
    description: "Reach us by email for orders and product questions.",
  },
];

export const dealsEndTime = "2026-12-31T18:00:00.000Z";

export const homepageDealsSlugs = [
  "ember-trail-lantern",
  "mossweave-area-rug",
  "passline-carry-on",
  "desk-task-light",
  "ridge-polarized-sunglasses",
  "stillwater-ceramic-vase",
] as const;

export const homepageBestsellerSlugs = [
  "trailcrest-hiking-boots",
  "stillwater-stoneware-mug",
  "cedarwool-throw-blanket",
  "sounder-rain-jacket",
  "stillwater-yoga-mat",
  "cascade-dinner-plates",
  "ridge-knit-beanie",
  "fold-leather-wallet",
] as const;

export const homepageFeaturedSlugs = [
  "mist-trail-daypack",
  "cedarwool-throw-blanket",
  "stillwater-stoneware-mug",
  "emberglow-table-lamp",
  "trailcrest-hiking-boots",
  "sounder-weekender-bag",
  "hemlock-wool-sweater",
  "stillwater-ceramic-vase",
] as const;

export const homepageNewArrivalSlugs = [
  "mist-trail-daypack",
  "cascade-trekking-poles",
  "mist-morning-teapot",
  "overland-utility-overshirt",
  "hearth-candle-holder",
  "forest-essential-oils",
  "cedar-desk-planner",
] as const;

export const homepageEditorialSlugs = [
  "hemlock-wool-sweater",
  "emberglow-table-lamp",
  "sounder-weekender-bag",
] as const;

export const homepageOutdoorSlugs = [
  "ridgefield-compact-binoculars",
  "trailcrest-hiking-boots",
  "ember-trail-lantern",
  "cedar-rest-hammock",
] as const;

export const homepageHomeSlugs = [
  "cedarwool-throw-blanket",
  "stillwater-ceramic-vase",
  "cascade-dinner-plates",
  "canopy-floor-lamp",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "The season, edited.",
  description:
    "A smaller set of pieces for cooler mornings, wet sidewalks, and longer evenings indoors.",
  buttonText: "Shop the edit",
  buttonLink: "/shop?sale=true",
  image: "/banners/featured.jpg",
};

export const aboutSection = {
  title: "Made for weather, rooms, and the road between them.",
  description:
    "CASCADE FALL LLC gathers contemporary products that feel at home in the Pacific Northwest — practical, calm, and built for everyday use rather than display alone.",
  checklist: [
    "Outdoor, home, travel, and everyday utility in one catalog",
    "Materials and forms chosen for daily use",
    "Complimentary shipping on orders over $75",
    "Straightforward returns within 30 days",
  ],
  buttonText: "Read the brand story",
  buttonLink: "/about",
  image: "/banners/philosophy.jpg",
};

export const featuredCollection = {
  title: "Featured collection",
  description: "A cross-section of home, trail, and travel — the pieces we return to.",
  bannerImage: "/banners/home-living.jpg",
  categorySlug: "home",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Outdoor", slug: "outdoor" },
  { label: "Home", slug: "home" },
  { label: "Kitchen", slug: "kitchen-dining" },
  { label: "Travel", slug: "travel" },
];

export const newsletter = {
  title: "Notes from the ridge line",
  description: "New arrivals, seasonal edits, and quiet product stories. No noise.",
  placeholder: "Email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
