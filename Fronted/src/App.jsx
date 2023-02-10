import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Navegacion/About";
import Home from "./Navegacion/Home";
import ListaDeTareas from "./Navegacion/ListaDeTareas";
import NavBar from "./Navegacion/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListaDeTareas" element={<ListaDeTareas />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
