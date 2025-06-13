import { motion } from "framer-motion";

export const Section = ({ children, id, className = "" }) => (
  <section
    id={id}
    className={`w-full max-w-5xl mx-auto px-6 py-20 lg:py-28 ${className}`}
  >
    {children}
  </section>
);

export const SectionTitle = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7 }}
    className="text-4xl lg:text-5xl font-bold text-center mb-16 lg:mb-24 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300"
  >
    {children}
  </motion.h2>
);
