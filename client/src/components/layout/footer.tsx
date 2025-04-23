
import { motion } from "framer-motion";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export function Footer() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#leadership", label: "Leadership" },
    { href: "#mission", label: "Mission" },
    { href: "#approach", label: "Approach" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold font-heading mb-4">GAUNTLET<span className="text-accent">INC</span></h2>
            <p className="text-gray-300 mb-6">Driving Digital Transformation Through Integration Excellence</p>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneCall className="w-5 h-5 text-accent mr-3" />
                <span>+63 2 8123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3" />
                <span>contact@gauntletinc.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-accent mr-3" />
                <span>Metro Manila, Philippines</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {links.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday</p>
              <p className="font-semibold text-white">9:00 AM - 6:00 PM</p>
              <p className="mt-4">Saturday - Sunday</p>
              <p className="font-semibold text-white">Closed</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Gauntlet Inc. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
