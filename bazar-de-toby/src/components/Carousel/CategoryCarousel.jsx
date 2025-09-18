import Carousel from "./Carousel";
import ProductCard from "../ProductCard";

export default function CategoryCarousel({ title, products }){
  if(!products?.length) return null;
  return (
    <section className="mb-8">
      <div className="flex items-end justify-between mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <Carousel>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </Carousel>
    </section>
  );
}
