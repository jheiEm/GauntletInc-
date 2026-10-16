import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
// Using static path for images
const directorImage = "/static/Director_Miguel Marco A. Bitanga (0N5A9496) 1.JPG";
import { ArrowRight } from "lucide-react";

export function Leadership() {
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
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Behind the Vision" />
        
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="md:w-2/5"
            variants={childVariants}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={directorImage} 
                alt="Miguel Marco Bitanga, Director" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          <div className="md:w-3/5">
            <motion.h3 
              className="text-2xl font-semibold text-primary mb-4 font-heading"
              variants={childVariants}
            >
              Miguel Marco Bitanga
            </motion.h3>
            
            <motion.p className="text-lg mb-6 leading-relaxed" variants={childVariants}>
              At the helm of Gauntlet Inc. is Miguel Marco Bitanga, a visionary business executive with over eight years of leadership experience in the telecommunications industry. As former Chief Operating Officer of PT&T Corp., Miguel played a pivotal role in transforming enterprise operations through technology, data, and automation.
            </motion.p>
            
            <motion.p className="text-lg mb-6 leading-relaxed" variants={childVariants}>
              His career foundation spans multinational and entrepreneurial landscapes—from brand leadership at Unilever Philippines to spearheading ventures across retail, mining, and design. This unique blend of global discipline and agile execution defines his leadership ethos.
            </motion.p>
            
            <motion.p className="text-lg mb-6 leading-relaxed" variants={childVariants}>
              Miguel graduated cum laude from Ateneo de Manila University in 2005 and earned his MBA from IESE Business School in Barcelona, Spain in 2015—an institution consistently ranked among the top 10 business schools globally. He brings both strategic and operational mindset to the development and design process, serving as Gauntlet's lead consultant.
            </motion.p>
            
            <motion.p className="text-lg leading-relaxed" variants={childVariants}>
              A passionate advocate for customer-centric innovation, Miguel has made it his mission to elevate the service experience in the Philippine market. At PT&T, he led enterprise-wide initiatives that redefined how IT and automation intersect with customer care—delivering measurable impact through streamlined systems, reduced inefficiencies, and empowered end-users.
            </motion.p>
            
            <motion.p className="text-lg leading-relaxed mt-4" variants={childVariants}>
              His leadership continues to drive Gauntlet's purpose: building intelligent, outcome-driven solutions that move businesses forward in the digital era.
            </motion.p>
            
            <motion.div 
              className="mt-8"
              variants={childVariants}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center text-accent hover:text-secondary transition-colors duration-300"
              >
                <span className="mr-2">Connect with Miguel</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="md:w-2/5"
            variants={childVariants}
          >
            {/* Placeholder until a photo of Alberto is added to /static */}
            <div className="rounded-lg overflow-hidden shadow-xl bg-primary aspect-[4/5] flex items-center justify-center">
              <span className="text-white text-6xl font-semibold font-heading">AA</span>
            </div>
          </motion.div>
          
          <div className="md:w-3/5">
            <motion.h3 
              className="text-2xl font-semibold text-primary mb-4 font-heading"
              variants={childVariants}
            >
              Alberto P. Ambuyo
            </motion.h3>
            
            <motion.p className="text-lg mb-6 leading-relaxed" variants={childVariants}>
              Alberto P. Ambuyo is the former Vice President and Chief Information Officer (CIO) of the Philippine Telegraph and Telephone Corporation (PT&T). He has since transferred to PT&T's parent company, Menlo Capital, and brings over 30 years of experience in the IT industry.
            </motion.p>
            
            <motion.p className="text-lg mb-6 leading-relaxed" variants={childVariants}>
              Before PT&T, Alberto served as Vice President for Technology at Fritz & Macziol Asia from 2012 to 2016, and as Assistant Vice President for System Operations at SAHITech-STRADCOM.
            </motion.p>
            
            <motion.p className="text-lg leading-relaxed" variants={childVariants}>
              He was also Country Technical Manager for Transformation Management at IBM Philippines from 2005 to 2008.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
