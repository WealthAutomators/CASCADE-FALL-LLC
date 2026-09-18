/**
 * Downloads cinematic Pacific Northwest lifestyle photography for hero, editorial, and category tiles.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = path.join(ROOT, "public");

const TARGETS = [
  { file: "hero/hero-1.jpg", id: "photo-1470071459604-3b5ec3a7fe05", w: 2400 },
  { file: "banners/about.jpg", id: "photo-1449155994449-d69d18c735c9", w: 1800 },
  { file: "banners/featured.jpg", id: "photo-1506905925346-21bda4d32df4", w: 1800 },
  { file: "banners/outdoor.jpg", id: "photo-1418065460487-3e41b0a2f1e3", w: 1800 },
  { file: "banners/home-living.jpg", id: "photo-1600210492493-0946911123ea", w: 1800 },
  { file: "banners/philosophy.jpg", id: "photo-1426604966848-d7adac402bff", w: 1800 },
  { file: "banners/travel.jpg", id: "photo-1469854523086-cc02fe5d8800", w: 1600 },
  { file: "og/og-share.jpg", id: "photo-1470071459604-3b5ec3a7fe05", w: 1200 },
  { file: "categories/outdoor.jpg", id: "photo-1441974231531-c6227db76b6e", w: 1200 },
  { file: "categories/home.jpg", id: "photo-1600566753190-17f0baa2a6c3", w: 1200 },
  { file: "categories/kitchen-dining.jpg", id: "photo-1556909114-f6e7ad7d313d", w: 1200 },
  { file: "categories/travel.jpg", id: "photo-1488646953014-85cb44e3f2ea", w: 1200 },
  { file: "categories/workspace.jpg", id: "photo-1497366216548-37526070297c", w: 1200 },
  { file: "categories/apparel.jpg", id: "photo-1520903920243-00d872a2d1c9", w: 1200 },
  { file: "categories/accessories.jpg", id: "photo-1523170335258-f5ed11844a49", w: 1200 },
  { file: "categories/fitness-wellness.jpg", id: "photo-1544367567-0f2fcb009e0b", w: 1200 },
  { file: "categories/lighting.jpg", id: "photo-1513506003901-1e6a229e2d15", w: 1200 },
  { file: "categories/outdoor-living.jpg", id: "photo-1600210492486-724fe5c67fb0", w: 1200 },
  { file: "categories/personal-essentials.jpg", id: "photo-1600857544200-b2f888a9e2bf", w: 1200 },
  { file: "categories/gifts.jpg", id: "photo-1513885535751-8b9238bd345a", w: 1200 },
];

function url(id, w) {
  return `https://images.unsplash.com/${id}?fm=jpg&q=85&w=${w}&auto=format&fit=crop`;
}

async function download(target) {
  const dest = path.join(PUBLIC, target.file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const res = await fetch(url(target.id, target.w), {
    headers: { "User-Agent": "CascadeFallLLC/1.0 (lifestyle-images)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`${target.file} HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) throw new Error(`${target.file} too small (${buf.length})`);
  fs.writeFileSync(dest, buf);
  console.log("OK", target.file, Math.round(buf.length / 1024) + "kb");
}

for (const target of TARGETS) {
  try {
    await download(target);
  } catch (err) {
    console.error("FAIL", target.file, err.message);
  }
}
