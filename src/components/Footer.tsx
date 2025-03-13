
import { Facebook, Instagram, Twitter, Mail, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("bg-natural-beige/50 border-t border-border", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <a 
              href="/" 
              className="flex items-center gap-2 text-foreground"
            >
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-semibold text-lg">E-Shopy</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Making sustainable fashion accessible. Our platform helps you discover eco-friendly clothing with lower carbon footprints.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Women</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Men</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accessories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Footwear</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</a></li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="font-medium text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sustainability Commitment</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Carbon Footprint Calculation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Materials Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for sustainable fashion tips and updates on new eco-friendly products.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-white border border-border rounded-lg py-2 px-4 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white rounded-lg py-2 font-medium transition-all hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} E-Shopy. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
