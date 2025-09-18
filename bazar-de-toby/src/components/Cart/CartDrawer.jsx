import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useEffect } from 'react'
import { useCart } from '../../store/cartStore'
import { formatARS } from '../../lib/currency'
export default function CartDrawer({open,onClose}){
const {items,increment,decrement,removeItem,clear,totalPrice}=useCart()
useEffect(()=>{const h=e=>{if(e.key==='Escape')onClose()};document.addEventListener('keydown',h);return()=>document.removeEventListener('keydown',h)},[onClose])
return (
<div aria-hidden={!open} className={`fixed inset-0 z-50 ${open?'':'pointer-events-none'}`}>
<div className={`absolute inset-0 bg-black/30 transition-opacity ${open?'opacity-100':'opacity-0'}`} onClick={onClose}/>
<aside aria-modal className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transition-transform ${open?'translate-x-0':'translate-x-full'}`}>
<div className="h-16 flex items-center justify-between px-4 border-b border-gray-100">
<div className="font-semibold">Tu carrito</div>
<button className="p-2 rounded-lg hover:bg-gray-100" onClick={onClose} aria-label="Cerrar"><X/></button>
</div>
<div className="p-4 space-y-4 h-[calc(100%-8rem)] overflow-auto">
{items.length===0?(
<p className="text-gray-500">Tu carrito está vacío.</p>
):(
items.map(it=> (
<div key={it.id} className="flex gap-3 items-center">
<img src={it.image} alt={it.title} className="w-16 h-16 rounded-xl object-cover"/>
<div className="flex-1">
<div className="font-medium line-clamp-1">{it.title}</div>
<div className="text-sm text-gray-500">{formatARS(it.price)}</div>
<div className="mt-2 flex items-center gap-2">
<button className="p-1 rounded-lg border" onClick={()=>decrement(it.id)} aria-label="Restar"><Minus size={16}/></button>
<span className="w-6 text-center">{it.qty}</span>
<button className="p-1 rounded-lg border" onClick={()=>increment(it.id)} aria-label="Sumar"><Plus size={16}/></button>
<button className="ml-2 p-1 rounded-lg hover:bg-red-50 text-red-600" onClick={()=>removeItem(it.id)} aria-label="Quitar"><Trash2 size={16}/></button>
</div>
</div>
</div>
))
)}
</div>
<div className="h-16 border-t border-gray-100 flex items-center justify-between px-4">
<div className="font-semibold">Subtotal</div>
<div className="font-semibold">{formatARS(totalPrice())}</div>
</div>
<div className="p-4 pt-0 flex gap-2">
<button className="flex-1 btn-primary">Continuar</button>
<button className="px-4 py-2 rounded-xl border" onClick={clear}>Vaciar</button>
</div>
</aside>
</div>
)
}