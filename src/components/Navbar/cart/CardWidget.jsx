import React from 'react'
import { useContext } from 'react'
import { contexto } from '../../../Context'
import { ShoppingCartIcon } from 'lucide-react';
import useCart from './useCart';

export default function CardWidget() {

  const valorActual = useCart();

  return (
    <div>
      <ShoppingCartIcon/>
          {valorActual.cantCarrito}
    </div>
  )
}
