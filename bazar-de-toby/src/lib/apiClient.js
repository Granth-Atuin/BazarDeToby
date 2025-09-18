const BASE = import.meta.env.VITE_API_BASE_URL
export async function getJson(path){
const r = await fetch(`${BASE}${path}`)
if(!r.ok) throw new Error('HTTP '+r.status)
return r.json()
}
export const api = {
products: () => getJson('/api/products/'),
categories: () => getJson('/api/categories/')
}