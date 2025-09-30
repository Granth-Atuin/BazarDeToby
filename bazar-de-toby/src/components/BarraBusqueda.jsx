import { Search } from "lucide-react"

function SearchBar() {
    //🌱agregar funcionalidad
    return (
       <div className="flex justify-center mb-3">
            <div className="relative w-2/3">
                <Search className="absolute inset-y-0 left-0 my-auto ml-3 h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-full pl-10 pr-3 py-2 border rounded-3xl bg-gray-50 focus:outline-none"
                />
            </div>
        </div>
    )
}
export default SearchBar