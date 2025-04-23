import { motion } from "framer-motion";
import { FolderSync, Zap, ShieldCheck } from "lucide-react";

export function Mission() {
  return (
    <section id="mission" className="py-16 bg-primary relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-white font-heading mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Mission
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white leading-relaxed mb-16 max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            To help organizations achieve operational excellence and business agility 
            through advanced integration frameworks, proprietary technology accelerators, 
            and strategic industry collaborations.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-16 md:gap-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <FolderSync className="text-white" size={24} />
              </div>
              <div className="text-white font-medium">Operational Excellence</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <div className="text-white font-medium">Business Agility</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <div className="text-white font-medium">Strategic Collaboration</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
