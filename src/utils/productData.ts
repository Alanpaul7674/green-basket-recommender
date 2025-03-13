
import { Product } from "../components/ProductCard";

// Fashion product images (using placeholder URLs for now)
const productImages = [
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580651214613-f4692d6d138f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566958769312-52a0d82c0a20?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
];

// Fashion brands focused on sustainability
const brands = [
  "EcoWear",
  "Sustainable Threads",
  "GreenStitch",
  "Terra",
  "Organic Basics",
  "Conscious Couture",
  "Pure",
  "Ethica",
  "Reformation",
  "Patagonia",
  "Everlane",
  "Stella McCartney"
];

// Product categories
const categories = [
  "Tops",
  "Dresses",
  "Jeans",
  "Outerwear",
  "Activewear",
  "Shoes",
  "Accessories"
];

// Sustainable materials
const materials = [
  "Organic Cotton",
  "Recycled Polyester",
  "Hemp",
  "Linen",
  "Tencel",
  "Bamboo",
  "Modal",
  "Recycled Wool",
  "Cork",
  "Deadstock Fabric",
  "Econyl",
  "Piñatex"
];

// Generate product names based on category
const generateProductName = (category: string): string => {
  const topNames = ["Classic Tee", "Organic Button-up", "Bamboo Blouse", "Linen Shirt", "Hemp Henley"];
  const dressNames = ["Midi Wrap Dress", "Organic Shift Dress", "Hemp Maxi", "Linen Sundress", "Tencel Slip Dress"];
  const jeansNames = ["Recycled Straight Leg", "Organic High-Rise", "Hemp Blend Denim", "Classic Sustainable", "Eco-Wash Jeans"];
  const outerwearNames = ["Recycled Puffer", "Hemp Jacket", "Organic Trench", "Sustainable Cardigan", "Upcycled Coat"];
  const activewearNames = ["Recycled Leggings", "Bamboo Yoga Top", "Eco Performance Tee", "Organic Track Pants", "Sustainable Sports Bra"];
  const shoesNames = ["Cork Sandals", "Recycled Sneakers", "Hemp Espadrilles", "Ethical Flats", "Vegan Leather Boots"];
  const accessoriesNames = ["Organic Tote", "Recycled Scarf", "Hemp Cap", "Sustainable Wallet", "Upcycled Jewelry"];
  
  switch (category) {
    case "Tops": return topNames[Math.floor(Math.random() * topNames.length)];
    case "Dresses": return dressNames[Math.floor(Math.random() * dressNames.length)];
    case "Jeans": return jeansNames[Math.floor(Math.random() * jeansNames.length)];
    case "Outerwear": return outerwearNames[Math.floor(Math.random() * outerwearNames.length)];
    case "Activewear": return activewearNames[Math.floor(Math.random() * activewearNames.length)];
    case "Shoes": return shoesNames[Math.floor(Math.random() * shoesNames.length)];
    case "Accessories": return accessoriesNames[Math.floor(Math.random() * accessoriesNames.length)];
    default: return "Sustainable Item";
  }
};

// Generate random product data
const generateProducts = (count: number): Product[] => {
  const products: Product[] = [];
  
  for (let i = 0; i < count; i++) {
    // Assign random values with a focus on sustainability metrics
    const category = categories[Math.floor(Math.random() * categories.length)];
    const name = generateProductName(category);
    const brand = brands[Math.floor(Math.random() * brands.length)];
    
    // Generate different levels of sustainability
    const sustainabilityScore = Math.floor(Math.random() * 101); // 0-100
    
    // Carbon footprint inversely related to sustainability (lower is better)
    const carbonFootprint = Math.max(1, Math.round(20 - (sustainabilityScore / 10) + (Math.random() * 4 - 2)));
    
    // Price somewhat correlated with sustainability (ethical production costs more)
    const basePrice = category === "Accessories" ? 30 : 
                      category === "Tops" ? 45 : 
                      category === "Shoes" ? 85 : 60;
    const sustainabilityPremium = (sustainabilityScore / 100) * 30; // Up to 30% premium
    const price = Math.round(basePrice + sustainabilityPremium);
    
    // Random product materials (2-3 materials per product)
    const materialCount = Math.floor(Math.random() * 2) + 2;
    const productMaterials = [];
    for (let j = 0; j < materialCount; j++) {
      const material = materials[Math.floor(Math.random() * materials.length)];
      if (!productMaterials.includes(material)) {
        productMaterials.push(material);
      }
    }
    
    // Generate product description
    const descriptions = [
      `Made with ${productMaterials.join(" and ")} for minimal environmental impact.`,
      `Sustainable ${category.toLowerCase()} crafted from ${productMaterials[0]} with eco-friendly production methods.`,
      `This ethical ${name.toLowerCase()} features ${productMaterials.join(", ")} and reduces water waste.`,
      `${brand}'s commitment to sustainability shines in this ${name.toLowerCase()} made from ${productMaterials[0]}.`,
      `Reduce your fashion footprint with this ${name.toLowerCase()} made from ${productMaterials.join(" and ")}.`
    ];
    
    products.push({
      id: `product-${i + 1}`,
      name,
      brand,
      price,
      image: productImages[i % productImages.length],
      category,
      carbonFootprint,
      sustainabilityScore,
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      materials: productMaterials,
    });
  }
  
  // Sort by carbon footprint (low to high - most sustainable first)
  return products.sort((a, b) => a.carbonFootprint - b.carbonFootprint);
};

export const products = generateProducts(12);
