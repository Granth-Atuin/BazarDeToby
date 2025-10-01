/*import { ShoppingCart } from "lucide-react";
import { useCart } from "../store/cartStore";*/
function ProductCard(){
  return(
    <div className="bg-purple-50 p-1">
      <img src="" alt="producto" 
        className=""
      />
      <h3 className="text-lg text-center">producto name</h3>
      <p className="">$</p>
      <button>agregar</button>
    </div>
  )
}
export default ProductCard
/*import { ShoppingCart } from "lucide-react";
import { useCart } from "../store/cartStore"; // ajustar según tu estructura

export default function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <button
        onClick={() => add(product)}
        className="mt-auto btn-primary flex items-center gap-2 justify-center"
      >
        <ShoppingCart className="w-4 h-4" /> Agregar
      </button>
    </div>
  );
}
*/