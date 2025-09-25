// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

/*🌱 mover los js a la carpeta a scripts, tmb pueden hacer las funciones dentro de los .jsx*/
/*🌱 ver que es mejor*/
/*🌱 conectar api tmb para ir probando las tarjetas y el carrito*/

export default function App() {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}
/* 🌱 Pasar el style en caso de ser necesario
export default function Layout() {
  return (
    <div className="min-h-dvh text-gray-900">
      <Navbar />
      <main className="container-app py-6">
        <Outlet />
      </main>
      <footer className="border-t border-gray-300 py-6 mt-8 text-sm text-gray-700 container-app">
        © {new Date().getFullYear()} Bazar de Toby
      </footer>
    </div>
  );
}*/