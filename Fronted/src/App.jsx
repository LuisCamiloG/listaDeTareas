import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import About from "./Navegacion/About";
import Home from "./Navegacion/Home";
import ListaDeTareas from "./Navegacion/ListaDeTareas";
import NavBar from "./Navegacion/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ListaDeTareas" element={<ListaDeTareas />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
