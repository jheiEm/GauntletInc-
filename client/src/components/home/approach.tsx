import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
const programmingImage = "/static/programming-background-with-person-working-with-codes-computer.jpg";
import { CheckCircle } from "lucide-react";

export function Approach() {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="The Gauntlet Way" />
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-6 font-heading">Our Business-Outcome Led Approach</h3>
            <p className="text-lg mb-8 leading-relaxed">
              We take a business-outcome-led approach, combining deep retail domain expertise with a structured, phased execution methodology. Each engagement is tailored to align technology with the client's business goals from day one.
            </p>
            
            <h4 className="text-xl font-semibold text-primary mb-4 font-heading">Our Core Capabilities Include:</h4>
            
            <motion.ul 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.li className="flex items-start" variants={listItemVariants}>
                <div className="text-accent mr-3 mt-1">
                  <CheckCircle size={20} />
                </div>
                <div>Seamless system integration using Enterprise Service Bus (ESB)</div>
              </motion.li>
              
              <motion.li className="flex items-start" variants={listItemVariants}>
                <div className="text-accent mr-3 mt-1">
                  <CheckCircle size={20} />
                </div>
                <div>Retail-optimized CRM, Helpdesk, and Data Management platforms</div>
              </motion.li>
              
              <motion.li className="flex items-start" variants={listItemVariants}>
                <div className="text-accent mr-3 mt-1">
                  <CheckCircle size={20} />
                </div>
                <div>Flexible project delivery across cloud, on-premise, or hybrid infrastructures</div>
              </motion.li>
              
              <motion.li className="flex items-start" variants={listItemVariants}>
                <div className="text-accent mr-3 mt-1">
                  <CheckCircle size={20} />
                </div>
                <div>Ongoing support through technical consulting, managed services, and mentorship</div>
              </motion.li>
            </motion.ul>
            
            <p className="text-lg mt-6 leading-relaxed">
              This approach ensures that every Gauntlet solution aligns with strategic business goals, scales with growth, and delivers measurable impact.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={programmingImage} 
              alt="Developer working with code on laptop" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
