const BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/,'') || '';

async function get(path) {
const r = await fetch(`${BASE}${path}`);
if (!r.ok) throw new Error(`HTTP ${r.status}`);
return r.json();
}

const PRODUCT_PATHS   = ['/products', '/api/products', '/product', '/items', '/api/items'];
const CATEGORY_PATHS  = ['/categories', '/api/categories', '/category'];

async function tryMany(paths){
let lastErr;
for (const p of paths){
try { return await get(p); } catch(e){ lastErr = e; }
}
throw lastErr ?? new Error('No endpoints responded');
}

export async function fetchProducts(){
return await tryMany(PRODUCT_PATHS);
}

export async function fetchCategories(){
try { return await tryMany(CATEGORY_PATHS); }
catch { return []; }
}

export function normalizeProduct(p){
return {
    id:      p.id ?? p._id ?? p.uuid ?? crypto.randomUUID(),
    slug:    p.slug ?? String((p.name || p.title || p.id)).toLowerCase().replace(/\s+/g,'-'),
    title:   p.title ?? p.name ?? 'Producto',
    price:   Number(p.price ?? p.cost ?? 0),
    image:   p.image ?? p.thumbnail ?? 'https://picsum.photos/seed/bdt/400/300',
    category:p.category ?? p.category_name ?? 'General',
};
}
