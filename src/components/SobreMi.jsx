import React from "react";
import { FaReact, FaAws, FaAngular, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SOBRERMI } from "../constants";
import Tecnologias from "./Tecnologias";
const SobreMi = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center  text-white text-center">
        <h1 className="pb-16 text-6xl   lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
          {SOBRERMI.name}
        </h1>

        <p className="text-lg text-lg max-w-[540px]  ">{SOBRERMI.parrafo1}</p>
        <p className="text-lg mt-4 text-lg max-w-[640px] ">
          {SOBRERMI.parrafo2}
        </p>
        <div>
          <Tecnologias />
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
