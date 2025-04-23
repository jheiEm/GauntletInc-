import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-primary'} mb-4 font-heading`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        className="w-20 h-1 bg-accent mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      
      {subtitle && (
        <motion.p 
          className={`text-lg ${light ? 'text-white' : 'text-gray-600'} mt-6 max-w-3xl mx-auto`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
