import Menu from "./components/Menu";
import Imagen from "./components/Imagen";
import Proyecto from "./components/Proyecto";

function App() {
  return (
    <>
      <Menu />
      <div className="flex gap-4 items-center">
        <Imagen />
      </div>
      <Proyecto />
    </>
  );
}

export default App;
