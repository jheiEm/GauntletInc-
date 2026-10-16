import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { ArrowRight } from "lucide-react";

const leaders = [
  {
    name: "Miguel Marco Bitanga",
    role: "Director & Lead Consultant",
    image: "/static/Director_Miguel Marco A. Bitanga (0N5A9496) 1.JPG",
    bio: "Miguel leads Gauntlet with a mission to elevate customer service in the Philippine market. As COO of PT&T Corp., he drove enterprise-wide initiatives that brought IT, automation and customer care together, streamlining systems and cutting inefficiencies.",
    highlights: [
      "Former COO, PT&T Corp.",
      "8+ years in telecom leadership",
      "Brand leadership at Unilever Philippines",
      "Ventures in retail, mining and design",
      "MBA, IESE Business School (2015)",
      "Cum laude, Ateneo de Manila (2005)"
    ],
    cta: "Connect with Miguel"
  },
  {
    name: "Alberto P. Ambuyo",
    role: "Former VP & CIO, PT&T Corp.",
    image: "/static/Management_Alberto-P-Ambuyo.jpg",
    bio: "Alberto brings over 30 years in the IT industry. He was Vice President and CIO of the Philippine Telegraph and Telephone Corporation (PT&T) and has since moved to its parent company, Menlo Capital.",
    highlights: [
      "30+ years in IT",
      "Now with Menlo Capital",
      "VP for Technology, Fritz & Macziol Asia (2012–2016)",
      "AVP for System Operations, SAHITech-STRADCOM",
      "Country Technical Manager, IBM Philippines (2005–2008)"
    ]
  }
];

export function Leadership() {
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title="Behind the Vision" />

        <div className="space-y-20">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              className={`flex flex-col ${index % 2 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="md:w-2/5 w-full" variants={childVariants}>
                <div className="rounded-lg overflow-hidden shadow-xl max-w-sm mx-auto">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              <div className="md:w-3/5">
                <motion.h3
                  className="text-2xl font-semibold text-primary font-heading"
                  variants={childVariants}
                >
                  {leader.name}
                </motion.h3>
                <motion.p className="text-accent font-medium mb-4" variants={childVariants}>
                  {leader.role}
                </motion.p>

                <motion.p className="text-lg mb-6 leading-relaxed" variants={childVariants}>
                  {leader.bio}
                </motion.p>

                <motion.ul
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
                  variants={childVariants}
                >
                  {leader.highlights.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </motion.ul>

                {leader.cta && (
                  <motion.div className="mt-8" variants={childVariants}>
                    <a
                      href="#contact"
                      className="inline-flex items-center text-accent hover:text-secondary transition-colors duration-300"
                    >
                      <span className="mr-2">{leader.cta}</span>
                      <ArrowRight size={16} />
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
