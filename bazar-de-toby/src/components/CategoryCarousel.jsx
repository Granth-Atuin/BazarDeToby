import Carousel from "./Carousel";
import ProductCard from "./CartDrawer";

export default function CategoryCarousel({ title, products }) {
  if (!products?.length) return null;

  return (
    <section className="mb-8">
      <div className="flex items-end justify-between mb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <Carousel>
        {products.map((p) => (
          <div
            key={p.id}
            className="snap-start w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 shrink-0"
          >
            <ProductCard product={p} />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
