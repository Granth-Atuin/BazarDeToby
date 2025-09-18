import { create } from 'zustand'
import { persist } from 'zustand/middleware'
export const useCart = create(persist((set,get)=>({
items:[],
addItem:(p)=>{
const a=[...get().items]
const i=a.findIndex(x=>x.id===p.id)
if(i>=0){a[i]={...a[i],qty:a[i].qty+1}}else{a.push({...p,qty:1})}
set({items:a})
},
removeItem:(id)=>set({items:get().items.filter(x=>x.id!==id)}),
increment:(id)=>set({items:get().items.map(x=>x.id===id?{...x,qty:x.qty+1}:x)}),
decrement:(id)=>set({items:get().items.map(x=>x.id===id?{...x,qty:Math.max(1,x.qty-1)}:x)}),
clear:()=>set({items:[]}),
totalQty:()=>get().items.reduce((a,b)=>a+b.qty,0),
totalPrice:()=>get().items.reduce((a,b)=>a+b.qty*b.price,0)
}),{name:'bdt-cart'}))