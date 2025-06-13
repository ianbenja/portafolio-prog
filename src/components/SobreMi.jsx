import { motion } from "framer-motion";
import { SOBRERMI } from "../constants"; // <-- Corregido aquí
import Tecnologias from "./Tecnologias";
import { Section, SectionTitle } from "./Section";

const SobreMi = () => {
  return (
    <Section id="sobre-mí">
      <SectionTitle>Sobre Mí</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3 text-lg text-neutral-300 space-y-6 text-center lg:text-left"
        >
          {/* Corregido aquí */}
          <p>{SOBRERMI.parrafo1}</p>
          <p>{SOBRERMI.parrafo2}</p>
        </motion.div>
        <div className="lg:col-span-2 flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-8 text-center text-neutral-200">
            Mis Tecnologías
          </h3>
          <Tecnologias />
        </div>
      </div>
    </Section>
  );
};

export default SobreMi;
