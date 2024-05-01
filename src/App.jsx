import Menu from "./components/Menu/Menu";
import Imagen from "./components/Imagen";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro";
import SobreMi from "./components/SobreMi";
import { motion } from "framer-motion";
import { Divider } from "@nextui-org/react";
import MenuPrueba from "./components/MenuPrueba";

function App() {
  return (
    <>
      <Menu />
      <div className="h-20" id="home"></div>
      <div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="flex justify-center "
        >
          <Imagen />
        </motion.div>
      </div>

      <div>
        <Intro />
      </div>
      <div>
        <SobreMi />
      </div>
      <div id="proyects" className="mt-6">
        <Divider className="my-4" />
      </div>
      <Proyects />
      <Contact />
    </>
  );
}

export default App;
