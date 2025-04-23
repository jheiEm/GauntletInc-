import { useState, useEffect } from "react";
import { Navigation } from "../ui/navigation";
import { MobileMenu } from "../ui/mobile-navigation";
import { motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white shadow-sm py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-primary font-heading">
            GAUNTLET<span className="text-accent">INC</span>
          </h1>
        </motion.div>
        
        <Navigation />
        <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  );
}
