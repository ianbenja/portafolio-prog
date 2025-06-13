import Menu from "./components/Menu/Menu";
import Proyects from "./components/Proyects/Proyects";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero";
import About from "./components/SobreMi";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Fondo decorativo: Añadimos 'overflow-hidden' aquí */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-20rem] left-[-20rem] w-[40rem] h-[40rem] bg-blue-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-15rem] right-[-15rem] w-[35rem] h-[35rem] bg-teal-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Menu />
      <main>
        <Hero />
        <About />
        <Proyects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
