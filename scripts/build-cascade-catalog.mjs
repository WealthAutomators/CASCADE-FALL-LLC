/**
 * Selects semantically matched product images from the shared library
 * and copies them into public/products and public/categories.
 * Does not modify the library.
 */
import { copyFileSync, mkdirSync, existsSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  pick,
  pickMany,
  absolutePath,
} from "/Users/solomon/Documents/Ecommerce-Product-Library/scripts/select-image.mjs";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const PRODUCT_DIR = join(ROOT, "public", "products");
const CATEGORY_DIR = join(ROOT, "public", "categories");

mkdirSync(PRODUCT_DIR, { recursive: true });
mkdirSync(CATEGORY_DIR, { recursive: true });

const catalog = [
  // Outdoor
  { slug: "ridgefield-compact-binoculars", query: "binoculars", category: "Outdoor", categorySlug: "outdoor" },
  { slug: "ember-trail-lantern", query: "lantern", category: "Outdoor", categorySlug: "outdoor" },
  { slug: "trailcrest-hiking-boots", query: "hiking boots", category: "Outdoor", categorySlug: "outdoor" },
  { slug: "true-north-compass", query: "compass", category: "Outdoor", categorySlug: "outdoor" },
  { slug: "cascade-trekking-poles", query: "trekking poles", category: "Outdoor", categorySlug: "outdoor" },

  // Home
  { slug: "cedarwool-throw-blanket", query: "throw blanket", category: "Home", categorySlug: "home" },
  { slug: "stillwater-ceramic-vase", query: "vase", category: "Home", categorySlug: "home" },
  { slug: "hearthstone-cushion", query: "cushion", category: "Home", categorySlug: "home" },
  { slug: "timberline-wall-clock", query: "wall clock", category: "Home", categorySlug: "home" },
  { slug: "mossweave-area-rug", query: "area rug", category: "Home", categorySlug: "home" },

  // Kitchen & Dining
  { slug: "stonefire-cast-skillet", query: "skillet", category: "Kitchen & Dining", categorySlug: "kitchen-dining" },
  { slug: "stillwater-stoneware-mug", query: "mug", category: "Kitchen & Dining", categorySlug: "kitchen-dining" },
  { slug: "ridge-burr-coffee-grinder", query: "coffee grinder", category: "Kitchen & Dining", categorySlug: "kitchen-dining" },
  { slug: "rivergrain-cutting-board", query: "cutting board", category: "Kitchen & Dining", categorySlug: "kitchen-dining" },
  { slug: "mist-morning-teapot", query: "teapot", category: "Kitchen & Dining", categorySlug: "kitchen-dining" },
  { slug: "cascade-dinner-plates", query: "dinner plate", category: "Kitchen & Dining", categorySlug: "kitchen-dining" },

  // Travel
  { slug: "sounder-weekender-bag", query: "weekender bag", category: "Travel", categorySlug: "travel" },
  { slug: "passline-carry-on", query: "suitcase", category: "Travel", categorySlug: "travel" },
  { slug: "mist-trail-daypack", query: "daypack", category: "Travel", categorySlug: "travel" },
  { slug: "waymark-luggage-tag", query: "luggage tag", category: "Travel", categorySlug: "travel" },

  // Workspace
  { slug: "linen-field-notebook", query: "notebook", category: "Workspace", categorySlug: "workspace" },
  { slug: "cedar-desk-planner", query: "planner", category: "Workspace", categorySlug: "workspace" },
  { slug: "ridge-laptop-stand", query: "laptop stand", category: "Workspace", categorySlug: "workspace" },
  { slug: "graphite-desk-pen", query: "pen", category: "Workspace", categorySlug: "workspace" },

  // Apparel
  { slug: "sounder-rain-jacket", query: "rain jacket", category: "Apparel", categorySlug: "apparel" },
  { slug: "hemlock-wool-sweater", query: "sweater", category: "Apparel", categorySlug: "apparel" },
  { slug: "ridge-knit-beanie", query: "beanie", category: "Apparel", categorySlug: "apparel" },
  { slug: "overland-utility-overshirt", query: "overshirt", category: "Apparel", categorySlug: "apparel" },

  // Accessories
  { slug: "sounder-compact-umbrella", query: "umbrella", category: "Accessories", categorySlug: "accessories" },
  { slug: "cedar-wool-scarf", query: "scarf", category: "Accessories", categorySlug: "accessories" },
  { slug: "trail-leather-belt", query: "belt", category: "Accessories", categorySlug: "accessories" },
  { slug: "field-analog-watch", query: "watch", category: "Accessories", categorySlug: "accessories" },

  // Fitness & Wellness
  { slug: "stillwater-yoga-mat", query: "yoga mat", category: "Fitness & Wellness", categorySlug: "fitness-wellness" },
  { slug: "balance-yoga-block", query: "yoga block", category: "Fitness & Wellness", categorySlug: "fitness-wellness" },
  { slug: "recovery-foam-roller", query: "foam roller", category: "Fitness & Wellness", categorySlug: "fitness-wellness" },
  { slug: "trail-jump-rope", query: "jump rope", category: "Fitness & Wellness", categorySlug: "fitness-wellness" },

  // Lighting
  { slug: "emberglow-table-lamp", query: "table lamp", category: "Lighting", categorySlug: "lighting" },
  { slug: "canopy-floor-lamp", query: "floor lamp", category: "Lighting", categorySlug: "lighting" },
  { slug: "desk-task-light", query: "desk light", category: "Lighting", categorySlug: "lighting" },
  { slug: "hearth-candle-holder", query: "candle holder", category: "Lighting", categorySlug: "lighting" },

  // Outdoor Living
  { slug: "cedar-rest-hammock", query: "hammock", category: "Outdoor Living", categorySlug: "outdoor-living" },
  { slug: "meadow-picnic-blanket", query: "picnic blanket", category: "Outdoor Living", categorySlug: "outdoor-living" },
  { slug: "hearthstone-fire-pit", query: "fire pit", category: "Outdoor Living", categorySlug: "outdoor-living" },
  { slug: "garden-bird-feeder", query: "bird feeder", category: "Outdoor Living", categorySlug: "outdoor-living" },

  // Personal Essentials
  { slug: "ridge-grooming-set", query: "grooming set", category: "Personal Essentials", categorySlug: "personal-essentials" },
  { slug: "cedar-soap-bar", query: "soap bar", category: "Personal Essentials", categorySlug: "personal-essentials" },
  { slug: "forest-essential-oils", query: "essential oils", category: "Personal Essentials", categorySlug: "personal-essentials" },
  { slug: "mistwood-diffuser", query: "home fragrance diffuser", category: "Personal Essentials", categorySlug: "personal-essentials" },

  // Gifts
  { slug: "hemlock-chess-set", query: "chess set", category: "Gifts", categorySlug: "gifts" },
  { slug: "trail-playing-cards", query: "playing cards", category: "Gifts", categorySlug: "gifts" },
  { slug: "cedar-gift-box", query: "gift box", category: "Gifts", categorySlug: "gifts" },
  { slug: "fold-leather-wallet", query: "wallet", category: "Gifts", categorySlug: "gifts" },
  { slug: "ridge-polarized-sunglasses", query: "sunglasses", category: "Gifts", categorySlug: "gifts" },
];

const used = [];
const results = [];
const failures = [];

function copyAsset(asset, destName) {
  const src = absolutePath(asset);
  if (!existsSync(src)) throw new Error(`Missing library file: ${src}`);
  const dest = join(PRODUCT_DIR, destName);
  copyFileSync(src, dest);
  return `/products/${destName}`;
}

let seed = 170917;
for (const item of catalog) {
  const primary = pick(item.query, { seed: seed++, avoid: used });
  if (!primary) {
    failures.push(item);
    console.error("NO MATCH", item.slug, item.query);
    continue;
  }
  used.push(primary.id);

  const ext = basename(primary.path).split(".").pop();
  const file1 = `${item.slug}-1.${ext}`;
  const images = [copyAsset(primary, file1)];

  const extras = pickMany(item.query, 2, { seed: seed++, avoid: used });
  const second = extras.find((a) => a.id !== primary.id);
  if (second) {
    used.push(second.id);
    const ext2 = basename(second.path).split(".").pop();
    const file2 = `${item.slug}-2.${ext2}`;
    images.push(copyAsset(second, file2));
  }

  results.push({
    ...item,
    assetId: primary.id,
    assetName: primary.name,
    productType: primary.productType,
    libraryPath: primary.path,
    description: primary.description,
    visualDescription: primary.visualDescription,
    images,
  });

  console.log("OK", item.slug.padEnd(36), primary.id, primary.path);
}

const categoryQueries = {
  outdoor: "hiking boots",
  home: "throw blanket",
  "kitchen-dining": "dinner plate",
  travel: "weekender bag",
  workspace: "notebook",
  apparel: "rain jacket",
  accessories: "scarf",
  "fitness-wellness": "yoga mat",
  lighting: "table lamp",
  "outdoor-living": "hammock",
  "personal-essentials": "candle",
  gifts: "gift box",
};

const categoryImages = {};
for (const [slug, query] of Object.entries(categoryQueries)) {
  const asset = pick(query, { seed: seed++, avoid: [] });
  if (!asset) {
    console.error("NO CATEGORY MATCH", slug, query);
    continue;
  }
  const ext = basename(asset.path).split(".").pop();
  const destName = `${slug}.${ext}`;
  const dest = join(CATEGORY_DIR, destName);
  copyFileSync(absolutePath(asset), dest);
  categoryImages[slug] = `/categories/${destName}`;
  console.log("CAT", slug.padEnd(24), asset.path);
}

writeFileSync(
  join(ROOT, "scripts", "catalog-selection.json"),
  JSON.stringify({ generatedAt: new Date().toISOString(), results, categoryImages, failures }, null, 2)
);

console.log("\nSelected", results.length, "products;", failures.length, "failures");
if (failures.length) process.exit(1);
