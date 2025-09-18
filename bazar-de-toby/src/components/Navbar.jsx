import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../store/cartStore";
import CartDrawer from "./cart/CartDrawer";

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
