import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
const serverImage = "/static/pexels-cookiecutter-1148820.jpg";
import { FolderSync, Zap, HandshakeIcon } from "lucide-react";

export function Mission() {
  return (
    <section id="mission" className="py-20 bg-light relative">
      <div className="container mx-auto px-4">
        <SectionHeader title="What Moves Us" />
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-primary rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <img 
                  src={serverImage} 
                  alt="Data center servers with blue lighting" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20"></div>
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12 flex items-center">
                <div className="space-y-8">
                  <motion.h3 
                    className="text-2xl md:text-3xl font-semibold text-white font-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Our Mission
                  </motion.h3>
                  
                  <motion.p 
                    className="text-lg text-white leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    To help organizations achieve operational excellence and business agility through advanced integration frameworks, proprietary technology accelerators, and strategic industry collaborations.
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-8 mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
                        <FolderSync className="text-white" size={20} />
                      </div>
                      <div className="text-white">Operational Excellence</div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
                        <Zap className="text-white" size={20} />
                      </div>
                      <div className="text-white">Business Agility</div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4">
                        <HandshakeIcon className="text-white" size={20} />
                      </div>
                      <div className="text-white">Strategic Collaboration</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
