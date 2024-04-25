import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from './productos.json';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Filtrar el producto por su id
    const selectedProduct = productos.find(item => item.id === id);
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}€</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}
