import { useState, useMemo, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Search, Filter, Phone, X } from "lucide-react";
import { CATEGORIES, PRODUCTS, WHATSAPP_LINK } from "../data";

export default function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show at the top of the page
      if (currentScrollY < 100) {
        setShowFilters(true);
      } 
      // Hide when scrolling down (with a small threshold to prevent jitter)
      else if (currentScrollY > lastScrollY.current + 15) {
        setShowFilters(false);
      } 
      // Show when scrolling up (with a small threshold)
      else if (currentScrollY < lastScrollY.current - 15) {
        setShowFilters(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.spec.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-24 pb-20 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters & Search - Moved above header */}
        <div 
          className={`bg-white p-4 md:p-6 rounded-xl shadow-sm border border-border mb-10 flex flex-col md:flex-row gap-6 items-center justify-between sticky z-30 transition-all duration-500 ${
            showFilters 
              ? "top-24 opacity-100 translate-y-0" 
              : "top-24 opacity-0 -translate-y-8 pointer-events-none"
          }`}
        >
          
          {/* Category Pills - Wrapping instead of scrolling */}
          <div className="flex flex-wrap justify-center md:justify-start w-full md:w-auto gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-primary text-white shadow-md"
                  : "bg-secondary text-dark/70 hover:bg-border hover:text-dark"
              }`}
            >
              All Products
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-secondary text-dark/70 hover:bg-border hover:text-dark"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0 group transition-all duration-300 focus-within:md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-dark/40 group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-10 py-2.5 border border-border rounded-lg leading-5 bg-secondary/50 hover:bg-white placeholder-dark/40 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all sm:text-sm shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-dark/40 hover:text-dark transition-colors"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">Product Catalog</h1>
          <p className="text-lg text-dark/70 max-w-2xl">
            Browse our comprehensive range of wholesale medical supplies. Contact us for bulk pricing and availability.
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-56 bg-secondary p-6 flex items-center justify-center overflow-hidden border-b border-border/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain max-h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {CATEGORIES.find(c => c.id === product.category)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-dark mb-2 leading-tight">{product.name}</h3>
                  <p className="text-sm text-dark/60 mb-6 flex-grow">{product.spec}</p>
                  
                  <div className="mt-auto pt-4 border-t border-border/50 overflow-hidden">
                    <a
                      href={`${WHATSAPP_LINK} - Inquiry for ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-secondary hover:bg-primary hover:text-white text-primary border border-primary/20 hover:border-primary py-2.5 rounded-md font-medium transition-all duration-300 transform translate-y-1 group-hover:translate-y-0"
                    >
                      <Phone className="w-4 h-4" />
                      Bulk Inquiry
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-border">
            <Filter className="w-12 h-12 text-dark/20 mx-auto mb-4" />
            <h3 className="text-xl font-heading font-bold text-dark mb-2">No products found</h3>
            <p className="text-dark/60">Try adjusting your search or category filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-6 text-primary font-medium hover:text-accent transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
