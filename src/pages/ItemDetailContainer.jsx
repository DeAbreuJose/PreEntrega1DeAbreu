import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import Contador from '../components/Navbar/cart/Contador';
import useCart from '../components/Navbar/cart/useCart';


export default function ItemDetailContainer(props) {



  const valorActual = useCart();
  
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const handleConfirm = (numero) => {
      valorActual.agregarAlCarrito(numero,product)
    }

  
    useEffect(() => {
       
        const fetchData = async () => {
          try {
            const response = await fetch('https://raw.githubusercontent.com/DeAbreuJose/PreEntrega2DeAbreu/main/src/components/Navbar/cart/productos.json'); 
            const products = await response.json();
            const selectedProduct = products.find(product => product.id === id);
            setProduct(selectedProduct);
          } catch (error) {
            console.error('Error fetching product data:', error);
          }
        };
    

        fetchData();
      }, [id]);
      
      if (!product) {
        return <div>Loading...</div>;
      }
    
      
      return (
        <div>
          <img src={product.image} alt={product.name} />   
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}€</p>
          <Contador handleConfirm={handleConfirm}/>
        </div>
      );
    }