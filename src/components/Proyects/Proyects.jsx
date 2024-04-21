import React from "react";
import { PROJECTS } from "../../constants";

const Proyects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Proyects</h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text.neutral-400">{project.description}</p>
              {project.tecnologias.map((tecnologia, index) => (
                <span
                  key={index}
                  className="bg-primary-500 text-white rounded-full px-2 py-1 text-xs mr-2"
                >
                  {tecnologia}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
