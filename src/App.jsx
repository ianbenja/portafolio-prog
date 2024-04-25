import Menu from "./components/Menu/Menu";
import Imagen from "./components/Imagen";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro";
import SobreMi from "./components/SobreMi";

function App() {
  return (
    <>
      <Menu />
      <div className="flex justify-center mt-6">
        <Imagen />
      </div>
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
