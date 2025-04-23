import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { Network, BarChart3, Cloud, Cog } from "lucide-react";

const services = [
  {
    icon: <Network size={28} />,
    title: "Enterprise Service Bus (ESB) Integration",
    features: [
      "Central integration of CRM, Retail, and Helpdesk platforms",
      "Enables real-time, automated data and process flow",
      "Reduces manual handoffs, improves efficiency, and lowers cost"
    ]
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Integrated Reporting & CLV Framework",
    features: [
      "Role-based dashboards for agents, managers, and customers",
      "Mobile and web app delivery of actionable insights",
      "Real-time monitoring of customer interactions and enterprise metrics"
    ]
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud or On-Premise Deployment",
    features: [
      "Offers flexible deployment depending on client infrastructure",
      "Partners with global cloud providers to deliver scalable, secure environments",
      "Supports IaaS, SaaS, and PaaS models"
    ]
  },
  {
    icon: <Cog size={28} />,
    title: "Managed IT Services",
    features: [
      "Full-cycle IT support and operations management",
      "Change, configuration, and incident handling",
      "Application monitoring, optimization, and enhancement"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Integration Stack" 
          subtitle="Our comprehensive suite of services designed to transform your business operations and enhance your digital capabilities."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4 font-heading">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="text-accent mr-3 mt-1">✓</div>
                      <div>{feature}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
