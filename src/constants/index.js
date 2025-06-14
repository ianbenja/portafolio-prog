// Asegúrate de que las rutas de las imágenes sean correctas
import project1 from "./../assets/images/portafolio1.jpg";
import project2 from "./../assets/images/portafolio2.jpg";
import project3 from "./../assets/images/portafolio3.jpg";
import project4 from "./../assets/images/portafolio4.jpg";

export const PRESENTACION = {
  name: "Ian Benjamín",
  title: "Desarrollador Web Full Stack",
  subtitle: "Finalizando la carrera de Ingeniería en Sistemas de Información.",
};

export const SOBRERMI = {
  parrafo1:
    "Soy un desarrollador web full-stack con una sólida base en ingeniería y una pasión por construir aplicaciones intuitivas y eficientes. Mi experiencia abarca desde el frontend con React y Angular hasta el backend con Node.js, y me siento cómodo trabajando con arquitecturas serverless en AWS.",
  parrafo2:
    "Mi enfoque se centra en crear soluciones innovadoras que combinan creatividad y funcionalidad. Me entusiasma enfrentar nuevos desafíos y colaborar en equipos para llevar ideas a la realidad. ¡Explora mi portafolio para ver ejemplos de mi trabajo!",
};

export const PROJECTS = [
  {
    title: "Herramienta de Toma de Decisiones",
    image: project1,
    description:
      "Desarrollo de una herramienta de ayuda a la toma de decisiones complejas donde se tienen que tener en cuenta múltiples criterios, utilizando un enfoque analítico jerárquico.",
    technologies: ["React", "AWS", "Python", "Lambda"],
    github: "https://github.com/ianbenja/dec-app", // Reemplaza con tu enlace de GitHub
    link: "https://ianbenja.github.io/dec-app/#/", // Reemplaza con el enlace al demo
  },
  {
    title: "Generador de Paletas de Colores",
    image: project2,
    description:
      "Desarrollo de una aplicación web interactiva que analiza imágenes para extraer su paleta de colores predominante. A traves de un motor de nomenclatura inteligente asigna nombre común a cada color.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ianbenja/paleta-colores", // Reemplaza con tu enlace de GitHub
    link: "https://ianbenja.github.io/paleta-colores/", // Reemplaza con el enlace al demo
  },
  {
    title: "E-commerce de Ropa",
    image: project3,
    description:
      "Una tienda en línea moderna y responsiva con carrito de compras, pasarela de pago y panel de administración de productos.",
    technologies: ["Angular", "TypeScript", "Node.js", "Express", "MongoDB"],
    github: "#",
    link: "#",
  },
  {
    title: "Clon de Red Social",
    image: project4,
    description:
      "Una aplicación web que replica las funcionalidades básicas de una red social, incluyendo perfiles de usuario, posts y comentarios en tiempo real.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    link: "#",
  },
];

export const CONTACT = {
  address: "Córdoba, Argentina",
  email: "ian.benjamin.dev@email.com",
  phone: "+54 9 351 123 4567",
};
