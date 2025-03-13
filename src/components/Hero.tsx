
import { ChevronRight, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-b from-natural-beige to-transparent", className)}>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left animate-fade-up">
            <div className="inline-flex items-center gap-1.5 bg-natural-sage px-3 py-1 rounded-full mb-6">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sustainable Fashion</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              Shop Fashion with a
              <br />
              <span className="text-primary">Lighter Footprint</span>
            </h1>
            
            <p className="paragraph max-w-xl mb-8">
              Discover fashion that doesn't cost the earth. Our curated collection features styles with the lowest carbon footprint, helping you make more sustainable choices without compromising on style.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-eco">
                Shop Collection
              </button>
              <button className="border border-primary text-primary px-4 py-2 rounded-lg flex items-center gap-1 transition-all duration-300 hover:bg-primary/5">
                Learn More <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop" 
                alt="Sustainable Fashion" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-10">
                <div className="glass-effect rounded-lg px-4 py-3 text-white backdrop-blur-md bg-black/20">
                  <div className="flex gap-4">
                    <div>
                      <p className="text-sm opacity-75">Products with</p>
                      <p className="text-xl font-semibold">60% Lower</p>
                    </div>
                    <div className="border-l border-white/20 pl-4">
                      <p className="text-sm opacity-75">Carbon Footprint</p>
                      <p className="text-xl font-semibold">Than Average</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
