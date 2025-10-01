import { Link } from "react-router-dom";

import React from 'react'

export default function Pruebaboton() {
  return (
    <div>
        <Link to ="/Ficha" state = {{categoria:"peluche"}}>
            <button> ir </button>
        </Link>
    </div>
    
  )
}