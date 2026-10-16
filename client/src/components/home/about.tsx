import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { Layers, Award, Puzzle, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: <Layers size={22} />,
    title: "SOA specialists",
    text: "Modular, scalable, service-centric architectures built on Service-Oriented Architecture frameworks."
  },
  {
    icon: <Award size={22} />,
    title: "Proven delivery",
    text: "End-to-end transformation programs delivered across multiple industries."
  },
  {
    icon: <Puzzle size={22} />,
    title: "Accelerators & partners",
    text: "Home-grown technology accelerators, a strong partner ecosystem and industry-standard practices."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Business outcomes",
    text: "Lower operating costs, greater agility and faster time-to-market for new services."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Inside Gauntlet"
          subtitle="A solutions integration company that turns complex IT landscapes into connected, automated operations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 text-white">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 font-heading">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
