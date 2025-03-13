
import { useState } from "react";
import { ShoppingBag, Filter } from "lucide-react";
import ProductCard, { Product } from "./ProductCard";
import { cn } from "@/lib/utils";

interface ProductListProps {
  products: Product[];
  className?: string;
}

const ProductList = ({ products, className }: ProductListProps) => {
  const [filters, setFilters] = useState({
    category: "All",
    sort: "carbon-footprint",
  });

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products
    .filter(product => filters.category === "All" || product.category === filters.category)
    .sort((a, b) => {
      switch (filters.sort) {
        case "carbon-footprint":
          return a.carbonFootprint - b.carbonFootprint;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "sustainability":
          return b.sustainabilityScore - a.sustainabilityScore;
        default:
          return 0;
      }
    });

  return (
    <div className={cn("space-y-8", className)}>
      {/* Filters Section */}
      <div className="bg-natural-beige/30 rounded-xl p-5 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            <h3 className="font-medium">Filters</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilters({ ...filters, category })}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm transition-all duration-300",
                  filters.category === category
                    ? "bg-primary text-white"
                    : "bg-white text-foreground hover:bg-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex items-center">
            <select
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
              className="bg-white rounded-lg border border-border px-3 py-1.5 text-sm"
            >
              <option value="carbon-footprint">Lowest Carbon Footprint</option>
              <option value="sustainability">Highest Sustainability</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredProducts.length} products found
        </p>
        
        <button className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          <ShoppingBag className="h-4 w-4" />
          View Cart
        </button>
      </div>
      
      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              className={`animate-delay-${(index % 5) * 100}`}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="bg-muted rounded-full p-4 mb-4">
            <ShoppingBag className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="font-medium text-lg mb-1">No products found</h3>
          <p className="text-muted-foreground max-w-md">
            Try adjusting your filters to find what you're looking for
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
