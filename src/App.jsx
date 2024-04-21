import Menu from "./components/Menu/Menu";
import Imagen from "./components/Imagen";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Menu />
      <div className="flex gap-4 items-center">
        <Imagen />
      </div>
      <Proyects />
      <Contact />
    </>
  );
}

export default App;
