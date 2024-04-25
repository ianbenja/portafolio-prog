import React from "react";
import { PRESENTACION } from "../constants";

const Intro = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center  text-white text-center">
        <h1 className="pb-16 text-6xl   lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
          {PRESENTACION.name}
        </h1>

        <p className="text-lg max-w-[380px] ">{PRESENTACION.parrafo1}</p>
        <p className="text-lg mt-4 max-w-[460px]">{PRESENTACION.parrafo2}</p>
      </div>
    </div>
  );
};

export default Intro;
