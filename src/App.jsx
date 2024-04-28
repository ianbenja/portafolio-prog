import Menu from "./components/Menu/Menu";
import Imagen from "./components/Imagen";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro";
import SobreMi from "./components/SobreMi";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Menu />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="flex justify-center mt-6"
      >
        <Imagen />
      </motion.div>
      <div className="flex justify-center ">
        <Intro />
      </div>
      <div className="flex justify-center ">
        <SobreMi />
      </div>

      <Proyects />
      <Contact />
    </>
  );
}

export default App;
