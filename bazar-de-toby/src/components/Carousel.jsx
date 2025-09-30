import { useEffect, useRef, useState, useCallback } from "react";
import ArrowButton from "./ArrowButton";

export default function Carousel({ children, autoPlay = false, interval = 3000 }) {
  const ref = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const page = useCallback(() => {
    const el = ref.current;
    if (!el) return 0;
    return Math.max(1, Math.floor(el.clientWidth * 0.9));
  }, []);

  const by = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * page(), behavior: "smooth" });
  };

  const updateEdges = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 1;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft >= max);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = ref.current;
    if (!el) return;
    const onScroll = () => updateEdges();
    el.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => updateEdges();
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateEdges]);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => by(1), interval);
    return () => clearInterval(id);
  }, [autoPlay, interval]);

// cambia estas clases del contenedor y carril
    return (
    <div className="relative isolate"> {/* isolate mejora z-index sin recortes */}
        <div
        ref={ref}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory"
        >
        {/* Aumentamos el gutter lateral en pantallas grandes */}
        <div className="flex gap-4 px-8 sm:px-10 lg:px-16 xl:px-24 pr-12">
            {children}
        </div>
        </div>

        <ArrowButton direction="left"  onClick={() => by(-1)} disabled={atStart} />
        <ArrowButton direction="right" onClick={() => by(1)}  disabled={atEnd} />
    </div>
    );

}
