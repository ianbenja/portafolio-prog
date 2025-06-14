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
    title: "Aplicación de Pomodoro y Tareas",
    image: project3, // Reemplaza con una captura de pantalla de tu proyecto
    description:
      "Aplicación de productividad que combina la técnica Pomodoro con una lista de tareas. Permite asignar tareas a los ciclos de estudio, registrar el tiempo dedicado y visualizar estadísticas detalladas con gráficos por cada tarea.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ianbenja/tareas-estudio",
    link: "https://ianbenja.github.io/tareas-estudio/",
  },
  {
    title: "Applicacion de seguridad social",
    image: project4,
    description:
      "Una aplicación de celular que sirve para el monitoreo en tiempo real de contactos 'zentinelas' con la creacion de zonas seguras y alertas de seguridad.",
    technologies: [
      "Node.js",
      "ReactNative",
      "PostgreSQL",
      "React",
      "Tailwind CSS + NativeWind",
    ],
    github: "#",
    link: "#",
    inProgress: true, // Se agregó esta línea para indicar que el proyecto está en desarrollo
  },
];

export const CONTACT = {
  address: "Córdoba, Argentina",
  email: "iannicolasbenjamin@gmail.com",
  phone: "+54 9 299 505 5786",
};
