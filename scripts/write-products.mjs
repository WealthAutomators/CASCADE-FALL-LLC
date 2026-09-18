import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const selection = JSON.parse(readFileSync(join(ROOT, "scripts", "catalog-selection.json"), "utf8"));

const details = {
  "ridgefield-compact-binoculars": {
    name: "Ridgefield Compact Binoculars",
    description:
      "A compact optical pair for birding, ridgeline views, and slow walks through the woods. Rubber-armored housing keeps the grip sure in damp Pacific weather.",
    features: ["8× magnification", "Fully coated optics", "Rubber-armored body", "Neck strap included"],
    specifications: { Magnification: "8×32", Focus: "Center wheel", Weight: "18 oz", Finish: "Graphite" },
    price: 89.0,
    rating: 4.7,
    reviews: 142,
    stock: 46,
    featured: true,
    bestseller: true,
    sku: "CF-OD-001",
  },
  "ember-trail-lantern": {
    name: "Ember Trail Lantern",
    description:
      "A portable lantern for porches, cabins, and evening trails. Warm output and a stable base make it as useful on a table as it is on a campsite.",
    features: ["Warm ambient output", "Hanging hook and handle", "Battery powered", "Weather-ready housing"],
    specifications: { Light: "Warm LED", Runtime: "Up to 12 hrs", Power: "Battery", Finish: "Ember Red" },
    price: 42.0,
    salePrice: 34.0,
    rating: 4.6,
    reviews: 98,
    stock: 72,
    badge: "Sale",
    sku: "CF-OD-002",
  },
  "trailcrest-hiking-boots": {
    name: "Trailcrest Hiking Boots",
    description:
      "Sturdy lace-up boots built for uneven ground, wet roots, and long approaches. Supportive ankle structure with a sole that holds on packed dirt and rock.",
    features: ["Supportive ankle collar", "Lug outsole for grip", "Water-resistant upper", "Padded tongue"],
    specifications: { Upper: "Leather and textile", Sole: "Lug rubber", Use: "Trail hiking", Color: "Oak" },
    price: 148.0,
    rating: 4.8,
    reviews: 211,
    stock: 38,
    featured: true,
    bestseller: true,
    sku: "CF-OD-003",
  },
  "true-north-compass": {
    name: "True North Field Compass",
    description:
      "A handheld compass for map work, trail navigation, and teaching orientation. Clear baseplate and a liquid-damped needle that settles quickly.",
    features: ["Liquid-damped needle", "Degree markings", "Lanyard loop", "Pocketable size"],
    specifications: { Type: "Baseplate", Scale: "360°", Housing: "Clear acrylic", Color: "Field Yellow" },
    price: 28.0,
    rating: 4.5,
    reviews: 76,
    stock: 90,
    sku: "CF-OD-004",
  },
  "cascade-trekking-poles": {
    name: "Cascade Trekking Poles",
    description:
      "Paired poles for balance on descents, stream crossings, and longer days with a pack. Adjustable shafts collapse for travel.",
    features: ["Adjustable height", "Wrist straps", "Carbide tips", "Collapsible for packing"],
    specifications: { Material: "Aluminum", Adjustment: "Twist lock", Packed: "26 in", Color: "Graphite" },
    price: 64.0,
    rating: 4.6,
    reviews: 88,
    stock: 54,
    newArrival: true,
    sku: "CF-OD-005",
  },
  "cedarwool-throw-blanket": {
    name: "Cedarwool Knit Throw",
    description:
      "A knitted throw for the arm of a sofa or the foot of a bed. Substantial enough for cool evenings, soft enough for everyday living.",
    features: ["Chunky knit texture", "Generous throw size", "Machine-washable care", "Warm seasonal color"],
    specifications: { Material: "Acrylic knit", Size: "50 × 60 in", Care: "Machine wash cold", Color: "Amber" },
    price: 78.0,
    rating: 4.8,
    reviews: 164,
    stock: 41,
    featured: true,
    bestseller: true,
    sku: "CF-HM-001",
  },
  "stillwater-ceramic-vase": {
    name: "Stillwater Ceramic Vase",
    description:
      "A rounded ceramic vase for dried stems, a single branch, or a quiet arrangement. Glazed in a calm, mineral finish.",
    features: ["Hand-glazed ceramic", "Stable rounded base", "Works with dried or fresh stems", "Indoor display piece"],
    specifications: { Material: "Glazed ceramic", Height: "9 in", Use: "Tabletop", Color: "Stone Grey" },
    price: 48.0,
    rating: 4.7,
    reviews: 91,
    stock: 58,
    featured: true,
    sku: "CF-HM-002",
  },
  "hearthstone-cushion": {
    name: "Hearthstone Linen Cushion",
    description:
      "A woven cushion for layering on a sofa, window seat, or bed. Natural texture that sits comfortably in a contemporary living room.",
    features: ["Woven linen-blend cover", "Hidden zipper", "Supportive insert", "Neutral palette"],
    specifications: { Size: "20 × 20 in", Cover: "Linen blend", Fill: "Polyester insert", Color: "Charcoal" },
    price: 36.0,
    rating: 4.5,
    reviews: 73,
    stock: 80,
    sku: "CF-HM-003",
  },
  "timberline-wall-clock": {
    name: "Timberline Wall Clock",
    description:
      "A quiet wall clock with a plain face and uncluttered hands. Functional enough for a kitchen, considered enough for a hallway.",
    features: ["Silent sweep movement", "Minimal numeral layout", "Easy wall mount", "Battery operated"],
    specifications: { Diameter: "12 in", Movement: "Quartz sweep", Power: "1 AA", Color: "Soft White" },
    price: 44.0,
    rating: 4.6,
    reviews: 67,
    stock: 62,
    sku: "CF-HM-004",
  },
  "mossweave-area-rug": {
    name: "Mossweave Area Rug",
    description:
      "A patterned woven rug that anchors a living room or reading corner. Low pile for everyday traffic with a forest-inspired weave.",
    features: ["Low-pile woven construction", "Non-slip friendly backing zone", "Indoor use", "Patterned surface"],
    specifications: { Size: "5 × 7 ft", Material: "Woven blend", Pile: "Low", Color: "Moss" },
    price: 189.0,
    salePrice: 159.0,
    rating: 4.7,
    reviews: 54,
    stock: 22,
    badge: "Sale",
    featured: true,
    sku: "CF-HM-005",
  },
  "stonefire-cast-skillet": {
    name: "Stonefire Cast Iron Skillet",
    description:
      "A heavy skillet for searing, baking, and moving from stovetop to oven. Pre-seasoned surface that improves with use.",
    features: ["Pre-seasoned cast iron", "Oven-safe handle", "Even heat retention", "Stovetop and oven use"],
    specifications: { Diameter: "10.25 in", Material: "Cast iron", Oven: "Up to 500°F", Finish: "Seasoned black" },
    price: 54.0,
    rating: 4.9,
    reviews: 238,
    stock: 70,
    bestseller: true,
    sku: "CF-KD-001",
  },
  "stillwater-stoneware-mug": {
    name: "Stillwater Stoneware Mug",
    description:
      "A generous ceramic mug for coffee, tea, or a late-day pour. Rounded body and a comfortable loop handle for daily use.",
    features: ["Stoneware body", "Comfortable handle", "Microwave safe", "Everyday capacity"],
    specifications: { Capacity: "12 oz", Material: "Stoneware", Care: "Dishwasher safe", Color: "Mist" },
    price: 22.0,
    rating: 4.8,
    reviews: 186,
    stock: 120,
    featured: true,
    bestseller: true,
    sku: "CF-KD-002",
  },
  "ridge-burr-coffee-grinder": {
    name: "Ridge Burr Coffee Grinder",
    description:
      "A compact mill for grinding beans before brewing. Consistent burrs for pour-over, press, or drip, sized for a counter that stays uncluttered.",
    features: ["Conical burr grinding", "Adjustable grind range", "Compact hopper", "Easy to clean"],
    specifications: { Type: "Burr", Settings: "Multiple", Capacity: "6 oz beans", Color: "Matte Black" },
    price: 68.0,
    rating: 4.6,
    reviews: 119,
    stock: 48,
    sku: "CF-KD-003",
  },
  "rivergrain-cutting-board": {
    name: "Rivergrain Serving Board",
    description:
      "A wooden board for prepping vegetables or presenting cheese and bread. Smooth grain and a generous surface for kitchen and table.",
    features: ["Solid wood surface", "Juice groove", "Food-safe oil finish", "Prep or serving"],
    specifications: { Material: "Hardwood", Size: "16 × 10 in", Finish: "Food-safe oil", Care: "Hand wash" },
    price: 46.0,
    rating: 4.7,
    reviews: 102,
    stock: 55,
    featured: true,
    sku: "CF-KD-004",
  },
  "mist-morning-teapot": {
    name: "Mist Morning Teapot",
    description:
      "A teapot for loose-leaf or bagged tea, with a pour that stays controlled. Made for slow mornings and afternoon refills.",
    features: ["Infuser-friendly design", "Comfortable pour handle", "Heat-retaining body", "Stovetop-safe base"],
    specifications: { Capacity: "32 oz", Material: "Ceramic", Use: "Loose leaf or bags", Color: "Warm Clay" },
    price: 52.0,
    rating: 4.5,
    reviews: 64,
    stock: 40,
    newArrival: true,
    sku: "CF-KD-005",
  },
  "cascade-dinner-plates": {
    name: "Cascade Stoneware Plates",
    description:
      "Everyday dinner plates in a quiet stoneware glaze. Substantial without feeling heavy, made for weeknight meals and weekend gatherings.",
    features: ["Stoneware construction", "Chip-resistant rim", "Microwave and dishwasher safe", "Set of four"],
    specifications: { Pieces: "4 plates", Diameter: "10.5 in", Material: "Stoneware", Color: "Pebble" },
    price: 72.0,
    rating: 4.8,
    reviews: 131,
    stock: 36,
    bestseller: true,
    sku: "CF-KD-006",
  },
  "sounder-weekender-bag": {
    name: "Sounder Weekender Duffel",
    description:
      "A soft holdall sized for overnight stays, ferry trips, and two-night cabin weekends. Wide opening and a shoulder strap for easy carry.",
    features: ["Wide top opening", "Detachable shoulder strap", "Interior zip pocket", "Short-trip capacity"],
    specifications: { Capacity: "40 L", Material: "Canvas and leather trim", Carry: "Handles + strap", Color: "Oak" },
    price: 128.0,
    rating: 4.7,
    reviews: 93,
    stock: 34,
    featured: true,
    bestseller: true,
    sku: "CF-TR-001",
  },
  "passline-carry-on": {
    name: "Passline Travel Case",
    description:
      "A latched travel case with a classic profile for train platforms, overnight stays, and considered packing. Structured enough to stand, light enough to carry.",
    features: ["Latch closure", "Top handle", "Structured shell", "Interior packing space"],
    specifications: { Style: "Carry case", Closure: "Latches", Carry: "Top handle", Color: "Travel Tan" },
    price: 159.0,
    salePrice: 139.0,
    rating: 4.6,
    reviews: 47,
    stock: 21,
    badge: "Sale",
    sku: "CF-TR-002",
  },
  "mist-trail-daypack": {
    name: "Mist Trail Canvas Daypack",
    description:
      "A canvas daypack with leather trim for commuting, trailheads, and Saturday errands. Comfortable straps and a quiet profile that works in town or woods.",
    features: ["Canvas body with leather trim", "Buckle-front closure", "Padded straps", "Everyday 18 L carry"],
    specifications: { Capacity: "18 L", Material: "Canvas and leather", Use: "Day carry", Color: "Forest" },
    price: 98.0,
    rating: 4.8,
    reviews: 156,
    stock: 44,
    featured: true,
    bestseller: true,
    newArrival: true,
    sku: "CF-TR-003",
  },
  "waymark-luggage-tag": {
    name: "Waymark Luggage Tag",
    description:
      "A simple tag that attaches to a bag handle so luggage stays identifiable. Durable face and a secure loop.",
    features: ["Secure handle loop", "Writable ID window", "Flexible construction", "Fits most bag handles"],
    specifications: { Material: "Leather-look PVC", Attachment: "Loop strap", Use: "Luggage ID", Color: "Tan" },
    price: 16.0,
    rating: 4.4,
    reviews: 58,
    stock: 140,
    sku: "CF-TR-004",
  },
  "linen-field-notebook": {
    name: "Linen Field Notebook",
    description:
      "A bound hardcover notebook for lists, sketches, and field notes. Lies reasonably flat and takes ink without bleed-through on standard pages.",
    features: ["Hardcover binding", "Lined pages", "Ribbon marker", "Elastic closure"],
    specifications: { Size: "A5", Pages: "192 lined", Cover: "Cloth hardcover", Color: "Sand" },
    price: 24.0,
    rating: 4.7,
    reviews: 121,
    stock: 95,
    featured: true,
    sku: "CF-WS-001",
  },
  "cedar-desk-planner": {
    name: "Cedar Desk Planner",
    description:
      "A weekly planner for laying out work, travel, and household days. Undated pages so it starts whenever you do.",
    features: ["Weekly layout", "Undated pages", "Notes column", "Lay-flat binding"],
    specifications: { Format: "Weekly undated", Size: "8 × 10 in", Paper: "100 gsm", Color: "Ivory" },
    price: 32.0,
    rating: 4.5,
    reviews: 77,
    stock: 68,
    newArrival: true,
    sku: "CF-WS-002",
  },
  "ridge-laptop-stand": {
    name: "Ridge Laptop Stand",
    description:
      "A raised stand that brings a laptop to a more comfortable viewing height. Open design keeps the machine cooler during long work sessions.",
    features: ["Ergonomic viewing height", "Open ventilation", "Stable base", "Fits most 13–16 in laptops"],
    specifications: { Material: "Aluminum", Fit: "13–16 in", Finish: "Anodized", Color: "Silver" },
    price: 58.0,
    rating: 4.6,
    reviews: 84,
    stock: 51,
    sku: "CF-WS-003",
  },
  "graphite-desk-pen": {
    name: "Graphite Desk Pen",
    description:
      "A refillable fountain pen for handwriting, correspondence, and quiet desk work. Balanced barrel with a reliable nib.",
    features: ["Stainless steel nib", "Cartridge or converter fill", "Balanced barrel", "Includes starter cartridge"],
    specifications: { Nib: "Medium steel", Fill: "Cartridge / converter", Length: "5.4 in", Color: "Graphite" },
    price: 38.0,
    rating: 4.5,
    reviews: 62,
    stock: 74,
    sku: "CF-WS-004",
  },
  "sounder-rain-jacket": {
    name: "Sounder Rain Jacket",
    description:
      "A hooded shell for wet sidewalks, ferry decks, and forest-edge walks. Packable enough for a daypack, protective enough for a full day of rain.",
    features: ["Water-resistant shell", "Adjustable hood", "Packable weight", "Two hand pockets"],
    specifications: { Shell: "Ripstop nylon", Waterproofing: "DWR coating", Weight: "11 oz", Color: "Charcoal" },
    price: 118.0,
    rating: 4.7,
    reviews: 109,
    stock: 40,
    featured: true,
    bestseller: true,
    sku: "CF-AP-001",
  },
  "hemlock-wool-sweater": {
    name: "Hemlock Knit Sweater",
    description:
      "A knitted pullover for cooler months. Substantial stitch, easy layering, and a silhouette that works over a tee or under a jacket.",
    features: ["Ribbed cuffs and hem", "Crew neck", "Midweight knit", "Everyday layering"],
    specifications: { Material: "Cotton-wool blend", Fit: "Regular", Care: "Hand wash", Color: "Slate" },
    price: 96.0,
    rating: 4.8,
    reviews: 88,
    stock: 33,
    featured: true,
    sku: "CF-AP-002",
  },
  "ridge-knit-beanie": {
    name: "Ridge Knit Beanie",
    description:
      "A knitted beanie that pulls down over the ears. Simple rib, no excess branding, made for cold mornings and windy overlooks.",
    features: ["Rib knit construction", "Covers the ears", "Soft interior", "One size"],
    specifications: { Material: "Acrylic knit", Fit: "One size", Care: "Hand wash", Color: "Graphite" },
    price: 28.0,
    rating: 4.6,
    reviews: 143,
    stock: 110,
    bestseller: true,
    sku: "CF-AP-003",
  },
  "overland-utility-overshirt": {
    name: "Overland Utility Overshirt",
    description:
      "A shirt-cut overlayer worn open or buttoned. Useful chest pockets and a weight that works as a light jacket on mild days.",
    features: ["Chest utility pockets", "Button front", "Shirt-jacket weight", "Easy over a tee"],
    specifications: { Material: "Cotton twill", Fit: "Relaxed", Care: "Machine wash", Color: "Sage" },
    price: 88.0,
    rating: 4.5,
    reviews: 71,
    stock: 42,
    newArrival: true,
    sku: "CF-AP-004",
  },
  "sounder-compact-umbrella": {
    name: "Sounder Compact Umbrella",
    description:
      "A handled umbrella for the kind of rain that arrives without warning. Compact enough for a bag, sturdy enough for a windy block.",
    features: ["Wind-resistant canopy", "Comfortable handle", "Automatic open", "Compact closed length"],
    specifications: { Canopy: "42 in", Closed: "11 in", Frame: "Fiberglass", Color: "Navy" },
    price: 34.0,
    rating: 4.4,
    reviews: 95,
    stock: 86,
    sku: "CF-AC-001",
  },
  "cedar-wool-scarf": {
    name: "Cedar Wool Scarf",
    description:
      "A knitted scarf for wrapping on ferries, morning walks, and cold offices. Generous length with a soft, even stitch.",
    features: ["Soft knit", "Generous wrap length", "Fringe finish", "Year-round cooler days"],
    specifications: { Material: "Wool blend", Size: "12 × 72 in", Care: "Hand wash", Color: "Heather" },
    price: 42.0,
    rating: 4.7,
    reviews: 81,
    stock: 64,
    featured: true,
    sku: "CF-AC-002",
  },
  "trail-leather-belt": {
    name: "Trail Leather Belt",
    description:
      "A leather belt with a simple metal buckle. Everyday width that works with trousers, denim, and travel clothes.",
    features: ["Full-grain look leather", "Metal buckle", "Adjustable holes", "Everyday width"],
    specifications: { Width: "1.5 in", Material: "Leather", Buckle: "Brushed metal", Color: "Brown" },
    price: 48.0,
    rating: 4.6,
    reviews: 74,
    stock: 77,
    sku: "CF-AC-003",
  },
  "field-analog-watch": {
    name: "Field Analog Watch",
    description:
      "An analog wristwatch with a round dial and a strap made for daily wear. Clear markings, no unnecessary complication.",
    features: ["Analog quartz movement", "Readable dial", "Comfortable strap", "Daily water resistance"],
    specifications: { Movement: "Quartz", Case: "40 mm", Water: "5 ATM", Color: "Graphite" },
    price: 129.0,
    rating: 4.5,
    reviews: 66,
    stock: 29,
    sku: "CF-AC-004",
  },
  "stillwater-yoga-mat": {
    name: "Stillwater Yoga Mat",
    description:
      "A rollable mat for yoga, stretching, and floor work at home. Stable grip with enough cushion for knees and joints.",
    features: ["Non-slip surface", "4 mm cushion", "Carry strap", "Closed-cell material"],
    specifications: { Thickness: "4 mm", Size: "72 × 24 in", Material: "TPE", Color: "Slate" },
    price: 48.0,
    rating: 4.7,
    reviews: 198,
    stock: 82,
    featured: true,
    bestseller: true,
    sku: "CF-FW-001",
  },
  "balance-yoga-block": {
    name: "Balance Yoga Block",
    description:
      "A firm block used to support seated and standing poses. Lightweight enough to travel, dense enough to stay put.",
    features: ["Supportive density", "Beveled edges", "Lightweight foam", "Pairs with a mat"],
    specifications: { Size: "9 × 6 × 4 in", Material: "EVA foam", Weight: "6 oz", Color: "Fog" },
    price: 18.0,
    rating: 4.6,
    reviews: 89,
    stock: 130,
    sku: "CF-FW-002",
  },
  "recovery-foam-roller": {
    name: "Recovery Foam Roller",
    description:
      "A firm roller for after-walk mobility and desk-day tightness. Smooth surface for controlled pressure along the back and legs.",
    features: ["High-density foam", "Smooth rolling surface", "Light enough to store", "Includes use guide"],
    specifications: { Length: "18 in", Diameter: "6 in", Material: "EVA foam", Color: "Charcoal" },
    price: 26.0,
    rating: 4.5,
    reviews: 112,
    stock: 91,
    sku: "CF-FW-003",
  },
  "trail-jump-rope": {
    name: "Trail Jump Rope",
    description:
      "A skipping rope with comfortable handles for short cardio sessions at home or on the road. Adjustable length for most heights.",
    features: ["Adjustable cable", "Comfort handles", "Ball-bearing spin", "Packs into a bag"],
    specifications: { Length: "Adjustable to 10 ft", Handles: "PVC", Cable: "Steel coated", Color: "Slate" },
    price: 19.0,
    rating: 4.4,
    reviews: 70,
    stock: 105,
    sku: "CF-FW-004",
  },
  "emberglow-table-lamp": {
    name: "Emberglow Table Lamp",
    description:
      "A ceramic-base table lamp sized for a bedside, console, or reading nook. Soft shade, warm light, and a quiet silhouette.",
    features: ["Ceramic base", "Fabric shade", "Inline switch", "Warm ambient light"],
    specifications: { Height: "18 in", Bulb: "E26 LED compatible", Shade: "Linen", Color: "Sand" },
    price: 86.0,
    rating: 4.8,
    reviews: 97,
    stock: 35,
    featured: true,
    bestseller: true,
    sku: "CF-LT-001",
  },
  "canopy-floor-lamp": {
    name: "Canopy Floor Lamp",
    description:
      "A freestanding lamp that lights a sofa corner or reading chair. Slim profile that does not crowd a room.",
    features: ["Arc or upright ambient light", "Weighted base", "Foot-friendly switch", "Living-room scale"],
    specifications: { Height: "62 in", Bulb: "E26", Base: "Weighted metal", Color: "Brushed Steel" },
    price: 149.0,
    rating: 4.6,
    reviews: 52,
    stock: 24,
    sku: "CF-LT-002",
  },
  "desk-task-light": {
    name: "Ridge Task Light",
    description:
      "An adjustable desk light for evening work, sketching, and reading. Directs light where you need it without glare across the room.",
    features: ["Adjustable arm", "Focused task beam", "Stable clamp or base", "Low-heat LED"],
    specifications: { Light: "LED task", Power: "USB or plug", Mount: "Clip", Color: "Black" },
    price: 39.0,
    salePrice: 32.0,
    rating: 4.5,
    reviews: 83,
    stock: 66,
    badge: "Sale",
    sku: "CF-LT-003",
  },
  "hearth-candle-holder": {
    name: "Hearth Metal Candle Holder",
    description:
      "A metal holder for taper or pillar candles on a table or mantel. Sculptural enough to stay out when unlit.",
    features: ["Metal construction", "Stable base", "Taper compatible", "Indoor accent"],
    specifications: { Material: "Brass-tone metal", Height: "8 in", Use: "Taper candle", Color: "Antique Brass" },
    price: 34.0,
    rating: 4.6,
    reviews: 59,
    stock: 71,
    newArrival: true,
    sku: "CF-LT-004",
  },
  "cedar-rest-hammock": {
    name: "Cedar Rest Hammock",
    description:
      "A fabric hammock for trees, posts, or a backyard frame. Cut for afternoon reading as much as overnight travel.",
    features: ["Durable woven fabric", "Tree-strap compatible", "Compact stuff sack", "Single occupant"],
    specifications: { Length: "9 ft", Capacity: "250 lb", Material: "Nylon", Color: "Fog Grey" },
    price: 72.0,
    rating: 4.7,
    reviews: 104,
    stock: 39,
    featured: true,
    sku: "CF-OL-001",
  },
  "meadow-picnic-blanket": {
    name: "Meadow Picnic Blanket",
    description:
      "A blanket for grass, sand, and park lawns. Water-resistant backing and a size that fits two people plus a small spread.",
    features: ["Water-resistant backing", "Machine-washable top", "Carry handle", "Family picnic size"],
    specifications: { Size: "60 × 70 in", Top: "Fleece", Back: "PE coating", Color: "Teal" },
    price: 48.0,
    rating: 4.6,
    reviews: 87,
    stock: 57,
    sku: "CF-OL-002",
  },
  "hearthstone-fire-pit": {
    name: "Hearthstone Fire Bowl",
    description:
      "An outdoor fire bowl for garden evenings and cabin decks. Deep basin and a stable stance on patio stone.",
    features: ["Steel fire bowl", "Spark screen compatible", "Patio-stable base", "Outdoor use"],
    specifications: { Diameter: "24 in", Material: "Steel", Fuel: "Wood", Color: "Matte Black" },
    price: 168.0,
    rating: 4.7,
    reviews: 61,
    stock: 18,
    featured: true,
    sku: "CF-OL-003",
  },
  "garden-bird-feeder": {
    name: "Garden Bird Feeder",
    description:
      "A hanging feeder that holds seed for garden birds. Clear viewing so you can see when it needs a refill.",
    features: ["Hanging hook", "Seed reservoir", "Weather-aware design", "Easy to fill"],
    specifications: { Capacity: "2 lb seed", Mount: "Hanging", Material: "Plastic and metal", Color: "Clear/Green" },
    price: 29.0,
    rating: 4.5,
    reviews: 79,
    stock: 88,
    sku: "CF-OL-004",
  },
  "ridge-grooming-set": {
    name: "Ridge Grooming Kit",
    description:
      "A compact set of grooming tools packaged for home or travel. Considered pieces without extra clutter.",
    features: ["Travel-ready case", "Essential tools included", "Durable metal finishes", "Gift-ready presentation"],
    specifications: { Pieces: "5-tool kit", Case: "Zip pouch", Use: "Daily grooming", Color: "Steel" },
    price: 54.0,
    rating: 4.6,
    reviews: 68,
    stock: 49,
    sku: "CF-PE-001",
  },
  "cedar-soap-bar": {
    name: "Cedarwood Soap Set",
    description:
      "Plant-oil soap bars presented as a small set. Clean lather for hands and body, wrapped for the bath or a guest room.",
    features: ["Plant-oil formula", "Set of three bars", "Gentle everyday use", "Wrapped presentation"],
    specifications: { Bars: "3 × 4 oz", Scent: "Cedarwood", Base: "Plant oils", Wrap: "Paper" },
    price: 24.0,
    rating: 4.7,
    reviews: 91,
    stock: 102,
    sku: "CF-PE-002",
  },
  "forest-essential-oils": {
    name: "Forest Essential Oil Set",
    description:
      "A small set of aromatic oils for a diffuser or personal ritual. Quiet scents rather than overpowering fragrance.",
    features: ["Dropper bottles", "Diffuser compatible", "Three-scent set", "Amber glass"],
    specifications: { Volume: "3 × 10 ml", Use: "Diffuser", Glass: "Amber", Notes: "Woodland blend" },
    price: 36.0,
    rating: 4.5,
    reviews: 73,
    stock: 60,
    newArrival: true,
    sku: "CF-PE-003",
  },
  "mistwood-diffuser": {
    name: "Mistwood Reed Diffuser",
    description:
      "A reed diffuser that scents a room continuously without flame. Rattan sticks and a bottle sized for a shelf or entry table.",
    features: ["Rattan reeds", "Alcohol-based diffuser oil", "No flame required", "Entry or bedroom scale"],
    specifications: { Volume: "100 ml", Reeds: "8 rattan", Scent: "Wood and moss", Lasts: "8–12 weeks" },
    price: 38.0,
    rating: 4.6,
    reviews: 85,
    stock: 53,
    sku: "CF-PE-004",
  },
  "hemlock-chess-set": {
    name: "Hemlock Chess Set",
    description:
      "Turned chess pieces for unhurried games at the table. Weighted enough to stay put, considered enough to leave displayed.",
    features: ["Turned pieces", "Staunton-inspired forms", "Felted bases", "Display-worthy set"],
    specifications: { King: "3.75 in", Pieces: "32", Material: "Wood composite", Color: "Natural / stained" },
    price: 64.0,
    rating: 4.8,
    reviews: 44,
    stock: 27,
    featured: true,
    sku: "CF-GF-001",
  },
  "trail-playing-cards": {
    name: "Trail Playing Cards",
    description:
      "A deck for games at home, on ferries, and in cabins. Standard index, linen finish, easy shuffle.",
    features: ["Standard 54-card deck", "Linen finish", "Easy shuffle", "Travel tin optional sleeve"],
    specifications: { Cards: "54", Finish: "Linen", Index: "Standard", Color: "Charcoal back" },
    price: 14.0,
    rating: 4.5,
    reviews: 101,
    stock: 160,
    sku: "CF-GF-002",
  },
  "cedar-gift-box": {
    name: "Cedar Presentation Box",
    description:
      "A wrapped presentation box for gifting a CASCADE FALL selection. Ribbon finish ready for birthdays, housewarmings, and thank-yous.",
    features: ["Rigid gift box", "Ribbon detail", "Fits small home goods", "Reusable box"],
    specifications: { Size: "8 × 8 × 4 in", Finish: "Wrapped paper", Closure: "Lid", Color: "Ivory" },
    price: 18.0,
    rating: 4.4,
    reviews: 39,
    stock: 75,
    sku: "CF-GF-003",
  },
  "fold-leather-wallet": {
    name: "Fold Leather Wallet",
    description:
      "A folding leather wallet with card slots and a note section. Slim enough for a pocket, structured enough to hold its shape.",
    features: ["Card slots", "Note compartment", "Slim fold", "Everyday leather"],
    specifications: { Material: "Leather", Slots: "6 card", Style: "Bifold", Color: "Dark Brown" },
    price: 58.0,
    rating: 4.6,
    reviews: 118,
    stock: 61,
    bestseller: true,
    sku: "CF-GF-004",
  },
  "ridge-polarized-sunglasses": {
    name: "Ridge Polarized Sunglasses",
    description:
      "Polarized lenses in a considered frame for bright water, snow, and high-altitude light. Includes a protective sleeve.",
    features: ["Polarized lenses", "UV400 protection", "Lightweight frame", "Protective sleeve"],
    specifications: { Lens: "Polarized", Protection: "UV400", Frame: "Acetate", Color: "Tortoise" },
    price: 72.0,
    salePrice: 58.0,
    rating: 4.5,
    reviews: 92,
    stock: 48,
    badge: "Sale",
    sku: "CF-GF-005",
  },
};

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function fmtSpecs(obj) {
  return Object.entries(obj)
    .map(([k, v]) => `"${esc(k)}": "${esc(v)}"`)
    .join(", ");
}

function fmtList(arr) {
  return arr.map((s) => `"${esc(s)}"`).join(", ");
}

const lines = [];
lines.push('import { Product } from "@/types";');
lines.push("");
lines.push("export const products: Product[] = [");

selection.results.forEach((item, i) => {
  const d = details[item.slug];
  if (!d) throw new Error("Missing details for " + item.slug);
  const images = item.images.map((p) => `"${p}"`).join(", ");
  lines.push("  {");
  lines.push(`    id: "cf${i + 1}",`);
  lines.push(`    slug: "${item.slug}",`);
  lines.push(`    name: "${esc(d.name)}",`);
  lines.push(`    category: "${esc(item.category)}",`);
  lines.push(`    categorySlug: "${item.categorySlug}",`);
  lines.push(`    images: [${images}],`);
  lines.push(`    description: "${esc(d.description)}",`);
  lines.push(`    features: [${fmtList(d.features)}],`);
  lines.push(`    specifications: { ${fmtSpecs(d.specifications)} },`);
  lines.push(`    price: ${d.price},`);
  if (d.salePrice) lines.push(`    salePrice: ${d.salePrice},`);
  lines.push(`    rating: ${d.rating},`);
  lines.push(`    reviews: ${d.reviews},`);
  lines.push(`    stock: ${d.stock},`);
  if (d.badge) lines.push(`    badge: "${d.badge}",`);
  if (d.featured) lines.push("    featured: true,");
  if (d.bestseller) lines.push("    bestseller: true,");
  if (d.newArrival) lines.push("    newArrival: true,");
  lines.push(`    sku: "${d.sku}",`);
  lines.push("  },");
});

lines.push("];");
lines.push("");
lines.push(`export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductsBySlugs(slugs: readonly string[]): Product[] {
  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestsellerProducts(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival);
}

export function getDealProducts(): Product[] {
  return products.filter((p) => p.salePrice);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

export function getRelatedProducts(product: Product, limit = 8): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}

export function getEffectivePrice(product: Product): number {
  return product.salePrice ?? product.price;
}
`);

writeFileSync(join(ROOT, "data", "products.ts"), lines.join("\n"));
console.log("Wrote", selection.results.length, "products");
const missing = selection.results.filter((r) => !details[r.slug]);
if (missing.length) console.error("MISSING", missing.map((m) => m.slug));
