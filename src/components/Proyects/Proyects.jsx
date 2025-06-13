import { motion } from "framer-motion";
import {
  Button,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Divider,
} from "@nextui-org/react";
import { FaGithub, FaLink } from "react-icons/fa";
import { PROJECTS } from "../../constants"; // Importamos los proyectos
import { Section, SectionTitle } from "../Section"; // Importamos componentes de sección

const Proyects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="proyectos">
      <SectionTitle>Proyectos</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="w-full h-full border border-neutral-800 bg-neutral-900/50 hover:border-blue-500/50 transition-all duration-300 group">
              <CardHeader className="p-0 overflow-hidden">
                <img
                  alt={project.title}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  src={project.image}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/222222/FFFFFF?text=Imagen+no+disponible";
                  }}
                />
              </CardHeader>
              <CardBody className="p-6">
                <h4 className="font-bold text-xl mb-2">{project.title}</h4>
                <p className="text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {/* Corregido a 'technologies' */}
                  {project.technologies.map((tech, i) => (
                    <Chip key={i} color="primary" variant="flat" size="sm">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </CardBody>
              <Divider className="bg-neutral-800" />
              <CardFooter className="p-4 bg-neutral-900/30">
                <div className="flex gap-2">
                  <Button
                    as={Link}
                    href={project.github}
                    isIconOnly
                    color="default"
                    variant="ghost"
                    aria-label="Github"
                  >
                    <FaGithub className="text-xl" />
                  </Button>
                  <Button
                    as={Link}
                    href={project.link}
                    isIconOnly
                    color="default"
                    variant="ghost"
                    aria-label="Live Demo"
                  >
                    <FaLink className="text-lg" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Proyects;
