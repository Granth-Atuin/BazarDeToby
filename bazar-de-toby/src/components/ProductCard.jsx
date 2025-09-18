import Button from './UI/Button'
import { useCart } from '../store/cartStore'
import { formatARS } from '../lib/currency'
import { Link } from 'react-router-dom'
export default function ProductCard({product}){
const add=useCart(s=>s.addItem)
return (
<div className="card w-56 shrink-0 snap-start">
<Link to={`/producto/${product.slug}`} className="block">
<img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-2xl"/>
</Link>
<div className="p-3">
<Link to={`/producto/${product.slug}`} className="block font-medium line-clamp-2 min-h-[3.25rem]">{product.title}</Link>
<div className="mt-1 text-lg font-semibold">{formatARS(product.price)}</div>
<Button className="mt-3 btn-primary w-full" onClick={()=>add(product)}>Agregar al carrito</Button>
</div>
</div>
)
}