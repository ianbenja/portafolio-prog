import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandMongodb, TbBrandPython } from "react-icons/tb";
import { FaNodeJs, FaAws, FaAngular } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const Tecnologias = () => {
  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const iconVariants = (duration) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: duration,
          ease: "easeInOut",
        },
      },
    },
  });

  const iconBoxClass =
    "p-4 bg-black/20 rounded-2xl border border-neutral-800 flex items-center justify-center aspect-square";

  return (
    // Se eliminó la lógica de Section/SectionTitle y se cambió a una grilla más compacta
    <motion.div
      variants={iconContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-4 gap-4"
    >
      <motion.div variants={iconVariants(2.5)} className={iconBoxClass}>
        <RiReactjsLine className="text-5xl text-cyan-400" />
      </motion.div>
      <motion.div variants={iconVariants(3)} className={iconBoxClass}>
        <FaAngular className="text-5xl text-red-600" />
      </motion.div>
      <motion.div variants={iconVariants(4)} className={iconBoxClass}>
        <FaNodeJs className="text-5xl text-green-500" />
      </motion.div>
      <motion.div variants={iconVariants(5)} className={iconBoxClass}>
        <TbBrandMongodb className="text-5xl text-green-400" />
      </motion.div>
      <motion.div variants={iconVariants(3.5)} className={iconBoxClass}>
        <FaAws className="text-5xl text-orange-400" />
      </motion.div>
      <motion.div variants={iconVariants(2.8)} className={iconBoxClass}>
        {/* Reutilizado para React Native */}
        <RiReactjsLine className="text-5xl text-blue-500" />
      </motion.div>
      <motion.div variants={iconVariants(3.2)} className={iconBoxClass}>
        <TbBrandPython className="text-5xl text-yellow-400" />
      </motion.div>
      <motion.div variants={iconVariants(4.5)} className={iconBoxClass}>
        <SiPostgresql className="text-5xl text-sky-600" />
      </motion.div>
    </motion.div>
  );
};

export default Tecnologias;
