
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductComparison from "@/components/ProductComparison";
import Footer from "@/components/Footer";
import { products } from "@/utils/productData";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="relative h-12 w-12 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-primary text-xs font-medium">E</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground animate-pulse">Loading sustainable products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Products */}
        <div className="py-12 md:py-20">
          <FeaturedProducts products={products} />
        </div>
        
        {/* Sustainability Info Section */}
        <section className="bg-natural-sage/30 py-16 md:py-24">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
              <h2 className="heading-lg mb-4">Why Shop Sustainably?</h2>
              <p className="paragraph">
                Fashion doesn't have to cost the earth. By choosing products with a lower carbon footprint, you're contributing to a more sustainable future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="eco-card animate-fade-up animate-delay-100">
                <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-semibold">1</span>
                </div>
                <h3 className="heading-md mb-2">Reduced Emissions</h3>
                <p className="text-muted-foreground">
                  Our carbon footprint rating helps you identify products with lower greenhouse gas emissions throughout their lifecycle.
                </p>
              </div>
              
              <div className="eco-card animate-fade-up animate-delay-200">
                <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-semibold">2</span>
                </div>
                <h3 className="heading-md mb-2">Ethical Production</h3>
                <p className="text-muted-foreground">
                  We prioritize brands that ensure fair wages and safe working conditions throughout their supply chain.
                </p>
              </div>
              
              <div className="eco-card animate-fade-up animate-delay-300">
                <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-semibold">3</span>
                </div>
                <h3 className="heading-md mb-2">Sustainable Materials</h3>
                <p className="text-muted-foreground">
                  From organic cotton to recycled polyester, our products use materials with lower environmental impact.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Listing Section */}
        <section id="products" className="py-12 md:py-20">
          <div className="section-container">
            <h2 className="heading-lg mb-8 animate-fade-up">Browse Our Collection</h2>
            <ProductList products={products} />
          </div>
        </section>
        
        {/* Product Comparison Component */}
        <ProductComparison products={products} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
