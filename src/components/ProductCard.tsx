
import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import CarbonFootprintBadge from "./CarbonFootprintBadge";
import SustainabilityScore from "./SustainabilityScore";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  carbonFootprint: number;
  sustainabilityScore: number;
  description: string;
  materials: string[];
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    toast.success(`Added ${product.name} to cart`);
    // Here you would add the product to cart logic
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  return (
    <div 
      className={cn(
        "group relative flex flex-col rounded-xl overflow-hidden transition-all duration-500 ease-in-out",
        "bg-white border border-border hover:shadow-lg hover:border-primary/20",
        "animate-fade-in",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-secondary/30">
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out",
            isHovered ? "scale-[1.03]" : "scale-100"
          )}
          loading="lazy"
        />
        
        {/* Carbon Footprint Badge */}
        <div className="absolute top-3 left-3">
          <CarbonFootprintBadge 
            footprint={product.carbonFootprint} 
            size="sm"
            showLabel={false}
          />
        </div>
        
        {/* Favorite Button */}
        <button 
          onClick={handleToggleFavorite}
          className={cn(
            "absolute top-3 right-3 rounded-full p-2 transition-all duration-300",
            "bg-white/80 backdrop-blur-sm hover:bg-white",
            isFavorite ? "text-red-500" : "text-muted-foreground"
          )}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
        </button>

        {/* Quick Add Overlay */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/5 flex items-end justify-center p-4",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )}
        >
          <button
            onClick={handleAddToCart}
            className={cn(
              "glass-effect w-full py-2.5 rounded-lg flex items-center justify-center gap-2",
              "text-sm font-medium text-foreground",
              "transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
            )}
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col p-4 gap-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-muted-foreground">{product.brand}</p>
            <h3 className="font-medium text-foreground">{product.name}</h3>
          </div>
          <p className="font-medium">${product.price}</p>
        </div>
        
        <SustainabilityScore 
          score={product.sustainabilityScore} 
          size="sm"
        />
      </div>
    </div>
  );
};

export default ProductCard;
