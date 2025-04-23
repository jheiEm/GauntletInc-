import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Digital Technology Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading text-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Driving Digital Transformation<br/>Through Integration Excellence
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Empowering businesses with modular, scalable, and service-centric architectures
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a 
            href="#services" 
            className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
          >
            Our Services
          </a>
          <a 
            href="#contact" 
            className="bg-white hover:bg-light text-primary font-bold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
