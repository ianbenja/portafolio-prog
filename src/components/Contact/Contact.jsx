import { motion } from "framer-motion";
import { Button, Link } from "@nextui-org/react";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; // Importamos el ícono de WhatsApp
import { CONTACT } from "../../constants";
import { Section, SectionTitle } from "../Section";

const Contact = () => {
  // Función para limpiar el número de teléfono y prepararlo para el enlace de WhatsApp
  const getWhatsAppLink = (phone) => {
    const cleanedPhone = phone.replace(/[+\s-()]/g, "");
    return `https://wa.me/${cleanedPhone}`;
  };

  const contactItems = [
    {
      icon: <FiMail />,
      text: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: <FaWhatsapp />, // Usamos el ícono de WhatsApp
      text: CONTACT.phone,
      href: getWhatsAppLink(CONTACT.phone), // Generamos el enlace de WhatsApp
    },
    {
      icon: <FiMapPin />,
      text: CONTACT.address,
      // BONUS: Hice que la dirección abra en Google Maps
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        CONTACT.address
      )}`,
    },
  ];

  return (
    <Section id="contacto">
      <SectionTitle>Contacto</SectionTitle>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-neutral-300 mb-12">
          ¿Interesado en colaborar o tienes alguna pregunta? No dudes en
          contactarme. Estoy abierto a nuevas oportunidades y desafíos.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6"
        >
          {contactItems.map((item, index) => (
            <Button
              key={index}
              as={Link}
              href={item.href}
              isExternal // Importante para que los enlaces se abran correctamente
              className="bg-neutral-900/50 border border-neutral-800"
              startContent={<span className="text-blue-400">{item.icon}</span>}
              size="lg"
            >
              {item.text}
            </Button>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
