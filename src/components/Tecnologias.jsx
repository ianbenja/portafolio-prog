import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

const Tecnologias = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <div className="flex flex-col items-center justify-center  text-white text-center">
        <h1 className="my-20 text-center text-4xl">Tecnologias</h1>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>

          <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <TbBrandMongodb className="text-7xl text-green-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAws className="text-7xl text-white-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <FaAngular className="text-7xl text-red-600 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
