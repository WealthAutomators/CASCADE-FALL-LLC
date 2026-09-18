import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const colors = {
  primary: "#2B2926",
  accent: "#B65A38",
  light: "#F4EFE6",
  gray: "#D8D1C4",
  white: "#FBF7F0",
};

function createSvg(width, height, bg, label, sublabel = "", textColor = colors.primary) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="Georgia, serif" font-size="${Math.min(width, height) * 0.055}" font-weight="600">${label}</text>
  ${sublabel ? `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="system-ui, sans-serif" font-size="${Math.min(width, height) * 0.03}" opacity="0.7">${sublabel}</text>` : ""}
</svg>`;
}

function createLogo() {
  return fs.readFileSync(path.join(__dirname, "..", "public", "logo", "logo.svg"), "utf8");
}

const root = path.join(__dirname, "..", "public");
fs.mkdirSync(path.join(root, "logo"), { recursive: true });
if (!fs.existsSync(path.join(root, "logo", "logo.svg"))) {
  fs.writeFileSync(path.join(root, "logo", "logo.svg"), createLogo());
}

console.log("Placeholder generator is retained for local SVG fallbacks. Brand assets live in public/logo and public/banners.");
