import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationLink {
  href: string;
  label: string;
}

const links: NavigationLink[] = [
  { href: "#about", label: "About Us" },
  { href: "#leadership", label: "Leadership" },
  { href: "#mission", label: "Mission" },
  { href: "#approach", label: "Approach" },
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact Us" }
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className="hidden md:flex space-x-8">
      {links.map((link, index) => {
        const isLastItem = index === links.length - 1;
        const isActive = activeSection === link.href.substring(1);
        
        if (isLastItem) {
          return (
            <a 
              key={link.href} 
              href={link.href} 
              className="bg-accent hover:bg-secondary text-white px-4 py-2 rounded transition-colors duration-300"
            >
              {link.label}
            </a>
          );
        }
        
        return (
          <a
            key={link.href}
            href={link.href}
            className={`nav-link text-dark hover:text-accent font-medium transition-colors duration-300 relative ${
              isActive ? "text-accent" : ""
            }`}
          >
            {link.label}
            <AnimatePresence>
              {isActive && (
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </a>
        );
      })}
    </nav>
  );
}
