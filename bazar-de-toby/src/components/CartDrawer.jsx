import { X } from "lucide-react";
import { useCart } from "../store/cartStore";

export default function CartDrawer({ open, onClose }) {
const { items, totalQty, clear } = useCart();

return (
    <div
    aria-hidden={!open}
    className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
    >
    <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${
        open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
    />
    <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transition-transform ${
        open ? "translate-x-0" : "translate-x-full"
        }`}
    >
        <div className="h-16 flex items-center justify-between px-4 border-b">
        <div className="font-semibold">Tu carrito ({totalQty()})</div>
        <button
            className="p-2 rounded-lg hover:bg-gray-100"
            onClick={onClose}
        >
            <X />
        </button>
        </div>
        <div className="p-4 space-y-3">
        {items.length === 0 ? (
            <p className="text-gray-500">Tu carrito está vacío.</p>
        ) : (
            items.map((it) => (
            <div key={it.id} className="border p-2 rounded-lg">
                {it.title} x{it.qty}
            </div>
            ))
        )}
        </div>
        <div className="p-4">
        <button className="btn-primary w-full" onClick={clear}>
            Vaciar carrito
        </button>
        </div>
    </aside>
    </div>
);
}