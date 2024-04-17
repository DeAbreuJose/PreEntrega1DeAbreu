import React from 'react';

export default function ItemListContainer({ itemId }) {
  const items = [
    {
      id: 'item1',
      name: 'Polaroid camera',
      category: 'Classic',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 'item2',
      name: 'Replica headphones',
      category: 'White',
      price: 99.95,
      image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
    },
    {
      id: 'item3',
      name: 'Travel chargers',
      category: 'Black',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1589299068866-4d4c3d5c68bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  
  const filteredItems = itemId ? items.filter(item => item.id === itemId) : items;

  return (
    <div>
      {filteredItems.map(item => (
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
