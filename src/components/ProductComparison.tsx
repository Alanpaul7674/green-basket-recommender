
import { useState } from "react";
import { X, Plus, BarChart2 } from "lucide-react";
import { Product } from "./ProductCard";
import CarbonFootprintBadge from "./CarbonFootprintBadge";
import SustainabilityScore from "./SustainabilityScore";
import { cn } from "@/lib/utils";

interface ProductComparisonProps {
  products: Product[];
  className?: string;
}

const ProductComparison = ({ products, className }: ProductComparisonProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleComparison = () => {
    setIsOpen(!isOpen);
  };

  const addProduct = (product: Product) => {
    if (selectedProducts.length < 3 && !selectedProducts.some(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const removeProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  const clearAll = () => {
    setSelectedProducts([]);
  };

  return (
    <div className={cn("fixed bottom-0 left-0 right-0 z-50", className)}>
      {/* Comparison Button */}
      <button
        onClick={toggleComparison}
        className={cn(
          "absolute bottom-4 right-4 bg-primary rounded-full p-3 shadow-lg",
          "text-white transition-all duration-300 hover:shadow-xl",
          "flex items-center gap-2"
        )}
      >
        <BarChart2 className="h-5 w-5" />
        <span className={cn(
          "overflow-hidden transition-all duration-300 whitespace-nowrap",
          isOpen ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
        )}>
          Compare Products
        </span>
      </button>

      {/* Comparison Panel */}
      <div
        className={cn(
          "bg-white border-t border-border shadow-lg transition-all duration-500 ease-in-out",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-primary" />
              Compare Products
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={clearAll}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={toggleComparison}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => {
              const product = selectedProducts[index];
              return (
                <div
                  key={index}
                  className={cn(
                    "border rounded-xl p-4 transition-all duration-300 h-64",
                    product
                      ? "bg-white"
                      : "bg-secondary/30 border-dashed flex flex-col items-center justify-center"
                  )}
                >
                  {product ? (
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground">{product.brand}</p>
                          <h4 className="font-medium line-clamp-1">{product.name}</h4>
                          <p className="font-medium text-sm">${product.price}</p>
                        </div>
                        <button
                          onClick={() => removeProduct(product.id)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="relative aspect-[3/2] w-full overflow-hidden bg-secondary/30 rounded-lg mb-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>

                      <div className="mt-auto space-y-2">
                        <CarbonFootprintBadge
                          footprint={product.carbonFootprint}
                          size="sm"
                          className="w-fit"
                        />
                        <SustainabilityScore
                          score={product.sustainabilityScore}
                          size="sm"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Plus className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Select a product to compare
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {selectedProducts.length > 0 && (
            <div className="mt-4 flex justify-center">
              <div className="grid grid-cols-3 gap-4 max-w-2xl w-full">
                <div className="text-right text-sm text-muted-foreground">
                  <p>Price</p>
                  <p>Carbon Footprint</p>
                  <p>Sustainability</p>
                </div>
                {selectedProducts.map((product) => (
                  <div key={product.id} className="text-center text-sm">
                    <p className="font-medium">${product.price}</p>
                    <p className="font-medium">{product.carbonFootprint} kg CO2</p>
                    <p className="font-medium">{product.sustainabilityScore}/100</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Available Products */}
          {selectedProducts.length < 3 && (
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Add products to compare:</h4>
              <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
                {products
                  .filter(p => !selectedProducts.some(sp => sp.id === p.id))
                  .slice(0, 6)
                  .map(product => (
                    <div
                      key={product.id}
                      className="flex-shrink-0 snap-start w-32 border rounded-lg overflow-hidden cursor-pointer hover:border-primary/50 transition-colors"
                      onClick={() => addProduct(product)}
                    >
                      <div className="aspect-square w-full relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-xs line-clamp-1 font-medium">
                          {product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {product.carbonFootprint} kg CO2
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;
