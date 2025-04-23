import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const links = [
  { href: "#about", label: "About Us" },
  { href: "#leadership", label: "Leadership" },
  { href: "#mission", label: "Mission" },
  { href: "#approach", label: "Approach" },
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact Us" }
];

export function MobileMenu({ isOpen, setIsOpen }: MobileNavigationProps) {
  return (
    <>
      <button 
        className="md:hidden text-primary text-2xl" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu size={28} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 z-50"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
              {links.map((link, index) => {
                const isLastItem = index === links.length - 1;
                
                if (isLastItem) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="bg-accent hover:bg-secondary text-white px-4 py-2 rounded transition-colors duration-300 inline-block text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  );
                }
                
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-dark hover:text-accent font-medium transition-colors duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
