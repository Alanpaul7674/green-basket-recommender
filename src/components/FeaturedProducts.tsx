
import { ArrowRight } from "lucide-react";
import { Product } from "./ProductCard";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

interface FeaturedProductsProps {
  products: Product[];
  className?: string;
}

const FeaturedProducts = ({ products, className }: FeaturedProductsProps) => {
  // Get the 4 products with the lowest carbon footprint
  const sustainableProducts = [...products]
    .sort((a, b) => a.carbonFootprint - b.carbonFootprint)
    .slice(0, 4);

  return (
    <div className={cn("section-container", className)}>
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div className="animate-fade-up">
          <h2 className="heading-lg mb-2">Most Sustainable Choices</h2>
          <p className="paragraph max-w-2xl">
            These products represent our most eco-friendly options with the lowest carbon footprint in their categories.
          </p>
        </div>
        
        <a 
          href="#products" 
          className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors animate-fade-in"
        >
          View All Products <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
      
      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {sustainableProducts.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            className={`animate-delay-${index * 100}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
