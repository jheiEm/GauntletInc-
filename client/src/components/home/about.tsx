import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Inside Gauntlet" 
        />
        
        <motion.div 
          className="md:max-w-3xl lg:max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <motion.p className="text-lg mb-6 leading-relaxed" variants={childVariants}>
              Gauntlet Inc. is a premier solutions integration company specializing in the implementation of Service-Oriented Architecture (SOA) frameworks. We are dedicated to empowering our clients and partners to drive digital transformation and operational excellence by adopting modular, scalable, and service-centric architectures.
            </motion.p>
            
            <motion.p className="text-lg mb-6 leading-relaxed" variants={childVariants}>
              Rooted in a strong foundation of process optimization and integration expertise, Gauntlet Inc. has successfully delivered numerous end-to-end transformation programs across various industries. Our track record is built upon a combination of home-grown technology accelerators, a robust partner ecosystem, and active collaboration with industry standards bodies and initiatives to ensure best-in-class practices are embedded in every engagement.
            </motion.p>
            
            <motion.p className="text-lg mb-6 leading-relaxed" variants={childVariants}>
              Our team comprises seasoned professionals and domain experts who are adept at analyzing and streamlining complex business processes. By leveraging automation, interoperability, and advanced integration strategies, we help our clients reduce operational costs, enhance organizational agility, and accelerate time-to-market for new services.
            </motion.p>
            
            <motion.p className="text-lg leading-relaxed" variants={childVariants}>
              At Gauntlet Inc., we don't just deliver technology—we deliver business outcomes. Through a collaborative and strategic approach, we serve as a trusted integration partner for enterprises seeking to modernize their IT landscape and create value in the digital era.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
