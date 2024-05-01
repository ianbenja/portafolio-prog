import React from "react";
import { motion } from "framer-motion";
import { SOBRERMI } from "../constants";
import Tecnologias from "./Tecnologias";
const SobreMi = () => {
  return (
    <div id="sobremi">
      <div className="flex flex-col items-center justify-center  text-white text-center my-36">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="pb-16 text-6xl   lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
        >
          {SOBRERMI.name}
        </motion.h1>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg text-lg max-w-[540px]  "
        >
          {SOBRERMI.parrafo1}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-lg mt-4 text-lg max-w-[640px] "
        >
          {SOBRERMI.parrafo2}
        </motion.p>
        <div>
          <Tecnologias />
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
