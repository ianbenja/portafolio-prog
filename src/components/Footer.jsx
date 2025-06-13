import { Link } from "@nextui-org/react";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiWhatsappFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-800 py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Ian Benjamín. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4">
          <Link
            isExternal
            href="#" // Reemplaza con tu link de GitHub
            aria-label="GitHub"
          >
            <RiGithubFill className="text-2xl text-neutral-400 hover:text-white transition-colors" />
          </Link>
          <Link
            isExternal
            href="#" // Reemplaza con tu link de LinkedIn
            aria-label="LinkedIn"
          >
            <RiLinkedinBoxFill className="text-2xl text-neutral-400 hover:text-white transition-colors" />
          </Link>
          <Link
            isExternal
            href="#" // Reemplaza con tu link de WhatsApp
            aria-label="WhatsApp"
          >
            <RiWhatsappFill className="text-2xl text-neutral-400 hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
