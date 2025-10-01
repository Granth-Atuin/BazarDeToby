
import { traercategorias, traerproductos } from '@apis/api';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function Paginaficha() {
  const [categorias, setCategorias] = useState([]);
  const [errorCategorias, setErrorCategorias] = useState(null);
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    traercategorias()
      .then((response) => {
        setCategorias(response);
      }).catch((error)=>{
        setErrorCategorias(error)
      });
  
      traerproductos()
      .then ((response)=> {
        setProductos(response);
      });

      

  }, []);

  

  const { state } = useLocation()

  return (
    <div class="bg-amber-200 min-h-screen">
      <p>Categoría: {state?.categoria}</p>
      <div class="flex bg-amber-500 ">

        <h1 class="mx-8 my-8 p-5 mt-5 rounded-xl bg-white"> El Bazar de Tobi</h1>

        <div class="w-1/2 mx-8 my-8 p-5 mt-5">
          <form class="navbar-search flex items-center bg-white rounded-xl">
            <label for="header-search" class="sr-only">Buscador</label>

            <input
              id="header-search"
              type="search"
              placeholder="Buscador"
              class="flex-grow px-3 py-2 rounded-l-xl outline-none" />

            <button type="submit" aria-label="Buscar" class="px-3">🔍</button>
          </form>
        </div>

      </div>

      <div>
        <div class="mt-5">
          <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
            <div class="md:flex">
              <div class="md:shrink-0">
                <img
                  className="h-96 w-full object-cover md:h-full md:w-96"
                  
                  alt="categoria"
                />
              </div>
              <div>
                {categorias.map((categoria) => {
                  return (
                    <div>
                      {categoria.picture && (
                        <img src={`http://161.35.104.211:8000${categoria.picture}`} alt="categoria" />
                      )}
                      {categoria.title}
                    </div>
                  );
                })}
              </div>
              <div class="p-8 mt-8 " >
                <h1 >producto</h1>
                <button class="mt-4 md:mt-25 inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition-colors mt-3 btn-primary w-full">Agregar al carrito</button>
                <p class="mt-2 text-gray-500">
                  descripcion
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-xl bg-white  mx-8 my-8 p-5 mt-5 text-center">
          recomendado
        </div>
        <div>carrucel</div>
      </div>

      <footer>
        <h1>aca van que metodos de pagos se aceptan</h1>
      </footer>
    </div>
  )
}