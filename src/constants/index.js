import project1 from "./../assets/images/portafolio1.jpg";
import project2 from "./../assets/images/portafolio2.jpg";
import project3 from "./../assets/images/portafolio3.jpg";
import project4 from "./../assets/images/portafolio4.jpg";

export const PROJECTS = [
  {
    title: "Herramienta de toma de decisiones",
    image: project1,
    description:
      "Desarrollo de una herramienta de ayuda a las tomas de decisiones complejas donde se tienen que tener en cuenta multiples criterios.",
    tecnologias: ["REACT", "AWS", "Python", "Lambda"],
  },
  {
    title: "Pagina de Futbol",
    image: project2,
    description:
      "Pagina que permite inscribir jugadores en equipos de futbol y modificarlos, ademas de realizar tu equipo ideal.",
    tecnologias: ["AWS", "REACT", "Node.JS", "Lambda", "S3", "DynamoDB"],
  },
  {
    title: "Proyecto 3",
    image: project3,
    description: "Descripción del proyecto 3",
    tecnologias: ["HTML", "CSS", "JS", "REACT", "SQL"],
  },
  {
    title: "Proyecto 4",
    image: project4,
    description: "Descripción del proyecto 4",
    tecnologias: ["HTML", "CSS", "JS", "REACT", "AWS", "MONGODB"],
  },
];

export const CONTACT = {
  address: "Calle Falsa 123",
  city: "Springfield",
  country: "USA",
  email: " asdf@gmail.com",
  phone: "1234567890",
};

export const PRESENTACION = {
  name: "Ian Benjamin",
  parrafo1: "Desarrollador Web Full Stack ",
  parrafo2: "Finalizando la carrera de Ingenieria en Sistemas de Información.",
};

export const SOBRERMI = {
  name: "Sobre mi",
  parrafo1:
    "Soy un desarrollador web fullstack, con experiencia en tecnologías como React, Node.js, Express, MongoDB, PostgreSQL, entre otras. Me gusta aprender cosas nuevas y compartir conocimientos.",
  parrafo2:
    "Mi enfoque se centra en crear soluciones innovadoras que combinan creatividad y funcionalidad. ¡Explora mi portafolio para ver ejemplos de mi trabajo y contáctame si quieres colaborar en algún proyecto!",
  tecnologias: ["React", "AWS", "Angular", "HTML5", "CSS3"],
};
