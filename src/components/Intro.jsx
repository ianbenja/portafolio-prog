import React from "react";
import { PRESENTACION } from "../constants";
import { Button } from "@nextui-org/react";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div id="intro">
      <div className="flex flex-col items-center justify-center  text-white text-center">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pb-16 text-6xl   lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
        >
          {PRESENTACION.name}
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-2xl max-w-[380px] "
        >
          {PRESENTACION.parrafo1}
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-lg max-w-[380px] "
        >
          {PRESENTACION.parrafo2}
        </motion.p>
        <div className="mt-8 flex space-x-6 ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-1.5xl"
            >
              Contratame
            </Button>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-1.5xl"
              endContent={<FaFileDownload />}
            >
              Descargar CV
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
