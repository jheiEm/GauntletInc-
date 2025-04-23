import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { FolderSync, Zap, ShieldCheck } from "lucide-react";

export function Mission() {
  return (
    <section id="mission" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-primary rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-12 flex flex-col items-center md:items-end text-center md:text-right">
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-white font-heading mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Mission
            </motion.h2>
            
            <motion.p 
              className="text-lg text-white leading-relaxed mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              To help organizations achieve operational excellence and business agility through advanced integration frameworks, proprietary technology accelerators, and strategic industry collaborations.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center md:justify-end gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-3">
                  <FolderSync className="text-white" size={24} />
                </div>
                <div className="text-white">Operational Excellence</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-3">
                  <Zap className="text-white" size={24} />
                </div>
                <div className="text-white">Business Agility</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-3">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <div className="text-white">Strategic Collaboration</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
