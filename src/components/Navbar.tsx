
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, User, Search, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // When opening menu, ensure search is closed
    if (!isMenuOpen) {
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    
    // When opening search, ensure menu is closed
    if (!isSearchOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 text-foreground transition-transform hover:scale-[1.02]"
          >
            <div className="bg-primary text-white p-1.5 rounded-lg">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg">E-Shopy</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">Women</a>
            <a href="#" className="nav-link">Men</a>
            <a href="#" className="nav-link">Accessories</a>
            <a href="#" className="nav-link">About</a>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <button 
              onClick={toggleSearch}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <a 
              href="#" 
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="User account"
            >
              <User className="h-5 w-5" />
            </a>
            
            <a 
              href="#" 
              className="p-2 text-foreground hover:text-primary transition-colors relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-white">
                3
              </span>
            </a>
            
            <button
              onClick={toggleMenu}
              className="ml-1 p-2 text-foreground hover:text-primary transition-colors md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        <div 
          className={cn(
            "absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md shadow-md px-4 py-4 transition-all duration-300 overflow-hidden",
            isSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="max-w-3xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for sustainable products..." 
              className="w-full bg-secondary rounded-lg py-2.5 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
            />
            <Search className="h-4 w-4 text-muted-foreground absolute left-3 top-3" />
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-40 transition-all duration-300 ease-in-out pt-20",
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col p-8 gap-6 text-lg">
          <a href="#" className="py-2 border-b border-border">Women</a>
          <a href="#" className="py-2 border-b border-border">Men</a>
          <a href="#" className="py-2 border-b border-border">Accessories</a>
          <a href="#" className="py-2 border-b border-border">About</a>
          <a href="#" className="btn-eco text-center">Login / Sign Up</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
