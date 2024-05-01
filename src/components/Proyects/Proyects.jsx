import React from "react";
import { PROJECTS } from "../../constants";
import { Button } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { motion } from "framer-motion";

const Proyects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 my-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Proyects
      </motion.h1>

      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap  lg:justify-center ">
            <div className="w-full lg:w-1/4  flex justify-center">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1, delay: 1 }}
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded "
              />
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="self-center flex flex-col justify-center"
              >
                <div className="flex space-x-4 mx-4">
                  <Button color="default" endContent={<FaGithub />}>
                    Github
                  </Button>
                </div>
                <div className="flex space-x-4 mx-4 my-4">
                  <Button color="secondary" endContent={<FaLink />}>
                    Link
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-3/4  place-content-center text-center justify-center overflow-x-hidden">
              <motion.h6
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="mb-2 font-semibold  "
              >
                {project.title}
              </motion.h6>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="mb-4 text.neutral-400"
              >
                {project.description}
              </motion.p>
              {project.tecnologias.map((tecnologia, index) => (
                <motion.span
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 2.5, delay: 1.5 }}
                  key={index}
                  className="bg-primary-500 text-white rounded-full px-2 py-1 text-xs mr-2"
                >
                  {tecnologia}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
