import { motion } from "framer-motion";
import { Button, Link, Avatar } from "@nextui-org/react";
import { FiDownload } from "react-icons/fi";
import { PRESENTACION } from "../constants"; // <-- Corregido aquí
import { Section } from "./Section";
import ian from "./../assets/images/ian.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <Section id="home" className="min-h-screen flex items-center pt-24 lg:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center order-first lg:order-last"
        >
          <div className="rounded-full p-2 bg-gradient-to-r from-blue-500/50 to-teal-500/50">
            <Avatar
              src={ian}
              className="w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-[#121212]"
            />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            {PRESENTACION.name}
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="mt-2 text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300"
          >
            {PRESENTACION.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl mx-auto lg:mx-0 text-neutral-300"
          >
            {PRESENTACION.subtitle}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              as={Link}
              href="#contacto"
              color="primary"
              variant="solid"
              size="lg"
              className="font-semibold shadow-lg shadow-blue-500/20"
            >
              Contrátame
            </Button>
            <Button
              as={Link}
              href="#" // Añade aquí el enlace a tu CV
              variant="ghost"
              size="lg"
              endContent={<FiDownload />}
            >
              Descargar CV
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
