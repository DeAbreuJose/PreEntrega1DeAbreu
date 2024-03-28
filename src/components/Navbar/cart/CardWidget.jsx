import React, { useState } from 'react';

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(1);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="relative">
      <button onClick={handleAddToCart} className="relative p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M8 16h8c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zM18 6h-2.54l-1.67-4.17C13.53 1.23 12.81 1 12 1s-1.53.23-1.79.83L8.54 6H6c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm-6 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
        </svg>
      </button>
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
