import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../store/cartStore"
import { ShoppingCart } from "lucide-react"
import CartDrawer from "./CartDrawer"

function Navbar() {
  const [open, setOpen] = useState(false)
  const qty = useCart((s) => s.totalQty())

  return (
    /*🌱 el primer class pasarlo a style cy ponerlo en .header*/
    <div className="h-16 w-full flex items-center justify-between border-b border-gray-500 px-5 bg-[#99582A]">
      <span className="font-semibold text-gray-900 text-4xl">Bazar de Tobi</span>
      <nav className="w-1/2 flex flex-row items-center justify-around">
        <div className="links flex gap-3">
          {/*🌱  cuando esten las demas paginas poner los link, esto es para mi misma, osea, luz*/}
          <Link to="/">Home</Link>
          <Link to="/List">Categorias</Link>
        </div>
        <div className="carro">
           {/*🌱  pasarlo a style y ponerlo en .boton-carro*/}
          <button
            className="relative p-2 rounded-xl hover:bg-yellow-300"
            onClick={() => setOpen(true)}
          >
            <ShoppingCart />
            {qty > 0 && (
              <span className="absolute -top-1 -right-1 text-xs bg-white text-black rounded-full px-1.5 py-0.5">
                {qty}
              </span>
            )}
          </button>
        </div>
      </nav>
       <CartDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
export default Navbar
/*import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../store/cartStore";
import CartDrawer from "./CartDrawer";

<div className="links">
         
          <Link> Categorias </Link>
        </div>

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const qty = useCart((s) => s.totalQty());

  return (
    <header className="sticky top-0 z-40 bg-yellow-400 border-b border-gray-900">
      <div className="container-app h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-white" />
          <span className="font-semibold text-gray-900">Bazar de Toby</span>
        </div>
        <nav>
          <button
            className="relative p-2 rounded-xl hover:bg-yellow-300"
            onClick={() => setOpen(true)}
          >
            <ShoppingCart />
            {qty > 0 && (
              <span className="absolute -top-1 -right-1 text-xs bg-white text-black rounded-full px-1.5 py-0.5">
                {qty}
              </span>
            )}
          </button>
        </nav>
      </div>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
*/