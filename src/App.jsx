import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import CardWidget from './components/Navbar/cart/CardWidget'
import ItemListContainer from './components/Navbar/cart/ItemListContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cameras from './pages/Cameras';
import Music from './pages/Music';
import Tech from './pages/Tech';


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<ItemListContainer />} />
          
          <Route path="/cameras" element={<ItemListContainer itemId="item1" />} />
          
          <Route path="/music" element={<ItemListContainer itemId="item2" />} />
         
          <Route path="/tech" element={<ItemListContainer itemId="item3" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App