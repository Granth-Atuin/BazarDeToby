import SearchBar from "../components/BarraBusqueda"
import ProductCard from "../components/ProductCard"

function Home (){
  //🌱agregar luego las funciones con script
  return (
    <div className="w-full p-3">
      <SearchBar />
      <div className="mx-5 flex flex-col text-center">
        <p className="sub-division text-2xl">Destacado</p>
        {/*🌱 Agregar carousel*/}
      </div>
      <div className="text-center">
        <p className="sub-division text-2xl">Categorias</p>
        {/*🌱 Agregar cuadricula*/}
          <div className="w-300 grid grid-cols-2 md:grid-cols-3 gap-3 my-2 mx-full">
              <div className="bg-purple-100 text-center">
                  <p className="text-2x1">Martin</p>
              </div>
             <div className="bg-purple-100">
                  <p className="text-2x1">Martin2</p>
              </div>
              <div className="bg-purple-100">
                  <p className="text-2x1">Martin3</p>
               </div>
            </div>
        </div>
    </div>
  )
}
export default Home
/*import { useEffect, useMemo, useState } from "react";
import CategoryCarousel from "../components/CategoryCarousel";
import { fetchProducts, normalizeProduct } from "../lib/apiClient";
import mock from "../data/products.json";

export default function Home(){
  const [loading, setLoading] = useState(true);
  const [err, setErr]       = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const apiItems = await fetchProducts();
        const norm = apiItems.map(normalizeProduct);
        if (mounted) setProducts(norm);
      } catch {
        // fallback al mock
        const norm = mock.map(normalizeProduct);
        if (mounted) setProducts(norm);
        setErr(null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const { catA, catB, catC } = useMemo(() => {
    const byCat = new Map();
    for (const p of products) {
      const c = p.category || "General";
      if (!byCat.has(c)) byCat.set(c, []);
      byCat.get(c).push(p);
    }
    const cats = [...byCat.keys()];
    const [a,b,c] = cats.length >= 3 ? cats.slice(0,3) : [...cats, "Hogar", "Electrónica", "Destacados"].slice(0,3);
    return {
      catA: { title: a, items: byCat.get(a) || [] },
      catB: { title: b, items: byCat.get(b) || [] },
      catC: { title: c, items: byCat.get(c) || [] },
    };
  }, [products]);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Catálogo</h1>

      {loading && <div className="card p-4">Cargando productos…</div>}
      {err && <div className="card p-4 bg-red-50 text-red-700">No se pudo contactar la API. Mostrando datos de prueba.</div>}

      <CategoryCarousel title={catA.title} products={catA.items} />
      <CategoryCarousel title={catB.title} products={catB.items} />
      <CategoryCarousel title={catC.title} products={catC.items} />
    </div>
  );
}
*/