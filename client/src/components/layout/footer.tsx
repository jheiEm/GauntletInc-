import { motion } from "framer-motion";

export function Footer() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#leadership", label: "Leadership" },
    { href: "#mission", label: "Mission" },
    { href: "#approach", label: "Approach" },
    { href: "#services", label: "Services" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-heading">GAUNTLET<span className="text-accent">INC</span></h2>
            <p className="mt-2">Driving Digital Transformation Through Integration Excellence</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 text-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>&copy; {new Date().getFullYear()} Gauntlet Inc. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
