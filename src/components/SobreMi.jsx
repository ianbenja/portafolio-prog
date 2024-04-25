import React from "react";
import { FaReact, FaAws, FaAngular, FaHtml5, FaCss3Alt } from "react-icons/fa";
const SobreMi = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center  text-white text-center">
        <h1 className="pb-16 text-6xl   lg:mt-16 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
          Sobre mi
        </h1>

        <p className="text-lg  ">
          Soy un desarrollador web fullstack, con experiencia en tecnologías
          como React, Node.js, Express, MongoDB, PostgreSQL, entre otras. Me
          gusta aprender cosas nuevas y compartir conocimientos.
        </p>
        <p className="text-lg mt-4 ">
          Actualmente estoy trabajando en proyectos personales y en la creación
          de contenido para mi blog.
        </p>
        <div className="justify-items-center">
          <FaReact />
          <FaAws />
          <FaAngular />
          <FaHtml5 />
          <FaCss3Alt />
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
