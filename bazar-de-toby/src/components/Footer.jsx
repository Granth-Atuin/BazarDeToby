/*🌱 Footer rehecho */
function Footer() {
    return (
        //🌱 el primer class pasarlo a style y ponerlo en .footer
        <footer className="border-t border-gray-200 p-6 text-ms text-gray-500">
            <span>&#169; {new Date().getFullYear()} Bazar de Tobi</span>
        </footer>
    )
}
export default Footer