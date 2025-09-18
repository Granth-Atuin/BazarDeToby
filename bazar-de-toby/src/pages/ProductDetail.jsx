import { useParams } from 'react-router-dom'
import data from '../data/products.json'
import ProductCard from '../components/ProductCard'
export default function ProductDetail(){
const { slug } = useParams()
const p = data.find(x=>x.slug===slug)
if(!p) return <div>Producto no encontrado</div>
return (
<div className="grid md:grid-cols-2 gap-8">
<img src={p.image} alt={p.title} className="w-full rounded-2xl object-cover max-h-[480px]"/>
<div>
<h1 className="text-2xl font-bold">{p.title}</h1>
<div className="mt-6"><ProductCard product={p}/></div>
</div>
</div>
)
}