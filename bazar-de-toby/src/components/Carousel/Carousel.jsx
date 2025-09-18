import { useRef } from "react";

export default function Carousel({ children }){
const ref = useRef(null);
const by = (d)=>{
    const el = ref.current; if(!el) return;
    el.scrollBy({ left: d * el.clientWidth * 0.9, behavior: 'smooth' });
};

return (
    <div className="relative">
    <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory" ref={ref}>
        <div className="flex gap-4 pr-4">{children}</div>
    </div>
    <div className="absolute inset-y-0 left-0 flex items-center">
        <button className="hidden sm:inline-flex bg-white/90 hover:bg-white border rounded-xl px-2 py-1 shadow" onClick={()=>by(-1)} aria-label="Anterior">‹</button>
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center">
        <button className="hidden sm:inline-flex bg-white/90 hover:bg-white border rounded-xl px-2 py-1 shadow" onClick={()=>by(1)} aria-label="Siguiente">›</button>
    </div>
    </div>
);
}
