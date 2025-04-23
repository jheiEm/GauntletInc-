import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { Star, ArrowRight } from "lucide-react";

export function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Partners in Progress" />
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-light rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-primary p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white rounded-full p-4 inline-block mb-4">
                    <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center border-4 border-white">
                      <span className="text-white text-3xl font-bold">PT&T</span>
                    </div>
                  </div>
                  <h3 className="text-xl text-white font-semibold">PT&T Corp.</h3>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg italic mb-6">
                  "Gauntlet Inc. transformed our operations through their integration expertise, resulting in significant improvements in our customer service metrics and internal workflows."
                </blockquote>
                
                <p className="text-lg mb-4">
                  Served as digital transformation partner, integrating service systems and enhancing operational workflows
                </p>
                
                <p className="text-lg">
                  Supported automation and system orchestration to improve customer service and data integrity
                </p>
                
                <div className="mt-8">
                  <a href="#contact" className="text-accent hover:text-secondary font-medium transition-colors duration-300 inline-flex items-center">
                    <span>Discuss a similar solution for your business</span>
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
