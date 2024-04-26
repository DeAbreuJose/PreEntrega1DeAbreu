 import React from "react";

 export default function ItemListContainer({items}) {


   return (
    <div>
       {items.map(item => (
        <div key={item.id}>
           <img src={item.image} alt={item.name} />
           <h3>{item.name}</h3>
          <p>Category: {item.category}</p>
           <p>Price: {item.price}€</p>
         </div>
       ))}
     </div>
   );
 }
