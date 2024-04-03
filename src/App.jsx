import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import CardWidget from './components/Navbar/cart/CardWidget'
import ItemListContainer from './components/Navbar/cart/ItemListContainer'


function App() {

  return (
    <>
    <Navbar />
    <ItemListContainer lista="Lista de Articulos" />
    </>
  )
}

export default App