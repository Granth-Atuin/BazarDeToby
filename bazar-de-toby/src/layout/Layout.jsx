import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from './Footer'
export default function Layout(){
return (
<div className="min-h-dvh flex flex-col bg-white text-text">
<Navbar/>
<main className="flex-1 container-app py-6">
<Outlet/>
</main>
<Footer/>
</div>
)
}