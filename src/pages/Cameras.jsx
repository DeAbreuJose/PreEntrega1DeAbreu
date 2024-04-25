import React from 'react';
import productos from '../components/Navbar/cart/productos.json'; // Importa el archivo JSON

function Cameras() {
  // Filtrar productos que tienen la categoría "Cameras"
  const cameraProducts = productos.filter(producto => producto.category === "Cameras");
console.log(cameraProducts);
  return (
    <div>
      <h1>Camera Page</h1>
      <ul>
        {cameraProducts.map(producto => (
          <li key={producto.id}>{producto.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cameras;
