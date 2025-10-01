// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import List from "./pages/list";

/*🌱 mover los js a la carpeta a scripts, tmb pueden hacer las funciones dentro de los .jsx*/
/*🌱 ver que es mejor*/
/*🌱 conectar api tmb para ir probando las tarjetas y el carrito*/

export default function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-[#FFE6A7]">
      <Navbar />
      <div className="flex flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}