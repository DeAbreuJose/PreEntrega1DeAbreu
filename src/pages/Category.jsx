import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/Navbar/cart/ItemListContainer';
import { useParams } from 'react-router-dom';

function Category() {
    const {categoryId} = useParams();
    const [elements, setElements] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://raw.githubusercontent.com/DeAbreuJose/PreEntrega2DeAbreu/main/src/components/Navbar/cart/productos.json'); 
            const products = await response.json();
            const filteredProducts = products.filter(item => item.category === categoryId)
            setElements(filteredProducts)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [categoryId]);

  return (
        <ItemListContainer items={elements}/>
  )
}

export default Category