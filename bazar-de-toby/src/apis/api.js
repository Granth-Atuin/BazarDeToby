import { apis, TOKEN } from "./rutas"

export function traercategorias() {
    const opciones = {
        headers: {
            Authorization: TOKEN
        },
    }
    return (
        fetch(apis.Categorias, opciones)
            .then((response) => {
                if (response.ok) {
                    return (response.json())
                }
                throw new Error('aiuda')
            })
    )
}

export function traerproductos() {
    const opciones = {
        headers: {
            Authorization: TOKEN
        },
    }
    return (
        fetch(apis.Productos, opciones)
            .then((response) => {
                if (response.ok) {
                    return (response.json())
                }
                throw new Error('aiuda')
            })
    )
}

export function traerEtiquetas() {
    const opciones = {
        headers: {
            Authorization: TOKEN
        },
    }
    return (
        fetch(apis.Etiquetas, opciones)
            .then((response) => {
                if (response.ok) {
                    return (response.json())
                }
                throw new Error('aiuda')
            })
    )
}