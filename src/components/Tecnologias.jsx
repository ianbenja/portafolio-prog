import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { FaNodeJs, FaAws, FaAngular } from "react-icons/fa";

const Tecnologias = () => {
  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
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

  return (
    <motion.div
      variants={iconContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-3 sm:grid-cols-5 gap-6"
    >
      <motion.div
        variants={iconVariants(2.5)}
        className="p-4 bg-black/20 rounded-2xl border border-neutral-800 flex items-center justify-center"
      >
        <RiReactjsLine className="text-5xl text-cyan-400" />
      </motion.div>
      <motion.div
        variants={iconVariants(3)}
        className="p-4 bg-black/20 rounded-2xl border border-neutral-800 flex items-center justify-center"
      >
        <FaAngular className="text-5xl text-red-600 " />
      </motion.div>
      <motion.div
        variants={iconVariants(4)}
        className="p-4 bg-black/20 rounded-2xl border border-neutral-800 flex items-center justify-center"
      >
        <FaNodeJs className="text-5xl text-green-500" />
      </motion.div>
      <motion.div
        variants={iconVariants(5)}
        className="p-4 bg-black/20 rounded-2xl border border-neutral-800 flex items-center justify-center"
      >
        <TbBrandMongodb className="text-5xl text-green-400" />
      </motion.div>
      <motion.div
        variants={iconVariants(3.5)}
        className="p-4 bg-black/20 rounded-2xl border border-neutral-800 flex items-center justify-center"
      >
        <FaAws className="text-5xl text-orange-400" />
      </motion.div>
    </motion.div>
  );
};

export default Tecnologias;
