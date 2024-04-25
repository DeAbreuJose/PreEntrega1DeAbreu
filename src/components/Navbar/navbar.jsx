import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cart/CardWidget';
import productos from './cart/productos.json'; // Importa el archivo JSON

export default function Navbar() {
  // Usa el estado para almacenar los productos
  const [categories, setCategories] = useState([]);

  // Usa useEffect para cargar los productos al inicio
  useEffect(() => {
    fetch()
    setCategories(productos.map(producto => producto.category));
  }, []);

  return (
    <div>
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-600">
              {/* Icono del logo */}
            </svg>
          </Link>

          <h1 className="text-lg font-bold">De Abreu Goods</h1>

          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Home</Link>
            </li>
            
            {/* Genera dinámicamente los enlaces de categorías */}
            {categories.map((category, index) => (
              <li className="flex" key={index}>
                <Link to={`/category/${category}`} className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{category}</Link>
              </li>
            ))}
          </ul>

          <div className="items-center flex-shrink-0 hidden lg:flex">
            {/* Botones de registro e inicio de sesión */}
          </div>

          <button className="p-4 lg:hidden">
            {/* Icono de menú para dispositivos móviles */}
          </button>

          <CartWidget />
        </div>
      </header>
    </div>
  );
}
