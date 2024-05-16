import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cart/CardWidget';
import { contexto } from '../../Context';


export default function Navbar() {

 const valorActual = useContext(contexto)
 
  
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/DeAbreuJose/PreEntrega2DeAbreu/main/src/components/Navbar/cart/productos.json'); 
        const items = await response.json();
        setCategories(items.map(item => item.category))
        
      } catch (error) {
        
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <Link to="/" aria-label="Back to homepage" className="flex items-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-600">

            </svg>
          </Link>

          <h1 className="text-lg font-bold">De Abreu Goods</h1>

          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Home</Link>
            </li>

            
            {categories.map((category, index) => (
              <li className="flex" key={index}>
                <Link to={`/category/${category}`} className="flex items-center px-4 -mb-1 border-b-2 dark:border-">{category}</Link>
              </li>
            ))}
        
          </ul>

          <div className="items-center flex-shrink-0 hidden lg:flex">    
          </div>


<CartWidget/>
          
         
        </div>
      </header>
    </div>

      
  );
}