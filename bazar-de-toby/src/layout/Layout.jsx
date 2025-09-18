import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

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
}
